(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dom/git/chess-mp/src/main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "ASQN");
/* harmony import */ var src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/peer-to-peer.service */ "WaEd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/loading-button/loading-button.component */ "VEX+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");












const _c0 = ["myButton"];
function HomeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.err);
} }
class HomeComponent {
    constructor(peerToPeerService, router) {
        this.peerToPeerService = peerToPeerService;
        this.router = router;
        this.loading = false;
        this.err = '';
        this.button = null;
        this.hostGameIfValid = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.control.valid)
                return;
            this.loading = true;
            try {
                yield this.hostGame();
                this.err = '';
            }
            catch (err) {
                this.err = err;
            }
            finally {
                this.loading = false;
            }
        });
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.control.setValue({ 'name': 'dom' });
            // this.hostGameIfValid();
        }, 1);
    }
    hostGame() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.peerToPeerService.setAlias(this.control.controls['name'].value);
            yield this.peerToPeerService.setupAsHost();
            this.router.navigate([_routes__WEBPACK_IMPORTED_MODULE_3__["RouteNames"].MP_LOBBY], { replaceUrl: true });
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_4__["PeerToPeerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
    } }, decls: 11, vars: 3, consts: [[3, "formGroup"], [1, "example-full-width"], ["matInput", "", "formControlName", "name", "required", ""], [2, "text-align", "center"], ["text", "Host Game", 3, "loading", "click"], ["myButton", ""], [4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Chess MP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-loading-button", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_app_loading_button_click_8_listener() { return ctx.hostGameIfValid(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 2, 1, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.err != "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_8__["LoadingButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_4__["PeerToPeerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['myButton', { static: false }]
        }] }); })();


/***/ }),

/***/ "2XVG":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/mp-lobby/team-selection-panel/team-selection-panel.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TeamSelectionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSelectionPanelComponent", function() { return TeamSelectionPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/shared-data.service */ "msgi");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _player_config_player_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../player-config/player-config.component */ "v6oZ");







function TeamSelectionPanelComponent_mat_expansion_panel_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("destroyed", function TeamSelectionPanelComponent_mat_expansion_panel_8_Template_mat_expansion_panel_destroyed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onDestroy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-player-config", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !item_r1.value.engineSettings);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.value.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", item_r1.value)("playerId", item_r1.key);
} }
const debug = console.log;
class TeamSelectionPanelComponent {
    constructor(sharedDataService) {
        this.sharedDataService = sharedDataService;
        this.team = 'white';
    }
    ngOnInit() {
        debug("team selection init...");
        this.teamDict$ = this.sharedDataService.getNameObservable(this.team);
    }
    onDestroy() {
        debug("panel destroyed...");
    }
    trackByFn(index, entry) {
        return entry.key;
    }
    setTeam() {
        this.sharedDataService.setTeam(this.team);
    }
    addCPU() {
        this.sharedDataService.addCPU(this.team);
    }
}
TeamSelectionPanelComponent.ɵfac = function TeamSelectionPanelComponent_Factory(t) { return new (t || TeamSelectionPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"])); };
TeamSelectionPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamSelectionPanelComponent, selectors: [["app-team-selection-panel"]], inputs: { team: "team" }, decls: 11, vars: 9, consts: [["mat-button", "", 3, "click"], ["hideToggle", "", 3, "disabled", "destroyed", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["hideToggle", "", 3, "disabled", "destroyed"], [3, "player", "playerId"]], template: function TeamSelectionPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamSelectionPanelComponent_Template_button_click_3_listener() { return ctx.setTeam(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Set Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamSelectionPanelComponent_Template_button_click_5_listener() { return ctx.addCPU(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add CPU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TeamSelectionPanelComponent_mat_expansion_panel_8_Template, 5, 4, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.team), " team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx.teamDict$)))("ngForTrackBy", ctx.trackByFn);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"], _player_config_player_config_component__WEBPACK_IMPORTED_MODULE_5__["PlayerConfigComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLXNlbGVjdGlvbi1wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamSelectionPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-selection-panel',
                templateUrl: './team-selection-panel.component.html',
                styleUrls: ['./team-selection-panel.component.scss']
            }]
    }], function () { return [{ type: src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"] }]; }, { team: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "3lgD":
/*!****************************************************!*\
  !*** ./src/app/guards/prevent-deactivate.guard.ts ***!
  \****************************************************/
/*! exports provided: PreventDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventDeactivateGuard", function() { return PreventDeactivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class PreventDeactivateGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        return window.confirm("Do you actually want to leave here?");
    }
}
PreventDeactivateGuard.ɵfac = function PreventDeactivateGuard_Factory(t) { return new (t || PreventDeactivateGuard)(); };
PreventDeactivateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PreventDeactivateGuard, factory: PreventDeactivateGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreventDeactivateGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "7L/3":
/*!************************************************************************************!*\
  !*** ./src/app/components/chess-board/helpers/GetNextMove/StockfishGetNextMove.ts ***!
  \************************************************************************************/
/*! exports provided: StockfishGetNextMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockfishGetNextMove", function() { return StockfishGetNextMove; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



// declare var require: any;
// const Stockfish = require('stockfish.wasm'); // the module, not the file
class StockfishGetNextMove {
    constructor(engineSettings) {
        var _a;
        this.engineSettings = engineSettings;
        this.sfEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.movetime = 700;
        // @ts-ignore
        this.movetime = (_a = engineSettings.timeForMove) !== null && _a !== void 0 ? _a : 700;
        // @ts-ignore
        this.initPromise = Stockfish().then((sf) => {
            this.sf = sf;
            sf.addMessageListener((line) => {
                this.sfEmitter.next(line);
                // console.log(line);
                if (line == "uciok") {
                    console.log("OK!");
                    //sf.postMessage("setoption name UCI_LimitStrength value true");
                    //sf.postMessage("setoption name UCI_Elo value 1350");
                    //sf.postMessage("setoption name MultiPV value 5");
                    //sf.postMessage("setoption name Skill Level value 0");
                    //sf.postMessage("setoption name Skill Level Maximum Error value 900");
                    //sf.postMessage("setoption name Skill Level Probability value 10")
                }
            });
            sf.postMessage("uci");
        });
    }
    doInit() {
        return this.initPromise.then();
    }
    getMove(cg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const t = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(this.movetime);
            t.pipe();
            yield this.doInit();
            console.log(cg.fen());
            this.sf.postMessage(`position fen ${cg.fen()}`);
            this.sf.postMessage(`go movetime ${this.movetime}`);
            const bestMovePromise = this.sfEmitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(val => val.startsWith("bestmove")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).toPromise();
            const timerPromise = t.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).toPromise();
            yield timerPromise;
            const bestMove = yield bestMovePromise;
            const s = bestMove.split(" ")[1];
            const promotion = bestMove.length === 5 ? bestMove[4] : '';
            const ret = {
                from: (s[0] + s[1]),
                to: (s[2] + s[3]),
                promotion: promotion
            };
            return ret;
        });
    }
}


/***/ }),

/***/ "7eVU":
/*!*******************************************************************!*\
  !*** ./src/app/components/timer-config/timer-config.component.ts ***!
  \*******************************************************************/
/*! exports provided: TimerConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerConfigComponent", function() { return TimerConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/shared-data.service */ "msgi");
/* harmony import */ var _snap_slider_snap_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snap-slider/snap-slider.component */ "s+tm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");





class TimerConfigComponent {
    constructor(sharedDataService) {
        this.sharedDataService = sharedDataService;
        this.updateWhiteTime = (val) => this.sharedDataService.setSharedData({ timerSettings: { whiteTime: val } });
        this.updateWhiteIncrement = (val) => this.sharedDataService.setSharedData({ timerSettings: { whiteIncrement: val } });
        this.sharedData = this.sharedDataService.sharedData.asObservable();
    }
    ngOnInit() {
    }
}
TimerConfigComponent.ɵfac = function TimerConfigComponent_Factory(t) { return new (t || TimerConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"])); };
TimerConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerConfigComponent, selectors: [["app-timer-config"]], decls: 4, vars: 12, consts: [["label", "Time", 3, "min", "max", "value", "updateModel"], ["label", "Increment", 3, "min", "max", "value", "updateModel"]], template: function TimerConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-snap-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-snap-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        let tmp_2_0 = null;
        let tmp_6_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 15)("max", 3600)("value", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 8, ctx.sharedData)) == null ? null : tmp_2_0.timerSettings == null ? null : tmp_2_0.timerSettings.whiteTime)("updateModel", ctx.updateWhiteTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("max", 30)("value", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, ctx.sharedData)) == null ? null : tmp_6_0.timerSettings == null ? null : tmp_6_0.timerSettings.whiteIncrement)("updateModel", ctx.updateWhiteIncrement);
    } }, directives: [_snap_slider_snap_slider_component__WEBPACK_IMPORTED_MODULE_2__["SnapSliderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lci1jb25maWcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerConfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timer-config',
                templateUrl: './timer-config.component.html',
                styleUrls: ['./timer-config.component.scss']
            }]
    }], function () { return [{ type: src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"] }]; }, null); })();


/***/ }),

/***/ "AHxG":
/*!****************************************************!*\
  !*** ./src/app/shared/peer-to-peer/shared-data.ts ***!
  \****************************************************/
/*! exports provided: getDefaultSharedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSharedData", function() { return getDefaultSharedData; });
function getDefaultSharedData() {
    return {
        timerSettings: {
            whiteTime: 60,
            whiteIncrement: 2,
            asymmetric: true,
            blackTime: 60,
            blackIncrement: 0
        },
        // startFen: mateInTwoFen,
        matchCount: 1
    };
}


/***/ }),

/***/ "ASQN":
/*!*********************************!*\
  !*** ./src/app/pages/routes.ts ***!
  \*********************************/
/*! exports provided: RouteNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteNames", function() { return RouteNames; });
var RouteNames;
(function (RouteNames) {
    RouteNames["MP_LOBBY"] = "mplobby";
    RouteNames["HOME"] = "";
    RouteNames["PLAY"] = "play";
    RouteNames["JOIN"] = "join";
})(RouteNames || (RouteNames = {}));
;


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DKhF":
/*!****************************************!*\
  !*** ./src/app/shared/util/helpers.ts ***!
  \****************************************/
/*! exports provided: merge, mergeAndCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAndCompare", function() { return mergeAndCompare; });
/* harmony import */ var is_what__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-what */ "Kns7");

function assignProp(carry, key, newVal, originalObject) {
    const propType = {}.propertyIsEnumerable.call(originalObject, key)
        ? 'enumerable'
        : 'nonenumerable';
    if (propType === 'enumerable')
        carry[key] = newVal;
    if (propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true,
        });
    }
}
function mergeRecursively(origin, newComer, compareFn) {
    // always return newComer if its not an object
    if (!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newComer))
        return newComer;
    // define newObject to merge all values upon
    let newObject = {};
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin)) {
        const props = Object.getOwnPropertyNames(origin);
        const symbols = Object.getOwnPropertySymbols(origin);
        newObject = [...props, ...symbols].reduce((carry, key) => {
            const targetVal = origin[key];
            if ((!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertyNames(newComer).includes(key)) ||
                (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertySymbols(newComer).includes(key))) {
                assignProp(carry, key, targetVal, origin);
            }
            return carry;
        }, {});
    }
    // newObject has all properties that newComer hasn't
    const props = Object.getOwnPropertyNames(newComer);
    const symbols = Object.getOwnPropertySymbols(newComer);
    const result = [...props, ...symbols].reduce((carry, key) => {
        // re-define the origin and newComer as targetVal and newVal
        let newVal = newComer[key];
        const targetVal = Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin) ? origin[key] : undefined;
        // When newVal is an object do the merge recursively
        if (targetVal !== undefined && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newVal)) {
            newVal = mergeRecursively(targetVal, newVal, compareFn);
        }
        const propToAssign = compareFn ? compareFn(targetVal, newVal, key) : newVal;
        assignProp(carry, key, propToAssign, newComer);
        return carry;
    }, newObject);
    return result;
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 * @param object
 * @param otherObjects
 */
function merge(object, ...otherObjects) {
    return otherObjects.reduce((result, newComer) => {
        return mergeRecursively(result, newComer);
    }, object);
}
function mergeAndCompare(compareFn, object, ...otherObjects) {
    return otherObjects.reduce((result, newComer) => {
        return mergeRecursively(result, newComer, compareFn);
    }, object);
}


/***/ }),

/***/ "GO7X":
/*!**********************************************!*\
  !*** ./src/app/guards/is-connected.guard.ts ***!
  \**********************************************/
/*! exports provided: IsConnectedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsConnectedGuard", function() { return IsConnectedGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/routes */ "ASQN");
/* harmony import */ var _services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/peer-to-peer.service */ "WaEd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





