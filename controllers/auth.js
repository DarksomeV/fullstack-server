const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const keys = require('../config/keys');

const errorHandler = require('../utils/error-handler');

module.exports.login = async function (req, res) {
    const candidate = await User.findOne({ email: req.body.email })

    if (candidate) {
        // Пользователь существует, проверка пароля
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)

        if (passwordResult) {
            // Генерация токена, пароли совпали
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id,
            }, keys.jwt, { expiresIn: 60*60 });

            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            res.status(401).json({
                message: 'Пароль неправильный, попробуйте снова!'
            })
        }
    } else {
        // Пользователя нет, ошибка
        res.status(404).json({
            message: 'Пользователь с таким email не найден'
        })
    }
}

module.exports.register = async function (req, res) {
    const candidate = await User.findOne({ email: req.body.email })

    if (candidate) {
        // Пользователь существует, нужно кинуть ошибку
        res.status(409).json({
            message: 'Такой email уже существует.'
        })
    } else {
        // создаем пользователя
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password;
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt),
        })

        try {
            await user.save();
            res.status(201).json(user)
        } catch (e) {
            // обработать ошибку сохранения в базу
            errorHandler(res, e);
        }
        
    }
}