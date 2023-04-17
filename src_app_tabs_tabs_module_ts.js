(self["webpackChunkjps_mobile"] = self["webpackChunkjps_mobile"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 4362:
/*!************************************************!*\
  !*** ./src/app/driver/wallet/wallet.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletModule": () => (/* binding */ WalletModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet.page */ 983);




let WalletModule = class WalletModule {
};
WalletModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_0__.WalletPage],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]
    })
], WalletModule);



/***/ }),

/***/ 983:
/*!**********************************************!*\
  !*** ./src/app/driver/wallet/wallet.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletPage": () => (/* binding */ WalletPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./wallet.page.html */ 7484);
/* harmony import */ var _wallet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet.page.scss */ 5945);
/* harmony import */ var _assets_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/bootstrap/css/bootstrap.min.css */ 6019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 826);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ 2996);







let WalletPage = class WalletPage {
    constructor(userService) {
        this.userService = userService;
        this.subscription_user = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.transactions = [];
        this.geUserDetails();
    }
    ngOnInit() {
        this.makeid(6);
        this.getTransactions();
    }
    alignModal() {
        // var modal = $(this).find('#detail-modal');
        $('#detail-modal').css('margin-top', Math.max(0, ($(window).height() - $('#detail-modal').height()) / 3));
    }
    geUserDetails() {
        this.subscription_user.add(this.userService.getUserDetails().subscribe(result => {
            this.account_balance = parseFloat(result.result[0]['account_balance']).toFixed(2);
        }, error => {
        }));
    }
    getTransactions() {
        this.subscription_user.add(this.userService.getTransaction().subscribe(result => {
            this.transactions = result['result'];
        }, error => {
        }));
    }
    transacDetails(type, transactionNumber, amount, dateCreated, passengerId) {
        this.transactionPassengerId = '';
        this.transactionType = type;
        this.transactionNumber = transactionNumber;
        this.transactionAmount = amount;
        this.transactionDate = dateCreated;
        var date = new Date(dateCreated);
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var date_d = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var seconds = date.getSeconds();
        var month_var = month.toString().length < 2 ? '0' + month.toString() : month.toString();
        var date_var = date_d.toString().length < 2 ? '0' + date_d.toString() : date_d.toString();
        var hour_var = hour.toString().length < 2 ? '0' + hour.toString() : hour.toString();
        var minute_var = minute.toString().length < 2 ? '0' + minute.toString() : minute.toString();
        var seconds_var = seconds.toString().length < 2 ? '0' + seconds.toString() : seconds.toString();
        // this.transactionDate = year + '-'+ month_var + '-' + date_var + ' | ' + hour_var + ':' + minute_var + ':' + seconds_var;
        this.getName(passengerId);
        // this.transactionPassengerId = passengerId;
        $('#detail-modal').modal('show');
    }
    getName(id) {
        this.userService.getUserById(id).subscribe(result => {
            this.transactionPassengerId = result['result'][0]['name'];
        }, error => {
        });
    }
    makeid(length) {
        var result = '';
        var characters = '01234567899876543210';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        var date = new Date();
        var d_date = date.getFullYear().toString() + ((date.getDate() + 1).toString().length < 2 ? '0' + date.getDate().toString() : date.getDate().toString()) + ((date.getMonth() + 1).toString().length < 2 ? '0' + date.getMonth().toString() : date.getMonth().toString());
        var hour_date = (date.getHours() + 1).toString().length < 2 ? '0' + date.getHours().toString() : date.getHours().toString();
        var min_date = (date.getMinutes() + 1).toString().length < 2 ? '0' + date.getMinutes().toString() : date.getMinutes().toString();
        var sec_date = (date.getSeconds() + 1).toString().length < 2 ? '0' + date.getSeconds().toString() : date.getSeconds().toString();
        result = d_date + hour_date + min_date + sec_date + result;
        return result;
    }
};
WalletPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
WalletPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-wallet',
        template: _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_wallet_page_scss__WEBPACK_IMPORTED_MODULE_1__.default, _assets_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__.default]
    })
], WalletPage);



