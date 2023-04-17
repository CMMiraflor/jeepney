(self["webpackChunkjps_mobile"] = self["webpackChunkjps_mobile"] || []).push([["default-src_app_passenger_passenger-home_passenger-home_module_ts"],{

/***/ 3098:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Notification.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationKind": () => (/* binding */ NotificationKind),
/* harmony export */   "Notification": () => (/* binding */ Notification)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable/empty */ 9193);
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable/of */ 5917);
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable/throwError */ 205);



var NotificationKind;
(function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
class Notification {
    constructor(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    observe(observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    }
    do(next, error, complete) {
        const kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    }
    accept(nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    }
    toObservable() {
        const kind = this.kind;
        switch (kind) {
            case 'N':
                return (0,_observable_of__WEBPACK_IMPORTED_MODULE_0__.of)(this.value);
            case 'E':
                return (0,_observable_throwError__WEBPACK_IMPORTED_MODULE_1__.throwError)(this.error);
            case 'C':
                return (0,_observable_empty__WEBPACK_IMPORTED_MODULE_2__.empty)();
        }
        throw new Error('unexpected notification kind value');
    }
    static createNext(value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    }
    static createError(err) {
        return new Notification('E', undefined, err);
    }
    static createComplete() {
        return Notification.completeNotification;
    }
}
Notification.completeNotification = new Notification('C');
Notification.undefinedValueNotification = new Notification('N', undefined);
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ 2217:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": () => (/* binding */ Scheduler)
/* harmony export */ });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 5792:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/delay.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 3637);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isDate */ 9989);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ 7393);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Notification */ 3098);




function delay(delay, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    const absoluteDelay = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_1__.isDate)(delay);
    const delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
    return (source) => source.lift(new DelayOperator(delayFor, scheduler));
}
class DelayOperator {
    constructor(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    }
}
class DelaySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__.Subscriber {
    constructor(destination, delay, scheduler) {
        super(destination);
        this.delay = delay;
        this.scheduler = scheduler;
        this.queue = [];
        this.active = false;
        this.errored = false;
    }
    static dispatch(state) {
        const source = state.source;
        const queue = source.queue;
        const scheduler = state.scheduler;
        const destination = state.destination;
        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
            queue.shift().notification.observe(destination);
        }
        if (queue.length > 0) {
            const delay = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, delay);
        }
        else {
            this.unsubscribe();
            source.active = false;
        }
    }
    _schedule(scheduler) {
        this.active = true;
        const destination = this.destination;
        destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
            source: this, destination: this.destination, scheduler: scheduler
        }));
    }
    scheduleNotification(notification) {
        if (this.errored === true) {
            return;
        }
        const scheduler = this.scheduler;
        const message = new DelayMessage(scheduler.now() + this.delay, notification);
        this.queue.push(message);
        if (this.active === false) {
            this._schedule(scheduler);
        }
    }
    _next(value) {
        this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createNext(value));
    }
    _error(err) {
        this.errored = true;
        this.queue = [];
        this.destination.error(err);
        this.unsubscribe();
    }
    _complete() {
        this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createComplete());
        this.unsubscribe();
    }
}
class DelayMessage {
    constructor(time, notification) {
        this.time = time;
        this.notification = notification;
    }
}
//# sourceMappingURL=delay.js.map

/***/ }),

/***/ 2901:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 826);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 401:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 2901);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 4548:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 2217);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 3637:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler),
/* harmony export */   "async": () => (/* binding */ async)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 401);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 4548);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 9989:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDate": () => (/* binding */ isDate)
/* harmony export */ });
function isDate(value) {
    return value instanceof Date && !isNaN(+value);
}
//# sourceMappingURL=isDate.js.map

/***/ }),

/***/ 9394:
/*!***************************************************************************!*\
  !*** ./src/app/passenger/passenger-home/passenger-home-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassengerHomePageRoutingModule": () => (/* binding */ PassengerHomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _passenger_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passenger-home.page */ 8658);




const routes = [
    {
        path: '',
        component: _passenger_home_page__WEBPACK_IMPORTED_MODULE_0__.PassengerHomePage
    }
];
let PassengerHomePageRoutingModule = class PassengerHomePageRoutingModule {
};
PassengerHomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PassengerHomePageRoutingModule);



/***/ }),

/***/ 9705:
/*!*******************************************************************!*\
  !*** ./src/app/passenger/passenger-home/passenger-home.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassengerHomePageModule": () => (/* binding */ PassengerHomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _passenger_home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passenger-home-routing.module */ 9394);