class IsConnectedGuard {
    constructor(peerToPeerService, router) {
        this.peerToPeerService = peerToPeerService;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.peerToPeerService.isConnected) {
            return this.router.parseUrl('/' + _pages_routes__WEBPACK_IMPORTED_MODULE_1__["RouteNames"].HOME);
        }
        return true;
    }
}
IsConnectedGuard.ɵfac = function IsConnectedGuard_Factory(t) { return new (t || IsConnectedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_2__["PeerToPeerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
IsConnectedGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IsConnectedGuard, factory: IsConnectedGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsConnectedGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_2__["PeerToPeerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "I+JC":
/*!*************************************************************************************!*\
  !*** ./src/app/components/chess-board-container/chess-board-container.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ChessBoardContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessBoardContainerComponent", function() { return ChessBoardContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_chess_board_reset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/chess-board-reset.service */ "gpko");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _chess_board_chess_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chess-board/chess-board.component */ "I7mW");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");






function ChessBoardContainerComponent_app_chess_board_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chess-board");
} }
function ChessBoardContainerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
class ChessBoardContainerComponent {
    constructor(chessBoardResetService) {
        this.chessBoardResetService = chessBoardResetService;
        this.visible = true;
    }
    ngOnInit() {
        this.sub = this.chessBoardResetService.getResetObservable().subscribe(() => {
            this.visible = false;
            setTimeout(() => this.visible = true, 500);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
ChessBoardContainerComponent.ɵfac = function ChessBoardContainerComponent_Factory(t) { return new (t || ChessBoardContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chess_board_reset_service__WEBPACK_IMPORTED_MODULE_1__["ChessBoardResetService"])); };
ChessBoardContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChessBoardContainerComponent, selectors: [["app-chess-board-container"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""]], template: function ChessBoardContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChessBoardContainerComponent_app_chess_board_0_Template, 1, 0, "app-chess-board", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChessBoardContainerComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _chess_board_chess_board_component__WEBPACK_IMPORTED_MODULE_3__["ChessBoardComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZXNzLWJvYXJkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJjaGVzcy1ib2FyZC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChessBoardContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chess-board-container',
                templateUrl: './chess-board-container.component.html',
                styleUrls: ['./chess-board-container.component.scss']
            }]
    }], function () { return [{ type: src_app_services_chess_board_reset_service__WEBPACK_IMPORTED_MODULE_1__["ChessBoardResetService"] }]; }, null); })();


/***/ }),

/***/ "I7mW":
/*!*****************************************************************!*\
  !*** ./src/app/components/chess-board/chess-board.component.ts ***!
  \*****************************************************************/
/*! exports provided: Chess, ChessBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chess", function() { return Chess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessBoardComponent", function() { return ChessBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var chessground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chessground */ "Co6h");
/* harmony import */ var chessground__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chessground__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chess.js */ "xa0L");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chess_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_OnePlayerBoardChanger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/OnePlayerBoardChanger */ "xkBu");
/* harmony import */ var _helpers_MoveHandlerResolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/MoveHandlerResolver */ "jmho");
/* harmony import */ var src_app_services_chess_timer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/chess-timer.service */ "ZCO4");
/* harmony import */ var src_app_services_chess_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/chess-status.service */ "IrCw");
/* harmony import */ var _helpers_ChessgroundHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/ChessgroundHelpers */ "msqx");
/* harmony import */ var src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/peer-to-peer.service */ "WaEd");
/* harmony import */ var src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/shared-data.service */ "msgi");
/* harmony import */ var src_app_services_audio_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/audio.service */ "jHbz");
/* harmony import */ var ngx_chessground__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-chessground */ "islA");
/* harmony import */ var _chess_timer_chess_timer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../chess-timer/chess-timer.component */ "iBoH");

















const _c0 = ["chess"];
const Chess = typeof chess_js__WEBPACK_IMPORTED_MODULE_3__ === 'function' ? chess_js__WEBPACK_IMPORTED_MODULE_3__ : chess_js__WEBPACK_IMPORTED_MODULE_3__["Chess"];
class ChessBoardComponent {
    constructor(chessTimerService, chessStatusService, peerToPeerService, sharedDataService, audioService) {
        this.chessTimerService = chessTimerService;
        this.chessStatusService = chessStatusService;
        this.peerToPeerService = peerToPeerService;
        this.sharedDataService = sharedDataService;
        this.audioService = audioService;
        this.isSinglePlayer = !this.peerToPeerService.isConnected;
        this.myTeam = this.chessStatusService.playersTurnInfo.getTeam(this.peerToPeerService.getId());
    }
    ngOnInit() {
        this.updateMoveHandlerResolver();
        this.historicalMoveNumber = 0;
    }
    ngAfterViewInit() {
        this.ngxChessgroundComponent.runFn = this.run.bind(this);
        this.chessTimerSubscription = this.chessTimerService.timeout.subscribe(color => {
            this.chessStatusService.setTimeout(color);
            this.onGameOver();
        });
        this.peerToPeerSubscription = this.peerToPeerService.messageSubject.subscribe(message => {
            if (message.data.command === 'MOVE') {
                if (message.data.matchId !== this.sharedDataService.sharedData.getValue().matchCount) {
                    return;
                }
                this.processMoveFromExternal({ from: message.data.orig, to: message.data.dest, promotion: message.data.promotion });
            }
        });
    }
    ngOnDestroy() {
        this.cg.destroy();
        this.chessTimerSubscription.unsubscribe();
        this.peerToPeerSubscription.unsubscribe();
    }
    keyEvent(event) {
        if (event.key === "ArrowLeft") {
            this.navigatePosition(-1);
        }
        if (event.key === "ArrowRight") {
            this.navigatePosition(1);
        }
    }
    run(el) {
        console.log("RUN");
        this.cg = Object(chessground__WEBPACK_IMPORTED_MODULE_2__["Chessground"])(el, {
            turnColor: 'white',
            animation: {
                enabled: false
            },
            movable: {
                free: false,
            },
            draggable: {
                showGhost: true,
            },
            highlight: {
                check: true,
            },
        });
        const sharedData = this.sharedDataService.sharedData.getValue();
        if (sharedData.startFen) {
            this.setFen(sharedData.startFen);
        }
        this.cg.set({
            animation: { enabled: true },
            events: { move: (orig, dest) => this.cgMoveHandler(orig, dest, 'q') },
        });
        this.setupTimer();
        if (this.myTeam === 'black') {
            this.cg.toggleOrientation();
        }
        this.setupDebug();
        this.getAndApplyCPUMove();
        this.setBoardMouseEvents();
        return this.cg;
    }
    setupTimer() {
        const sharedData = this.sharedDataService.sharedData.getValue();
        const timerSettings = sharedData.timerSettings;
        if (timerSettings == undefined)
            throw new Error('timer settings shoudl not be undefined');
        this.chessTimerService.setupTimer(timerSettings, this.chessStatusService.getColor());
        this.chessTimerService.startTimer();
    }
    setupDebug() {
        const anyWindow = window;
        anyWindow['cg'] = this.cg;
        anyWindow['chess'] = this.chessStatusService.chess;
    }
    setFen(fen) {
        this.cg.set({ fen });
        this.chessStatusService.setFen(fen);
    }
    cgMoveHandler(orig, dest, promotion) {
        this.movePieceWithEnPassantAndPromotion({ from: orig, to: dest, promotion });
        this.chessTimerService.setTurn(this.chessStatusService.getColor());
        this.setBoardMouseEvents();
        this.cg.playPremove();
        if (this.chessStatusService.isGameOver()) {
            this.onGameOver();
        }
        this.historicalMoveNumber = this.chessStatusService.getNumMoves();
        this.getAndApplyCPUMove();
    }
    movePieceWithEnPassantAndPromotion(move) {
        const oldColor = this.chessStatusService.getColor();
        if (!this.isSinglePlayer && this.chessStatusService.didMoveBelongToPlayer(this.peerToPeerService.getId())) {
            this.peerToPeerService.broadcast({
                command: 'MOVE',
                numMoves: this.chessStatusService.getNumMoves(),
                orig: move.from,
                dest: move.to,
                matchId: this.sharedDataService.sharedData.getValue().matchCount,
                promotion: move.promotion
            });
        }
        const resMove = this.chessStatusService.move(move);
        Object(_helpers_ChessgroundHelpers__WEBPACK_IMPORTED_MODULE_8__["promoteIfNecessary"])(resMove, this.cg, oldColor);
        Object(_helpers_ChessgroundHelpers__WEBPACK_IMPORTED_MODULE_8__["removeEnPassantIfNecessary"])(resMove, this.cg);
        this.playMoveSound(resMove.captured != null);
        this.cg.set({
            check: this.chessStatusService.chess.in_check() ? this.chessStatusService.getColor() : undefined,
        });
        return move;
    }
    playMoveSound(captured) {
        if (captured) {
            this.audioService.capture.play();
        }
        else {
            this.audioService.move.play();
        }
    }
    onGameOver() {
        this.audioService.genericNotify.play();
        this.chessTimerService.pauseTimer();
    }
    setBoardMouseEvents() {
        if (this.chessStatusService.isGameOver()) {
            return _helpers_OnePlayerBoardChanger__WEBPACK_IMPORTED_MODULE_4__["OnePlayerBoardChanger"].setUnmovable(this.cg);
        }
        if (this.chessStatusService.isPlayersMove(this.peerToPeerService.getId())) {
            return this.setBoardMouseEventMovable();
        }
        if (this.chessStatusService.isPlayersMoveNext(this.peerToPeerService.getId())) {
            return _helpers_OnePlayerBoardChanger__WEBPACK_IMPORTED_MODULE_4__["OnePlayerBoardChanger"].setPremovable(this.chessStatusService.chess, this.cg);
        }
        return _helpers_OnePlayerBoardChanger__WEBPACK_IMPORTED_MODULE_4__["OnePlayerBoardChanger"].setUnmovable(this.cg);
    }
    setBoardMouseEventMovable() {
        if (this.chessStatusService.isGameOver()) {
            return _helpers_OnePlayerBoardChanger__WEBPACK_IMPORTED_MODULE_4__["OnePlayerBoardChanger"].setUnmovable(this.cg);
        }
        return _helpers_OnePlayerBoardChanger__WEBPACK_IMPORTED_MODULE_4__["OnePlayerBoardChanger"].setMovable(this.chessStatusService.chess, this.cg);
    }
    getAndApplyCPUMove() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const move = yield this.moveHandlerResolver.getMoveHander(this.chessStatusService.getNumMovesConsideringIfBlackWentFirst()).getMove(this.chessStatusService.chess);
            if (this.chessStatusService.isGameOver())
                return;
            if (move != null) {
                console.log("APPLY CPU MOVE");
                this.processMoveFromExternal(move);
            }
        });
    }
    processMoveFromExternal(move) {
        this.resetHistoryIfRequired();
        this.cg.move(move.from, move.to);
    }
    navigatePosition(offset) {
        if (offset < 0 && this.historicalMoveNumber + offset >= 0) {
            this.historicalMoveNumber += offset;
            this.setCgForHistoricalMove(this.historicalMoveNumber, true);
            _helpers_OnePlayerBoardChanger__WEBPACK_IMPORTED_MODULE_4__["OnePlayerBoardChanger"].setUnmovable(this.cg);
        }
        else if (offset > 0 && this.historicalMoveNumber + offset <= this.chessStatusService.getNumMoves()) {
            this.historicalMoveNumber += offset;
            this.setCgForHistoricalMove(this.historicalMoveNumber);
            if (this.historicalMoveNumber == this.chessStatusService.getNumMoves()) {
                this.setBoardMouseEventMovable();
            }
        }
    }
    setCgForHistoricalMove(moveNumber, movingBackward = false) {
        const fen = this.chessStatusService.getFenForMove(moveNumber);
        this.cg.set({ fen });
        if (moveNumber == 0) {
            this.cg.set({ lastMove: undefined });
        }
        else {
            const lastMove = this.chessStatusService.getPreviousMoveForMove(moveNumber);
            this.cg.set({
                lastMove: [lastMove.from, lastMove.to],
                highlight: { lastMove: true },
            });
        }
        this.cg.set({
            check: this.chessStatusService.isInCheck(moveNumber) ? this.chessStatusService.getColor() : false
        });
        this.playSoundForMoveNumber(moveNumber + (movingBackward ? 1 : 0));
    }
    playSoundForMoveNumber(moveNumber) {
        if (moveNumber <= 0)
            return;
        const lastMove = this.chessStatusService.getPreviousMoveForMove(moveNumber);
        this.playMoveSound(lastMove.captured != null);
    }
    resetHistoryIfRequired() {
        if (this.historicalMoveNumber != this.chessStatusService.getNumMoves()) {
            this.historicalMoveNumber = this.chessStatusService.getNumMoves();
            const oldAnimation = this.cg.state.animation.enabled;
            this.cg.set({ animation: { enabled: false } });
            this.cg.set({ fen: this.chessStatusService.getFenForMove(this.historicalMoveNumber) });
            this.cg.set({ animation: { enabled: oldAnimation } });
        }
    }
    updateMoveHandlerResolver() {
        const whiteTeamDict = this.sharedDataService.getColorNames('white');
        const blackTeamDict = this.sharedDataService.getColorNames('black');
        return this.moveHandlerResolver = new _helpers_MoveHandlerResolver__WEBPACK_IMPORTED_MODULE_5__["MoveHandlerResolver"](whiteTeamDict, blackTeamDict);
    }
}
ChessBoardComponent.ɵfac = function ChessBoardComponent_Factory(t) { return new (t || ChessBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_chess_timer_service__WEBPACK_IMPORTED_MODULE_6__["ChessTimerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_chess_status_service__WEBPACK_IMPORTED_MODULE_7__["ChessStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_9__["PeerToPeerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_10__["SharedDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_audio_service__WEBPACK_IMPORTED_MODULE_11__["AudioService"])); };
ChessBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChessBoardComponent, selectors: [["app-chess-board"]], viewQuery: function ChessBoardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ngxChessgroundComponent = _t.first);
    } }, hostBindings: function ChessBoardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function ChessBoardComponent_keydown_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_services_chess_status_service__WEBPACK_IMPORTED_MODULE_7__["ChessStatusService"], src_app_services_chess_timer_service__WEBPACK_IMPORTED_MODULE_6__["ChessTimerService"]])], decls: 5, vars: 1, consts: [[1, "is2d"], ["chess", ""], [3, "inverted"]], template: function ChessBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngx-chessground", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-chess-timer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inverted", ctx.myTeam === "black");
    } }, directives: [ngx_chessground__WEBPACK_IMPORTED_MODULE_12__["NgxChessgroundComponent"], _chess_timer_chess_timer_component__WEBPACK_IMPORTED_MODULE_13__["ChessTimerComponent"]], styles: [".cg-wrap.orientation-white[_ngcontent-%COMP%]   coords.ranks[_ngcontent-%COMP%]   coord[_ngcontent-%COMP%]:nth-child(odd), .cg-wrap.orientation-white[_ngcontent-%COMP%]   coords.files[_ngcontent-%COMP%]   coord[_ngcontent-%COMP%]:nth-child(even) {\n  color: #946f51;\n}\n.cg-wrap.orientation-white[_ngcontent-%COMP%]   coords.ranks[_ngcontent-%COMP%]   coord[_ngcontent-%COMP%]:nth-child(even), .cg-wrap.orientation-white[_ngcontent-%COMP%]   coords.files[_ngcontent-%COMP%]   coord[_ngcontent-%COMP%]:nth-child(odd) {\n  color: #F0D9B5;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  max-height: 893px;\n}\ndiv[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 80vh;\n}\napp-chess-timer[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZXNzLWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtBQUFKO0FBR0U7RUFDRSxjQUFBO0FBREo7QUFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBSEY7QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUhGO0FBTUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFIRiIsImZpbGUiOiJjaGVzcy1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZy13cmFwLm9yaWVudGF0aW9uLXdoaXRlIHtcbiAgY29vcmRzLnJhbmtzIGNvb3JkOm50aC1jaGlsZChvZGQpLCBjb29yZHMuZmlsZXMgY29vcmQ6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBjb2xvcjogIzk0NmY1MVxuICB9XG5cbiAgY29vcmRzLnJhbmtzIGNvb3JkOm50aC1jaGlsZChldmVuKSwgY29vcmRzLmZpbGVzIGNvb3JkOm50aC1jaGlsZChvZGQpIHtcbiAgICBjb2xvcjogI0YwRDlCNVxuICB9XG59XG5cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1heC1oZWlnaHQ6IDg5M3B4O1xufVxuXG5kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwdmhcbn1cblxuYXBwLWNoZXNzLXRpbWVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChessBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-chess-board',
                templateUrl: './chess-board.component.html',
                styleUrls: ['./chess-board.component.scss'],
                providers: [src_app_services_chess_status_service__WEBPACK_IMPORTED_MODULE_7__["ChessStatusService"], src_app_services_chess_timer_service__WEBPACK_IMPORTED_MODULE_6__["ChessTimerService"]]
            }]
    }], function () { return [{ type: src_app_services_chess_timer_service__WEBPACK_IMPORTED_MODULE_6__["ChessTimerService"] }, { type: src_app_services_chess_status_service__WEBPACK_IMPORTED_MODULE_7__["ChessStatusService"] }, { type: src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_9__["PeerToPeerService"] }, { type: src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_10__["SharedDataService"] }, { type: src_app_services_audio_service__WEBPACK_IMPORTED_MODULE_11__["AudioService"] }]; }, { ngxChessgroundComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['chess']
        }], keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "Ib7N":
