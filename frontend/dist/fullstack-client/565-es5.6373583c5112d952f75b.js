!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}(self.webpackChunkfullstack_client=self.webpackChunkfullstack_client||[]).push([[565],{4565:function(t,n,o){o.r(n),o.d(n,{CategoriesModule:function(){return H}});var r,a=o(8583),s=o(1182),c=o(665),u=o(6215),l=o(8939),f=o(639),g=o(1841),p=((r=function(){function t(i){e(this,t),this._http=i}return i(t,[{key:"getAllCategories",value:function(){return this._http.get("/api/category")}},{key:"getCategoryById",value:function(e){return this._http.get("/api/category/".concat(e))}},{key:"createCategory",value:function(e,t){var i=new FormData;return t&&i.append("image",t,t.name),i.append("name",e),this._http.post("/api/category",i)}},{key:"updateCategory",value:function(e,t,i){var n=new FormData;return i&&n.append("image",i,i.name),n.append("name",t),this._http.patch("/api/category/".concat(e),n)}},{key:"deleteCategory",value:function(e){return this._http.delete("/api/category/".concat(e))}},{key:"getPositionsByCategoryId",value:function(e){return this._http.get("/api/position/".concat(e))}},{key:"createPosition",value:function(e){return this._http.post("/api/position",e)}},{key:"updatePosition",value:function(e){return this._http.patch("/api/position/".concat(e._id),e)}},{key:"deletePosition",value:function(e){return this._http.delete("/api/position/".concat(e))}}]),t}()).\u0275fac=function(e){return new(e||r)(f.LFG(g.eN))},r.\u0275prov=f.Yz7({token:r,factory:r.\u0275fac}),r),d=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=f.Xpm({type:t,selectors:[["app-loader"]],decls:10,vars:0,consts:[[1,"row"],[1,"col-12","center"],[1,"preloader-wrapper","active"],[1,"spinner-layer","spinner-red-only"],[1,"circle-clipper","left"],[1,"circle"],[1,"gap-patch"],[1,"circle-clipper","right"]],template:function(e,t){1&e&&(f.TgZ(0,"div",0),f.TgZ(1,"div",1),f.TgZ(2,"div",2),f.TgZ(3,"div",3),f.TgZ(4,"div",4),f._UZ(5,"div",5),f.qZA(),f.TgZ(6,"div",6),f._UZ(7,"div",5),f.qZA(),f.TgZ(8,"div",7),f._UZ(9,"div",5),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA())},styles:[""]}),t}(),m=function(e){return["/categories",e]};function v(e,t){if(1&e&&(f.TgZ(0,"a",10),f._uU(1),f.qZA()),2&e){var i=t.$implicit;f.Q6J("routerLink",f.VKq(2,m,i._id)),f.xp6(1),f.Oqu(i.name)}}function h(e,t){if(1&e&&(f.TgZ(0,"div",8),f.YNc(1,v,2,4,"a",9),f.qZA()),2&e){var i=f.oxw().ngIf;f.xp6(1),f.Q6J("ngForOf",i)}}function Z(e,t){if(1&e&&(f.TgZ(0,"div",5),f.TgZ(1,"div",6),f.YNc(2,h,2,1,"div",7),f.qZA(),f.qZA()),2&e){var i=t.ngIf;f.oxw();var n=f.MAs(8);f.xp6(2),f.Q6J("ngIf",i.length)("ngIfElse",n)}}function y(e,t){1&e&&(f.TgZ(0,"div",11),f._uU(1," \u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 "),f.qZA())}function b(e,t){1&e&&f._UZ(0,"app-loader")}var _=function(){var t=function(){function t(i){e(this,t),this._categoriesService=i,this.isLoading$=new u.X(!0)}return i(t,[{key:"ngOnInit",value:function(){this.initObservables()}},{key:"initObservables",value:function(){var e=this;this.categories$=this._categoriesService.getAllCategories().pipe((0,l.x)(function(){return e.isLoading$.next(!1)}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(f.Y36(p))},t.\u0275cmp=f.Xpm({type:t,selectors:[["app-categories-page"]],decls:11,vars:6,consts:[[1,"page-title"],["routerLink","/categories/new",1,"waves-effect","waves-light","btn","grey","darken-1"],["class","row",4,"ngIf"],["empty",""],[4,"ngIf"],[1,"row"],[1,"col","s12"],["class","collection",4,"ngIf","ngIfElse"],[1,"collection"],["class","collection-item",3,"routerLink",4,"ngFor","ngForOf"],[1,"collection-item",3,"routerLink"],[1,"center"]],template:function(e,t){1&e&&(f.TgZ(0,"div",0),f.TgZ(1,"h4"),f._uU(2,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"),f.qZA(),f.TgZ(3,"button",1),f._uU(4,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),f.qZA(),f.qZA(),f.YNc(5,Z,3,2,"div",2),f.ALo(6,"async"),f.YNc(7,y,2,0,"ng-template",null,3,f.W1O),f.YNc(9,b,1,0,"app-loader",4),f.ALo(10,"async")),2&e&&(f.xp6(5),f.Q6J("ngIf",f.lcZ(6,2,t.categories$)),f.xp6(4),f.Q6J("ngIf",f.lcZ(10,4,t.isLoading$)))},directives:[s.rH,a.O5,a.sg,s.yS,d],pipes:[a.Ov],styles:[""]}),t}(),q=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f.oAB({type:t}),t.\u0275inj=f.cJS({imports:[[a.ez]]}),t}(),A=o(3190),k=o(3342),w=o(5917),T=o(9527),x=["modal"];function I(e,t){if(1&e){var i=f.EpF();f.TgZ(0,"a",23),f.NdJ("click",function(){var e=f.CHM(i).$implicit;return f.oxw(2).onSelectPosition(e)}),f.TgZ(1,"span"),f._uU(2),f.TgZ(3,"strong"),f._uU(4),f.qZA(),f.qZA(),f.TgZ(5,"span",24),f.NdJ("click",function(e){var t=f.CHM(i).$implicit;return f.oxw(2).onDeletePosition(e,t)}),f.TgZ(6,"i",25),f._uU(7,"delete"),f.qZA(),f.qZA(),f.qZA()}if(2&e){var n=t.$implicit;f.xp6(2),f.hij(" ",n.name," "),f.xp6(2),f.hij("",n.cost," uah.")}}function J(e,t){if(1&e&&(f.TgZ(0,"div",21),f.YNc(1,I,8,2,"a",22),f.qZA()),2&e){var i=f.oxw();f.xp6(1),f.Q6J("ngForOf",i.positions)}}function U(e,t){1&e&&(f.TgZ(0,"span"),f._uU(1," \u0418\u043c\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c "),f.qZA())}function C(e,t){if(1&e&&(f.TgZ(0,"span",26),f.YNc(1,U,2,0,"span",20),f.qZA()),2&e){var i=f.oxw();f.xp6(1),f.Q6J("ngIf",i.form.get("name").errors.required)}}function N(e,t){1&e&&(f.TgZ(0,"span"),f._uU(1," \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u0443\u044e \u0446\u0435\u043d\u0443. \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 - 1. "),f.qZA())}function Q(e,t){if(1&e&&(f.TgZ(0,"span",26),f.YNc(1,N,2,0,"span",20),f.qZA()),2&e){var i=f.oxw();f.xp6(1),f.Q6J("ngIf",i.form.get("cost").errors.min)}}function S(e,t){1&e&&(f.TgZ(0,"div",27),f._uU(1," \u0423 \u0434\u0430\u043d\u043d\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0435\u0449\u0435 \u043d\u0435\u0442 \u043f\u043e\u0437\u0438\u0446\u0438\u0439 "),f.qZA())}function Y(e,t){1&e&&f._UZ(0,"app-loader")}var O=function(e){return{invalid:e}},P=function(){var t=function(){function t(i,n){e(this,t),this._categoriesService=i,this._fb=n,this.positionId=null,this.isLoading$=new u.X(!0)}return i(t,[{key:"ngOnInit",value:function(){this.initForm(),this.initObservables()}},{key:"ngAfterViewInit",value:function(){this.modal=T.m.initModal(this.modalRef)}},{key:"ngOnDestroy",value:function(){this.modal.destroy()}},{key:"onSelectPosition",value:function(e){this.positionId=e._id,this.form.patchValue(e),T.m.updateInputs(),this.modal.open()}},{key:"onAddPosition",value:function(){this.positionId=null,this.form.reset(),this.modal.open()}},{key:"onCancel",value:function(){this.modal.close()}},{key:"onSubmit",value:function(){var e=this;this.form.disable();var t=Object.assign(Object.assign({},this.form.value),{category:this.categoryId});this.positionId?(t._id=this.positionId,this._categoriesService.updatePosition(t).pipe((0,l.x)(function(){e.form.enable(),e.form.reset(),e.modal.close()})).subscribe(function(t){var i=e.positions.findIndex(function(e){return e._id===t._id});e.positions[i]=t,T.m.toast("\u041f\u043e\u0437\u0438\u0446\u0438\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430")},function(e){var t=e.error;T.m.toast(null==t?void 0:t.message)})):this._categoriesService.createPosition(t).pipe((0,l.x)(function(){e.form.enable(),e.form.reset(),e.modal.close()})).subscribe(function(t){e.positions.push(t),T.m.toast("\u041f\u043e\u0437\u0438\u0446\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0430")},function(e){var t=e.error;T.m.toast(null==t?void 0:t.message)})}},{key:"onDeletePosition",value:function(e,t){var i=this;e.stopPropagation(),window.confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u0443 \u043f\u043e\u0437\u0438\u0446\u0438\u044e?")&&this._categoriesService.deletePosition(t._id).subscribe(function(e){var n=e.message,o=i.positions.findIndex(function(e){return e._id===t._id});i.positions.splice(o,1),T.m.toast(n)},function(e){var t=e.error;T.m.toast(null==t?void 0:t.message)})}},{key:"initForm",value:function(){this.form=this._fb.group({name:["",c.kI.required],cost:["",[c.kI.required,c.kI.min(1)]]})}},{key:"initObservables",value:function(){var e=this;this._categoriesService.getPositionsByCategoryId(this.categoryId).pipe((0,l.x)(function(){return e.isLoading$.next(!1)})).subscribe(function(t){e.positions=t})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(f.Y36(p),f.Y36(c.qu))},t.\u0275cmp=f.Xpm({type:t,selectors:[["app-position-form"]],viewQuery:function(e,t){var i;(1&e&&f.Gf(x,5),2&e)&&(f.iGM(i=f.CRH())&&(t.modalRef=i.first))},inputs:{categoryId:"categoryId"},decls:33,vars:16,consts:[[1,"row"],[1,"col","s12"],[1,"page-subtitle"],[1,"waves-effect","waves-light","btn","grey","darken-1","btn-small","modal-trigger",3,"click"],["class","collection",4,"ngIf","ngIfElse"],[3,"formGroup","ngSubmit"],[1,"modal"],["modal",""],[1,"modal-content"],[1,"mb1"],[1,"input-field"],["id","pos-name","type","text","formControlName","name",3,"ngClass"],["for","pos-name"],["class","helper-text red-text",4,"ngIf"],["id","pos-cost","type","number","min","1","formControlName","cost",3,"ngClass"],["for","pos-cost"],[1,"modal-footer"],["type","button",1,"modal-action","waves-effect","waves-black","btn-flat",3,"disabled","click"],["type","submit",1,"modal-action","btn","waves-effect",3,"disabled"],["empty",""],[4,"ngIf"],[1,"collection"],["class","collection-item collection-item-icon modal-trigger",3,"click",4,"ngFor","ngForOf"],[1,"collection-item","collection-item-icon","modal-trigger",3,"click"],[3,"click"],[1,"material-icons"],[1,"helper-text","red-text"],[1,"center"]],template:function(e,t){if(1&e&&(f.TgZ(0,"div",0),f.TgZ(1,"div",1),f.TgZ(2,"div",2),f.TgZ(3,"h4"),f._uU(4,"\u041f\u043e\u0437\u0438\u0446\u0438\u0438:"),f.qZA(),f.TgZ(5,"button",3),f.NdJ("click",function(){return t.onAddPosition()}),f._uU(6," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0437\u0438\u0446\u0438\u044e "),f.qZA(),f.qZA(),f.YNc(7,J,2,1,"div",4),f.qZA(),f.qZA(),f.TgZ(8,"form",5),f.NdJ("ngSubmit",function(){return t.onSubmit()}),f.TgZ(9,"div",6,7),f.TgZ(11,"div",8),f.TgZ(12,"h4",9),f._uU(13,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0437\u0438\u0446\u0438\u044e"),f.qZA(),f.TgZ(14,"div",10),f._UZ(15,"input",11),f.TgZ(16,"label",12),f._uU(17,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),f.qZA(),f.YNc(18,C,2,1,"span",13),f.qZA(),f.TgZ(19,"div",10),f._UZ(20,"input",14),f.TgZ(21,"label",15),f._uU(22,"\u0426\u0435\u043d\u0430"),f.qZA(),f.YNc(23,Q,2,1,"span",13),f.qZA(),f.qZA(),f.TgZ(24,"div",16),f.TgZ(25,"button",17),f.NdJ("click",function(){return t.onCancel()}),f._uU(26,"\u041e\u0442\u043c\u0435\u043d\u0430"),f.qZA(),f.TgZ(27,"button",18),f._uU(28,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.YNc(29,S,2,0,"ng-template",null,19,f.W1O),f.YNc(31,Y,1,0,"app-loader",20),f.ALo(32,"async")),2&e){var i=f.MAs(30);f.xp6(7),f.Q6J("ngIf",null==t.positions?null:t.positions.length)("ngIfElse",i),f.xp6(1),f.Q6J("formGroup",t.form),f.xp6(7),f.Q6J("ngClass",f.VKq(12,O,t.form.get("name").invalid&&t.form.get("name").touched)),f.xp6(3),f.Q6J("ngIf",t.form.get("name").invalid&&t.form.get("name").touched),f.xp6(2),f.Q6J("ngClass",f.VKq(14,O,t.form.get("cost").invalid&&t.form.get("cost").touched)),f.xp6(3),f.Q6J("ngIf",t.form.get("cost").invalid&&t.form.get("cost").touched),f.xp6(2),f.Q6J("disabled",t.form.disabled),f.xp6(2),f.Q6J("disabled",t.form.invalid||t.form.disabled),f.xp6(4),f.Q6J("ngIf",f.lcZ(32,10,t.isLoading$))}},directives:[a.O5,c._Y,c.JL,c.sg,c.Fj,c.JJ,c.u,a.mk,c.qQ,c.wV,a.sg,d],pipes:[a.Ov],styles:[""]}),t}(),L=["input"];function F(e,t){if(1&e){var i=f.EpF();f.TgZ(0,"button",17),f.NdJ("click",function(){return f.CHM(i),f.oxw().deleteCategory()}),f.TgZ(1,"i",2),f._uU(2,"delete"),f.qZA(),f.qZA()}}function $(e,t){1&e&&(f.TgZ(0,"span"),f._uU(1," \u0418\u043c\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c "),f.qZA())}function M(e,t){if(1&e&&(f.TgZ(0,"span",18),f.YNc(1,$,2,0,"span",19),f.qZA()),2&e){var i=f.oxw();f.xp6(1),f.Q6J("ngIf",i.form.get("name").errors.required)}}function j(e,t){if(1&e&&(f.TgZ(0,"div",20),f._UZ(1,"img",21),f.qZA()),2&e){var i=f.oxw();f.xp6(1),f.Q6J("src",i.imagePreview,f.LSH)}}function G(e,t){if(1&e&&f._UZ(0,"app-position-form",22),2&e){var i=f.oxw();f.Q6J("categoryId",i.category._id)}}var E=function(){return["/categories"]},V=function(e){return{invalid:e}},B=function(){var t=function(){function t(i,n,o,r){e(this,t),this._route=i,this._router=n,this._categoriesService=o,this._fb=r,this.isNew=!0}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.initForm(),this.form.disable(),this._route.params.pipe((0,A.w)(function(t){return t.id?(e.isNew=!1,e._categoriesService.getCategoryById(t.id)):(0,w.of)(null)})).subscribe(function(t){t&&(e.category=t,e.form.patchValue(t),T.m.updateInputs(),e.imagePreview=t.imageSrc),e.form.enable()},function(e){var t=e.error;T.m.toast(null==t?void 0:t.message)})}},{key:"triggerClick",value:function(){this.imageInput.nativeElement.click()}},{key:"fileUpload",value:function(e){var t=this,i=e.target.files[0];this.image=i;var n=new FileReader;n.onload=function(){t.imagePreview=n.result},n.readAsDataURL(i)}},{key:"onSubmit",value:function(){var e=this;this.form.disable(),(this.isNew?this._categoriesService.createCategory(this.form.value.name,this.image).pipe((0,k.b)(function(t){e._router.navigate(["../categories",t._id])})):this._categoriesService.updateCategory(this.category._id,this.form.value.name,this.image)).subscribe(function(t){e.category=t,T.m.toast("\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b"),e.form.enable()},function(t){var i=t.error;T.m.toast(null==i?void 0:i.message),e.form.enable()})}},{key:"deleteCategory",value:function(){var e=this;window.confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e?")&&this._categoriesService.deleteCategory(this.category._id).subscribe(function(e){var t=e.message;T.m.toast(t)},function(e){var t=e.error;T.m.toast(null==t?void 0:t.message)},function(){e._router.navigate(["/categories"])})}},{key:"initForm",value:function(){this.form=this._fb.group({name:["",c.kI.required]})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(f.Y36(s.gz),f.Y36(s.F0),f.Y36(p),f.Y36(c.qu))},t.\u0275cmp=f.Xpm({type:t,selectors:[["app-categories-form"]],viewQuery:function(e,t){var i;(1&e&&f.Gf(L,5),2&e)&&(f.iGM(i=f.CRH())&&(t.imageInput=i.first))},decls:28,vars:13,consts:[[1,"page-title"],[3,"routerLink"],[1,"material-icons"],["class","btn btn-small red",3,"click",4,"ngIf"],[1,"row"],[1,"col","s12","l6",3,"formGroup","ngSubmit"],[1,"input-field"],["id","name","type","text","formControlName","name",3,"ngClass"],["for","name"],["class","helper-text red-text",4,"ngIf"],["type","file",1,"dn",3,"change"],["input",""],["type","button",1,"waves-effect","waves-light","btn","orange","lighten-2","mb2",3,"disabled","click"],[1,"material-icons","left"],["type","submit",1,"waves-effect","waves-light","btn",3,"disabled"],["class","col s12 l4 center",4,"ngIf"],[3,"categoryId",4,"ngIf"],[1,"btn","btn-small","red",3,"click"],[1,"helper-text","red-text"],[4,"ngIf"],[1,"col","s12","l4","center"],[1,"responsive-img",2,"height","200px",3,"src"],[3,"categoryId"]],template:function(e,t){1&e&&(f.TgZ(0,"div",0),f.TgZ(1,"h4"),f.TgZ(2,"a",1),f._uU(3,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"),f.qZA(),f.TgZ(4,"i",2),f._uU(5,"keyboard_arrow_right"),f.qZA(),f._uU(6),f.qZA(),f.TgZ(7,"span"),f.YNc(8,F,3,0,"button",3),f.qZA(),f.qZA(),f.TgZ(9,"div",4),f.TgZ(10,"form",5),f.NdJ("ngSubmit",function(){return t.onSubmit()}),f.TgZ(11,"div",6),f._UZ(12,"input",7),f.TgZ(13,"label",8),f._uU(14,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),f.qZA(),f.YNc(15,M,2,1,"span",9),f.qZA(),f.TgZ(16,"div"),f.TgZ(17,"input",10,11),f.NdJ("change",function(e){return t.fileUpload(e)}),f.qZA(),f.TgZ(19,"button",12),f.NdJ("click",function(){return t.triggerClick()}),f.TgZ(20,"i",13),f._uU(21,"backup"),f.qZA(),f._uU(22," \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 "),f.qZA(),f.qZA(),f.TgZ(23,"div"),f.TgZ(24,"button",14),f._uU(25," \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f "),f.qZA(),f.qZA(),f.qZA(),f.YNc(26,j,2,1,"div",15),f.qZA(),f.YNc(27,G,1,1,"app-position-form",16)),2&e&&(f.xp6(2),f.Q6J("routerLink",f.DdM(10,E)),f.xp6(4),f.hij(" ",t.isNew?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"," \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e "),f.xp6(2),f.Q6J("ngIf",!t.isNew),f.xp6(2),f.Q6J("formGroup",t.form),f.xp6(2),f.Q6J("ngClass",f.VKq(11,V,t.form.get("name").invalid&&t.form.get("name").touched)),f.xp6(3),f.Q6J("ngIf",t.form.get("name").invalid&&t.form.get("name").touched),f.xp6(4),f.Q6J("disabled",t.form.disabled),f.xp6(5),f.Q6J("disabled",t.form.invalid||t.form.disabled),f.xp6(2),f.Q6J("ngIf",t.imagePreview),f.xp6(1),f.Q6J("ngIf",null==t.category?null:t.category._id))},directives:[s.yS,a.O5,c._Y,c.JL,c.sg,c.Fj,c.JJ,c.u,a.mk,P],styles:[".dn[_ngcontent-%COMP%]{display:none}"]}),t}(),D=[{path:"",component:_},{path:"new",component:B},{path:":id",component:B}],H=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f.oAB({type:t}),t.\u0275inj=f.cJS({providers:[p],imports:[[a.ez,q,s.Bz.forChild(D),c.UX]]}),t}()}}])}();