/***/ }),

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var src_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/guard/auth.guard */ 9324);
/* harmony import */ var src_guard_driver_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/guard/driver.guard */ 5498);
/* harmony import */ var src_guard_passenger_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/guard/passenger.guard */ 4959);







const routes = [
    {
        path: 'account',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'driver',
                children: [
                    {
                        path: 'generate-code',
                        canActivate: [src_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, src_guard_driver_guard__WEBPACK_IMPORTED_MODULE_2__.DriverGuard],
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_techiediaries_ngx-qrcode___ivy_ngcc___fesm2015_techiediaries-ngx-qrcode_js"), __webpack_require__.e("default-src_app_driver_generate-code_generate-code_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../driver/generate-code/generate-code.module */ 820)).then(m => m.GenerateCodePageModule)
                    },
                    {
                        path: 'profile',
                        canActivate: [src_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, src_guard_driver_guard__WEBPACK_IMPORTED_MODULE_2__.DriverGuard],
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../driver/profile/profile-routing.module */ 7312)).then(m => m.ProfilePageRoutingModule)
                    },
                    {
                        path: 'my-wallet',
                        canActivate: [src_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, src_guard_driver_guard__WEBPACK_IMPORTED_MODULE_2__.DriverGuard],
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_driver_wallet_wallet-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../driver/wallet/wallet-routing.module */ 1438)).then(m => m.WalletPageRoutingModule)
                    }
                ],
                // canActivate: [AuthGuard, DriverGuard]
            },
            {
                path: 'user',
                children: [
                    {
                        path: 'scan-code',
                        canActivate: [src_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, src_guard_passenger_guard__WEBPACK_IMPORTED_MODULE_3__.PassengerGuard],
                        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_passenger_passenger-home_passenger-home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../passenger/passenger-home/passenger-home.module */ 9705)).then(m => m.PassengerHomePageModule)
                    },
                    {
                        path: 'history',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_services_transactions_service_ts-_402e1")]).then(__webpack_require__.bind(__webpack_require__, /*! ../passenger/passenger-transaction/passenger-transaction.module */ 8840)).then(m => m.PassengerTransactionPageModule)
                    },
                    {
                        path: 'top-up',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../passenger/passenger-topup/passenger-topup.module */ 5109)).then(m => m.PassengerTopupPageModule)
                    },
                    {
                        path: 'profile',
                        canActivate: [src_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, src_guard_driver_guard__WEBPACK_IMPORTED_MODULE_2__.DriverGuard],
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../driver/profile/profile-routing.module */ 7312)).then(m => m.ProfilePageRoutingModule)
                    }
                ]
            },
            // // remove later on
            // {
            //   path: 'my-profile',
            //   // loadChildren: () => import('../user/my-profile/my-profile.module').then(m => m.MyProfilePageModule)
            //   loadChildren: () => import('../passenger/passenger-home/passenger-home.module').then( m => m.PassengerHomePageModule)
            // },
            // {
            //   path: 'history',
            //   loadChildren: () => import('../passenger/passenger-transaction/passenger-transaction.module').then(m => m.PassengerTransactionPageModule)
            // },
            // {
            //   path: '',
            //   redirectTo: '/tabs/scanCode',
            //   pathMatch: 'full'
            // }
        ]
    },
    {
        path: '',
        redirectTo: '/account/driver/generate-code',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _driver_profile_profile_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../driver/profile/profile.module */ 5959);
/* harmony import */ var _driver_wallet_wallet_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../driver/wallet/wallet.module */ 4362);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ 7942);