/*!**********************************************!*\
  !*** ./src/app/pages/join/join.component.ts ***!
  \**********************************************/
/*! exports provided: JoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinComponent", function() { return JoinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "ASQN");
/* harmony import */ var src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/peer-to-peer.service */ "WaEd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/loading-button/loading-button.component */ "VEX+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");













const _c0 = ["myButton"];
function JoinComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.err);
} }
class JoinComponent {
    constructor(peerToPeerService, router, activatedRoute) {
        this.peerToPeerService = peerToPeerService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.disabled = false;
        this.loading = false;
        this.joinId = '';
        this.err = '';
        this.button = null;
        this.joinGameIfValid = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.control.valid)
                return;
            this.loading = true;
            try {
                yield this.joinGame();
                this.err = '';
            }
            catch (err) {
                this.err = err;
            }
            finally {
                this.loading = false;
            }
        });
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.activateRouteSubscription = this.activatedRoute.params.subscribe(params => {
            this.joinId = params.id;
            this.control.enable();
        });
    }
    ngOnInit() {
        if (this.joinId == '')
            this.control.disable();
    }
    ngOnDestroy() {
        this.activateRouteSubscription.unsubscribe();
    }
    ngAfterViewInit() {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            setTimeout(() => {
                this.control.setValue({ 'name': 'other' });
                this.joinGameIfValid();
            }, 1);
        }
    }
    joinGame() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.peerToPeerService.setupByConnectingToId(this.joinId);
            this.peerToPeerService.setAlias(this.control.controls['name'].value);
            this.router.navigate([_routes__WEBPACK_IMPORTED_MODULE_4__["RouteNames"].MP_LOBBY], { replaceUrl: true });
        });
    }
}
JoinComponent.ɵfac = function JoinComponent_Factory(t) { return new (t || JoinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_5__["PeerToPeerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
JoinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JoinComponent, selectors: [["app-join"]], viewQuery: function JoinComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
    } }, decls: 11, vars: 3, consts: [[3, "formGroup"], [1, "example-full-width"], ["matInput", "", "formControlName", "name", "required", ""], [2, "text-align", "center"], ["text", "Join Game", 3, "loading", "click"], ["myButton", ""], [4, "ngIf"]], template: function JoinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Chess MP - Join Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-loading-button", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JoinComponent_Template_app_loading_button_click_8_listener() { return ctx.joinGameIfValid(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, JoinComponent_div_10_Template, 2, 1, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.err != "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_9__["LoadingButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JoinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-join',
                templateUrl: './join.component.html',
                styleUrls: ['./join.component.scss']
            }]
    }], function () { return [{ type: src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_5__["PeerToPeerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, { button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['myButton', { static: false }]
        }] }); })();


/***/ }),

/***/ "IrCw":
/*!**************************************************!*\
  !*** ./src/app/services/chess-status.service.ts ***!
  \**************************************************/
/*! exports provided: Chess, ChessStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chess", function() { return Chess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessStatusService", function() { return ChessStatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chess.js */ "xa0L");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chess_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_util_play__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/util/play */ "v1vH");
/* harmony import */ var _shared_util_PlayersTurnInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/util/PlayersTurnInfo */ "JSOU");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared-data.service */ "msgi");







const Chess = typeof chess_js__WEBPACK_IMPORTED_MODULE_1__ === 'function' ? chess_js__WEBPACK_IMPORTED_MODULE_1__ : chess_js__WEBPACK_IMPORTED_MODULE_1__["Chess"];
class ChessStatusService {
    constructor(sharedDataService) {
        this.sharedDataService = sharedDataService;
        this.currentStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.currentTurn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['', null]);
        this.previousTurn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['', null]);
        this.nextTurn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['', null]);
        this.moveToFen = {};
        this.moveToPreviousMove = {};
        this.blackWentFirst = false;
        this.chess = new Chess();
        this.playersTurnInfo = new _shared_util_PlayersTurnInfo__WEBPACK_IMPORTED_MODULE_4__["PlayersTurnInfo"](this.sharedDataService.names.getValue());
        this.resetPlayersTurnInfo();
        this.sharedDataService.newName.subscribe(() => {
            this.resetPlayersTurnInfo();
        });
        this.updateCurrentTurn();
        this.updateMoveForFen();
    }
    resetPlayersTurnInfo() {
        this.playersTurnInfo = new _shared_util_PlayersTurnInfo__WEBPACK_IMPORTED_MODULE_4__["PlayersTurnInfo"](this.sharedDataService.names.getValue(), this.blackWentFirst);
    }
    move(move) {
        const res = this.chess.move(move);
        this.updateStatusFromGame(this.chess);
        this.updateCurrentTurn();
        this.updateMoveForFen(res);
        return res;
    }
    getColor() {
        return Object(_shared_util_play__WEBPACK_IMPORTED_MODULE_3__["toColor"])(this.chess);
    }
    getPgn() {
        return this.chess.pgn();
    }
    setFen(fen) {
        this.chess = new Chess(fen);
        this.blackWentFirst = this.getColor() === 'black';
        this.resetPlayersTurnInfo();
        this.updateCurrentTurn();
        this.updateMoveForFen();
    }
    getFenForMove(moveNumber) {
        return this.moveToFen[moveNumber];
    }
    getPreviousMoveForMove(moveNumber) {
        return this.moveToPreviousMove[moveNumber];
    }
    updateMoveForFen(move) {
        this.moveToFen[this.getNumMoves()] = this.chess.fen();
        if (move) {
            this.moveToPreviousMove[this.getNumMoves()] = move;
        }
    }
    isGameOver() {
        return this.currentStatus.getValue() != '';
    }
    setTimeout(color) {
        this.currentStatus.next(`timeout ${color}`);
    }
    getNumMoves() {
        return this.chess.history().length;
    }
    getNumMovesConsideringIfBlackWentFirst() {
        return this.getNumMoves() + (this.blackWentFirst ? 1 : 0);
    }
    isInCheck(moveNumber) {
        return (new Chess(this.moveToFen[moveNumber])).in_check();
    }
    isPlayersMove(playersId) {
        return this.playersTurnInfo.isPlayersTurn(this.getNumMoves(), playersId);
    }
    didMoveBelongToPlayer(playersId) {
        return this.playersTurnInfo.didMoveBelongToPlayer(this.getNumMoves(), playersId);
    }
    isPlayersMoveNext(playersId) {
        return this.playersTurnInfo.isPlayersTurnNext(this.getNumMoves(), playersId);
    }
    updateCurrentTurn() {
        console.log(this.getNumMoves(), this.playersTurnInfo.getPlayer(this.getNumMoves()));
        this.previousTurn.next(this.currentTurn.getValue());
        this.currentTurn.next(this.getTupleForMoveNumber(this.getNumMoves()));
        this.nextTurn.next(this.getTupleForMoveNumber(this.getNumMoves() + 1));
    }
    getTupleForMoveNumber(moveNumber) {
        const playerId = this.playersTurnInfo.getPlayer(moveNumber);
        const playerTeamDict = this.sharedDataService.names.getValue()[playerId] || null;
        return [playerId, playerTeamDict];
    }
    updateStatusFromGame(chess) {
        if (chess.in_stalemate()) {
            this.currentStatus.next('stalemate');
        }
        else if (chess.in_checkmate()) {
            this.currentStatus.next('checkmate');
        }
        else if (chess.in_draw()) {
            this.currentStatus.next('draw');
        }
    }
}
ChessStatusService.ɵfac = function ChessStatusService_Factory(t) { return new (t || ChessStatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"])); };
ChessStatusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChessStatusService, factory: ChessStatusService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChessStatusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"] }]; }, null); })();


/***/ }),

/***/ "JSOU":
/*!************************************************!*\
  !*** ./src/app/shared/util/PlayersTurnInfo.ts ***!
  \************************************************/
