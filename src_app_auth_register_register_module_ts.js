(self["webpackChunkjps_mobile"] = self["webpackChunkjps_mobile"] || []).push([["src_app_auth_register_register_module_ts"],{

/***/ 205:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/throwError.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwError": () => (/* binding */ throwError)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 9165);

function throwError(error, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => subscriber.error(error));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => scheduler.schedule(dispatch, 0, { error, subscriber }));
    }
}
function dispatch({ error, subscriber }) {
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map

/***/ }),

/***/ 2638:
/*!**********************************************************!*\
  !*** ./src/app/auth/register/register-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 1351);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 6108:
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 2638);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 1351);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 1351:
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 4176);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 4169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 826);
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/register.service */ 583);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/alert.service */ 2758);








let RegisterPage = class RegisterPage {
    constructor(router, alertService, registerService) {
        this.router = router;
        this.alertService = alertService;
        this.registerService = registerService;
        this.subscription_register = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.register = {
            name: null,
            accountType: null,
            isStudent: null,
            emailAddress: null,
            address: null,
            password: null,
        };
    }
    ngOnInit() {
    }
    onSubmit(data) {
        console.log(data.form);
        this.subscription_register.add(this.registerService.register(data.form.value.emailAddress, data.form.value.name, this.accountType, data.form.value.address, data.form.value.password, this.isStudent)
            .subscribe(result => {
            console.log(result);
            if (result.status == 'Success') {
                this.alertService.alertWithTimer('success', 'Registration Successful', '');
                this.router.navigate(['login']);
            }
            else {
                this.alertService.simpleAlert('error', ': (', 'Something went wrong, please try again');
            }
        }, error => {
            this.alertService.simpleAlert('error', ': (', 'Something went wrong, please try again');
        }));
        // this.router.navigate(['login']);
        // return 0;
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _services_register_service__WEBPACK_IMPORTED_MODULE_2__.RegisterService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 583:
/*!******************************************!*\
  !*** ./src/services/register.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterService": () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server */ 938);






let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
        this.url = _server__WEBPACK_IMPORTED_MODULE_0__.GlobalVariable.BASE_API_URL;
    }
    register(email, name, account_type, address, password, isStudent) {
        console.log(email);
        console.log(account_type);
        return this.http.post(this.url.concat('api/register'), {
            email: email,
            name: name,
            account_type: account_type,
            address: address,
            password: password,
            isStudent: isStudent,
            withCredentials: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(errorMessage);
    }
};
RegisterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
RegisterService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], RegisterService);



/***/ }),