/* harmony import */ var _passenger_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passenger-home.page */ 8658);
/* harmony import */ var ngx_scanner_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-scanner-qrcode */ 1413);








let PassengerHomePageModule = class PassengerHomePageModule {
};
PassengerHomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _passenger_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.PassengerHomePageRoutingModule,
            ngx_scanner_qrcode__WEBPACK_IMPORTED_MODULE_7__.NgxScannerQrcodeModule
        ],
        declarations: [_passenger_home_page__WEBPACK_IMPORTED_MODULE_1__.PassengerHomePage]
    })
], PassengerHomePageModule);



/***/ }),

/***/ 8658:
/*!*****************************************************************!*\
  !*** ./src/app/passenger/passenger-home/passenger-home.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassengerHomePage": () => (/* binding */ PassengerHomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_passenger_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./passenger-home.page.html */ 9749);
/* harmony import */ var _passenger_home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passenger-home.page.scss */ 9674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 826);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 2760);
/* harmony import */ var _services_balance_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/balance-service.service */ 7355);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert.service */ 2758);
/* harmony import */ var src_services_pay_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/pay-driver.service */ 8422);
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/user.service */ 2996);
/* harmony import */ var _services_transactions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/transactions.service */ 2774);
/* harmony import */ var ngx_scanner_qrcode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-scanner-qrcode */ 1413);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5792);














let PassengerHomePage = class PassengerHomePage {
    constructor(barcodeScanner, router, balanceService, alertService, userService, payDriverService, transacService, qrcode, route) {
        this.barcodeScanner = barcodeScanner;
        this.router = router;
        this.balanceService = balanceService;
        this.alertService = alertService;
        this.userService = userService;
        this.payDriverService = payDriverService;
        this.transacService = transacService;
        this.qrcode = qrcode;
        this.qrCodeResult = [];
        this.qrCodeResult2 = [];
        this.config = {
            // fps: 1000,
            vibrate: 400,
            // isBeep: true,
            // decode: 'macintosh',
            deviceActive: 0,
            constraints: {
                audio: false,
                video: {
                    width: window.innerWidth,
                },
            },
        };
        this.subscription_balance = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
        this.subscription_payment = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
        this.subscription_user = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
        this.subscription_transac = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
        this.token = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        route.params.subscribe(val => {
            // this.payDriver(1);
            this.getBalance();
            this.getTransactions();
        });
    }
    ngOnInit() {
        // this.decrypt_qr_data("32372e5569742147646321313221333133332130383b35373b353321464c552a3139313121295169686d687171686f64215275606f656073652155686c6428");
    }
    ngAfterViewInit() {
        this.action.isReady.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(1000)).subscribe(() => {
            this.action.start();
        });
    }
    onEvent(e) {
        console.log(e, 'test2');
    }
    handle(action, fn) {
        action[fn]().subscribe(console.log, 'test');
    }
    onDowload(action) {
        action.download().subscribe(console.log, alert);
    }
    onSelects(files) {
        this.qrcode
            .loadFiles(files)
            .subscribe((res) => {
            this.qrCodeResult = res;
        });
    }
    onSelects2(files) {
        this.qrcode
            .loadFilesToScan(files, this.config)
            .subscribe((res) => {
            console.log(res);
            this.qrCodeResult2 = res;
        });
    }
    scanQR() {
        this.barcodeScanner
            .scan()
            .then(barcodeData => {
            alert("Barcode data " + JSON.stringify(barcodeData));
            console.log(barcodeData);
            //  alert(barcodeData.text);
            this.decrypt_qr_data(barcodeData.text);
            this.payDriver(this.user_pk);
            this.getBalance();
            this.getTransactions();
        })
            .catch(err => {
            console.log("Error", err);
        });
    }
    payDriver(driver_Pk) {
        var amountPaid = 0;
        var transac_no = this.makeid(6);
        this.subscription_user.add(this.userService.getUserById(driver_Pk).subscribe(result => {
            amountPaid = result.result[0]['driver_rate'];
            this.subscription_payment.add(this.payDriverService.payDriver(transac_no, amountPaid, 1, driver_Pk).subscribe(result => {
                this.alertService.simpleAlert('success', 'Success', 'Payment successful!');
                this.getBalance();
            }, error => {
                this.alertService.simpleAlert('info', 'Info', 'Please check either your Email or Password is Incorrect');
            }));
        }, error => {
            this.alertService.simpleAlert('info', 'Info', 'failed to fetch rate');
        }));
    }
    topUp() {
        this.router.navigate(['/passenger-topup']);
    }
    decrypt_qr_data(data) {
        var decrypt = (salt, encoded) => {
            const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
            const appySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
            return encoded
                .match(/.{1,2}/g)
                .map((hex) => parseInt(hex, 16))
                .map(appySaltToChar)
                .map((charCode) => String.fromCharCode(charCode))
                .join("");
        };
        var dec = decrypt(this.token, data);
        dec = dec.split('/');
        console.log('USER PK DRIVER' + dec[0]);
        this.user_pk = dec[0];
    }
    getBalance() {
        this.subscription_balance.add(this.balanceService.get_balance().subscribe(result => {
            var currentBal = result.result[0].balance;
            this.balance = currentBal;
        }, error => {
            this.alertService.simpleAlert('info', 'Info', 'Please check either your Email or Password is Incorrect');
        }));
    }
    getTransactions() {
        this.subscription_transac.add(this.transacService.get_transactions(5).subscribe(result => {
            console.log(result);
            if (result.result.length > 0) {
                this.transactions = result.result;
                console.log(this.transactions);
            }
            else {
                this.transactions = [];
            }
        }, error => {
        }));
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
PassengerHomePage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _services_balance_service_service__WEBPACK_IMPORTED_MODULE_3__.BalanceServiceService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: src_services_pay_driver_service__WEBPACK_IMPORTED_MODULE_5__.PayDriverService },
    { type: _services_transactions_service__WEBPACK_IMPORTED_MODULE_7__.TransationsService },
    { type: ngx_scanner_qrcode__WEBPACK_IMPORTED_MODULE_11__.NgxScannerQrcodeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute }
];
PassengerHomePage.propDecorators = {
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['action',] }]
};
PassengerHomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-passenger-home',
        template: _raw_loader_passenger_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_passenger_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PassengerHomePage);