/*! exports provided: PlayersTurnInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersTurnInfo", function() { return PlayersTurnInfo; });
class PlayersTurnInfo {
    constructor(names, blackWentFirst = false) {
        this.names = names;
        this.blackWentFirst = blackWentFirst;
        if (names != null && Object.keys(names).length > 0) {
            this.players = {
                'white': Object.keys(names).filter(t => names[t].team == 'white').sort(),
                'black': Object.keys(names).filter(t => names[t].team == 'black').sort(),
            };
        }
        else {
            throw new Error('can this happen?');
        }
    }
    getTeam(playerId) {
        console.log(this.players, playerId);
        return this.players['white'].filter(t => t == playerId).length === 1 ? 'white' : 'black';
    }
    isPlayersTurnNext(moveNumber, playerId) {
        return this.isPlayersTurn(moveNumber + 1, playerId);
    }
    isPlayersTurn(moveNumber, playerId) {
        return this.getPlayer(moveNumber) == playerId;
    }
    getPlayer(moveNumber) {
        const moveColour = (moveNumber + +(this.blackWentFirst ? 1 : 0)) % 2 == 0 ? 'white' : 'black';
        const teamsTurn = moveColour;
        const playersInTeam = this.players[teamsTurn].length;
        return this.players[teamsTurn][Math.floor(moveNumber / 2) % playersInTeam];
    }
    didMoveBelongToPlayer(moveNumber, playerId) {
        return this.names != null && this.names[this.getPlayer(moveNumber)].owner == playerId;
    }
}


/***/ }),

/***/ "LESy":
/*!******************************************************!*\
  !*** ./src/app/pages/mp-lobby/mp-lobby.component.ts ***!
  \******************************************************/
/*! exports provided: MpLobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MpLobbyComponent", function() { return MpLobbyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "ASQN");
/* harmony import */ var src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/peer-to-peer.service */ "WaEd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared-data.service */ "msgi");
/* harmony import */ var _components_timer_config_timer_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/timer-config/timer-config.component */ "7eVU");
/* harmony import */ var _shared_mp_lobby_team_selection_panel_team_selection_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/mp-lobby/team-selection-panel/team-selection-panel.component */ "2XVG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");









class MpLobbyComponent {
    constructor(peerToPeerService, router, sharedDataService) {
        this.peerToPeerService = peerToPeerService;
        this.router = router;
        this.sharedDataService = sharedDataService;
        this.numberReady = 0;
        this.readyString = 'ready';
        this.hostUrl = '/join/' + this.peerToPeerService.getHostId();
        this.url = window.location.host + this.router.parseUrl(this.hostUrl).toString();
        this.sharedData = this.sharedDataService.sharedData.asObservable();
        this.connectedSubscription = this.sharedDataService.newName.subscribe((id) => {
            if (this.peerToPeerService.isHost) {
                const message = {
                    command: 'SET_NAMES',
                    names: this.sharedDataService.names.getValue(),
                    sharedData: this.sharedDataService.sharedData.getValue()
                };
                this.peerToPeerService.sendSingleMessage(id, message);
            }
            this.setTeam(this.sharedDataService.getPlayerSync(this.peerToPeerService.getId()).team);
        });
        this.sharedDataService.names.subscribe((names) => {
            this.numberReady = Object.values(names).filter(t => t.isReady).length;
        });
        this.peerToPeerService.messageSubject.subscribe((message) => {
            if (message.data.command == 'START') {
                this.startGameNoBroadcast();
            }
        });
    }
    ngOnInit() {
        this.setTeam('white');
    }
    ngOnDestroy() {
        this.connectedSubscription.unsubscribe();
    }
    setTeam(team) {
        this.sharedDataService.setTeam(team);
    }
    readyClick() {
        console.log('ready click');
        this.readyString = this.readyString == 'ready' ? 'not ready' : 'ready';
        this.sharedDataService.setIsReady(this.readyString == 'not ready');
    }
    startGame() {
        this.startGameNoBroadcast();
        this.peerToPeerService.broadcast({
            command: 'START'
        });
    }
    startGameNoBroadcast() {
        this.router.navigate([_routes__WEBPACK_IMPORTED_MODULE_1__["RouteNames"].PLAY]);
    }
}
MpLobbyComponent.ɵfac = function MpLobbyComponent_Factory(t) { return new (t || MpLobbyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_2__["PeerToPeerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"])); };
MpLobbyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MpLobbyComponent, selectors: [["app-mp-lobby"]], decls: 14, vars: 4, consts: [[3, "routerLink"], [1, "flex-container"], [1, "flex-child"], [3, "team"], [2, "text-align", "center", "padding-top", "10px"], ["mat-stroked-button", "", 3, "click"]], template: function MpLobbyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MP Lobby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-timer-config");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-team-selection-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team-selection-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MpLobbyComponent_Template_button_click_12_listener() { return ctx.startGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.hostUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("team", "white");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("team", "black");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _components_timer_config_timer_config_component__WEBPACK_IMPORTED_MODULE_5__["TimerConfigComponent"], _shared_mp_lobby_team_selection_panel_team_selection_panel_component__WEBPACK_IMPORTED_MODULE_6__["TeamSelectionPanelComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".sweet-border[_ngcontent-%COMP%] {\n  border: 1px solid grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21wLWxvYmJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRiIsImZpbGUiOiJtcC1sb2JieS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2VldC1ib3JkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufSJdfQ== */", ".flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 550px;\n}\n\n.flex-child[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 5px;\n  background: #eee;\n}  \n\n.flex-child[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MpLobbyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mp-lobby',
                templateUrl: './mp-lobby.component.html',
                styleUrls: ['./mp-lobby.component.scss']
            }]
    }], function () { return [{ type: src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_2__["PeerToPeerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] }]; }, null); })();


/***/ }),

/***/ "NfhI":
/*!*********************************************!*\
  !*** ./src/app/services/lichess.service.ts ***!
  \*********************************************/
/*! exports provided: LichessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichessService", function() { return LichessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var sleep_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sleep-promise */ "im8a");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");






const BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? 'https://lichess.org' : '';
class LichessService {
    constructor(http) {
        this.http = http;
    }
    importGame(pgn) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (false) {}
            const res = yield this.http.post(this.getUrl('/api/import'), {
                pgn
            }).toPromise();
            console.log(res);
            return res.url;
        });
    }
    fakeImportGame() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(sleep_promise__WEBPACK_IMPORTED_MODULE_2__["default"])(1000);
            return 'https://lichess.org/EUgjbNlf';
        });
    }
    getUrl(url) {
        return `${BASE_URL}${url}`;
    }
}
LichessService.ɵfac = function LichessService_Factory(t) { return new (t || LichessService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
LichessService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LichessService, factory: LichessService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LichessService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class AppComponent {
    constructor() {
        this.title = 'chess-mp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["role", "main", 1, "content"], [2, "width", "100%"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".leftmenu[_ngcontent-%COMP%] {\n  grid-area: leftmenu;\n}\n\n.main[_ngcontent-%COMP%] {\n  grid-area: main;\n}\n\n.rightmenu[_ngcontent-%COMP%] {\n  grid-area: rightmenu;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"leftmenu main main main main rightmenu\";\n  grid-gap: 10px;\n  padding: 10px;\n  place-items: center;\n}\n\n.grid-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2px 0;\n  font-size: 12px;\n}\n\nnav[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxlQUFBO0FBRUo7O0FBQUU7RUFDRSxvQkFBQTtBQUdKOztBQURFO0VBQ0UsYUFBQTtFQUNBLDZEQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUlKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZFO0VBQ0UsOEJBQUE7QUFLSjs7QUFGRTtFQUNFLGtCQUFBO0FBS0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnRtZW51IHtcbiAgICBncmlkLWFyZWE6IGxlZnRtZW51O1xuICB9XG4gIC5tYWluIHtcbiAgICBncmlkLWFyZWE6IG1haW47XG4gIH1cbiAgLnJpZ2h0bWVudSB7XG4gICAgZ3JpZC1hcmVhOiByaWdodG1lbnU7XG4gIH1cbiAgLmdyaWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibGVmdG1lbnUgbWFpbiBtYWluIG1haW4gbWFpbiByaWdodG1lbnVcIjtcbiAgICBncmlkLWdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbnRhaW5lciA+IGRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJweCAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICBuYXYge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfVxuICBcbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfSJdfQ== */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 1200px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }\n\n  app-chess-board[_ngcontent-%COMP%] {\n    width: 100%;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "VEX+":
/*!***********************************************************************!*\
  !*** ./src/app/components/loading-button/loading-button.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoadingButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingButtonComponent", function() { return LoadingButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




class LoadingButtonComponent {
    constructor() {
        this.text = 'text';
        this.loading = false;
        this.disabled = false;
        this.buttonClass = 'mat-raised-button';
    }
    ngOnInit() { }
}
LoadingButtonComponent.ɵfac = function LoadingButtonComponent_Factory(t) { return new (t || LoadingButtonComponent)(); };
LoadingButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingButtonComponent, selectors: [["app-loading-button"]], inputs: { text: "text", loading: "loading", disabled: "disabled", buttonClass: "buttonClass" }, decls: 2, vars: 5, consts: [["mat-button", "", "color", "primary", 3, "ngClass", "disabled"]], template: function LoadingButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("spinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.buttonClass)("disabled", ctx.loading || ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["@keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spinner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n  border-top-color: #000000;\n  animation: spinner 0.8s linear infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFBSSx5QkFBQTtFQUVKO0FBQ0Y7QUFBQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtBQUVGIiwiZmlsZSI6ImxvYWRpbmctYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzcGlubmVyIHtcbiAgdG8ge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxufVxuIFxuLnNwaW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwMDAwO1xuICBhbmltYXRpb246IHNwaW5uZXIgLjhzIGxpbmVhciBpbmZpbml0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-button',
                templateUrl: './loading-button.component.html',
                styleUrls: ['./loading-button.component.scss']
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttonClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "VPth":
/*!*******************************************************************************!*\
  !*** ./src/app/components/chess-board/helpers/GetNextMove/NullGetNextMove.ts ***!
  \*******************************************************************************/
/*! exports provided: NullGetNextMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullGetNextMove", function() { return NullGetNextMove; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

class NullGetNextMove {
    getMove(cg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return null;
        });
    }
}


/***/ }),

/***/ "WaEd":
/*!**************************************************!*\
  !*** ./src/app/services/peer-to-peer.service.ts ***!
  \**************************************************/
/*! exports provided: DEFAULT_ID, PeerToPeerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ID", function() { return DEFAULT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerToPeerService", function() { return PeerToPeerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! peerjs */ "oLy0");
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(peerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");






const debug = console.log;
const TIMEOUT_MS = 5000;
const HEROKU_HOST = 'heroku-chess-123.herokuapp.com';
const DEFAULT_ID = 'default';
class PeerToPeerService {
    constructor() {
        this.messageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](100);
        this.isHost = false;
        this.isConnected = false;
        this.alias = DEFAULT_ID;
        this.peer = null;
        this.connections = {};
    }
    getId() {
        var _a, _b;
        return (_b = (_a = this.peer) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : DEFAULT_ID;
    }
    setupAsHost() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (_a = this.peer) === null || _a === void 0 ? void 0 : _a.destroy();
            this.peer = new peerjs__WEBPACK_IMPORTED_MODULE_2___default.a(this.getPeerConfig());
            this.isHost = true;
            yield this.connectToPeerServer();
            this.isConnected = true;
            this.peer.on('connection', (conn) => {
                this.connections[conn.peer] = conn;
                conn.on('data', this.messageHandler.bind(this));
                this.attachErrorAndCloseConnEvents(conn);
            });
            this.peer.on('close', () => {
                debug("NOT ACCEPTING INCOMING CONNECTIONS??");
            });
        });
    }
    setupByConnectingToId(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.destroy();
            this.peer = new peerjs__WEBPACK_IMPORTED_MODULE_2___default.a(this.getPeerConfig());
            this.isHost = false;
            yield this.connectToPeerServer();
            return new Promise((resolve, reject) => {
                const timeoutSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(TIMEOUT_MS).subscribe(t => {
                    reject(`Could not connect after ${TIMEOUT_MS}ms. Is the host ${id} correct?`);
                    timeoutSub.unsubscribe();
                });
                debug(`connecting to ${id}`);
                const conn = this.peer.connect(id);
                conn.on('open', () => {
                    debug(`connected to ${id}!`);
                    this.connections[id] = conn;
                    this.isConnected = true;
                    conn.on('data', this.messageHandler.bind(this));
                    resolve(true);
                    timeoutSub.unsubscribe();
                });
                this.attachErrorAndCloseConnEvents(conn, (err) => {
                    reject(err);
                    conn.close();
                    timeoutSub.unsubscribe();
                });
            });
        });
    }
    setAlias(alias) {
        this.alias = alias;
    }
    getAlias() {
        return this.alias;
    }
    getHostId() {
        if (this.isHost)
            return this.peer.id;
        return Object.keys(this.connections)[0];
    }
    broadcastAndToSelf(data, from = null) {
        const message = this.broadcast(data, from);
        this.messageSubject.next(message);
        return message;
    }
    broadcast(data, from = null) {
        var _a, _b;
        const message = {
            from: (_b = from !== null && from !== void 0 ? from : (_a = this.peer) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : DEFAULT_ID,
            type: 'BROADCAST',
            data: data
        };
        for (const key in this.connections) {
            this.sendMessage(key, message);
        }
        return message;
    }
    sendSingleMessage(to, data) {
        if (!(to in this.connections))
            return;
        const message = {
            from: this.peer.id,
            type: 'SINGLE',
            data: data
        };
        this.sendMessage(to, message);
    }
    getPeerConfig() {
        if (false) {}
        return {
            host: HEROKU_HOST,
            port: 443,
            secure: true
        };
    }
    connectToPeerServer() {
        return new Promise((resolve, reject) => {
            this.peer.on('open', (id) => {
                debug(`I am connected to peer server as (${this.peer.id})`);
                resolve(true);
            });
            this.peer.on('error', (err) => {
                reject(err);
            });
        });
    }
    attachErrorAndCloseConnEvents(conn, additionalFn) {
        conn.on('error', (err) => {
            console.log(`connection: ${conn.peer} error! ${err}`);
            this.onPeerDisconnected(conn);
            if (additionalFn != null)
                additionalFn(err);
        });
        this.attachToConnCloseEvents(conn, () => {
            console.log(`connection: ${conn.peer} closed!`);
            this.onPeerDisconnected(conn);
            if (additionalFn != null)
                additionalFn();
        });
    }
    attachToConnCloseEvents(conn, fn) {
        conn.on('close', () => fn());
        // @ts-ignore
        conn.on('iceStateChanged', (status) => {
            if (status === 'disconnected') {
                fn();
            }
        });
    }
    onPeerDisconnected(conn) {
        delete this.connections[conn.peer];
        this.broadcastAndToSelf({
            command: 'DISCONNECTED',
            name: conn.peer
        });
    }
    destroy() {
        var _a;
        (_a = this.peer) === null || _a === void 0 ? void 0 : _a.destroy();
        this.isConnected = false;
    }
    messageHandler(message) {
        if (this.isHost && message.type === 'BROADCAST') {
            this.broadcast(message.data, message.from);
        }
        this.messageSubject.next(message);
    }
    sendMessage(to, message) {
        if (!(to in this.connections))
            return;
        console.log("SEND MESSAGE", message);
        this.connections[to].send(message);
    }
}
PeerToPeerService.ɵfac = function PeerToPeerService_Factory(t) { return new (t || PeerToPeerService)(); };
PeerToPeerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PeerToPeerService, factory: PeerToPeerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PeerToPeerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XhEF":
/*!***************************************!*\
  !*** ./node_modules/peerjs/dist sync ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "XhEF";

/***/ }),

