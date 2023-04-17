(self["webpackChunkjps_mobile"] = self["webpackChunkjps_mobile"] || []).push([["src_app_auth_login_login_module_ts"],{

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

/***/ 4272:
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 1506);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 8990:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 4272);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 1506);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 1506:
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 8182);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 826);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/login.service */ 4461);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ 2996);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert.service */ 2758);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/session.service */ 5920);










let LoginPage = class LoginPage {
    constructor(route, loginService, alertService, userService, sessionService) {
        this.route = route;
        this.loginService = loginService;
        this.alertService = alertService;
        this.userService = userService;
        this.sessionService = sessionService;
        this.subscription_login = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        this.loginDetails = {
            email: null,
            password: null,
        };
    }
    ngOnInit() {
        this.sessionService.getSessionLogin();
    }
    signIn(data) {
        if (data.form.valid) {
            var email = data.form.value.email;
            var password = data.form.value.password;
        }
        this.subscription_login.add(this.loginService.login(email, password).subscribe(result => {
            if (result['status'] == 200) {
                var pk = result.results.pk.pk;
                var account_type = result.results.pk.account_type;
                console.log('sign in success');
                // localStorage.setItem('loginSession', JSON.stringify({'pk': pk, 'account_type': account_type}));
                this.sessionService.setToken(JSON.stringify({ 'pk': pk, 'account_type': account_type }));
                if (account_type == 1) {
                    // admin 
                    this.alertService.alertWithTimer('success', 'Login Sucess', '');
                }
                if (account_type == 2) {
                    // driver 
                    const redirect = this.sessionService.redirectUrl ? this.sessionService.redirectUrl : '/account/driver/generate-code';
                    this.alertService.alertWithTimer('success', 'Login Sucess', '');
                    this.route.navigate(['/account/driver/generate-code']);
                }
                if (account_type == 3) {
                    //passenger
                    const redirect = this.sessionService.redirectUrl ? this.sessionService.redirectUrl : '/account/user/scan-code';
                    this.alertService.alertWithTimer('success', 'Login Sucess', '');
                    this.route.navigate(['/account/user/scan-code']);
                }
            }
            else {
                this.alertService.simpleAlert('info', 'Info', 'Please check either your Email or Password is Incorrect');
            }
        }, error => {
            this.alertService.simpleAlert('info', 'Info', 'Please check either your Email or Password is Incorrect');
        }));
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_5__.SessionService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 4461:
/*!***************************************!*\
  !*** ./src/services/login.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server */ 938);






let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.url = _server__WEBPACK_IMPORTED_MODULE_0__.GlobalVariable.BASE_API_URL;
        //
    }
    login(email_address, password) {
        return this.http.get(this.url.concat('api/login'), {
            params: {
                email_address: email_address,
                password: password,
                archived: 'false'
            },
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
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ 2996:
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server */ 938);






let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.url = _server__WEBPACK_IMPORTED_MODULE_0__.GlobalVariable.BASE_API_URL;
    }
    getUserDetails() {
        var user = localStorage.getItem('loginSession');
        var user_id = JSON.parse(user)['pk'];
        this.authId = user_id;
        console.log(user_id);
        this.user_account_type = JSON.parse(user)['account_type'];
        return this.http.get(this.url.concat('api/user/get-user-details/' + user_id), {
            withCredentials: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    getUserById(id) {
        return this.http.get(this.url.concat('api/user/get-user-details/' + id), {
            withCredentials: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    getTransaction() {
        var user = localStorage.getItem('loginSession');
        var user_id = JSON.parse(user)['pk'];
        this.authId = user_id;
        return this.http.get(this.url.concat('api/user/get-transactions/' + user_id), {
            withCredentials: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    updateProfile(pk, logo, name, email, contact_number, address, driver_route) {
        return this.http.put(this.url.concat('api/user/update-profile'), {
            pk_id: pk,
            logo: logo,
            name: name,
            email: email,
            contact_number: contact_number,
            address: address,
            driver_route: driver_route
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
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
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 1894:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#ion-card-subtitle {\n  text-align: left;\n}\n\n#section1 {\n  margin-top: 20px;\n  text-align: center;\n}\n\n#section2 {\n  text-align: center;\n}\n\n#section3 {\n  text-align: center;\n  position: fixed;\n  left: 0;\n  bottom: 10px;\n  right: 0;\n}\n\n.buttons {\n  padding-top: 10px;\n}\n\nion-item {\n  margin-top: -10px;\n}\n\n.buttonColor {\n  background-color: #d32929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBRUY7O0FBQUE7RUFDSSxpQkFBQTtBQUdKOztBQURBO0VBQ0UsaUJBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0FBS0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4jaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuI3NlY3Rpb24xIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI3NlY3Rpb24ye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNzZWN0aW9uMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMTBweDtcclxuICByaWdodDogMDtcclxufVxyXG4uYnV0dG9ucyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuLmJ1dHRvbkNvbG9ye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDQxLCA0MSk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 8182:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Contents -->\r\n<ion-content id=\"signin\" fullscreen>\r\n\r\n  <!-- Any Image -->\r\n  <div id=\"section1\">\r\n      <img src=\"../../../assets/img/logo.png\" />\r\n  </div>\r\n\r\n  <div id=\"section2\">\r\n\r\n      <!-- SignIn Form -->\r\n      <form #form=\"ngForm\" class=\"ion-padding\">\r\n          <ion-grid>\r\n              <ion-row color=\"primary\" class=\"ion-align-items-center ion-justify-content-center\">\r\n                  <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n                      <!-- Email Input Box -->\r\n                      <ion-item>\r\n                          <ion-label>\r\n                              <ion-icon md=\"mail\" ios=\"mail\" color=\"color1\"></ion-icon>\r\n                          </ion-label>\r\n                          <ion-input type=\"email\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"loginDetails.email\" required #emailField=\"ngModel\"></ion-input>\r\n                      </ion-item>\r\n                      <div [hidden]=\"emailField.valid||emailField.untouched\" style=\"text-align: justify; margin-top: 10px;\">\r\n                        <ion-text class=\"warning\" color=\"danger\">Email address required</ion-text>\r\n                      </div>\r\n\r\n                      <!-- Password Input Box -->\r\n                      <ion-item class=\"ion-padding-top\">\r\n                          <ion-label>\r\n                              <ion-icon md=\"eye\" ios=\"eye\" color=\"color1\"></ion-icon>\r\n                          </ion-label>\r\n                          <ion-input type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"loginDetails.password\" required #passwordField=\"ngModel\">\r\n                          </ion-input>\r\n                      </ion-item>\r\n                      <div [hidden]=\"passwordField.valid||passwordField.untouched\" style=\"text-align: justify; margin-top: 10px;\">\r\n                        <ion-text class=\"warning\" color=\"danger\">Password field required</ion-text>\r\n                      </div>\r\n\r\n\r\n                      <!-- Forget Password Button -->\r\n\r\n                      <!-- Buttons -->\r\n                      <div class=\"buttons\">\r\n                          <!-- Sign Button -->\r\n                          <ion-button color=\"warning\" [disabled]=\"!(form.valid)\" expand=\"block\" (click)=\"signIn(form)\">\r\n                              <ion-text class=\"primary\"><strong>Sign In</strong></ion-text>\r\n                          </ion-button>\r\n                      </div>\r\n\r\n                      <ion-button expand=\"block\" color=\"danger\" fill=\"clear\" routerLink=\"/forgot-password\"\r\n                      routerDirection=\"root\">\r\n                      Forget Password?\r\n                     </ion-button>\r\n\r\n                  </ion-col>\r\n              </ion-row>\r\n          </ion-grid>\r\n      </form>\r\n      <!-- End SignIn Form -->\r\n  </div>\r\n\r\n  <!-- SignUp Buttons -->\r\n  <br/>\r\n  <div id=\"section3\">\r\n      <ion-button fill=\"clear\" color=\"dark\" routerLink=\"/register\" routerDirection=\"root\">\r\n          <span>Don't have an account? <b>Sign Up</b></span>\r\n      </ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_login_login_module_ts.js.map