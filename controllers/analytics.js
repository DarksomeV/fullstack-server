const Order = require('../models/Order');
const errorHandler = require('../utils/error-handler');
const moment = require('moment')

module.exports.overview = async function (req, res) {
    try {
        const allOrders = await Order.find({ user: req.user.id }).sort({
            date: 1,
        });
        const ordersMap = getOrdersMap(allOrders)
        const yesterdayOrders = ordersMap[moment().add(-1, 'd').format('DD.MM.YYYY')] || [];
        // kol-vo zakazov vchera
        const yesterdayOrdNum = yesterdayOrders.length;
        // kol-vo zakazov
        const totalOrdersNum = allOrders.length;
        //kol-vo dney
        const daysNam = Object.keys(ordersMap).length;
        // kol-vo zakazov v den
        const ordersPerDay = (totalOrdersNum/daysNam).toFixed(0);
        // procent dlya kol-va zakazov
        const ordersPercent = (((yesterdayOrdNum / ordersPerDay) - 1) * 100).toFixed(2);
        //total vyruchka
        const totalGain = calculatePrice(allOrders)
        //vyruchka v den
        const gainPerDay = totalGain/daysNam;
        //vyruchka za vchera
        const yesterdayGain = calculatePrice(yesterdayOrders);
        //percent vyruchki
        const gainPercent = (((yesterdayGain / gainPerDay) - 1) * 100).toFixed(2);
        //sravnenie vyruchki
        const compareGain = (yesterdayGain- gainPerDay).toFixed(2);
        //sravnenie kolva zakazov
        const compareNum = (yesterdayOrdNum - ordersPerDay).toFixed(2);

        res.status(200).json({
            gain: {
                percent: Math.abs(+gainPercent),
                compare: Math.abs(+compareGain),
                yesterday: +yesterdayGain,
                isHigher: +gainPercent > 0,
            },
            orders: {
                percent: Math.abs(+ordersPercent),
                compare: Math.abs(+compareNum),
                yesterday: +yesterdayOrdNum,
                isHigher: +ordersPercent > 0,
            }
        })
    } catch (e) {
        errorHandler(res, e);
    }
}

module.exports.analytics = function (req, res) {

}

function calculatePrice(orders = []) {
    return orders.reduce((acc, curr) => {
        const orderPrice = curr.list.reduce((accInner, currInner) => {
            return accInner += currInner.cost * currInner.quantity;
        }, 0)

        return acc += orderPrice;
    }, 0)
}

function getOrdersMap(orders = []) {
    const daysOrders = {};

    orders.forEach(order => {
        const date = moment(order.date).format('DD.MM.YYYY');
        if (date === moment().format('DD.MM.YYYY')) {
            return;
        }

        if (!daysOrders[date]) {
            daysOrders[date] = [];
        }

        daysOrders[date].push(order);
    })

    return daysOrders;
}