/***/ "Z5y8":
/*!*******************************************************!*\
  !*** ./src/app/pipes/replace-null-with-empty.pipe.ts ***!
  \*******************************************************/
/*! exports provided: ReplaceNullWithEmptyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceNullWithEmptyPipe", function() { return ReplaceNullWithEmptyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ReplaceNullWithEmptyPipe {
    transform(value, ...args) {
        return value !== null && value !== void 0 ? value : '';
    }
}
ReplaceNullWithEmptyPipe.ɵfac = function ReplaceNullWithEmptyPipe_Factory(t) { return new (t || ReplaceNullWithEmptyPipe)(); };
ReplaceNullWithEmptyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "replaceNullWithEmpty", type: ReplaceNullWithEmptyPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplaceNullWithEmptyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'replaceNullWithEmpty'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_chessground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-chessground */ "islA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _components_chess_board_chess_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/chess-board/chess-board.component */ "I7mW");
/* harmony import */ var _pages_mp_lobby_mp_lobby_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/mp-lobby/mp-lobby.component */ "LESy");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/loading-button/loading-button.component */ "VEX+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _pages_join_join_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/join/join.component */ "Ib7N");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _components_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/player-list/player-list.component */ "zDK4");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _shared_mp_lobby_team_selection_panel_team_selection_panel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/mp-lobby/team-selection-panel/team-selection-panel.component */ "2XVG");
/* harmony import */ var _shared_mp_lobby_player_config_player_config_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/mp-lobby/player-config/player-config.component */ "v6oZ");
/* harmony import */ var _components_snap_slider_snap_slider_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/snap-slider/snap-slider.component */ "s+tm");
/* harmony import */ var _components_timer_config_timer_config_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/timer-config/timer-config.component */ "7eVU");
/* harmony import */ var _services_chess_timer_format_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/chess-timer-format.pipe */ "hNxH");
/* harmony import */ var _components_chess_timer_chess_timer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/chess-timer/chess-timer.component */ "iBoH");
/* harmony import */ var _pipes_replace_null_with_empty_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/replace-null-with-empty.pipe */ "Z5y8");
/* harmony import */ var _components_analyse_button_analyse_button_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/analyse-button/analyse-button.component */ "tV1V");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _components_chess_board_container_chess_board_container_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/chess-board-container/chess-board-container.component */ "I+JC");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _components_rematch_button_rematch_button_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/rematch-button/rematch-button.component */ "tlIt");



































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"], useValue: '/' }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngx_chessground__WEBPACK_IMPORTED_MODULE_4__["NgxChessgroundModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_chess_board_chess_board_component__WEBPACK_IMPORTED_MODULE_6__["ChessBoardComponent"],
        _components_chess_timer_chess_timer_component__WEBPACK_IMPORTED_MODULE_27__["ChessTimerComponent"],
        _services_chess_timer_format_pipe__WEBPACK_IMPORTED_MODULE_26__["ChessTimerFormatPipe"],
        _pages_mp_lobby_mp_lobby_component__WEBPACK_IMPORTED_MODULE_7__["MpLobbyComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_11__["LoadingButtonComponent"],
        _pages_join_join_component__WEBPACK_IMPORTED_MODULE_15__["JoinComponent"],
        _components_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_18__["PlayerListComponent"],
        _pipes_replace_null_with_empty_pipe__WEBPACK_IMPORTED_MODULE_28__["ReplaceNullWithEmptyPipe"],
        _shared_mp_lobby_team_selection_panel_team_selection_panel_component__WEBPACK_IMPORTED_MODULE_22__["TeamSelectionPanelComponent"],
        _shared_mp_lobby_player_config_player_config_component__WEBPACK_IMPORTED_MODULE_23__["PlayerConfigComponent"],
        _components_snap_slider_snap_slider_component__WEBPACK_IMPORTED_MODULE_24__["SnapSliderComponent"],
        _components_timer_config_timer_config_component__WEBPACK_IMPORTED_MODULE_25__["TimerConfigComponent"],
        _components_analyse_button_analyse_button_component__WEBPACK_IMPORTED_MODULE_29__["AnalyseButtonComponent"],
        _components_chess_board_container_chess_board_container_component__WEBPACK_IMPORTED_MODULE_31__["ChessBoardContainerComponent"],
        _components_rematch_button_rematch_button_component__WEBPACK_IMPORTED_MODULE_33__["RematchButtonComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ngx_chessground__WEBPACK_IMPORTED_MODULE_4__["NgxChessgroundModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_chess_board_chess_board_component__WEBPACK_IMPORTED_MODULE_6__["ChessBoardComponent"],
                    _components_chess_timer_chess_timer_component__WEBPACK_IMPORTED_MODULE_27__["ChessTimerComponent"],
                    _services_chess_timer_format_pipe__WEBPACK_IMPORTED_MODULE_26__["ChessTimerFormatPipe"],
                    _pages_mp_lobby_mp_lobby_component__WEBPACK_IMPORTED_MODULE_7__["MpLobbyComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_11__["LoadingButtonComponent"],
                    _pages_join_join_component__WEBPACK_IMPORTED_MODULE_15__["JoinComponent"],
                    _components_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_18__["PlayerListComponent"],
                    _pipes_replace_null_with_empty_pipe__WEBPACK_IMPORTED_MODULE_28__["ReplaceNullWithEmptyPipe"],
                    _shared_mp_lobby_team_selection_panel_team_selection_panel_component__WEBPACK_IMPORTED_MODULE_22__["TeamSelectionPanelComponent"],
                    _shared_mp_lobby_player_config_player_config_component__WEBPACK_IMPORTED_MODULE_23__["PlayerConfigComponent"],
                    _components_snap_slider_snap_slider_component__WEBPACK_IMPORTED_MODULE_24__["SnapSliderComponent"],
                    _components_timer_config_timer_config_component__WEBPACK_IMPORTED_MODULE_25__["TimerConfigComponent"],
                    _components_analyse_button_analyse_button_component__WEBPACK_IMPORTED_MODULE_29__["AnalyseButtonComponent"],
                    _components_chess_board_container_chess_board_container_component__WEBPACK_IMPORTED_MODULE_31__["ChessBoardContainerComponent"],
                    _components_rematch_button_rematch_button_component__WEBPACK_IMPORTED_MODULE_33__["RematchButtonComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ngx_chessground__WEBPACK_IMPORTED_MODULE_4__["NgxChessgroundModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"]
                ],
                providers: [
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"], useValue: '/' }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZCO4":
/*!*************************************************!*\
  !*** ./src/app/services/chess-timer.service.ts ***!
  \*************************************************/
/*! exports provided: ChessTimerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessTimerService", function() { return ChessTimerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ChessTimerService {
    constructor() {
        this.timeout = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.timers = {
            white: new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](10),
            black: new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](10)
        };
        this.timerState = {
            turn: 'white',
            msWhenLastChanged: -1
        };
        this.paused = false;
        this.myTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(10, -1);
        this.whiteIncrement = 0;
        this.blackIncrement = 0;
    }
    ngOnDestroy() {
        this.destroyTimerIfExists();
    }
    getTimerObservable(color) {
        return this.timers[color];
    }
    setStartingTime(totalTimeSeconds, startingTurn = 'white', whiteIncrement = 20 * 1000, blackIncrement = 0) {
        console.log("set starting time", totalTimeSeconds, startingTurn);
        this.timers['white'].next(totalTimeSeconds);
        this.timers['black'].next(totalTimeSeconds);
        this.timerState.turn = startingTurn;
        this.whiteIncrement = whiteIncrement;
        this.blackIncrement = blackIncrement;
    }
    setupTimer(timerSettings, startingColor) {
        if (!timerSettings.asymmetric) {
            this.setStartingTime(timerSettings.whiteTime, startingColor, timerSettings.whiteIncrement, timerSettings.whiteIncrement);
        }
        else {
            this.setStartingTime(timerSettings.whiteTime, startingColor, timerSettings.whiteIncrement, timerSettings.blackIncrement);
        }
    }
    startTimer() {
        this.timerState.msWhenLastChanged = Date.now();
        this.destroyTimerIfExists();
        this.myTimer.subscribe(t => {
            if (this.paused)
                return;
            const currentMs = Date.now();
            const diff = currentMs - this.timerState.msWhenLastChanged;
            const timerBehaviourSubject = this.timers[this.timerState.turn];
            if (timerBehaviourSubject.getValue() != 0) {
                timerBehaviourSubject.next(Math.max(0, timerBehaviourSubject.getValue() - diff / 1000));
                if (timerBehaviourSubject.getValue() == 0) {
                    this.timeout.next(this.timerState.turn);
                }
            }
            this.timerState.msWhenLastChanged = currentMs;
        });
    }
    pauseTimer() {
        this.paused = true;
    }
    setTurn(turn) {
        if (turn == this.timerState.turn)
            return;
        this.incrementTimer(this.timerState.turn, this.timerState.turn == 'white' ? this.whiteIncrement : this.blackIncrement);
        this.timerState.turn = turn;
    }
    destroyTimerIfExists() {
        if (this.myTimerSubscription !== undefined) {
            this.myTimerSubscription.unsubscribe();
        }
    }
    incrementTimer(color, ms) {
        this.timers[color].next(this.timers[color].getValue() + ms);
    }
}
ChessTimerService.ɵfac = function ChessTimerService_Factory(t) { return new (t || ChessTimerService)(); };
ChessTimerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChessTimerService, factory: ChessTimerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChessTimerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gpko":
/*!*******************************************************!*\
  !*** ./src/app/services/chess-board-reset.service.ts ***!
  \*******************************************************/
/*! exports provided: ChessBoardResetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessBoardResetService", function() { return ChessBoardResetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ChessBoardResetService {
    constructor() {
        this.reset = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getResetObservable = () => this.reset.asObservable();
    }
    doReset() {
        this.reset.next(true);
    }
}
ChessBoardResetService.ɵfac = function ChessBoardResetService_Factory(t) { return new (t || ChessBoardResetService)(); };
ChessBoardResetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChessBoardResetService, factory: ChessBoardResetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChessBoardResetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hNxH":
/*!*****************************************************!*\
  !*** ./src/app/services/chess-timer-format.pipe.ts ***!
  \*****************************************************/
/*! exports provided: ChessTimerFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessTimerFormatPipe", function() { return ChessTimerFormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ "ExVU");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);



class ChessTimerFormatPipe {
    transform(value, ...args) {
        const val = value;
        if (val == undefined)
            return value;
        if (val > 10) {
            return luxon__WEBPACK_IMPORTED_MODULE_1__["Duration"].fromMillis(val * 1000).toFormat('mm:ss');
        }
        return luxon__WEBPACK_IMPORTED_MODULE_1__["Duration"].fromMillis(Math.round(val * 100) * 10).toFormat('mm:ss.SS').slice(0, 8);
    }
}
ChessTimerFormatPipe.ɵfac = function ChessTimerFormatPipe_Factory(t) { return new (t || ChessTimerFormatPipe)(); };
ChessTimerFormatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "chessTimerFormat", type: ChessTimerFormatPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChessTimerFormatPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'chessTimerFormat'
            }]
    }], null, null); })();


/***/ }),

/***/ "iBoH":
/*!*****************************************************************!*\
  !*** ./src/app/components/chess-timer/chess-timer.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChessTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessTimerComponent", function() { return ChessTimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_chess_timer_format_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chess-timer-format.pipe */ "hNxH");
/* harmony import */ var src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/peer-to-peer.service */ "WaEd");
/* harmony import */ var src_app_services_chess_timer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/chess-timer.service */ "ZCO4");
/* harmony import */ var src_app_services_chess_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/chess-status.service */ "IrCw");
/* harmony import */ var src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared-data.service */ "msgi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../player-list/player-list.component */ "zDK4");
/* harmony import */ var _analyse_button_analyse_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../analyse-button/analyse-button.component */ "tV1V");
/* harmony import */ var _rematch_button_rematch_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rematch-button/rematch-button.component */ "tlIt");
/* harmony import */ var _pipes_replace_null_with_empty_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/replace-null-with-empty.pipe */ "Z5y8");















function ChessTimerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-analyse-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-rematch-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.currentStatus));
} }
const _c0 = function (a0) { return { "flex-direction": a0 }; };
class ChessTimerComponent {
    constructor(chessTimerService, ChessStatusService, peerToPeerService, sharedDataService) {
        this.chessTimerService = chessTimerService;
        this.ChessStatusService = ChessStatusService;
        this.peerToPeerService = peerToPeerService;
        this.sharedDataService = sharedDataService;
        this.inverted = false;
        this.flexDirection = 'column';
        this.whiteTime = this.chessTimerService.getTimerObservable('white');
        this.blackTime = this.chessTimerService.getTimerObservable('black');
        this.currentStatus = this.ChessStatusService.currentStatus;
        this.currentId = this.ChessStatusService.currentTurn.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([key, value]) => key));
        this.nextId = this.ChessStatusService.nextTurn.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([key, value]) => key));
        this.currentTurn = this.ChessStatusService.currentTurn.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([key, value]) => { var _a; return (_a = value === null || value === void 0 ? void 0 : value.name) !== null && _a !== void 0 ? _a : key; }));
        this.myId = this.peerToPeerService.getId();
        this.myName = this.sharedDataService.names.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(t => { var _a, _b; return (_b = (_a = t[this.peerToPeerService.getId()]) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_ID"]; }));
    }
    ngOnInit() {
        this.flexDirection = !this.inverted ? 'column' : 'column-reverse';
        this.whiteNames = this.sharedDataService.getNameObservable('white');
        this.blackNames = this.sharedDataService.getNameObservable('black');
    }
}
ChessTimerComponent.ɵfac = function ChessTimerComponent_Factory(t) { return new (t || ChessTimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chess_timer_service__WEBPACK_IMPORTED_MODULE_4__["ChessTimerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chess_status_service__WEBPACK_IMPORTED_MODULE_5__["ChessStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_3__["PeerToPeerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"])); };
ChessTimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChessTimerComponent, selectors: [["app-chess-timer"]], inputs: { inverted: "inverted" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_services_chess_timer_format_pipe__WEBPACK_IMPORTED_MODULE_2__["ChessTimerFormatPipe"]])], decls: 23, vars: 42, consts: [[2, "display", "inline-flex", 3, "ngStyle"], [3, "currentId", "players", "nextId"], [1, "time"], ["class", "result-container", 4, "ngIf"], [1, "result-container"], [1, "final-result", 2, "width", "100%"], [2, "width", "100%"]], template: function ChessTimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceNullWithEmpty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "replaceNullWithEmpty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "chessTimerFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ChessTimerComponent_div_11_Template, 6, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "chessTimerFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-player-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "replaceNullWithEmpty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "replaceNullWithEmpty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c0, ctx.flexDirection));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentId", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 12, ctx.currentId)))("players", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 14, ctx.blackNames))("nextId", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 18, ctx.nextId)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 22, ctx.blackTime)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 24, ctx.currentStatus) != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 28, ctx.whiteTime)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentId", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 32, ctx.currentId)))("players", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 34, ctx.whiteNames))("nextId", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 38, ctx.nextId)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_8__["PlayerListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _analyse_button_analyse_button_component__WEBPACK_IMPORTED_MODULE_9__["AnalyseButtonComponent"], _rematch_button_rematch_button_component__WEBPACK_IMPORTED_MODULE_10__["RematchButtonComponent"]], pipes: [_pipes_replace_null_with_empty_pipe__WEBPACK_IMPORTED_MODULE_11__["ReplaceNullWithEmptyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], src_app_services_chess_timer_format_pipe__WEBPACK_IMPORTED_MODULE_2__["ChessTimerFormatPipe"]], styles: ["p[_ngcontent-%COMP%] {\n  margin: 0;\n  min-width: 18rem;\n}\n\np.time[_ngcontent-%COMP%] {\n  line-height: 50px;\n  font-size: 50px;\n}\n\n.result-container[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.result-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\np.final-result[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZXNzLXRpbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImNoZXNzLXRpbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIG1hcmdpbjogMDtcbiAgbWluLXdpZHRoOiAxOHJlbTtcbn1cblxucC50aW1lIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLnJlc3VsdC1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5yZXN1bHQtY29udGFpbmVyIHAge1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxucC5maW5hbC1yZXN1bHQge1xuICBmb250LXNpemU6MjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChessTimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chess-timer',
                templateUrl: './chess-timer.component.html',
                styleUrls: ['./chess-timer.component.scss'],
                providers: [src_app_services_chess_timer_format_pipe__WEBPACK_IMPORTED_MODULE_2__["ChessTimerFormatPipe"]]
            }]
    }], function () { return [{ type: src_app_services_chess_timer_service__WEBPACK_IMPORTED_MODULE_4__["ChessTimerService"] }, { type: src_app_services_chess_status_service__WEBPACK_IMPORTED_MODULE_5__["ChessStatusService"] }, { type: src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_3__["PeerToPeerService"] }, { type: src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"] }]; }, { inverted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "jHbz":
/*!*******************************************!*\
  !*** ./src/app/services/audio.service.ts ***!
  \*******************************************/
/*! exports provided: AudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioService", function() { return AudioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



class AudioService {
    constructor() {
        this.capture = new Multiplay('/assets/audio/Capture.mp3', 3);
        this.move = new Multiplay('/assets/audio/Move.mp3', 3);
        this.genericNotify = new Audio('/assets/audio/GenericNotify.mp3');
    }
    ngOnDestroy() {
        // @ts-ignore: temporary workaround
        this.capture = null;
        // @ts-ignore
        this.genericNotify = null;
    }
}
AudioService.ɵfac = function AudioService_Factory(t) { return new (t || AudioService)(); };
AudioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AudioService, factory: AudioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AudioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
class Multiplay {
    constructor(src, amount) {
        this.ct = 0;
        this.audios = [];
        for (let i = 0; i < amount; ++i) {
            this.audios.push(new Audio(src));
        }
    }
    play() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.audios[this.ct].play();
            this.ct = (this.ct + 1) % this.audios.length;
        });
    }
}


/***/ }),

/***/ "jmho":
/*!***********************************************************************!*\
  !*** ./src/app/components/chess-board/helpers/MoveHandlerResolver.ts ***!
  \***********************************************************************/
/*! exports provided: MoveHandlerResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveHandlerResolver", function() { return MoveHandlerResolver; });
/* harmony import */ var _GetNextMove_NullGetNextMove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetNextMove/NullGetNextMove */ "VPth");
/* harmony import */ var _GetNextMove_StockfishGetNextMove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetNextMove/StockfishGetNextMove */ "7L/3");


class MoveHandlerResolver {
    constructor(whiteTeamDict, blackTeamDict) {
        this.whiteTeamDict = whiteTeamDict;
        this.blackTeamDict = blackTeamDict;
        this.moveHandlers = {
            'white': this.buildMoveHandlers(whiteTeamDict),
            'black': this.buildMoveHandlers(blackTeamDict)
        };
    }
    buildMoveHandlers(teamDict) {
        const keys = Object.keys(teamDict);
        if (keys.length == 0) {
            return [new _GetNextMove_NullGetNextMove__WEBPACK_IMPORTED_MODULE_0__["NullGetNextMove"]()];
        }
        return keys.sort().map(key => this.buildMoveHandler(teamDict[key]));
    }
    buildMoveHandler(player) {
        if (player.engineSettings == null)
            return new _GetNextMove_NullGetNextMove__WEBPACK_IMPORTED_MODULE_0__["NullGetNextMove"]();
        return new _GetNextMove_StockfishGetNextMove__WEBPACK_IMPORTED_MODULE_1__["StockfishGetNextMove"](player.engineSettings);
    }
    getMoveHander(moveNumber) {
        const turnColor = moveNumber % 2 == 0 ? 'white' : 'black';
        const numHandlers = this.moveHandlers[turnColor].length;
        console.log("GET MOVE HANDLER", moveNumber);
        return this.moveHandlers[turnColor][Math.floor(moveNumber / 2) % numHandlers];
    }
}


/***/ }),

/***/ "msgi":
/*!*************************************************!*\
  !*** ./src/app/services/shared-data.service.ts ***!
  \*************************************************/
/*! exports provided: SharedDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDataService", function() { return SharedDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _components_chess_board_helpers_PlayerTeamHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/chess-board/helpers/PlayerTeamHelper */ "vfZO");
/* harmony import */ var _shared_peer_to_peer_shared_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/peer-to-peer/shared-data */ "AHxG");
/* harmony import */ var _shared_util_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/util/helpers */ "DKhF");
/* harmony import */ var _shared_util_play__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/util/play */ "v1vH");
/* harmony import */ var _peer_to_peer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./peer-to-peer.service */ "WaEd");