let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            _driver_profile_profile_module__WEBPACK_IMPORTED_MODULE_1__.ProfilePageModule,
            _driver_wallet_wallet_module__WEBPACK_IMPORTED_MODULE_2__.WalletModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_3__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 7665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 4427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let TabsPage = class TabsPage {
    constructor(route) {
        this.route = route;
        //user type by auth user
        this.user_type = 2;
        var user_type = localStorage.getItem('loginSession');
        if (user_type) {
        }
        else {
            this.route.navigate(['/login']);
        }
        this.user_type = JSON.parse(user_type)['account_type'];
    }
    ngAfterViewInit() {
        if (window.location.hash == '#/account/driver/my-wallet') {
            $('.tabs').removeClass('active');
            $('.wallet_tab').addClass('active');
        }
        if (window.location.hash == '#/account/driver/generate-code') {
            $('.tabs').removeClass('active');
            $('.ge_co_tab').addClass('active');
        }
        if (window.location.hash == '#/account/driver/profile') {
            $('.tabs').removeClass('active');
            $('.profile_tab').addClass('active');
        }
        if (window.location.hash == '#/account/user/profile') {
            $('.tabs').removeClass('active');
            $('.profile_tab').addClass('active');
        }
        if (window.location.hash == '#/account/history') {
            $('.tabs').removeClass('active');
            $('.history').addClass('active');
        }
        if (window.location.hash == '#/account/user/history') {
            $('.tabs').removeClass('active');
            $('.history').addClass('active');
        }
        if (window.location.hash == '#/account/user/scan-code') {
            $('.tabs').removeClass('active');
            $('.scan_code').addClass('active');
        }
    }
    onSelectTab(tabname) {
        $('.tabs').removeClass('active');
        $('.' + tabname).addClass('active');
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 9324:
/*!*********************************!*\
  !*** ./src/guard/auth.guard.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/session.service */ 5920);




let AuthGuard = class AuthGuard {
    constructor(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    canActivate(route, state) {
        const routeurl = state.url;
        return this.isLogin(routeurl);
    }
    isLogin(routeurl) {
        if (this.sessionService.isLoggedIn()) {
            return true;
        }
        this.sessionService.redirectUrl = routeurl;
        this.router.navigate(['login'], { queryParams: { returnUrl: routeurl } });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 5498:
/*!***********************************!*\
  !*** ./src/guard/driver.guard.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverGuard": () => (/* binding */ DriverGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/session.service */ 5920);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ 2996);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ..//services/alert.service */ 2758);






let DriverGuard = class DriverGuard {
    constructor(router, sessionService, userService, alertService) {
        this.router = router;
        this.sessionService = sessionService;
        this.userService = userService;
        this.alertService = alertService;
        this.state = true;
    }
    canActivate(route, state) {
        const routeurl = state.url;
        if (this.sessionService.isLoggedIn()) {
            this.userService.getUserDetails().subscribe(result => {
                if (result['result'][0]['account_type'] == 2) {
                    this.state = true;
                    return this.state;
                }
                else if (result['result'][0]['account_type'] == 3) {
                    this.state = true;
                    $('.tabs').removeClass('active');
                    $('.scan_code').addClass('active');
                    return this.state;
                }
                else {
                    this.alertService.simpleAlert('error', 'Permission Denied', '');
                    if (result['result'][0]['account_type'] == 1) {
                        //admin
                    }
                    if (result['result'][0]['account_type'] == 3) {
                        //passenger
                        this.router.navigate(['account/user/scan-code']);
                        // $('.tabs').removeClass('active')
                        // $('.ge_co_tab').addClass('active')
                    }
                    this.state = false;
                }
            }, error => { });
        }
        return this.state;
    }
};
DriverGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
DriverGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], DriverGuard);



/***/ }),

/***/ 4959:
/*!**************************************!*\
  !*** ./src/guard/passenger.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassengerGuard": () => (/* binding */ PassengerGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/session.service */ 5920);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ 2996);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ..//services/alert.service */ 2758);






