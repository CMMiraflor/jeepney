(self["webpackChunkjps_mobile"] = self["webpackChunkjps_mobile"] || []).push([["src_app_auth_forgot-password_forgot-password_module_ts"],{

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

/***/ 4450:
/*!************************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 6866);




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ 6377:
/*!****************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 4450);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 6866);







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ 6866:
/*!**************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forgot-password.page.html */ 4738);
/* harmony import */ var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 826);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _services_emailer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/emailer.service */ 2648);
/* harmony import */ var _services_forgot_password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/forgot-password.service */ 8487);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert.service */ 2758);










let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(formBuilder, emailerService, forgotPasswordService, alertService) {
        this.formBuilder = formBuilder;
        this.emailerService = emailerService;
        this.forgotPasswordService = forgotPasswordService;
        this.alertService = alertService;
        this.subscription_forgotPassword = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.forgotForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]]
        });
    }
    ngOnInit() {
    }
    forgotPassword() {
        console.log(this.forgotForm.value.email);
        this.subscription_forgotPassword.add(this.forgotPasswordService.checkEmailExist(this.forgotForm.value.email)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)())
            .subscribe(data => {
            console.log(data['status']);
            if (data['status'] == 200) {
                this.forgotPasswordService.forgotPassword(this.forgotForm.value.email)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)())
                    .subscribe(data => {
                    console.log(data['status']);
                    if (data['status'] == 200) {
                        var code = data['results'][0]['add_forgot_password_data'];
                        var email = this.forgotForm.value.email;
                        // var email = 'heriiikoooo@gmail.com';
                        var app_location = location.origin;
                        var subject = 'Password Reset';
                        var body = `
                    <html>
                      <head>
                        <title>Password Reset
                      </title>
                      </head>
                      <body>
                      Reset your JPS account here: <a href="` + app_location + `/#/password-reset/` + code + `">jps forgot password</a>
                      </body>
                    </html>
                    `;
                        this.emailerService.sendEmail(email, subject, body)
                            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)())
                            .subscribe(data => {
                            if (data['status'] == 'Success') {
                                //save the details to db
                                var email = this.forgotForm.value.forgot_password_email;
                                this.alertService.simpleAlert('success', 'Email Confirmation Successfully', 'Please check your email');
                                this.forgotForm.reset();
                            }
                            else {
                                this.alertService.simpleAlert('warning', 'Something went wrong', 'please try again!');
                            }
                        }, error => {
                            this.alertService.simpleAlert('error', 'An error occured', 'Please try again!');
                        });
                    }
                    else {
                        this.alertService.simpleAlert('error', 'No registered email, please try again', '');
                    }
                });
            }
            else {
                this.alertService.simpleAlert('error', 'No registered email, please try again', '');
            }
        }, error => {
            this.alertService.simpleAlert('error', 'An error occured', 'Please try again!');
        }));
    }
    get f() { return this.forgotForm.controls; }
    get email() { return this.forgotForm.get('email'); }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_emailer_service__WEBPACK_IMPORTED_MODULE_2__.EmailerService },
    { type: _services_forgot_password_service__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService }
];
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgotPasswordPage);



/***/ }),

/***/ 2648:
/*!*****************************************!*\
  !*** ./src/services/emailer.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailerService": () => (/* binding */ EmailerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server */ 938);






let EmailerService = class EmailerService {
    constructor(http) {
        this.http = http;
        this.url = _server__WEBPACK_IMPORTED_MODULE_0__.GlobalVariable.BASE_API_URL;
    }
    sendEmail(email, subject, body) {
        return this.http.post(this.url.concat('api/emailer'), {
            to: email,
            subject: subject,
            body_text: body
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
EmailerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
EmailerService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], EmailerService);



/***/ }),

/***/ 2508:
/*!****************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#section1 {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.buttons {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VjdGlvbjEge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 4738:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Contents -->\r\n<ion-content id=\"signin\" fullscreen>\r\n\r\n  <!-- Any Image -->\r\n  <div id=\"section1\">\r\n      <img src=\"../../../assets/img/logo.png\" />\r\n  </div>\r\n  <form [formGroup]=\"forgotForm\" #form=\"ngForm\" class=\"ion-padding\" style=\"margin-top: -0.5 em;\">\r\n    <ion-grid>\r\n      <ion-text style=\"color: gray;\">Enter your email address</ion-text>\r\n        <ion-row color=\"primary\" class=\"ion-align-items-center ion-justify-content-center\">\r\n            <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n                <!-- Email Input Box -->\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <ion-icon md=\"mail\" ios=\"mail\" color=\"color1\"></ion-icon>\r\n                    </ion-label>\r\n                    <ion-input type=\"email\" placeholder=\"Email\" name=\"email\" formControlName=\"email\"></ion-input>\r\n                </ion-item>\r\n                <!-- <div *ngIf=\"!form.submitted && email.errors.requi || email.untouched\" style=\"text-align: justify; margin-top: 10px;\">\r\n                    <ion-text class=\"warning\" color=\"danger\">Email address required</ion-text>\r\n                  </div> -->\r\n                <div *ngIf=\"!form.submitted && email.errors || email.touched\" style=\"text-align: justify; margin-top: 10px;\">\r\n                    <ion-text class=\"warning\" color=\"danger\">Email must be a valid email address</ion-text>\r\n                </div>\r\n\r\n                <div class=\"buttons\">\r\n                  <!-- Sign Button -->\r\n                  <ion-button expand=\"block\" color=\"warning\" [disabled]=\"!(email.valid) && (email.errors)\" (click)=\"forgotPassword(form)\">\r\n                      <ion-text class=\"primary\"><strong>Reset Password</strong></ion-text>\r\n                  </ion-button>\r\n              </div>\r\n\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</form>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_forgot-password_forgot-password_module_ts.js.map