class SharedDataService {
    constructor(peerToPeerService) {
        this.peerToPeerService = peerToPeerService;
        this.names = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.numNames = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.newName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sharedData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(_shared_peer_to_peer_shared_data__WEBPACK_IMPORTED_MODULE_4__["getDefaultSharedData"])());
        this.messageSubscription = this.peerToPeerService.messageSubject.subscribe(this.processMessage.bind(this));
        this.nameByTeamObservable = {
            white: this.names.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(t => this.keyValueFilter(t, "white"))),
            black: this.names.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(t => this.keyValueFilter(t, "black")))
        };
        if (!this.peerToPeerService.isConnected) {
            this.names.next(Object(_components_chess_board_helpers_PlayerTeamHelper__WEBPACK_IMPORTED_MODULE_3__["getDefaultNames"])());
        }
    }
    ngOnDestroy() {
        this.messageSubscription.unsubscribe();
    }
    getNameObservable(color) {
        return this.nameByTeamObservable[color];
    }
    getColorNames(color) {
        return this.keyValueFilter(this.names.getValue(), color);
    }
    keyValueFilter(names, teamName) {
        return Object.fromEntries(Object.entries(names).filter(([k, v]) => v.team == teamName));
    }
    processMessage(message) {
        var _a, _b;
        if (message.data.command === 'INFO') {
            let currNames = this.names.getValue();
            console.log("new msg", message);
            const nameId = (_a = message.data.idOverride) !== null && _a !== void 0 ? _a : message.from;
            const isNewName = !(nameId in currNames);
            currNames[nameId] = Object.assign(Object.assign(Object.assign({}, currNames[nameId]), this.filterDict(message.data, ([k, v]) => k != 'engineSettings' && k != 'idOverride')), { isOwnedByMe: message.data.owner === this.peerToPeerService.getId() });
            if (message.data.engineSettings) {
                const currEngineSettings = (_b = currNames[nameId].engineSettings) !== null && _b !== void 0 ? _b : {};
                currNames[nameId].engineSettings = Object.assign(Object.assign({}, currEngineSettings), message.data.engineSettings);
                const engineSettings = currNames[nameId].engineSettings;
                if (engineSettings) {
                    currNames[nameId].name = this.getEngineName(engineSettings);
                }
            }
            this.names.next(currNames);
            console.log("new names", currNames);
            if (isNewName) {
                this.newName.next(nameId);
                this.numNames.next(Object.keys(currNames).length);
            }
        }
        else if (message.data.command === 'DISCONNECTED') {
            const currNames = this.names.getValue();
            let newNames = {};
            for (const key in currNames) {
                if (currNames[key].owner !== message.data.name) {
                    newNames[key] = currNames[key];
                }
            }
            this.names.next(newNames);
            console.log("NEXT NAMES after dc...", newNames);
        }
        else if (message.data.command === 'SET_NAMES') {
            const currNames = this.names.getValue();
            const newNames = Object.assign(Object.assign({}, currNames), message.data.names);
            this.names.next(newNames);
            this.sharedData.next(message.data.sharedData);
        }
        else if (message.data.command === 'UPDATE_SHARED') {
            this.sharedData.next(Object(_shared_util_helpers__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.sharedData.getValue(), message.data.sharedData));
        }
    }
    setSharedData(sharedData) {
        this.peerToPeerService.broadcastAndToSelf({
            command: 'UPDATE_SHARED',
            sharedData: sharedData
        });
    }
    filterDict(dict, fn) {
        return Object.fromEntries(Object.entries(dict).filter(fn));
    }
    getPlayer(playerId) {
        return this.names.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(t => t[playerId]));
    }
    getPlayerSync(playerId) {
        return this.names.getValue()[playerId];
    }
    setTeam(team) {
        return this.broadcastNamesMessage({ team: team });
    }
    addCPU(team) {
        return this.setEngineSettings(this.getNewCPUId(), Object(_components_chess_board_helpers_PlayerTeamHelper__WEBPACK_IMPORTED_MODULE_3__["getDefaultEngineSettings"])(), team);
    }
    setIsReady(isReady) {
        return this.broadcastNamesMessage({
            isReady: isReady,
        });
    }
    setEngineSettings(playerId, engineSettings, team = null) {
        var _a, _b;
        const infoOptionals = {
            idOverride: playerId,
            engineSettings: engineSettings
        };
        if (team != null) {
            infoOptionals.team = team;
        }
        return this.broadcastNamesMessage(infoOptionals, this.getEngineName(Object.assign(Object.assign({}, (_b = (_a = this.getPlayerSync(playerId)) === null || _a === void 0 ? void 0 : _a.engineSettings) !== null && _b !== void 0 ? _b : {}), engineSettings)));
    }
    setRematchRequested(rematchRequested) {
        this.broadcastNamesMessage({ rematchRequested });
    }
    swapAllTeamsAndRematch() {
        const names = this.names.getValue();
        for (const key of Object.keys(names)) {
            names[key].team = Object(_shared_util_play__WEBPACK_IMPORTED_MODULE_6__["invertColor"])(names[key].team);
            names[key].rematchRequested = undefined;
        }
        this.setSharedData({ matchCount: this.sharedData.getValue().matchCount + 1 });
        this.names.next(names);
    }
    getEngineName(engineSettings) {
        var _a;
        return `Stockfish (${engineSettings.elo}, ${((_a = engineSettings.timeForMove) !== null && _a !== void 0 ? _a : 0) / 1000}s)`;
    }
    getNewCPUId() {
        const keys = Object.keys(this.names.getValue());
        console.log(keys);
        let id = this.peerToPeerService.getId();
        let ct = 0;
        while (keys.includes(id)) {
            id = `${this.peerToPeerService.getId()}_sf${ct}`;
            ct++;
        }
        return id;
    }
    broadcastNamesMessage(data, nameOverride = null) {
        let message = Object.assign({ command: 'INFO', name: this.peerToPeerService.getAlias(), owner: this.peerToPeerService.getId() }, data);
        if (nameOverride != null) {
            message = Object.assign(Object.assign({}, message), { name: nameOverride });
        }
        this.peerToPeerService.broadcastAndToSelf(message);
    }
}
SharedDataService.ɵfac = function SharedDataService_Factory(t) { return new (t || SharedDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_7__["PeerToPeerService"])); };
SharedDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedDataService, factory: SharedDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _peer_to_peer_service__WEBPACK_IMPORTED_MODULE_7__["PeerToPeerService"] }]; }, null); })();


/***/ }),

/***/ "msqx":
/*!**********************************************************************!*\
  !*** ./src/app/components/chess-board/helpers/ChessgroundHelpers.ts ***!
  \**********************************************************************/
/*! exports provided: promoteIfNecessary, removeEnPassantIfNecessary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promoteIfNecessary", function() { return promoteIfNecessary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEnPassantIfNecessary", function() { return removeEnPassantIfNecessary; });
/* harmony import */ var src_app_shared_chessjs_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/chessjs-types */ "yjJR");

function promoteIfNecessary(move, cg, oldColor) {
    if (move.promotion != undefined) {
        let m = new Map();
        const piece = {
            role: 'queen',
            color: oldColor
        };
        m.set(move.to, piece);
        cg.setPieces(m);
    }
}
function removeEnPassantIfNecessary(move, cg) {
    if (move.flags.includes(src_app_shared_chessjs_types__WEBPACK_IMPORTED_MODULE_0__["FLAGS"]['EP_CAPTURE'])) {
        const enPassantSquare = move.to[0] + move.from[1];
        let m = new Map();
        m.set(enPassantSquare, undefined);
        cg.setPieces(m);
    }
}


/***/ }),

/***/ "s+tm":
/*!*****************************************************************!*\
  !*** ./src/app/components/snap-slider/snap-slider.component.ts ***!
  \*****************************************************************/
/*! exports provided: SnapSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnapSliderComponent", function() { return SnapSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");




class SnapSliderComponent {
    constructor() {
        this.label = "label";
        this.value = 0;
        this.min = 0;
        this.max = 100000;
        this.updateModel = () => 0;
        this.roundFn = t => t;
        this._myValue = 0;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        var _a;
        this.myValue = (_a = this.value) !== null && _a !== void 0 ? _a : 0;
    }
    handleChange(e) {
        const value = this.myValue;
        this.updateModel(value);
    }
    setMyValue(e) {
        var _a;
        const value = (_a = e.value) !== null && _a !== void 0 ? _a : 0;
        this.myValue = value;
    }
    get myValue() {
        return this._myValue;
    }
    set myValue(val) {
        this._myValue = this.roundFn(val);
    }
}
SnapSliderComponent.ɵfac = function SnapSliderComponent_Factory(t) { return new (t || SnapSliderComponent)(); };
SnapSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnapSliderComponent, selectors: [["app-snap-slider"]], inputs: { label: "label", value: "value", min: "min", max: "max", updateModel: "updateModel", roundFn: "roundFn" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 6, consts: [[2, "text-align", "center"], [2, "text-align", "center", "margin", "0"], [2, "width", "100%", 3, "min", "max", "value", "ngModel", "ngModelChange", "input", "change"]], template: function SnapSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SnapSliderComponent_Template_mat_slider_ngModelChange_3_listener($event) { return ctx.myValue = $event; })("input", function SnapSliderComponent_Template_mat_slider_input_3_listener($event) { return ctx.setMyValue($event); })("change", function SnapSliderComponent_Template_mat_slider_change_3_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.label, ": ", ctx.myValue, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("value", ctx.value)("ngModel", ctx.myValue);
    } }, directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_1__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbmFwLXNsaWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnapSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-snap-slider',
                templateUrl: './snap-slider.component.html',
                styleUrls: ['./snap-slider.component.scss']
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], updateModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], roundFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "tV1V":
/*!***********************************************************************!*\
  !*** ./src/app/components/analyse-button/analyse-button.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnalyseButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyseButtonComponent", function() { return AnalyseButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_chess_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chess-status.service */ "IrCw");
/* harmony import */ var src_app_services_lichess_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/lichess.service */ "NfhI");
/* harmony import */ var _loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading-button/loading-button.component */ "VEX+");






class AnalyseButtonComponent {
    constructor(chessStatusService, lichessService) {
        this.chessStatusService = chessStatusService;
        this.lichessService = lichessService;
        this.analyseLink = '';
        this.fetching = false;
    }
    ngOnInit() {
    }
    fetchAnalysisLink() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const pgn = this.chessStatusService.getPgn();
            const link = yield this.getAnalysisLink(pgn);
            window.open(link);
        });
    }
    getAnalysisLink(pgn) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.analyseLink !== '') {
                return this.analyseLink;
            }
            this.fetching = true;
            let link = '';
            try {
                link = yield this.lichessService.importGame(pgn);
                this.analyseLink = link;
            }
            catch (err) {
                console.log(err);
            }
            finally {
                this.fetching = false;
            }
            return link;
        });
    }
}
AnalyseButtonComponent.ɵfac = function AnalyseButtonComponent_Factory(t) { return new (t || AnalyseButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_chess_status_service__WEBPACK_IMPORTED_MODULE_2__["ChessStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_lichess_service__WEBPACK_IMPORTED_MODULE_3__["LichessService"])); };
AnalyseButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AnalyseButtonComponent, selectors: [["app-analyse-button"]], decls: 1, vars: 1, consts: [["text", "Analyse", 3, "loading", "click"]], template: function AnalyseButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-loading-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnalyseButtonComponent_Template_app_loading_button_click_0_listener() { return ctx.fetchAnalysisLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.fetching);
    } }, directives: [_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_4__["LoadingButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmFseXNlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnalyseButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-analyse-button',
                templateUrl: './analyse-button.component.html',
                styleUrls: ['./analyse-button.component.scss']
            }]
    }], function () { return [{ type: src_app_services_chess_status_service__WEBPACK_IMPORTED_MODULE_2__["ChessStatusService"] }, { type: src_app_services_lichess_service__WEBPACK_IMPORTED_MODULE_3__["LichessService"] }]; }, null); })();


/***/ }),

/***/ "tlIt":
/*!***********************************************************************!*\
  !*** ./src/app/components/rematch-button/rematch-button.component.ts ***!
  \***********************************************************************/
/*! exports provided: RematchButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RematchButtonComponent", function() { return RematchButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var sleep_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sleep-promise */ "im8a");
/* harmony import */ var src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared-data.service */ "msgi");
/* harmony import */ var src_app_services_chess_board_reset_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/chess-board-reset.service */ "gpko");
/* harmony import */ var src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/peer-to-peer.service */ "WaEd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");








class RematchButtonComponent {
    constructor(sharedDataService, chessBoardResetService, peerToPeerService) {
        this.sharedDataService = sharedDataService;
        this.chessBoardResetService = chessBoardResetService;
        this.peerToPeerService = peerToPeerService;
        this.numUniqNames = 0;
        this.numReady = 0;
        this.isReady = false;
        this.resetStarted = false;
        this.numNamesSubscription = this.sharedDataService.numNames.subscribe(t => {
            this.numUniqNames = new Set(Object.entries(this.sharedDataService.names.getValue()).map(([k, val]) => val.owner)).size;
            this.checkRematchReady();
        });
        this.namesSubscription = this.sharedDataService.names.subscribe(t => {
            this.numReady = Object.entries(this.sharedDataService.names.getValue()).filter(([k, val]) => val.owner === k && val.rematchRequested).length;
            this.isReady = this.sharedDataService.getPlayerSync(this.peerToPeerService.getId()).rematchRequested === true;
            this.checkRematchReady();
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.numNamesSubscription.unsubscribe();
        this.namesSubscription.unsubscribe();
    }
    rematch() {
        this.sharedDataService.setRematchRequested(true);
    }
    checkRematchReady() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.numUniqNames > 0 && this.numUniqNames == this.numReady && !this.resetStarted) {
                this.resetStarted = true;
                yield Object(sleep_promise__WEBPACK_IMPORTED_MODULE_2__["default"])(500);
                this.sharedDataService.swapAllTeamsAndRematch();
                this.chessBoardResetService.doReset();
            }
        });
    }
}
RematchButtonComponent.ɵfac = function RematchButtonComponent_Factory(t) { return new (t || RematchButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_chess_board_reset_service__WEBPACK_IMPORTED_MODULE_4__["ChessBoardResetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_5__["PeerToPeerService"])); };
RematchButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RematchButtonComponent, selectors: [["app-rematch-button"]], decls: 2, vars: 3, consts: [["mat-stroked-button", "", 3, "disabled", "click"]], template: function RematchButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RematchButtonComponent_Template_button_click_0_listener() { return ctx.rematch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isReady);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Rematch (", ctx.numReady, "/", ctx.numUniqNames, ")");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW1hdGNoLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RematchButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-rematch-button',
                templateUrl: './rematch-button.component.html',
                styleUrls: ['./rematch-button.component.scss']
            }]
    }], function () { return [{ type: src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] }, { type: src_app_services_chess_board_reset_service__WEBPACK_IMPORTED_MODULE_4__["ChessBoardResetService"] }, { type: src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_5__["PeerToPeerService"] }]; }, null); })();