let PassengerGuard = class PassengerGuard {
    constructor(router, sessionService, userService, alertService) {
        this.router = router;
        this.sessionService = sessionService;
        this.userService = userService;
        this.alertService = alertService;
        this.state = true;
    }
    canActivate(route, state) {
        const routeurl = state.url;
        if (this.sessionService.isLoggedIn()) {
            this.userService.getUserDetails().subscribe(result => {
                if (result['result'][0]['account_type'] == 3) {
                    this.state = true;
                    return this.state;
                }
                else {
                    this.alertService.simpleAlert('error', 'Permission Denied', '');
                    if (result['result'][0]['account_type'] == 1) {
                        //admin
                    }
                    if (result['result'][0]['account_type'] == 2) {
                        //driver
                        this.router.navigate(['account/driver/generate-code']);
                        // $('.tabs').removeClass('active')
                        // $('.ge_co_tab').addClass('active')
                    }
                    this.state = false;
                }
            }, error => { });
        }
        return this.state;
    }
};
PassengerGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
PassengerGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], PassengerGuard);



/***/ }),

/***/ 5945:
/*!************************************************!*\
  !*** ./src/app/driver/wallet/wallet.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content #header-container {\n  padding: 20px;\n  padding-top: 10px !important;\n  --border-bottom: none !important;\n  background: #0066ff !important;\n  min-height: 25%;\n}\nion-content #header-container ion-toolbar {\n  margin-top: 1rem;\n  text-align: center;\n  --background: transparent;\n  background: url('logo_4.png');\n  --border-bottom: none !important;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  --background-position: 50% 50%;\n}\nion-content #header-container ion-card {\n  background-color: transparent;\n  border: none;\n  box-shadow: none;\n}\nion-content #header-container ion-card ion-card-header {\n  padding: 5px;\n  text-align: center !important;\n}\nion-content #header-container ion-card ion-card-header ion-card-title {\n  font-size: 2em;\n  color: white;\n  font-weight: bolder;\n}\nion-content #header-container ion-card ion-card-header ion-card-subtitle {\n  color: whitesmoke;\n  font-size: 1em;\n}\nion-content #content-container {\n  background: white !important;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  margin-top: -5% !important;\n  padding: 0p 10px 0px 0px !important;\n}\nion-content #content-container #qr-button-container {\n  margin-top: -8% !important;\n}\nion-content #content-container #qr-button-container ion-button {\n  min-height: 3.5em;\n  width: 80%;\n}\nion-content #content-container .created-label {\n  font-size: 1em;\n  color: #707070;\n}\nion-content #content-container .created-label span {\n  font-weight: bold;\n}\nion-content #content-container .transac-label {\n  font-weight: bold;\n  font-size: 1em;\n  color: #535353;\n}\nion-content #content-container .recent-transac ion-row {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\nion-content #content-container .recent-transac ion-card {\n  min-height: 4em;\n  padding: 0%;\n  margin: 0;\n}\nion-content #content-container .recent-transac ion-card ion-item {\n  --border-color: transparent;\n  padding: 3px;\n}\nion-content #content-container .recent-transac ion-card .transac-container {\n  padding: 0px 0px !important;\n}\nion-content #content-container .recent-transac ion-card .transac-container ion-col, ion-content #content-container .recent-transac ion-card .transac-container ion-label {\n  font-size: 14px;\n  color: #707070;\n  padding: 0;\n}\nion-content #content-container .recent-transac ion-card .transac-container ion-label {\n  padding: 2px 0;\n}\nion-content #content-container .recent-transac ion-card .transac-paid {\n  color: #fa4242 !important;\n  font-weight: bold;\n}\nion-content #content-container .recent-transac ion-card .transac-received {\n  color: #19c444 !important;\n  font-weight: bold;\n}\nion-content #content-container .recent-transac ion-card .detail {\n  font-weight: bold;\n  color: #0ea0f5 !important;\n}\n#detail-modal {\n  background: #7070709f !important;\n  z-index: 99 !important;\n  padding: 1rem !important;\n  border: none !important;\n}\n#detail-modal .modal-dialog {\n  transform: translate(0, -50%);\n  top: 50%;\n  margin: 0 auto;\n  font-size: 15px !important;\n}\n.modal-body div {\n  padding: 3px 0px !important;\n}\n.modal-footer {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDSSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUZSO0FBR1E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0FBRFo7QUFNUTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSlo7QUFNWTtFQUNRLFlBQUE7RUFDQSw2QkFBQTtBQUpwQjtBQU1vQjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFKeEI7QUFNb0I7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFKeEI7QUFTSTtFQUVJLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QUFSUjtBQVVRO0VBQ0ksMEJBQUE7QUFSWjtBQVNZO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBUGhCO0FBV1E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQVRaO0FBWVE7RUFDSSxpQkFBQTtBQVZaO0FBYVE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBWFo7QUFnQlk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBZGhCO0FBaUJZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBZmhCO0FBaUJnQjtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtBQWZwQjtBQWtCZ0I7RUFFSSwyQkFBQTtBQWpCcEI7QUFtQm9CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBakJ4QjtBQW1Cb0I7RUFDSSxjQUFBO0FBakJ4QjtBQXFCZ0I7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FBbkJwQjtBQXFCZ0I7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FBbkJwQjtBQXFCZ0I7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0FBbkJwQjtBQTJCQTtFQUNJLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBeEJKO0FBMkJBO0VBR0ksNkJBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBeEJKO0FBMEJBO0VBQ0ksMkJBQUE7QUF2Qko7QUF5QkE7RUFDSSx1QkFBQTtBQXRCSiIsImZpbGUiOiJ3YWxsZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcblxyXG5cclxuICAgICNoZWFkZXItY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAtLWJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiMwMDY2ZmYgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyNSU7XHJcbiAgICAgICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2xvZ29fNC5wbmcnKTtcclxuICAgICAgICAgICAgLS1ib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxuICAgICAgICAgICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpb24tY2FyZC10aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAjY29udGVudC1jb250YWluZXJ7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6d2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDBwIDEwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgICNxci1idXR0b24tY29udGFpbmVye1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtOCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMuNWVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY3JlYXRlZC1sYWJlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNyZWF0ZWQtbGFiZWwgc3BhbntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudHJhbnNhYy1sYWJlbHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDgzLCA4MywgODMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJlY2VudC10cmFuc2Fje1xyXG5cclxuICAgICAgICAgICAgaW9uLXJvd3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDRlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuXHJcbiAgICAgICAgICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnRyYW5zYWMtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDs7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24tY29sLCBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50cmFuc2FjLXBhaWR7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTAsIDY2LCA2NikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50cmFuc2FjLXJlY2VpdmVke1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjUsIDE5NiwgNjgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGV0YWlse1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOnJnYigxNCwgMTYwLCAyNDUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4jZGV0YWlsLW1vZGFse1xyXG4gICAgYmFja2dyb3VuZDogIzcwNzA3MDlmICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5OSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNkZXRhaWwtbW9kYWwgLm1vZGFsLWRpYWxvZ3tcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNTAlKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC01MCUpO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbC1ib2R5IGRpdntcclxuICAgIHBhZGRpbmc6IDNweCAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubW9kYWwtZm9vdGVye1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 4427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-tab-button.active {\n  color: #0066ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtBQUFKIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi10YWItYnV0dG9uLmFjdGl2ZXtcclxuICAgIGNvbG9yOiAjMDA2NmZmIDtcclxufSJdfQ== */");