/***/ 4169:
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#section1 {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.buttons {\n  margin-top: 20px;\n}\n\nion-item {\n  margin-top: 10px;\n}\n\n#section3 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VjdGlvbjEge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jc2VjdGlvbjMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 4176:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Contents -->\r\n<ion-content id=\"signin\" fullscreen>\r\n\r\n  <!-- Any Image -->\r\n  <div id=\"section1\">\r\n      <img src=\"../../../assets/img/logo.png\" />\r\n  </div>\r\n  <form #form=\"ngForm\" class=\"ion-padding\" >\r\n    <ion-grid>\r\n        <ion-row color=\"primary\" class=\"ion-align-items-center ion-justify-content-center\">\r\n            <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n\r\n            <ion-item>\r\n                <ion-label>\r\n                    <ion-icon md=\"person\" ios=\"person\" color=\"color1\"></ion-icon>\r\n                </ion-label>\r\n                <ion-input type=\"name\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"register.name\" required #nameField=\"ngModel\"></ion-input>\r\n            </ion-item>\r\n\r\n\r\n\r\n            <div style=\"margin-top: 20px; margin-top: 10px;\" [hidden]=\"nameField.valid || nameField.untouched\">\r\n              <ion-text class=\"warning\" color=\"danger\">Enter Valid Name</ion-text>\r\n            </div>\r\n\r\n            <ion-item>\r\n              <ion-label>\r\n                <ion-icon md=\"person\" ios=\"person\" color=\"color1\"></ion-icon>\r\n                   <span style=\"color: gray; margin: 0.25em;\"> Account Type </span>\r\n              </ion-label>\r\n\r\n              <ion-select interface=\"alert\"placeholder=\"Select One\" name=\"accountType\" [(ngModel)]=\"accountType\" required #accountTypeField=\"ngModel\">\r\n                <ion-select-option value=\"3\">User 👤</ion-select-option>\r\n                <ion-select-option value=\"2\">Driver 🚗</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <div style=\"margin-top: 20px; margin-top: 10px;\" [hidden]=\"accountTypeField.valid|| accountTypeField.untouched\">\r\n              <ion-text class=\"warning\" color=\"danger\">Select Account type</ion-text>\r\n             </div>\r\n\r\n            <ion-item *ngIf=\"accountType == 3\">\r\n              <ion-label>\r\n                <ion-icon md=\"person\" ios=\"person\" color=\"color1\"></ion-icon>\r\n                <span style=\"color: gray; margin: 0.25em;\">User Type </span>\r\n              </ion-label>\r\n\r\n              <ion-select interface=\"alert\" placeholder=\"Select One\" name=\"isStudent\" [(ngModel)]=\"isStudent\" required #isStudentField=\"ngModel\">\r\n                <ion-select-option value=\"1\">Student 📚</ion-select-option>\r\n                <ion-select-option value=\"0\">Regular 👤</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <div style=\"margin-top: 20px; margin-top: 10px;\" [hidden]=\"isStudentField.valid|| isStudentField.untouched\">\r\n              <ion-text class=\"warning\" color=\"danger\">Select Account type</ion-text>\r\n            </div>\r\n\r\n\r\n            <ion-item>\r\n              <ion-label>\r\n                <ion-icon name=\"navigate-circle\"></ion-icon>\r\n              </ion-label>\r\n              <ion-input type=\"address\" placeholder=\"Address\" name=\"address\" [(ngModel)]=\"register.address\" required #addressField=\"ngModel\"></ion-input>\r\n           </ion-item>\r\n\r\n           <div style=\"margin-top: 20px; margin-top: 10px;\" [hidden]=\"addressField.valid|| addressField.untouched\">\r\n            <ion-text class=\"warning\" color=\"danger\">Enter Valid Address</ion-text>\r\n           </div>\r\n\r\n          <ion-item>\r\n              <ion-label>\r\n                  <ion-icon md=\"mail\" ios=\"mail\" color=\"color1\"></ion-icon>\r\n              </ion-label>\r\n              <ion-input type=\"email\" placeholder=\"Email\" name=\"emailAddress\" [(ngModel)]=\"register.emailAddress\" required #emailField=\"ngModel\"></ion-input>\r\n          </ion-item>\r\n\r\n          <div style=\"margin-top: 20px; margin-top: 10px;\" [hidden]=\"emailField.valid||emailField.untouched\">\r\n            <ion-text class=\"warning\" color=\"danger\" *ngIf=\"emailField.errors?.required\">Enter Valid Email Address</ion-text>\r\n            <ion-text class=\"warning\" color=\"danger\" *ngIf=\"emailField.errors?.value\">Enter Valid Email Address</ion-text>\r\n           </div>\r\n\r\n            <ion-item>\r\n              <ion-label>\r\n                <ion-icon name=\"lock-closed\"></ion-icon>\r\n              </ion-label>\r\n              <ion-input type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"register.password\" required  minlength=\"6\" #passwordField=\"ngModel\"></ion-input>\r\n            </ion-item>\r\n\r\n\r\n\r\n            <div style=\"margin-top: 20px; margin-top: 10px;\" [hidden]=\"passwordField.valid || passwordField.untouched\">\r\n              <ion-text class=\"warning\" color=\"danger\" *ngIf=\"passwordField.errors?.minlength\">Password must be 6 character or longer</ion-text>\r\n              <ion-text class=\"warning\" color=\"danger\" *ngIf=\"passwordField.errors?.required\">Enter Valid Password</ion-text>\r\n            </div>\r\n\r\n            <ion-item>\r\n              <ion-label>\r\n                <ion-icon name=\"lock-closed\"></ion-icon>\r\n                  </ion-label>\r\n                <ion-input type=\"password\" placeholder=\"Confirm Password\" name=\"cpassword\" [(ngModel)]=\"cpassword\" required #cpasswordField=\"ngModel\"></ion-input>\r\n            </ion-item>\r\n\r\n            <div style=\"margin-top: 20px; margin-top: 10px;\" [hidden]=\"passwordField.value===cpasswordField.value || cpasswordField.untouched\">\r\n              <ion-text class=\"warning\" color=\"danger\">Password does not match</ion-text>\r\n             </div>\r\n\r\n                <div class=\"buttons\" >\r\n                  <!-- Sign Button -->\r\n                  <ion-button color=\"warning\" expand=\"block\" [disabled]=\"!form.valid || !(passwordField.value===cpasswordField.value)\" (click)=\"onSubmit(form)\">\r\n                      <ion-text class=\"primary\"><strong>Register</strong></ion-text>\r\n                  </ion-button>\r\n              </div>\r\n\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</form>\r\n <!-- SignUp Buttons -->\r\n <br/>\r\n <div id=\"section3\">\r\n     <ion-button fill=\"clear\" color=\"dark\" routerLink=\"/login\" routerDirection=\"root\">\r\n         <span>Already have an account? <b>Sign In</b></span>\r\n     </ion-button>\r\n </div>\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_register_register_module_ts.js.map