/***/ }),

/***/ 7355:
/*!*************************************************!*\
  !*** ./src/services/balance-service.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceServiceService": () => (/* binding */ BalanceServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server */ 938);






let BalanceServiceService = class BalanceServiceService {
    constructor(http) {
        this.http = http;
        this.url = _server__WEBPACK_IMPORTED_MODULE_0__.GlobalVariable.BASE_API_URL;
    }
    get_balance() {
        var user = localStorage.getItem('loginSession');
        var user_id = JSON.parse(user)['pk'];
        console.log(user_id);
        return this.http.get(this.url.concat('api/user/get-balance/' + user_id), {
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
BalanceServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
BalanceServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], BalanceServiceService);



/***/ }),

/***/ 8422:
/*!********************************************!*\
  !*** ./src/services/pay-driver.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayDriverService": () => (/* binding */ PayDriverService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server */ 938);






let PayDriverService = class PayDriverService {
    constructor(http) {
        this.http = http;
        this.url = _server__WEBPACK_IMPORTED_MODULE_0__.GlobalVariable.BASE_API_URL;
    }
    payDriver(transaction_number, amount, transaction_type, transaction_recepient) {
        var user = localStorage.getItem('loginSession');
        var user_id = JSON.parse(user)['pk'];
        var account_type = JSON.parse(user)['account_type'];
        console.log(transaction_recepient + 'abac');
        return this.http.post(this.url.concat('api/user/pay-driver'), {
            transaction_number: transaction_number,
            amount: amount,
            user_id: user_id,
            account_type: account_type,
            transaction_type: transaction_type,
            transaction_recipient: transaction_recepient,
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
PayDriverService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
PayDriverService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], PayDriverService);



/***/ }),

/***/ 2774:
/*!**********************************************!*\
  !*** ./src/services/transactions.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransationsService": () => (/* binding */ TransationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server */ 938);