/***/ }),

/***/ 7484:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver/wallet/wallet.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n     My Wallet\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid id=\"header-container\">\r\n        \r\n    <ion-toolbar id=\"img-logo\">\r\n      \r\n      <!-- <ion-img src=\"..\\assets\\img\\logo_4.png\"></ion-img> -->\r\n    </ion-toolbar>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title>&#8369;{{ account_balance }}</ion-card-title>\r\n        <ion-card-subtitle>Available Balance</ion-card-subtitle>\r\n      </ion-card-header>\r\n    </ion-card> \r\n  </ion-grid>\r\n  <ion-grid id=\"content-container\">\r\n    <!-- <ion-grid id=\"qr-button-container\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button id=\"generate-btn\" color=\"light\" (click)=\"generateQrCode()\">\r\n                  <ion-icon name=\"qr-code-outline\"></ion-icon>\r\n                  &nbsp; Generate <span *ngIf=\"qrData != null\">&nbsp;New&nbsp;</span>QR-CODE\r\n              </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>  -->\r\n    <ion-grid class=\"recent-transac\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n              <label class=transac-label>Transaction History</label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div *ngIf=\"transactions.length > 0\">\r\n        <ion-row *ngFor=\"let transaction of transactions\" class=\"ion-align-items-center\" style=\"padding: 0;\">\r\n          <ion-col size=\"12\" >\r\n            <ion-card>\r\n              <ion-item>\r\n                <ion-grid>\r\n                  <ion-row class=\"transac-container\" >\r\n                    <ion-col size=\"6\">\r\n                      <ion-label><b *ngIf=\"transaction.transaction_type == 1\">Receive Payment</b><b *ngIf=\"transaction.transaction_type == 3\">Cash out</b></ion-label>\r\n                    </ion-col>\r\n\r\n                    <ion-col size=\"6\" style=\"text-align:right;\">\r\n                      <ion-label *ngIf=\"transaction.transaction_type == 3\" class=\"transac-paid\">- &#8369;{{ transaction.amount }}</ion-label>\r\n                      <ion-label *ngIf=\"transaction.transaction_type == 1\" class=\"transac-received\">+ &#8369;{{ transaction.amount }}</ion-label>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row class=\"transac-container\" >\r\n                    <ion-col size=\"7\" >\r\n                      <ion-label class=\"route-label\" >{{ transaction.date_created | date:'medium': 'utc/GMT+8' }} </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"5\" class=\"ion-align-items-right\" style=\"text-align:right\">\r\n                      <ion-label class=\"detail\"><a id=\"{{ transaction.transaction_number }}\" data-amount=\"\" (click)=\"transacDetails(transaction.transaction_type, transaction.transaction_number, transaction.amount, transaction.date_created, transaction.user_id)\" role=\"button\">Details</a></ion-label>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n      <div *ngIf=\"transactions.length < 1\" class=\"mt-3 text-center\" id=\"no_transac\">\r\n        No transaction found.\r\n      </div>\r\n\r\n      <!-- <ion-row class=\"ion-align-items-center\" style=\"padding: 0;\">\r\n        <ion-col size=\"12\" >\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-grid>\r\n                <ion-row class=\"transac-container\" >\r\n                  <ion-col size=\"6\">\r\n                    <ion-label><b>Cash out</b></ion-label>\r\n                  </ion-col>\r\n\r\n                  <ion-col size=\"6\" style=\"text-align:right;\">\r\n                    <ion-label class=\"transac-paid\">- &#8369;500.00</ion-label>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"transac-container\" >\r\n                  <ion-col size=\"6\" >\r\n                    <ion-label class=\"route-label\" >2021-01-01 | 06:00:00</ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\" class=\"ion-align-items-right\" style=\"text-align:right\">\r\n                    <ion-label class=\"detail\"><a id=\"1111111111\" (click)=\"transacDetails($event)\" role=\"button\">Details</a></ion-label>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row> -->\r\n\r\n     \r\n      \r\n      \r\n    </ion-grid>\r\n  </ion-grid>\r\n \r\n</ion-content>\r\n<div class=\"modal fade border\"  tabindex=\"-1\" aria-hidden=\"true\" id=\"detail-modal\">\r\n  <div class=\"modal-dialog\">\r\n  \r\n  <!-- Modal content-->\r\n  <div class=\"modal-content\">\r\n     \r\n          <div class=\"modal-body\">\r\n              <div class=\"w-100\">\r\n                <span *ngIf=\"transactionType === 3\"><b>Cash out</b></span>\r\n                <span *ngIf=\"transactionType === 1\">Trasportation fee from <b>{{ transactionPassengerId }}</b></span>\r\n              </div>\r\n              <div class=\"w-100\">\r\n                Date & Time: {{ transactionDate | date:'medium': 'utc/GMT+8' }}\r\n              </div>\r\n              <div class=\"w-100\">\r\n                Amount: <span *ngIf=\"transactionType == 0\">-</span><span *ngIf=\"transactionType == 3\">+</span>{{ transactionAmount }}\r\n              </div>\r\n              <div class=\"w-100\">\r\n                Transaction number: {{ transactionNumber }}\r\n              </div>\r\n          </div>\r\n          <div class=\"modal-footer text-right\">\r\n            <span role=\"button\" data-dismiss=\"modal\">OK</span>\r\n        </div>\r\n  </div>\r\n  \r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ 7665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\r\n\r\n\t<ion-tab-bar slot=\"bottom\">\r\n\t\t<ng-template [ngIf]=\"user_type == 2\">\r\n\t\t\t<ion-tab-button tab=\"driver/my-wallet\" class=\"tabs wallet_tab\" id=\"wallet-tab\" (click)=\"onSelectTab('wallet_tab')\">\r\n\t\t\t\t<ion-icon name=\"card\"></ion-icon>\r\n\t\t\t\t<ion-label>My wallet</ion-label>\r\n\t\t\t</ion-tab-button>\r\n\t\t\t\r\n\t\t\t<ion-tab-button tab=\"driver/generate-code\" class=\"tabs ge_co_tab\" id=\"generate-code-tab\" (click)=\"onSelectTab('ge_co_tab')\">\r\n\t\t\t\t<ion-icon name=\"qr-code\"></ion-icon>\r\n\t\t\t\t<ion-label>Generate QR Code </ion-label>\r\n\t\t\t</ion-tab-button>\r\n\t\t\t\r\n\r\n\t\t\t<ion-tab-button tab=\"driver/profile\" class=\"tabs profile_tab\" id=\"profile-tab\" (click)=\"onSelectTab('profile_tab')\">\r\n\t\t\t\t<ion-icon name=\"person\"></ion-icon>\r\n\t\t\t\t<ion-label>My Profile</ion-label>\r\n\t\t\t</ion-tab-button>\r\n\r\n\t\t\t\r\n\r\n\t\t</ng-template>\r\n\r\n\r\n\t\t<ng-template [ngIf]=\"user_type == 3\">\r\n\t\t\t<ion-tab-button tab=\"user/profile\" class=\"tabs profile_tab\" (click)=\"onSelectTab('profile_tab')\">\r\n\t\t\t\t<ion-icon name=\"person\"></ion-icon>\r\n\t\t\t\t<ion-label>My Profile</ion-label>\r\n\t\t\t</ion-tab-button>\r\n\r\n\t\t\t<ion-tab-button tab=\"user/scan-code\" class=\"tabs scan_code\" (click)=\"onSelectTab('scan_code')\">\r\n\t\t\t\t<ion-icon name=\"qr-code\"></ion-icon>\r\n\t\t\t\t<ion-label>Scan Qr Code </ion-label>\r\n\t\t\t</ion-tab-button>\r\n\t\t\t\r\n\t\t\t<ion-tab-button tab=\"user/history\" class=\"tabs history\" (click)=\"onSelectTab('history')\">\r\n\t\t\t\t<ion-icon name=\"list\"></ion-icon>\r\n\t\t\t\t<ion-label>History</ion-label>\r\n\t\t\t</ion-tab-button>\r\n\t\t</ng-template>\r\n\t</ion-tab-bar>\r\n\r\n</ion-tabs>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map