/***/ }),

/***/ "v1vH":
/*!*************************************!*\
  !*** ./src/app/shared/util/play.ts ***!
  \*************************************/
/*! exports provided: Chess, initial, toDests, playOtherSide, setMovableForCurrentColour, setMmovableForPremove, toColor, invertColor, toLightDark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chess", function() { return Chess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initial", function() { return initial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDests", function() { return toDests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playOtherSide", function() { return playOtherSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMovableForCurrentColour", function() { return setMovableForCurrentColour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMmovableForPremove", function() { return setMmovableForPremove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toColor", function() { return toColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invertColor", function() { return invertColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLightDark", function() { return toLightDark; });
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chess.js */ "xa0L");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chess_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chessground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chessground */ "Co6h");
/* harmony import */ var chessground__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chessground__WEBPACK_IMPORTED_MODULE_1__);


const Chess = typeof chess_js__WEBPACK_IMPORTED_MODULE_0__ === 'function' ? chess_js__WEBPACK_IMPORTED_MODULE_0__ : chess_js__WEBPACK_IMPORTED_MODULE_0__["Chess"];
const initial = {
    name: 'Play legal moves from initial position',
    run(el) {
        const chess = new Chess();
        const cg = Object(chessground__WEBPACK_IMPORTED_MODULE_1__["Chessground"])(wrapped(el), {
            turnColor: 'white',
            movable: {
                free: false,
            },
            draggable: {
                showGhost: true,
            },
        });
        setMovableForCurrentColour(cg, chess);
        cg.set({
            movable: { events: { after: playOtherSide(cg, chess) } },
        });
        return cg;
    }
};
function wrapped(cont) {
    const el = document.createElement('div');
    cont.className = 'in2d';
    cont.innerHTML = '';
    cont.appendChild(el);
    return el;
}
function toDests(chess) {
    const dests = new Map();
    chess.SQUARES.forEach((s) => {
        const ms = chess.moves({ square: s, verbose: true });
        if (ms.length) {
            dests.set(s, ms.map((m) => m.to));
        }
    });
    return dests;
}
function playOtherSide(cg, chess) {
    return (orig, dest) => {
        chess.move({ from: orig, to: dest });
        setMovableForCurrentColour(cg, chess);
    };
}
function setMovableForCurrentColour(cg, chess) {
    cg.set({
        turnColor: toColor(chess),
        movable: {
            color: toColor(chess),
            dests: toDests(chess),
        },
    });
}
function setMmovableForPremove(cg, chess) {
    cg.set({
        turnColor: toColor(chess),
        movable: {
            color: invertColor(toColor(chess)),
            dests: toDests(chess),
        },
    });
}
function toColor(chess) {
    return chess.turn() === 'w' ? 'white' : 'black';
}
function invertColor(color) {
    return color == 'black' ? 'white' : 'black';
}
function toLightDark(chess) {
    return chess.turn() === 'w' ? 'light' : 'dark';
}


/***/ }),

/***/ "v6oZ":
/*!**************************************************************************!*\
  !*** ./src/app/shared/mp-lobby/player-config/player-config.component.ts ***!
  \**************************************************************************/
/*! exports provided: PlayerConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerConfigComponent", function() { return PlayerConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/shared-data.service */ "msgi");
/* harmony import */ var _components_snap_slider_snap_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/snap-slider/snap-slider.component */ "s+tm");




class PlayerConfigComponent {
    constructor(sharedDataService) {
        this.sharedDataService = sharedDataService;
        this.playerId = '';
        this.player = null;
        this.updateTimeForMove = (val) => this.sharedDataService.setEngineSettings(this.playerId, { timeForMove: val });
        this.updateElo = (val) => this.sharedDataService.setEngineSettings(this.playerId, { elo: val });
        this.roundTo100 = (val) => Math.round(val / 100) * 100;
        this.roundTo50 = (val) => Math.round(val / 50) * 50;
    }
    ngOnInit() {
    }
}
PlayerConfigComponent.ɵfac = function PlayerConfigComponent_Factory(t) { return new (t || PlayerConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"])); };
PlayerConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerConfigComponent, selectors: [["app-player-config"]], inputs: { playerId: "playerId", player: "player" }, decls: 2, vars: 10, consts: [["label", "ms per move", 3, "min", "max", "value", "roundFn", "updateModel"], ["label", "elo", 3, "min", "max", "value", "roundFn", "updateModel"]], template: function PlayerConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-snap-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-snap-slider", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("max", 5000)("value", ctx.player == null ? null : ctx.player.engineSettings == null ? null : ctx.player.engineSettings.timeForMove)("roundFn", ctx.roundTo100)("updateModel", ctx.updateTimeForMove);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 100)("max", 3600)("value", ctx.player == null ? null : ctx.player.engineSettings == null ? null : ctx.player.engineSettings.elo)("roundFn", ctx.roundTo50)("updateModel", ctx.updateElo);
    } }, directives: [_components_snap_slider_snap_slider_component__WEBPACK_IMPORTED_MODULE_2__["SnapSliderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5ZXItY29uZmlnLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerConfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player-config',
                templateUrl: './player-config.component.html',
                styleUrls: ['./player-config.component.scss']
            }]
    }], function () { return [{ type: src_app_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"] }]; }, { playerId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _guards_prevent_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/prevent-deactivate.guard */ "3lgD");
/* harmony import */ var _guards_is_connected_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/is-connected.guard */ "GO7X");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_join_join_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/join/join.component */ "Ib7N");
/* harmony import */ var _pages_mp_lobby_mp_lobby_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/mp-lobby/mp-lobby.component */ "LESy");
/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/routes */ "ASQN");
/* harmony import */ var _components_chess_board_container_chess_board_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chess-board-container/chess-board-container.component */ "I+JC");











const routes = [
    { path: _pages_routes__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].HOME, component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: _pages_routes__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].MP_LOBBY, component: _pages_mp_lobby_mp_lobby_component__WEBPACK_IMPORTED_MODULE_6__["MpLobbyComponent"], canActivate: [_guards_is_connected_guard__WEBPACK_IMPORTED_MODULE_3__["IsConnectedGuard"]] },
    { path: _pages_routes__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].PLAY, component: _components_chess_board_container_chess_board_container_component__WEBPACK_IMPORTED_MODULE_8__["ChessBoardContainerComponent"], canDeactivate: [_guards_prevent_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__["PreventDeactivateGuard"]] },
    { path: _pages_routes__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].JOIN + '/:id', component: _pages_join_join_component__WEBPACK_IMPORTED_MODULE_5__["JoinComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vfZO":
/*!********************************************************************!*\
  !*** ./src/app/components/chess-board/helpers/PlayerTeamHelper.ts ***!
  \********************************************************************/
/*! exports provided: getDefaultNames, getDefaultEngineSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultNames", function() { return getDefaultNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultEngineSettings", function() { return getDefaultEngineSettings; });
/* harmony import */ var src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/peer-to-peer.service */ "WaEd");

function getDefaultNames() {
    const engineSettings = getDefaultEngineSettings();
    const engineSettings2 = Object.assign(Object.assign({}, engineSettings), { elo: 1350 });
    return {
        [src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_ID"]]: createPlayerTeam('default'),
        'stockfish': createPlayerTeam('Stockfish (3600)', 'black', engineSettings),
        'stockfish2': createPlayerTeam('Stockfish (1000)', 'black', engineSettings2)
    };
}
function getDefaultEngineSettings() {
    return {
        timeForMove: 700,
        elo: 3600
    };
}
function createPlayerTeam(name, color = 'white', engineSettings = undefined) {
    return {
        name,
        team: color,
        owner: src_app_services_peer_to_peer_service__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_ID"],
        isOwnedByMe: false,
        isReady: true,
        engineSettings
    };
}
;
;


/***/ }),

/***/ "xkBu":
/*!*************************************************************************!*\
  !*** ./src/app/components/chess-board/helpers/OnePlayerBoardChanger.ts ***!
  \*************************************************************************/
/*! exports provided: OnePlayerBoardChanger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnePlayerBoardChanger", function() { return OnePlayerBoardChanger; });
/* harmony import */ var src_app_shared_util_play__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/util/play */ "v1vH");

class OnePlayerBoardChanger {
    constructor() {
    }
    static setMovable(chess, cg) {
        cg.set({
            turnColor: Object(src_app_shared_util_play__WEBPACK_IMPORTED_MODULE_0__["toColor"])(chess),
            movable: {
                color: Object(src_app_shared_util_play__WEBPACK_IMPORTED_MODULE_0__["toColor"])(chess),
                dests: Object(src_app_shared_util_play__WEBPACK_IMPORTED_MODULE_0__["toDests"])(chess),
                free: false,
                showDests: true
            },
        });
    }
    static setPremovable(chess, cg) {
        cg.set({
            turnColor: Object(src_app_shared_util_play__WEBPACK_IMPORTED_MODULE_0__["toColor"])(chess),
            movable: {
                color: Object(src_app_shared_util_play__WEBPACK_IMPORTED_MODULE_0__["invertColor"])(Object(src_app_shared_util_play__WEBPACK_IMPORTED_MODULE_0__["toColor"])(chess)),
                dests: Object(src_app_shared_util_play__WEBPACK_IMPORTED_MODULE_0__["toDests"])(chess),
                free: false,
                showDests: true
            }
        });
    }
    static setUnmovable(cg) {
        cg.set({
            turnColor: undefined,
            movable: {
                color: undefined,
                dests: new Map(),
                free: false,
                showDests: false
            },
        });
    }
}


/***/ }),

/***/ "yjJR":
/*!*****************************************!*\
  !*** ./src/app/shared/chessjs-types.ts ***!
  \*****************************************/
/*! exports provided: Chess, FLAGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chess", function() { return Chess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLAGS", function() { return FLAGS; });
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chess.js */ "xa0L");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chess_js__WEBPACK_IMPORTED_MODULE_0__);

const Chess = typeof chess_js__WEBPACK_IMPORTED_MODULE_0___default.a === 'function' ? chess_js__WEBPACK_IMPORTED_MODULE_0___default.a : chess_js__WEBPACK_IMPORTED_MODULE_0___default.a.Chess;
const h = new Chess();
const FLAGS = h.FLAGS;
/*
I want something like this to work, but alas

declare var h: ChessInstance;
export let FLAGS: typeof h.FLAGS;
 */ 


/***/ }),

/***/ "zDK4":
/*!*****************************************************************!*\
  !*** ./src/app/components/player-list/player-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: PlayerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function() { return PlayerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



function PlayerListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-decoration", item_r1.key == ctx_r0.nextId || item_r1.key == ctx_r0.currentId ? "underline" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bold", item_r1.key == ctx_r0.currentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.value == null ? null : item_r1.value.name);
} }
class PlayerListComponent {
    constructor() {
        this.players = null;
        this.currentId = '';
        this.nextId = '';
    }
    ngOnInit() {
        if (this.players == null)
            throw new Error('players is required');
        console.log(this.players);
    }
}
PlayerListComponent.ɵfac = function PlayerListComponent_Factory(t) { return new (t || PlayerListComponent)(); };
PlayerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerListComponent, selectors: [["app-player-list"]], inputs: { players: "players", currentId: "currentId", nextId: "nextId" }, decls: 3, vars: 3, consts: [[3, "bold", "text-decoration", 4, "ngFor", "ngForOf"]], template: function PlayerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerListComponent_li_1_Template, 2, 5, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.players));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]], styles: ["ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nli[_ngcontent-%COMP%]:last-child() {\n  padding-right: 0px;\n}\n\nli[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 5px;\n  margin: 0;\n}\n\nli.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BsYXllci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGIiwiZmlsZSI6InBsYXllci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxubGk6bGFzdC1jaGlsZCgpIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG5saSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW46IDA7XG59XG5cbmxpLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player-list',
                templateUrl: './player-list.component.html',
                styleUrls: ['./player-list.component.scss']
            }]
    }], function () { return []; }, { players: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map