let TransationsService = class TransationsService {
    constructor(http) {
        this.http = http;
        this.url = _server__WEBPACK_IMPORTED_MODULE_0__.GlobalVariable.BASE_API_URL;
    }
    get_transactions(rec_limit) {
        var user = localStorage.getItem('loginSession');
        var user_id = JSON.parse(user)['pk'];
        console.log(user_id);
        return this.http.get(this.url.concat('api/user/get_user_transaction'), {
            params: {
                pk: user_id,
                rec_limit: rec_limit,
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
TransationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
TransationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], TransationsService);



/***/ }),

/***/ 9674:
/*!*******************************************************************!*\
  !*** ./src/app/passenger/passenger-home/passenger-home.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content #header-container {\n  padding: 20px;\n  padding-top: 10px !important;\n  --border-bottom: none !important;\n  background: #0066ff !important;\n  min-height: 30%;\n}\nion-content #header-container ion-toolbar {\n  text-align: center;\n  --background: transparent;\n  --border-bottom: none !important;\n}\nion-content #header-container ion-toolbar ion-card {\n  background-color: transparent;\n  border: none;\n  box-shadow: none;\n}\nion-content #header-container ion-toolbar ion-card ion-card-header {\n  padding: 5px;\n}\nion-content #header-container ion-toolbar ion-card ion-card-header ion-card-title {\n  font-size: 2em;\n  color: white;\n  font-weight: bolder;\n}\nion-content #header-container ion-toolbar ion-card ion-card-header ion-card-title ion-icon {\n  font-weight: bolder;\n  font-size: 0.7em;\n}\nion-content #header-container ion-toolbar ion-card ion-card-header ion-card-subtitle {\n  color: whitesmoke;\n  font-size: 1em;\n}\nion-content #content-container {\n  background: white !important;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  margin-top: -5% !important;\n  padding: 0p 10px 0px 0px !important;\n}\nion-content #content-container #qr-button-container {\n  margin-top: -8% !important;\n}\nion-content #content-container #qr-button-container ion-button {\n  min-height: 3.5em;\n  width: 80%;\n}\nion-content #content-container .transac-label {\n  font-size: 1em;\n  color: #535353;\n}\nion-content #content-container .route-label, ion-content #content-container .plate-label {\n  font-size: 0.8em;\n  color: #535353;\n}\nion-content #content-container .plate-label, ion-content #content-container .transac-paid, ion-content #content-container .transac-received {\n  text-align: right;\n}\nion-content #content-container .recent-transac ion-row {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\nion-content #content-container .recent-transac ion-card {\n  min-height: 5em;\n  padding: 0%;\n  margin: 0;\n}\nion-content #content-container .recent-transac ion-card ion-item {\n  --border-color: transparent;\n}\nion-content #content-container .recent-transac ion-card .transac-container {\n  padding: 8px 0px;\n}\nion-content #content-container .recent-transac ion-card .transac-paid {\n  color: #fa4242;\n  font-weight: bold;\n}\nion-content #content-container .recent-transac ion-card .transac-received {\n  color: #19c444;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3Nlbmdlci1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBRlI7QUFHUTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDSixnQ0FBQTtBQURSO0FBRVE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFaO0FBRVk7RUFDUSxZQUFBO0FBQXBCO0FBRW9CO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUF4QjtBQUV3QjtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBNUI7QUFHb0I7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFEeEI7QUFRSTtFQUVJLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QUFQUjtBQVNRO0VBQ0ksMEJBQUE7QUFQWjtBQVFZO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBTmhCO0FBV1E7RUFFSSxjQUFBO0VBQ0EsY0FBQTtBQVZaO0FBWVE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFWWjtBQVlRO0VBQ0ksaUJBQUE7QUFWWjtBQWVZO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQWJoQjtBQWdCWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQWRoQjtBQWdCZ0I7RUFDSSwyQkFBQTtBQWRwQjtBQW1CZ0I7RUFDSSxnQkFBQTtBQWpCcEI7QUFvQmdCO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBbEJwQjtBQW9CZ0I7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFsQnBCIiwiZmlsZSI6InBhc3Nlbmdlci1ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuXHJcbiAgICAjaGVhZGVyLWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1ib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDojMDA2NmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzAlO1xyXG4gICAgICAgIGlvbi10b29sYmFye1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1ib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24tY2FyZC10aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2NvbnRlbnQtY29udGFpbmVye1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOndoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNSUgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwcCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBcclxuICAgICAgICAjcXItYnV0dG9uLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTglICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzLjVlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRyYW5zYWMtbGFiZWx7XHJcblxyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYig4MywgODMsIDgzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvdXRlLWxhYmVsLC5wbGF0ZS1sYWJlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYig4MywgODMsIDgzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBsYXRlLWxhYmVsLC50cmFuc2FjLXBhaWQsLnRyYW5zYWMtcmVjZWl2ZWR7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJlY2VudC10cmFuc2Fje1xyXG5cclxuICAgICAgICAgICAgaW9uLXJvd3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDVlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuXHJcbiAgICAgICAgICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC50cmFuc2FjLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50cmFuc2FjLXBhaWR7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTAsIDY2LCA2Nik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudHJhbnNhYy1yZWNlaXZlZHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1LCAxOTYsIDY4KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 9749:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/passenger/passenger-home/passenger-home.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <h1> ngx-scanner-qrcode </h1>\r\n\r\n  <!-- devices -->\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-md-6 col-lg-4 col-xl-3 my-1\">\r\n      <select [ngModel]=\"null\" (ngModelChange)=\"action.playDevice($event)\" class=\"form-select form-select-sm\">\r\n        <option [value]=\"null\" selected>Select device</option>\r\n        <option *ngFor=\"let c of action.devices.value; let i = index\" [ngValue]=\"c.deviceId\"\r\n          [selected]=\"i == action.deviceActive\">{{c.label}}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-md-6 col-lg-4 col-xl-3 my-1\">\r\n      <select [ngModel]=\"'utf-8'\" (ngModelChange)=\"action.decode = $event\" class=\"form-select form-select-sm\">\r\n        <option value=\"utf-8\" [selected]=\"action.decode == 'utf-8'\">UTF-8</option>\r\n        <option value=\"iso-8859-15\" [selected]=\"action.decode == 'iso-8859-15'\">ISO-8859-15</option>\r\n        <option value=\"windows-1252\" [selected]=\"action.decode == 'windows-1252'\">Windows-1252</option>\r\n        <option value=\"macintosh\" [selected]=\"action.decode == 'macintosh'\">Macintosh</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- ngx-scanner-qrcode -->\r\n  <ngx-scanner-qrcode #action=\"scanner\" [config]=\"config\" (event)=\"onEvent($event)\"></ngx-scanner-qrcode>\r\n\r\n  <!-- data  -->\r\n  <!-- <p class=\"data\">{{ (action.data | async | json) }}</p> -->\r\n\r\n  <!-- loading -->\r\n  <p *ngIf=\"action.isLoading\">⌛ Loading...</p>\r\n\r\n  <!-- start/stop -->\r\n  <button class=\"btn\" [class.btn-info]=\"!action.isStart\" [class.btn-warning]=\"action.isStart\"\r\n    [disabled]=\"action.isLoading\" (click)=\"handle(action, action.isStart ? 'stop' : 'start')\">\r\n    <img\r\n      [src]=\"action.isStart ? 'https://id1945.github.io/images/svg/camera-off.svg' : 'https://id1945.github.io/images/svg/camera-on.svg'\"\r\n      width=\"30px\" />\r\n  </button>\r\n\r\n  <!-- play/pause -->\r\n  <button class=\"btn\" [class.btn-info]=\"!action.isStart\" [class.btn-warning]=\"action.isStart\"\r\n    [disabled]=\"!action.isStart\" (click)=\"handle(action, action.isPause ? 'play' : 'pause')\">\r\n    <img\r\n      [src]=\"action.isPause ? 'https://id1945.github.io/images/svg/play.svg': 'https://id1945.github.io/images/svg/pause.svg'\"\r\n      width=\"30px\" />\r\n  </button>\r\n\r\n  <!-- isTorch -->\r\n  <button class=\"btn\" [class.btn-info]=\"!action.isStart\" [class.btn-warning]=\"action.isStart\"\r\n    [disabled]=\"!action.isStart\" (click)=\"action.isTorch = !action.isTorch; handle(action, 'torcher')\">\r\n    <img\r\n      [src]=\"action.isTorch ? 'https://id1945.github.io/images/svg/flash-off.svg' : 'https://id1945.github.io/images/svg/flash-on.svg'\"\r\n      width=\"30px\" />\r\n  </button>\r\n\r\n  <!-- download -->\r\n  <button class=\"btn\" [class.btn-info]=\"!action.isStart\" [class.btn-warning]=\"action.isStart\"\r\n    [disabled]=\"!action.isStart\" (click)=\"onDowload(action)\">\r\n    <img src=\"https://id1945.github.io/images/svg/capture.svg\" width=\"30px\" />\r\n  </button>\r\n  <br>\r\n\r\n  <!-- For select files -->\r\n  <input #file type=\"file\" (change)=\"onSelects(file.files)\" [multiple]=\"'multiple'\" [accept]=\"'.jpg, .png, .gif, .jpeg'\"\r\n    class=\"btn btn-success my-2\" />\r\n  <br>\r\n  <input #file2 type=\"file\" (change)=\"onSelects2(file2.files)\" [multiple]=\"'multiple'\"\r\n    [accept]=\"'.jpg, .png, .gif, .jpeg'\" class=\"btn btn-success my-2\" />\r\n  <br>\r\n\r\n  <div *ngFor=\"let item of qrCodeResult\">\r\n    <ngx-scanner-qrcode #actionFile=\"scanner\" [src]=\"item.url\" [config]=\"config\"\r\n      (event)=\"onEvent($event)\"></ngx-scanner-qrcode>\r\n    <!-- <p class=\"data\">{{ actionFile.data | async }}</p> -->\r\n  </div>\r\n\r\n  <div *ngFor=\"let item of qrCodeResult2\">\r\n    <img [src]=\"item.url | safe: 'url'\" alt=\"\" style=\"max-width: 100%\">\r\n    <!-- <p class=\"data\">{{ item | json }}</p> -->\r\n  </div>\r\n\r\n  <ngx-scanner-qrcode #actionFile=\"scanner\" (event)=\"onEvent($event)\"\r\n    [src]=\"'https://raw.githubusercontent.com/id1945/ngx-scanner-qrcode/master/supported-barcode-types.png'\"\r\n    [config]=\"config\">\r\n  </ngx-scanner-qrcode>\r\n  <!-- <p class=\"data\">{{ (actionFile.data | async | json) }}</p> -->\r\n\r\n  <!-- License -->\r\n  <p class=\"center\"><a href=\"https://github.com/id1945/ngx-scanner-face/blob/master/LICENSE\">LGPL-2.1+ License</a></p>\r\n\r\n  <!-- Copyright -->\r\n  <p class=\"center\">Copyright (C) 1991, 1999 Free Software Foundation, Inc.</p>\r\n</div>\r\n\r\n<!--\r\n\r\n<ion-content>\r\n\r\n  <ion-grid id=\"header-container\">\r\n\r\n  <ion-toolbar>\r\n    <ion-img src=\"..\\assets\\img\\logo_4.png\"></ion-img>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title>&#8369;{{balance}} <ion-icon (click)=\"topUp()\" name=\"add-circle-outline\"></ion-icon></ion-card-title>\r\n        <ion-card-subtitle>Available Balance</ion-card-subtitle>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  </ion-toolbar>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid id=\"content-container\">\r\n    <ion-grid id=\"qr-button-container\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button color=\"light\" (click)=\"scanQR()\"><ion-icon name=\"qr-code-outline\"></ion-icon>&nbsp;Scan QR Code</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-grid class=\"recent-transac\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n              <label class=transac-label>Latest Transaction</label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngFor=\"let d of transactions; let i = index\" class=\"ion-align-items-center\">\r\n        <ion-col size=\"12\">\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-grid>\r\n                <ion-row class=\"transac-container\">\r\n                  <ion-col size=\"8\">\r\n                    <ion-label><b>You</b> <span *ngIf=\"d.transaction_type == 1\"> paid </span> <span *ngIf=\"d.transaction_type == 2\"> cash in.</span> <b *ngIf=\"d.transaction_type == 1\">{{d.driver_name}}</b></ion-label>\r\n                  </ion-col>\r\n\r\n                  <ion-col size=\"4\">\r\n                    <ion-label *ngIf=\"d.transaction_type == 1\" class=\"transac-paid\">&#8369;{{d.amount}}</ion-label>\r\n                    <ion-label *ngIf=\"d.transaction_type == 2\" class=\"transac-received\">&#8369;{{d.amount}}</ion-label>\r\n                 </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    <ion-label class=\"route-label\"><b>Ref #:</b> {{d.transaction_number}}</ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\" class=\"ion-align-items-right\">\r\n                    <ion-label class=\"plate-label\"><b>Date: </b> {{d.date_created | date:'medium': 'utc/GMT+8'}}</ion-label>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row *ngIf=\"d.transaction_type == 1\">\r\n                  <ion-col size=\"12\">\r\n                    <ion-label class=\"route-label\"><b>Route:</b> {{d.route}}</ion-label>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n  </ion-grid>\r\n</ion-content> -->\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_passenger_passenger-home_passenger-home_module_ts.js.map