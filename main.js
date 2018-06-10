(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./app/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./app/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./app/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.center = 'Brampton, Canada';
        this.positions = [];
        router.events.subscribe(function (event) {
            // TODO: bad idea to deal with document directly
            if (document.querySelector('.prettyprinted')) {
                document.querySelector('.prettyprinted').classList.remove('prettyprinted');
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                setTimeout(function (e) { return PR.prettyPrint(); }, 500);
            }
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngui-map-app',
            template: __webpack_require__(/*! ./app.html */ "./app/app.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.html":
/*!**********************!*\
  !*** ./app/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"ls\">\r\n  <h3> Examples </h3>\r\n  <li routerLink=\"/simple-map\">Simple Map</li>\r\n  <li routerLink=\"/simple-circle\">Simple Circle</li>\r\n  <li routerLink=\"/simple-marker\">Simple Marker</li>\r\n  <li routerLink=\"/marker-ng-for\">Marker With *ngFor</li>\r\n  <li routerLink=\"/marker-with-custom-icon\">Marker With Custom Icon</li>\r\n  <li routerLink=\"/simple-info-window\">Simple InfoWindow</li>\r\n  <li routerLink=\"/multiple-map\">Multiple Map</li>\r\n  <li routerLink=\"/polygon\">Polygon</li>\r\n  <li routerLink=\"/map-with-options\">Map With Options</li>\r\n  <li routerLink=\"/map-with-streetview\">Map With Streetview</li>\r\n  <li routerLink=\"/map-change-multiple-properties\">Change Multiple Properties Of Map</li>\r\n  <li routerLink=\"/simple-polyline\">Simple Polyline</li>\r\n  <li routerLink=\"/simple-ground-overlay\">Simple Ground Overlay</li>\r\n  <li routerLink=\"/bicycling-layer\">Bicycling Layer</li>\r\n  <li routerLink=\"/traffic-layer\">Traffic Layer</li>\r\n  <li routerLink=\"/transit-layer\">Transit Layer</li>\r\n  <li routerLink=\"/heatmap-layer\">Heatmap Layer</li>\r\n  <li routerLink=\"/kml-layer\">KML Layer</li>\r\n  <li routerLink=\"/data-layer\">Data Layer</li>\r\n  <li routerLink=\"/street-view-panorama\">Street View Panorama</li>\r\n  <li routerLink=\"/places-auto-complete\">Places Auto Complete</li>\r\n  <li routerLink=\"/directions-renderer\">Directions Renderer</li>\r\n  <li routerLink=\"/drawing-manager\">Drawing Manager</li>\r\n  <li routerLink=\"/event-arguments\">Event Arguments</li>\r\n  <li routerLink=\"/custom-marker\">Custom Marker</li>\r\n  <li routerLink=\"/custom-marker-ng-for\">Custom Marker *ngFor</li>\r\n  <li routerLink=\"/experiment\">Experiment</li>\r\n</ul>\r\n<div class=\"components\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngui/utils */ "./node_modules/@ngui/utils/src/index.ts");
/* harmony import */ var _ngui_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngui/map */ "./src/index.ts");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./source-code.service */ "./app/source-code.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.route */ "./app/app.route.ts");










// import { Codeblock } from 'ng2-prism/codeblock';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_route__WEBPACK_IMPORTED_MODULE_10__["APP_ROUTER_PROVIDERS"],
                // NguiMapModule,
                _ngui_map__WEBPACK_IMPORTED_MODULE_6__["NguiMapModule"].forRoot({
                    apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCbMGRUwcqKjlYX4h4-P6t-xcDryRYLmCM' +
                        '&libraries=visualization,places,drawing',
                }),
                _ngui_utils__WEBPACK_IMPORTED_MODULE_5__["NguiUtilsModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _app_route__WEBPACK_IMPORTED_MODULE_10__["APP_ROUTER_COMPONENTS"]],
            providers: [
                _source_code_service__WEBPACK_IMPORTED_MODULE_7__["SourceCodeService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/app.route.ts":
/*!**************************!*\
  !*** ./app/app.route.ts ***!
  \**************************/
/*! exports provided: routes, APP_ROUTER_PROVIDERS, APP_ROUTER_COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTER_PROVIDERS", function() { return APP_ROUTER_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTER_COMPONENTS", function() { return APP_ROUTER_COMPONENTS; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _map_components_simple_info_window_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-components/simple-info-window.component */ "./app/map-components/simple-info-window.component.ts");
/* harmony import */ var _map_components_simple_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-components/simple-map.component */ "./app/map-components/simple-map.component.ts");
/* harmony import */ var _map_components_simple_circle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-components/simple-circle.component */ "./app/map-components/simple-circle.component.ts");
/* harmony import */ var _map_components_simple_marker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-components/simple-marker.component */ "./app/map-components/simple-marker.component.ts");
/* harmony import */ var _map_components_marker_ng_for_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-components/marker-ng-for.component */ "./app/map-components/marker-ng-for.component.ts");
/* harmony import */ var _map_components_multiple_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-components/multiple-map.component */ "./app/map-components/multiple-map.component.ts");
/* harmony import */ var _map_components_polygon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map-components/polygon.component */ "./app/map-components/polygon.component.ts");
/* harmony import */ var _map_components_map_with_options_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map-components/map-with-options.component */ "./app/map-components/map-with-options.component.ts");
/* harmony import */ var _map_components_simple_polyline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map-components/simple-polyline.component */ "./app/map-components/simple-polyline.component.ts");
/* harmony import */ var _map_components_simple_ground_overlay_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map-components/simple-ground-overlay.component */ "./app/map-components/simple-ground-overlay.component.ts");
/* harmony import */ var _map_components_bicycling_layer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./map-components/bicycling-layer.component */ "./app/map-components/bicycling-layer.component.ts");
/* harmony import */ var _map_components_traffic_layer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./map-components/traffic-layer.component */ "./app/map-components/traffic-layer.component.ts");
/* harmony import */ var _map_components_transit_layer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./map-components/transit-layer.component */ "./app/map-components/transit-layer.component.ts");
/* harmony import */ var _map_components_heatmap_layer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./map-components/heatmap-layer.component */ "./app/map-components/heatmap-layer.component.ts");
/* harmony import */ var _map_components_kml_layer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./map-components/kml-layer.component */ "./app/map-components/kml-layer.component.ts");
/* harmony import */ var _map_components_data_layer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./map-components/data-layer.component */ "./app/map-components/data-layer.component.ts");
/* harmony import */ var _map_components_street_view_panorama_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./map-components/street-view-panorama.component */ "./app/map-components/street-view-panorama.component.ts");
/* harmony import */ var _map_components_places_auto_complete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./map-components/places-auto-complete.component */ "./app/map-components/places-auto-complete.component.ts");
/* harmony import */ var _map_components_directions_renderer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./map-components/directions-renderer.component */ "./app/map-components/directions-renderer.component.ts");
/* harmony import */ var _map_components_drawing_manager_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./map-components/drawing-manager.component */ "./app/map-components/drawing-manager.component.ts");
/* harmony import */ var _map_components_event_arguments_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./map-components/event-arguments.component */ "./app/map-components/event-arguments.component.ts");
/* harmony import */ var _map_components_custom_marker_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./map-components/custom-marker.component */ "./app/map-components/custom-marker.component.ts");
/* harmony import */ var _map_components_custom_marker_ng_for_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./map-components/custom-marker-ng-for.component */ "./app/map-components/custom-marker-ng-for.component.ts");
/* harmony import */ var _map_components_map_with_streetview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./map-components/map-with-streetview.component */ "./app/map-components/map-with-streetview.component.ts");
/* harmony import */ var _map_components_map_change_multiple_properties_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./map-components/map-change-multiple-properties.component */ "./app/map-components/map-change-multiple-properties.component.ts");
/* harmony import */ var _map_components_marker_with_custom_icon_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./map-components/marker-with-custom-icon.component */ "./app/map-components/marker-with-custom-icon.component.ts");
/* harmony import */ var _map_components_experiment_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./map-components/experiment.component */ "./app/map-components/experiment.component.ts");




























var routes = [
    { path: 'bicycling-layer', component: _map_components_bicycling_layer_component__WEBPACK_IMPORTED_MODULE_11__["BicyclingLayerComponent"] },
    { path: 'data-layer', component: _map_components_data_layer_component__WEBPACK_IMPORTED_MODULE_16__["DataLayerComponent"] },
    { path: 'directions-renderer', component: _map_components_directions_renderer_component__WEBPACK_IMPORTED_MODULE_19__["DirectionsRendererComponent"] },
    { path: 'drawing-manager', component: _map_components_drawing_manager_component__WEBPACK_IMPORTED_MODULE_20__["DrawingManagerComponent"] },
    { path: 'heatmap-layer', component: _map_components_heatmap_layer_component__WEBPACK_IMPORTED_MODULE_14__["HeatmapLayerComponent"] },
    { path: 'kml-layer', component: _map_components_kml_layer_component__WEBPACK_IMPORTED_MODULE_15__["KmlLayerComponent"] },
    { path: 'map-with-options', component: _map_components_map_with_options_component__WEBPACK_IMPORTED_MODULE_8__["MapWithOptionsComponent"] },
    { path: 'map-with-streetview', component: _map_components_map_with_streetview_component__WEBPACK_IMPORTED_MODULE_24__["MapWithStreetviewComponent"] },
    { path: 'map-change-multiple-properties', component: _map_components_map_change_multiple_properties_component__WEBPACK_IMPORTED_MODULE_25__["MapChangeMultiplePropertiesComponent"] },
    { path: 'marker-ng-for', component: _map_components_marker_ng_for_component__WEBPACK_IMPORTED_MODULE_5__["MarkerNgForComponent"] },
    { path: 'marker-with-custom-icon', component: _map_components_marker_with_custom_icon_component__WEBPACK_IMPORTED_MODULE_26__["MarkerWithCustomIconComponent"] },
    { path: 'multiple-map', component: _map_components_multiple_map_component__WEBPACK_IMPORTED_MODULE_6__["MultipleMapComponent"] },
    { path: 'places-auto-complete', component: _map_components_places_auto_complete_component__WEBPACK_IMPORTED_MODULE_18__["PlacesAutoCompleteComponent"] },
    { path: 'polygon', component: _map_components_polygon_component__WEBPACK_IMPORTED_MODULE_7__["PolygonComponent"] },
    { path: 'simple-circle', component: _map_components_simple_circle_component__WEBPACK_IMPORTED_MODULE_3__["SimpleCircleComponent"] },
    { path: 'simple-ground-overlay', component: _map_components_simple_ground_overlay_component__WEBPACK_IMPORTED_MODULE_10__["SimpleGroundOverlayComponent"] },
    { path: 'simple-info-window', component: _map_components_simple_info_window_component__WEBPACK_IMPORTED_MODULE_1__["SimpleInfoWindowComponent"] },
    { path: 'simple-map', component: _map_components_simple_map_component__WEBPACK_IMPORTED_MODULE_2__["SimpleMapComponent"] },
    { path: 'simple-marker', component: _map_components_simple_marker_component__WEBPACK_IMPORTED_MODULE_4__["SimpleMarkerComponent"] },
    { path: 'simple-polyline', component: _map_components_simple_polyline_component__WEBPACK_IMPORTED_MODULE_9__["SimplePolylineComponent"] },
    { path: 'street-view-panorama', component: _map_components_street_view_panorama_component__WEBPACK_IMPORTED_MODULE_17__["StreetViewPanoramaComponent"] },
    { path: 'traffic-layer', component: _map_components_traffic_layer_component__WEBPACK_IMPORTED_MODULE_12__["TrafficLayerComponent"] },
    { path: 'transit-layer', component: _map_components_transit_layer_component__WEBPACK_IMPORTED_MODULE_13__["TransitLayerComponent"] },
    { path: 'event-arguments', component: _map_components_event_arguments_component__WEBPACK_IMPORTED_MODULE_21__["EventArgumentsComponent"] },
    { path: 'custom-marker', component: _map_components_custom_marker_component__WEBPACK_IMPORTED_MODULE_22__["CustomMarkerComponent"] },
    { path: 'custom-marker-ng-for', component: _map_components_custom_marker_ng_for_component__WEBPACK_IMPORTED_MODULE_23__["CustomMarkerNgForComponent"] },
    { path: 'experiment', component: _map_components_experiment_component__WEBPACK_IMPORTED_MODULE_27__["ExperimentComponent"] },
    { path: '', redirectTo: '/simple-marker', pathMatch: 'full' },
];
var APP_ROUTER_PROVIDERS = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);
var APP_ROUTER_COMPONENTS = [
    _map_components_bicycling_layer_component__WEBPACK_IMPORTED_MODULE_11__["BicyclingLayerComponent"],
    _map_components_data_layer_component__WEBPACK_IMPORTED_MODULE_16__["DataLayerComponent"],
    _map_components_directions_renderer_component__WEBPACK_IMPORTED_MODULE_19__["DirectionsRendererComponent"],
    _map_components_drawing_manager_component__WEBPACK_IMPORTED_MODULE_20__["DrawingManagerComponent"],
    _map_components_event_arguments_component__WEBPACK_IMPORTED_MODULE_21__["EventArgumentsComponent"],
    _map_components_heatmap_layer_component__WEBPACK_IMPORTED_MODULE_14__["HeatmapLayerComponent"],
    _map_components_kml_layer_component__WEBPACK_IMPORTED_MODULE_15__["KmlLayerComponent"],
    _map_components_map_with_options_component__WEBPACK_IMPORTED_MODULE_8__["MapWithOptionsComponent"],
    _map_components_map_with_streetview_component__WEBPACK_IMPORTED_MODULE_24__["MapWithStreetviewComponent"],
    _map_components_map_change_multiple_properties_component__WEBPACK_IMPORTED_MODULE_25__["MapChangeMultiplePropertiesComponent"],
    _map_components_marker_ng_for_component__WEBPACK_IMPORTED_MODULE_5__["MarkerNgForComponent"],
    _map_components_multiple_map_component__WEBPACK_IMPORTED_MODULE_6__["MultipleMapComponent"],
    _map_components_places_auto_complete_component__WEBPACK_IMPORTED_MODULE_18__["PlacesAutoCompleteComponent"],
    _map_components_polygon_component__WEBPACK_IMPORTED_MODULE_7__["PolygonComponent"],
    _map_components_simple_circle_component__WEBPACK_IMPORTED_MODULE_3__["SimpleCircleComponent"],
    _map_components_simple_ground_overlay_component__WEBPACK_IMPORTED_MODULE_10__["SimpleGroundOverlayComponent"],
    _map_components_simple_info_window_component__WEBPACK_IMPORTED_MODULE_1__["SimpleInfoWindowComponent"],
    _map_components_simple_map_component__WEBPACK_IMPORTED_MODULE_2__["SimpleMapComponent"],
    _map_components_simple_marker_component__WEBPACK_IMPORTED_MODULE_4__["SimpleMarkerComponent"],
    _map_components_simple_polyline_component__WEBPACK_IMPORTED_MODULE_9__["SimplePolylineComponent"],
    _map_components_street_view_panorama_component__WEBPACK_IMPORTED_MODULE_17__["StreetViewPanoramaComponent"],
    _map_components_traffic_layer_component__WEBPACK_IMPORTED_MODULE_12__["TrafficLayerComponent"],
    _map_components_transit_layer_component__WEBPACK_IMPORTED_MODULE_13__["TransitLayerComponent"],
    _map_components_custom_marker_component__WEBPACK_IMPORTED_MODULE_22__["CustomMarkerComponent"],
    _map_components_custom_marker_ng_for_component__WEBPACK_IMPORTED_MODULE_23__["CustomMarkerNgForComponent"],
    _map_components_marker_with_custom_icon_component__WEBPACK_IMPORTED_MODULE_26__["MarkerWithCustomIconComponent"],
    _map_components_experiment_component__WEBPACK_IMPORTED_MODULE_27__["ExperimentComponent"]
];


/***/ }),

/***/ "./app/environments/environment.ts":
/*!*****************************************!*\
  !*** ./app/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
};


/***/ }),

/***/ "./app/main.ts":
/*!*********************!*\
  !*** ./app/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./app/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./app/map-components/bicycling-layer.component.ts":
/*!*********************************************************!*\
  !*** ./app/map-components/bicycling-layer.component.ts ***!
  \*********************************************************/
/*! exports provided: BicyclingLayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BicyclingLayerComponent", function() { return BicyclingLayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var BicyclingLayerComponent = /** @class */ (function () {
    function BicyclingLayerComponent(sc) {
        var _this = this;
        this.sc = sc;
        sc.getText('BicyclingLayerComponent').subscribe(function (text) { return _this.code = text; });
    }
    BicyclingLayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Bicycling Layer</h1>\n    <ngui-map zoom=\"14\" center=\"42.3726399, -71.1096528\">\n      <bicycling-layer></bicycling-layer>\n    </ngui-map>\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n    <pre class=\"prettyprint\">{{code}}</pre>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], BicyclingLayerComponent);
    return BicyclingLayerComponent;
}());



/***/ }),

/***/ "./app/map-components/custom-marker-ng-for.component.ts":
/*!**************************************************************!*\
  !*** ./app/map-components/custom-marker-ng-for.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomMarkerNgForComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMarkerNgForComponent", function() { return CustomMarkerNgForComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");




var CustomMarkerNgForComponent = /** @class */ (function () {
    function CustomMarkerNgForComponent(sc) {
        var _this = this;
        this.sc = sc;
        this.positions = [];
        this.count = 0;
        this.positions = this.getRandomMarkers();
        sc.getText('CustomMarkerNgForComponent').subscribe(function (text) { return _this.code = text; });
    }
    CustomMarkerNgForComponent.prototype.getRandomMarkers = function () {
        var randomLat, randomLng;
        var positions = [];
        for (var i = 0; i < 9; i++) {
            randomLat = Math.random() * (43.7399 - 43.7300) + 43.7300;
            randomLng = Math.random() * (-79.7600 - -79.7699) + -79.7699;
            positions.push([randomLat, randomLng]);
        }
        return positions;
    };
    CustomMarkerNgForComponent.prototype.showMarkersFromObservable = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.getRandomMarkers()) // Think this as http call
            .subscribe(function (positions) {
            _this.positions = positions;
        });
    };
    CustomMarkerNgForComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: "\n    <h1>Custom Marker With *ngFor</h1>\n    <ngui-map zoom=\"13\" center=\"Brampton, Canada\">\n      <custom-marker *ngFor=\"let pos of positions\" [position]=\"pos\">\n        <div class=\"custom-icon\">{{count}}</div>\n      </custom-marker>\n    </ngui-map>\n    <button (click)=\"positions = getRandomMarkers()\">Show Random Markers</button> <br/>\n    <button (click)=\"showMarkersFromObservable()\">Show Random Markers From Observable</button> <br/>\n    <button (click)=\"count = count + 1\">Increment</button> <br/>\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n    <pre class=\"prettyprint\">{{code}}</pre>\n  ",
            styles: [
                "\n      .custom-icon {\n        width: 30px;\n        height: 30px;\n        border-radius: 50%;\n        background-color:blue;\n        border: 2px solid white;\n        color:white;\n        font-size:20px;\n        text-align:center;\n      }\n    ",
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_3__["SourceCodeService"]])
    ], CustomMarkerNgForComponent);
    return CustomMarkerNgForComponent;
}());



/***/ }),

/***/ "./app/map-components/custom-marker.component.ts":
/*!*******************************************************!*\
  !*** ./app/map-components/custom-marker.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomMarkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMarkerComponent", function() { return CustomMarkerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var CustomMarkerComponent = /** @class */ (function () {
    function CustomMarkerComponent(sc) {
        var _this = this;
        this.sc = sc;
        sc.getText('CustomMarkerComponent').subscribe(function (text) { return _this.code = text; });
    }
    CustomMarkerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Custom Marker</h1>\n    <ngui-map center=\"Brampton, Canada\">\n      <custom-marker position=\"Brampton, Canada\">\n        <div><b>Hi, USA</b>\n          <img src=\"http://icons.iconarchive.com/icons/custom-icon-design/2014-world-cup-flags/32/USA-icon.png\" />\n        </div>\n      </custom-marker>\n      <marker position=\"Brampton, Canada\"></marker>\n    </ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], CustomMarkerComponent);
    return CustomMarkerComponent;
}());



/***/ }),

/***/ "./app/map-components/data-layer.component.ts":
/*!****************************************************!*\
  !*** ./app/map-components/data-layer.component.ts ***!
  \****************************************************/
/*! exports provided: DataLayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerComponent", function() { return DataLayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var DataLayerComponent = /** @class */ (function () {
    function DataLayerComponent(sc) {
        var _this = this;
        this.sc = sc;
        sc.getText('DataLayerComponent').subscribe(function (text) { return _this.code = text; });
    }
    DataLayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Data Layer</h1>\n    <ngui-map zoom=\"4\" center=\"-28, 137\">\n      <data-layer geoJsonUrl=\"https://storage.googleapis.com/mapsdevsite/json/google.json\"></data-layer>\n    </ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], DataLayerComponent);
    return DataLayerComponent;
}());



/***/ }),

/***/ "./app/map-components/directions-renderer.component.ts":
/*!*************************************************************!*\
  !*** ./app/map-components/directions-renderer.component.ts ***!
  \*************************************************************/
/*! exports provided: DirectionsRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsRendererComponent", function() { return DirectionsRendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngui_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngui/map */ "./src/index.ts");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");




var DirectionsRendererComponent = /** @class */ (function () {
    function DirectionsRendererComponent(cdr, sc) {
        var _this = this;
        this.cdr = cdr;
        this.sc = sc;
        this.direction = {
            origin: 'penn station, new york, ny',
            destination: '260 Broadway New York NY 10007',
            travelMode: 'WALKING'
        };
        sc.getText('DirectionsRendererComponent').subscribe(function (text) { return _this.code = text; });
    }
    DirectionsRendererComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.directionsRendererDirective['initialized$'].subscribe(function (directionsRenderer) {
            _this.directionsRenderer = directionsRenderer;
        });
    };
    DirectionsRendererComponent.prototype.directionsChanged = function () {
        this.directionsResult = this.directionsRenderer.getDirections();
        this.cdr.detectChanges();
    };
    DirectionsRendererComponent.prototype.showDirection = function () {
        this.directionsRendererDirective['showDirections'](this.direction);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ngui_map__WEBPACK_IMPORTED_MODULE_2__["DirectionsRenderer"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ngui_map__WEBPACK_IMPORTED_MODULE_2__["DirectionsRenderer"])
    ], DirectionsRendererComponent.prototype, "directionsRendererDirective", void 0);
    DirectionsRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Directions Renderer</h1>\n    <div id=\"floating-panel\">\n    <b>Start: </b>\n    <select [ngModel]=\"direction.origin\"\n     (ngModelChange)=\"direction.origin = $event; showDirection()\">\n      <option [ngValue]=\"'penn station, new york, ny'\">Penn Station</option>\n      <option [ngValue]=\"'grand central station, new york, ny'\">Grand Central Station</option>\n    </select>\n    <b>End: </b>\n    <select [ngModel]=\"direction.destination\"\n     (ngModelChange)=\"direction.destination = $event; showDirection()\">\n      <option [ngValue]=\"'260 Broadway New York NY 10007'\">City Hall</option>\n      <option [ngValue]=\"'W 49th St & 5th Ave, New York, NY 10020'\">Rockefeller Center</option>\n    </select>\n    </div>\n    {{direction | json}}\n    <ngui-map zoom=\"13\" center=\"40.771, -73.974\">\n      <directions-renderer\n        [suppressMarkers]=\"true\"\n        [draggable]=\"true\"\n        panel=\"#my-panel\"\n        (directions_changed)=\"directionsChanged()\"\n        [directions-request]=\"direction\">\n      </directions-renderer>\n    </ngui-map>\n    <div id=\"my-panel\"></div>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _source_code_service__WEBPACK_IMPORTED_MODULE_3__["SourceCodeService"]])
    ], DirectionsRendererComponent);
    return DirectionsRendererComponent;
}());



/***/ }),

/***/ "./app/map-components/drawing-manager.component.ts":
/*!*********************************************************!*\
  !*** ./app/map-components/drawing-manager.component.ts ***!
  \*********************************************************/
/*! exports provided: DrawingManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingManagerComponent", function() { return DrawingManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngui_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngui/map */ "./src/index.ts");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");




var DrawingManagerComponent = /** @class */ (function () {
    function DrawingManagerComponent(sc) {
        var _this = this;
        this.sc = sc;
        sc.getText('DrawingManagerComponent').subscribe(function (text) { return _this.code = text; });
    }
    DrawingManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.drawingManager['initialized$'].subscribe(function (dm) {
            google.maps.event.addListener(dm, 'overlaycomplete', function (event) {
                if (event.type !== google.maps.drawing.OverlayType.MARKER) {
                    dm.setDrawingMode(null);
                    google.maps.event.addListener(event.overlay, 'click', function (e) {
                        _this.selectedOverlay = event.overlay;
                        _this.selectedOverlay.setEditable(true);
                    });
                    _this.selectedOverlay = event.overlay;
                }
            });
        });
    };
    DrawingManagerComponent.prototype.deleteSelectedOverlay = function () {
        if (this.selectedOverlay) {
            this.selectedOverlay.setMap(null);
            delete this.selectedOverlay;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ngui_map__WEBPACK_IMPORTED_MODULE_2__["DrawingManager"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ngui_map__WEBPACK_IMPORTED_MODULE_2__["DrawingManager"])
    ], DrawingManagerComponent.prototype, "drawingManager", void 0);
    DrawingManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Drawing Manager</h1>\n    <ngui-map zoom=\"8\" center=\"-34.397, 150.644\">\n      <drawing-manager\n        [drawingMode]=\"'marker'\"\n        [drawingControl]=\"true\"\n        [drawingControlOptions]=\"{\n          position: 2,\n          drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']\n         }\"\n        [circleOptions]=\"{\n          fillColor: '#ffff00',\n          fillOpacity: 1,\n          strokeWeight: 5,\n          editable: true,\n          zIndex: 1\n        }\"></drawing-manager>\n    </ngui-map>\n    selectedOverlay: {{selectedOverlay}} <br/>\n    <button (click)=\"deleteSelectedOverlay()\">Delete Selected Overlay</button>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_3__["SourceCodeService"]])
    ], DrawingManagerComponent);
    return DrawingManagerComponent;
}());



/***/ }),

/***/ "./app/map-components/event-arguments.component.ts":
/*!*********************************************************!*\
  !*** ./app/map-components/event-arguments.component.ts ***!
  \*********************************************************/
/*! exports provided: EventArgumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventArgumentsComponent", function() { return EventArgumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var EventArgumentsComponent = /** @class */ (function () {
    function EventArgumentsComponent(sc) {
        var _this = this;
        this.sc = sc;
        this.positions = [];
        sc.getText('EventArgumentsComponent').subscribe(function (text) { return _this.code = text; });
    }
    EventArgumentsComponent.prototype.onClick = function (event) {
        if (event instanceof MouseEvent)
            return;
        this.positions.push(event.latLng);
        event.target.panTo(event.latLng);
    };
    EventArgumentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Event Arguments</h1>\n    Implementation of https://developers.google.com/maps/documentation/javascript/examples/event-arguments\n    <br/><br/>\n    Click the map to add marker and center it.\n    <ngui-map zoom=\"4\" center=\"-25.363882, 131.044922\" (click)=\"onClick($event)\">\n      <marker *ngFor=\"let pos of positions\" [position]=\"pos\"></marker>\n    </ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], EventArgumentsComponent);
    return EventArgumentsComponent;
}());



/***/ }),

/***/ "./app/map-components/experiment.component.ts":
/*!****************************************************!*\
  !*** ./app/map-components/experiment.component.ts ***!
  \****************************************************/
/*! exports provided: ExperimentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentComponent", function() { return ExperimentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var ExperimentComponent = /** @class */ (function () {
    function ExperimentComponent(cdr, sc) {
        var _this = this;
        this.cdr = cdr;
        this.sc = sc;
        this.positions = [];
        this.onHeatmapInitialized = function (evt) {
            _this.heatmap = evt;
            var randomLat = Math.random() * 0.0099 + 43.7250;
            var randomLon = Math.random() * 0.0099 + -79.7699;
            var values = [];
            values.push(new google.maps.LatLng(randomLat, randomLon));
            values.push(new google.maps.LatLng(randomLat, randomLon));
            values.push(new google.maps.LatLng(randomLat, randomLon));
            values.push(new google.maps.LatLng(randomLat, randomLon));
            values.push(new google.maps.LatLng(randomLat, randomLon));
            values.push(new google.maps.LatLng(randomLat, randomLon));
            values.push(new google.maps.LatLng(randomLat, randomLon));
            values.push(new google.maps.LatLng(randomLat, randomLon));
            values.push(new google.maps.LatLng(randomLat, randomLon));
            _this.heatmap.setData(values);
            _this.positions.push([43.72723792568628, -79.7657115210506]);
            _this.positions.push([randomLat, randomLon]);
            console.log(_this.positions);
            _this.cdr.detectChanges();
        };
        sc.getText('ExperimentComponent').subscribe(function (text) { return _this.code = text; });
    }
    ExperimentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h3 *ngFor=\"let pos of positions\">{{pos}}</h3>\n    <ngui-map zoom=\"14\" center=\"Brampton, Canada\">\n      <heatmap-layer dissipating=\"true\" radius=\"25\"\n        (initialized$)=\"onHeatmapInitialized($event)\"></heatmap-layer>\n      <marker *ngFor=\"let pos of positions\" [position]=\"pos\"></marker>\n    </ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], ExperimentComponent);
    return ExperimentComponent;
}());



/***/ }),

/***/ "./app/map-components/heatmap-layer.component.ts":
/*!*******************************************************!*\
  !*** ./app/map-components/heatmap-layer.component.ts ***!
  \*******************************************************/
/*! exports provided: HeatmapLayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapLayerComponent", function() { return HeatmapLayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngui_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngui/map */ "./src/index.ts");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");




var HeatmapLayerComponent = /** @class */ (function () {
    function HeatmapLayerComponent(sc) {
        var _this = this;
        this.sc = sc;
        this.points = [];
        sc.getText('HeatmapLayerComponent').subscribe(function (text) { return _this.code = text; });
    }
    HeatmapLayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heatmapLayer['initialized$'].subscribe(function (heatmap) {
            _this.points = [
                new google.maps.LatLng(37.782551, -122.445368),
                new google.maps.LatLng(37.782745, -122.444586),
                new google.maps.LatLng(37.782842, -122.443688)
            ];
            _this.heatmap = heatmap;
            _this.map = _this.heatmap.getMap();
        });
    };
    HeatmapLayerComponent.prototype.toggleHeatmap = function () {
        this.heatmap.setMap(this.heatmap.getMap() ? null : this.map);
    };
    HeatmapLayerComponent.prototype.changeGradient = function () {
        var gradient = [
            'rgba(0, 255, 255, 0)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 191, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 63, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 223, 1)',
            'rgba(0, 0, 191, 1)',
            'rgba(0, 0, 159, 1)',
            'rgba(0, 0, 127, 1)',
            'rgba(63, 0, 91, 1)',
            'rgba(127, 0, 63, 1)',
            'rgba(191, 0, 31, 1)',
            'rgba(255, 0, 0, 1)'
        ];
        this.heatmap.set('gradient', this.heatmap.get('gradient') ? null : gradient);
    };
    HeatmapLayerComponent.prototype.changeRadius = function () {
        this.heatmap.set('radius', this.heatmap.get('radius') ? null : 20);
    };
    HeatmapLayerComponent.prototype.changeOpacity = function () {
        this.heatmap.set('opacity', this.heatmap.get('opacity') ? null : 0.2);
    };
    HeatmapLayerComponent.prototype.loadRandomPoints = function () {
        this.points = [];
        for (var i = 0; i < 9; i++) {
            this.addPoint();
        }
    };
    HeatmapLayerComponent.prototype.addPoint = function () {
        var randomLat = Math.random() * 0.0099 + 37.782551;
        var randomLng = Math.random() * 0.0099 + -122.445368;
        var latlng = new google.maps.LatLng(randomLat, randomLng);
        this.points.push(latlng);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ngui_map__WEBPACK_IMPORTED_MODULE_2__["HeatmapLayer"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ngui_map__WEBPACK_IMPORTED_MODULE_2__["HeatmapLayer"])
    ], HeatmapLayerComponent.prototype, "heatmapLayer", void 0);
    HeatmapLayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Heatmap Layer</h1>\n    <ngui-map zoom=\"13\" center=\"37.782551, -122.445368\">\n      <div id=\"floating-panel\">\n        <button (click)=\"toggleHeatmap()\">Toggle Heatmap</button>\n        <button (click)=\"changeGradient()\">Change gradient</button>\n        <button (click)=\"changeRadius()\">Change radius</button>\n        <button (click)=\"changeOpacity()\">Change opacity</button>\n      </div>\n      <heatmap-layer [data]=\"points\"></heatmap-layer>\n    </ngui-map>\n    <button (click)=\"loadRandomPoints()\">Load Random Points</button>\n    <br/>\n    <button (click)=\"addPoint()\">Add Point</button>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  ",
            styles: ["\n    #floating-panel {\n      position: absolute;\n      background-color: #fff;\n      border: 1px solid #999;\n      font-family: 'Roboto','sans-serif';\n      left: 25%;\n      line-height: 30px;\n      padding: 5px;\n      padding-left: 10px;\n      text-align: center;\n      top: 10px;\n      z-index: 5;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_3__["SourceCodeService"]])
    ], HeatmapLayerComponent);
    return HeatmapLayerComponent;
}());



/***/ }),

/***/ "./app/map-components/kml-layer.component.ts":
/*!***************************************************!*\
  !*** ./app/map-components/kml-layer.component.ts ***!
  \***************************************************/
/*! exports provided: KmlLayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerComponent", function() { return KmlLayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var KmlLayerComponent = /** @class */ (function () {
    function KmlLayerComponent(sc) {
        var _this = this;
        this.sc = sc;
        sc.getText('KmlLayerComponent').subscribe(function (text) { return _this.code = text; });
    }
    KmlLayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Kml Layer</h1>\n    <ngui-map zoom=\"11\" center=\"41.876, -87.624\">\n      <kml-layer url=\"http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml\"></kml-layer>\n    </ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], KmlLayerComponent);
    return KmlLayerComponent;
}());



/***/ }),

/***/ "./app/map-components/map-change-multiple-properties.component.ts":
/*!************************************************************************!*\
  !*** ./app/map-components/map-change-multiple-properties.component.ts ***!
  \************************************************************************/
/*! exports provided: MapChangeMultiplePropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapChangeMultiplePropertiesComponent", function() { return MapChangeMultiplePropertiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var MapChangeMultiplePropertiesComponent = /** @class */ (function () {
    function MapChangeMultiplePropertiesComponent(sc) {
        var _this = this;
        this.sc = sc;
        this.mapProps = {
            center: 'some-invalid-location',
            zoom: 11
        };
        this.mapInfo = {};
        sc.getText('MapChangeMultiplePropertiesComponent').subscribe(function (text) { return _this.code = text; });
    }
    MapChangeMultiplePropertiesComponent.prototype.onIdle = function (event) {
        var map = event.target;
        this.mapInfo.center = [map.getCenter().lat(), map.getCenter().lng()];
        this.mapInfo.zoom = map.getZoom();
    };
    MapChangeMultiplePropertiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Map Change Multiple Properties</h1>\n    <ngui-map\n      [center]=\"mapProps.center\"\n      [zoom]=\"mapProps.zoom\"\n      (idle)=\"onIdle($event)\"\n      [geoFallbackCenter]=\"[42.99, -77.79]\"></ngui-map>\n    <div> center: {{mapInfo.center}},  zoom: {{mapInfo.zoom}} </div>\n    <button id=\"change-props\"\n      (click)=\"mapProps = {center: 'New York', zoom: 8}\">\n      Change Multiple Map Props\n    </button>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], MapChangeMultiplePropertiesComponent);
    return MapChangeMultiplePropertiesComponent;
}());



/***/ }),

/***/ "./app/map-components/map-with-options.component.ts":
/*!**********************************************************!*\
  !*** ./app/map-components/map-with-options.component.ts ***!
  \**********************************************************/
/*! exports provided: MapWithOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapWithOptionsComponent", function() { return MapWithOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var MapWithOptionsComponent = /** @class */ (function () {
    function MapWithOptionsComponent(sc) {
        var _this = this;
        this.sc = sc;
        this.allOptions = {
            center: { lat: 36.964, lng: -122.015 },
            zoom: 18,
            mapTypeId: 'satellite',
            tilt: 45
        };
        sc.getText('MapWithOptionsComponent').subscribe(function (text) { return _this.code = text; });
    }
    MapWithOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Map With Options - satellite view</h1>\n    <ngui-map [options]=\"allOptions\" center=\"36.964, -122.015\"></ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], MapWithOptionsComponent);
    return MapWithOptionsComponent;
}());



/***/ }),

/***/ "./app/map-components/map-with-streetview.component.ts":
/*!*************************************************************!*\
  !*** ./app/map-components/map-with-streetview.component.ts ***!
  \*************************************************************/
/*! exports provided: MapWithStreetviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapWithStreetviewComponent", function() { return MapWithStreetviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var MapWithStreetviewComponent = /** @class */ (function () {
    function MapWithStreetviewComponent(sc) {
        var _this = this;
        this.sc = sc;
        sc.getText('MapWithStreetviewComponent').subscribe(function (text) { return _this.code = text; });
    }
    MapWithStreetviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Map With StreetView</h1>\n    <ngui-map\n      center=\"40.6892,-74.0444\"\n      zoom=\"18\"\n      map-type-id=\"MapTypeId.SATELLITE\"\n      tilt=\"45\"\n      streetView=\"StreetViewPanorama(document.querySelector('div#sv'), {position:new google.maps.LatLng(40.688738,-74.043871)})\">\n    </ngui-map>\n    <div id=\"sv\"></div>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  ",
            styles: ["#sv {width: 50%; height: 300px} ngui-map {width: 50%; float: left}"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], MapWithStreetviewComponent);
    return MapWithStreetviewComponent;
}());



/***/ }),

/***/ "./app/map-components/marker-ng-for.component.ts":
/*!*******************************************************!*\
  !*** ./app/map-components/marker-ng-for.component.ts ***!
  \*******************************************************/
/*! exports provided: MarkerNgForComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerNgForComponent", function() { return MarkerNgForComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");




var MarkerNgForComponent = /** @class */ (function () {
    function MarkerNgForComponent(sc) {
        var _this = this;
        this.sc = sc;
        this.positions = [];
        this.positions = this.getRandomMarkers();
        sc.getText('MarkerNgForComponent').subscribe(function (text) { return _this.code = text; });
    }
    MarkerNgForComponent.prototype.getRandomMarkers = function () {
        var randomLat, randomLng;
        var positions = [];
        for (var i = 0; i < 9; i++) {
            randomLat = Math.random() * (43.7399 - 43.7300) + 43.7300;
            randomLng = Math.random() * (-79.7600 - -79.7699) + -79.7699;
            positions.push([randomLat, randomLng]);
        }
        return positions;
    };
    MarkerNgForComponent.prototype.showMarkersFromObservable = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.getRandomMarkers()) // Think this as http call
            .subscribe(function (positions) {
            _this.positions = positions;
        });
    };
    MarkerNgForComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: "\n    <h1>Marker Wigh *ngFor</h1>\n    <ngui-map zoom=\"13\" center=\"Brampton, Canada\">\n      <marker *ngFor=\"let pos of positions\" [position]=\"pos\"></marker>\n    </ngui-map>\n    <button (click)=\"positions = getRandomMarkers()\">Show Random Markers</button> <br/>\n    <button (click)=\"showMarkersFromObservable()\">Show Random Markers From Observable</button>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_3__["SourceCodeService"]])
    ], MarkerNgForComponent);
    return MarkerNgForComponent;
}());



/***/ }),

/***/ "./app/map-components/marker-with-custom-icon.component.ts":
/*!*****************************************************************!*\
  !*** ./app/map-components/marker-with-custom-icon.component.ts ***!
  \*****************************************************************/
/*! exports provided: MarkerWithCustomIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerWithCustomIconComponent", function() { return MarkerWithCustomIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var MarkerWithCustomIconComponent = /** @class */ (function () {
    function MarkerWithCustomIconComponent(sc) {
        var _this = this;
        this.sc = sc;
        sc.getText('MarkerWithCustomIconComponent').subscribe(function (text) { return _this.code = text; });
    }
    MarkerWithCustomIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Marker With Custom Icon</h1>\n    <ngui-map center=\"Brampton, Canada\">\n      <marker position=\"Brampton, Canada\"\n       [icon]=\"{\n         url: 'https://plnkr.co/img/plunker.png',\n         anchor: [16,16],\n         size: [32,32],\n         scaledSize: [32,32]\n       }\">\n      </marker>\n    </ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], MarkerWithCustomIconComponent);
    return MarkerWithCustomIconComponent;
}());



/***/ }),

/***/ "./app/map-components/multiple-map.component.ts":
/*!******************************************************!*\
  !*** ./app/map-components/multiple-map.component.ts ***!
  \******************************************************/
/*! exports provided: MultipleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleMapComponent", function() { return MultipleMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var MultipleMapComponent = /** @class */ (function () {
    function MultipleMapComponent(sc) {
        var _this = this;
        this.sc = sc;
        this.positions = [];
        sc.getText('MultipleMapComponent').subscribe(function (text) { return _this.code = text; });
    }
    MultipleMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Simple Map 1</h1>\n    <ngui-map zoom=\"13\" center=\"Brampton, Canada\" scrollwheel=\"false\">\n      <marker *ngFor=\"let pos of positions\" [position]=\"pos\"></marker>\n    </ngui-map>\n\n    <h1>Simple Map 2</h1>\n    <ngui-map center=\"43.99, -78.79\"></ngui-map>\n\n    <h1>Simple Map 3</h1>\n    <ngui-map center=\"Brampton, Canada\" scrollwheel=\"false\">\n      <marker position=\"Brampton, Canada\"></marker>\n    </ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], MultipleMapComponent);
    return MultipleMapComponent;
}());



/***/ }),

/***/ "./app/map-components/places-auto-complete.component.ts":
/*!**************************************************************!*\
  !*** ./app/map-components/places-auto-complete.component.ts ***!
  \**************************************************************/
/*! exports provided: PlacesAutoCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesAutoCompleteComponent", function() { return PlacesAutoCompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var PlacesAutoCompleteComponent = /** @class */ (function () {
    function PlacesAutoCompleteComponent(ref, sc) {
        var _this = this;
        this.ref = ref;
        this.sc = sc;
        this.address = {};
        sc.getText('PlacesAutoCompleteComponent').subscribe(function (text) { return _this.code = text; });
    }
    PlacesAutoCompleteComponent.prototype.initialized = function (autocomplete) {
        this.autocomplete = autocomplete;
    };
    PlacesAutoCompleteComponent.prototype.placeChanged = function (place) {
        this.center = place.geometry.location;
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            this.address[addressType] = place.address_components[i].long_name;
        }
        this.ref.detectChanges();
    };
    PlacesAutoCompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Place Autocomplete Address Form</h1>\n    <input places-auto-complete\n      (place_changed)=\"placeChanged($event)\"\n      [types]=\"['geocode']\" />\n    <p>\n    <ngui-map [center]=\"center\"></ngui-map>\n    place: {{address | json}}\n    </p>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], PlacesAutoCompleteComponent);
    return PlacesAutoCompleteComponent;
}());



/***/ }),

/***/ "./app/map-components/polygon.component.ts":
/*!*************************************************!*\
  !*** ./app/map-components/polygon.component.ts ***!
  \*************************************************/
/*! exports provided: PolygonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonComponent", function() { return PolygonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var PolygonComponent = /** @class */ (function () {
    function PolygonComponent(sc) {
        var _this = this;
        this.sc = sc;
        this.paths = [[
                { lat: 25.774, lng: -80.190 },
                { lat: 18.466, lng: -66.118 },
                { lat: 32.321, lng: -64.757 }
            ], [
                { lat: 28.745, lng: -70.579 },
                { lat: 29.570, lng: -67.514 },
                { lat: 27.339, lng: -66.668 }
            ]];
        sc.getText('PolygonComponent').subscribe(function (text) { return _this.code = text; });
    }
    PolygonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Polygon</h1>\n    <ngui-map zoom=\"5\" center=\"24.886, -70.268\" scrollwheel=\"false\">\n      <polygon [editable]=\"true\"\n        [paths]=\"paths\"\n        [strokeColor]=\"'#FFC107'\"\n        [strokeOpacity]=\"0.8\"\n        [strokeWeight]=\"2\"\n        [fillColor]=\"'#FFC107'\"\n        [fillOpacity]=\"0.35\"></polygon>\n    </ngui-map>\n    <ngui-map zoom=\"5\" center=\"24.886, -70.268\" scrollwheel=\"false\">\n      <map-polygon [editable]=\"true\"\n        [paths]=\"paths\"\n        [strokeColor]=\"'#FFC107'\"\n        [strokeOpacity]=\"0.8\"\n        [strokeWeight]=\"2\"\n        [fillColor]=\"'#FFC107'\"\n        [fillOpacity]=\"0.35\"></map-polygon>\n    </ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], PolygonComponent);
    return PolygonComponent;
}());



/***/ }),

/***/ "./app/map-components/simple-circle.component.ts":
/*!*******************************************************!*\
  !*** ./app/map-components/simple-circle.component.ts ***!
  \*******************************************************/
/*! exports provided: SimpleCircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleCircleComponent", function() { return SimpleCircleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var SimpleCircleComponent = /** @class */ (function () {
    function SimpleCircleComponent(sc) {
        var _this = this;
        this.sc = sc;
        sc.getText('SimpleCircleComponent').subscribe(function (text) { return _this.code = text; });
    }
    SimpleCircleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Simple Circle</h1>\n    <ngui-map center=\"Brampton, Canada\" scrollwheel=\"false\">\n      <circle center=\"Brampton, Canada\"\n        [strokeColor]=\"'#FF0000'\"\n        [strokeOpacity]=\"0.8\"\n        [strokeWeight]=\"2\"\n        [editable]=\"true\"\n        radius=\"100\"\n        draggable=\"true\"></circle>\n    </ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], SimpleCircleComponent);
    return SimpleCircleComponent;
}());



/***/ }),

/***/ "./app/map-components/simple-ground-overlay.component.ts":
/*!***************************************************************!*\
  !*** ./app/map-components/simple-ground-overlay.component.ts ***!
  \***************************************************************/
/*! exports provided: SimpleGroundOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleGroundOverlayComponent", function() { return SimpleGroundOverlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var SimpleGroundOverlayComponent = /** @class */ (function () {
    function SimpleGroundOverlayComponent(sc) {
        var _this = this;
        this.sc = sc;
        this.bounds = { north: 40.773941, south: 40.712216, east: -74.12544, west: -74.22655 };
        sc.getText('SimpleGroundOverlayComponent').subscribe(function (text) { return _this.code = text; });
    }
    SimpleGroundOverlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Simple Ground Overlay</h1>\n    <ngui-map zoom=\"12\" center=\"40.740, -74.18\" scrollwheel=\"false\">\n      <ground-overlay\n        url=\"https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg\"\n        [bounds]=\"bounds\"\n        [opacity]=\"0.8\"\n        [clickable]=\"true\"></ground-overlay>\n    </ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], SimpleGroundOverlayComponent);
    return SimpleGroundOverlayComponent;
}());



/***/ }),

/***/ "./app/map-components/simple-info-window.component.ts":
/*!************************************************************!*\
  !*** ./app/map-components/simple-info-window.component.ts ***!
  \************************************************************/
/*! exports provided: SimpleInfoWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleInfoWindowComponent", function() { return SimpleInfoWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var SimpleInfoWindowComponent = /** @class */ (function () {
    function SimpleInfoWindowComponent(sc) {
        var _this = this;
        this.sc = sc;
        this.marker = {
            display: true,
            lat: null,
            lng: null,
        };
        sc.getText('SimpleInfoWindowComponent').subscribe(function (text) { return _this.code = text; });
    }
    SimpleInfoWindowComponent.prototype.clicked = function (_a) {
        var marker = _a.target;
        this.marker.lat = marker.getPosition().lat();
        this.marker.lng = marker.getPosition().lng();
        marker.nguiMapComponent.openInfoWindow('iw', marker);
    };
    SimpleInfoWindowComponent.prototype.hideMarkerInfo = function () {
        this.marker.display = !this.marker.display;
    };
    SimpleInfoWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Simple InfoWindow</h1>\n    <ngui-map center=\"Brampton, Canada\">\n      <marker position=\"Brampton, Canada\" draggable=\"true\" (click)=\"clicked($event)\"></marker>\n      <info-window id=\"iw\">\n        <div *ngIf=\"marker.display\">\n          lat: {{ marker.lat }}, lng: {{ marker.lng }}\n        </div>\n        <button (click)=\"hideMarkerInfo()\">Hide Info</button>\n      </info-window>\n    </ngui-map>\n    Please click the marker to see a info window\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], SimpleInfoWindowComponent);
    return SimpleInfoWindowComponent;
}());



/***/ }),

/***/ "./app/map-components/simple-map.component.ts":
/*!****************************************************!*\
  !*** ./app/map-components/simple-map.component.ts ***!
  \****************************************************/
/*! exports provided: SimpleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleMapComponent", function() { return SimpleMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var SimpleMapComponent = /** @class */ (function () {
    function SimpleMapComponent(sc) {
        var _this = this;
        this.sc = sc;
        sc.getText('SimpleMapComponent').subscribe(function (text) { return _this.code = text; });
    }
    SimpleMapComponent.prototype.onClick = function (event) {
        if (event instanceof MouseEvent) {
            return false;
        }
        console.log('map is clicked', event, event.target);
    };
    SimpleMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Simple Map</h1>\n    <ngui-map center=\"Brampton, Canada\"\n      (mapClick)=\"onClick($event)\"\n      [fullscreenControl]=\"true\"\n      [fullscreenControlOptions]=\"{position: 'TOP_RIGHT'}\"></ngui-map>\n    \"center\" can be an;\n    <ul>\n      <li>lat/lng array e.g., [42.99, -77.79]\n      <li> an address. e.g. Brampton, Canada\n      <li> or, none(for the current position)\n    </ul>\n    <ngui-map center=\"some-invalid-location\"\n      [geoFallbackCenter]=\"[42.99, -77.79]\"></ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], SimpleMapComponent);
    return SimpleMapComponent;
}());



/***/ }),

/***/ "./app/map-components/simple-marker.component.ts":
/*!*******************************************************!*\
  !*** ./app/map-components/simple-marker.component.ts ***!
  \*******************************************************/
/*! exports provided: SimpleMarkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleMarkerComponent", function() { return SimpleMarkerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var SimpleMarkerComponent = /** @class */ (function () {
    function SimpleMarkerComponent(sc) {
        var _this = this;
        this.sc = sc;
        sc.getText('SimpleMarkerComponent').subscribe(function (text) { return _this.code = text; });
    }
    SimpleMarkerComponent.prototype.log = function (event, str) {
        if (event instanceof MouseEvent) {
            return false;
        }
        console.log('event .... >', event, str);
    };
    SimpleMarkerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Simple Marker</h1>\n    <ngui-map center=\"Brampton, Canada\"\n      [zoomControlOptions]=\"{position: 'TOP_CENTER'}\"\n      [fullscreenControl]=\"true\"\n      [fullscreenControlOptions]=\"{position: 'TOP_CENTER'}\"\n      (click)=\"log($event)\"\n      [scrollwheel]=\"false\">\n      <marker position=\"will-fall-back-to-brampton-canada\"\n        [geoFallbackPosition]=\"[43.73154789999999, -79.7449296972229]\"\n        (dragstart)=\"log($event, 'dragstart')\"\n        (dragend)=\"log($event, 'dragend')\"\n        draggable=\"true\"></marker>\n    </ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], SimpleMarkerComponent);
    return SimpleMarkerComponent;
}());



/***/ }),

/***/ "./app/map-components/simple-polyline.component.ts":
/*!*********************************************************!*\
  !*** ./app/map-components/simple-polyline.component.ts ***!
  \*********************************************************/
/*! exports provided: SimplePolylineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePolylineComponent", function() { return SimplePolylineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var SimplePolylineComponent = /** @class */ (function () {
    function SimplePolylineComponent(sc) {
        var _this = this;
        this.sc = sc;
        this.path = [
            { lat: 37.772, lng: -122.214 },
            { lat: 21.291, lng: -157.821 },
            { lat: -18.142, lng: 178.431 },
            { lat: -27.467, lng: 153.027 }
        ];
        sc.getText('SimplePolylineComponent').subscribe(function (text) { return _this.code = text; });
    }
    SimplePolylineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Simple Polyine</h1>\n    <ngui-map zoom=\"3\" center=\"0, -180\" mapTypeId=\"terrain\" scrollwheel=\"false\">\n      <polyline [editable]=\"true\"\n        [path]=\"path\"\n        [geodesic]=\"true\"\n        [strokeColor]=\"'#FF0000'\"\n        [strokeOpacity]=\"1\"\n        [strokeWeight]=\"2\"></polyline>\n    </ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], SimplePolylineComponent);
    return SimplePolylineComponent;
}());



/***/ }),

/***/ "./app/map-components/street-view-panorama.component.ts":
/*!**************************************************************!*\
  !*** ./app/map-components/street-view-panorama.component.ts ***!
  \**************************************************************/
/*! exports provided: StreetViewPanoramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewPanoramaComponent", function() { return StreetViewPanoramaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var StreetViewPanoramaComponent = /** @class */ (function () {
    function StreetViewPanoramaComponent(sc) {
        var _this = this;
        this.sc = sc;
        sc.getText('StreetViewPanoramaComponent').subscribe(function (text) { return _this.code = text; });
    }
    StreetViewPanoramaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Simple StreetView</h1>\n    <ngui-map zoom=\"14\" center=\"37.869260, -122.254811\">\n      <street-view-panorama\n        position=\"37.869260, -122.254811\"\n        pov=\"{heading: 165, pitch: 0}\"\n        zoom=\"1\"\n      ></street-view-panorama>\n    </ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], StreetViewPanoramaComponent);
    return StreetViewPanoramaComponent;
}());



/***/ }),

/***/ "./app/map-components/traffic-layer.component.ts":
/*!*******************************************************!*\
  !*** ./app/map-components/traffic-layer.component.ts ***!
  \*******************************************************/
/*! exports provided: TrafficLayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLayerComponent", function() { return TrafficLayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var TrafficLayerComponent = /** @class */ (function () {
    function TrafficLayerComponent(sc) {
        var _this = this;
        this.sc = sc;
        sc.getText('TrafficLayerComponent').subscribe(function (text) { return _this.code = text; });
    }
    TrafficLayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Traffic Layer</h1>\n    <ngui-map zoom=\"13\" center=\"34.04924594193164, -118.24104309082031\">\n      <traffic-layer></traffic-layer>\n    </ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], TrafficLayerComponent);
    return TrafficLayerComponent;
}());



/***/ }),

/***/ "./app/map-components/transit-layer.component.ts":
/*!*******************************************************!*\
  !*** ./app/map-components/transit-layer.component.ts ***!
  \*******************************************************/
/*! exports provided: TransitLayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitLayerComponent", function() { return TransitLayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _source_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source-code.service */ "./app/source-code.service.ts");



var TransitLayerComponent = /** @class */ (function () {
    function TransitLayerComponent(sc) {
        var _this = this;
        this.sc = sc;
        sc.getText('TransitLayerComponent').subscribe(function (text) { return _this.code = text; });
    }
    TransitLayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>Transit Layer</h1>\n    <ngui-map zoom=\"13\" center=\"51.501904, -0.115871\">\n      <transit-layer></transit-layer>\n    </ngui-map>\n\n    <button (click)=\"sc.plnkr(code)\">See in plunker</button>\n\n    <pre class=\"prettyprint\">{{code}}</pre>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_source_code_service__WEBPACK_IMPORTED_MODULE_2__["SourceCodeService"]])
    ], TransitLayerComponent);
    return TransitLayerComponent;
}());



/***/ }),

/***/ "./app/source-code.service.ts":
/*!************************************!*\
  !*** ./app/source-code.service.ts ***!
  \************************************/
/*! exports provided: SourceCodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceCodeService", function() { return SourceCodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var create_plunker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! create-plunker */ "./node_modules/create-plunker/dist/umd/createPlunker.js");
/* harmony import */ var create_plunker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(create_plunker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var SourceCodeService = /** @class */ (function () {
    function SourceCodeService(http) {
        this.http = http;
    }
    SourceCodeService.prototype.getText = function (klassName) {
        var urlPrefix = 'https://raw.githubusercontent.com/ng2-ui/map/master/app/map-components';
        var fileName = klassName.
            replace('Directive', '.directive.ts').
            replace('Service', '.service.ts').
            replace('Component', '.component.ts').
            replace(/([A-Z])/g, function (_, $1) { return "-" + $1.toLowerCase(); }).
            replace(/^-/, '');
        var url = urlPrefix + "/" + fileName;
        return this.http.get(url, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return appComponentTsCode(res); }));
    };
    SourceCodeService.prototype.plnkr = function (code) {
        create_plunker__WEBPACK_IMPORTED_MODULE_3__["Plunker"].create()
            .setDescription('Angular2+ ng2-ui map demo')
            .addIndexHeadLine("<title>Ngui Map</title>")
            .addIndexHeadLine("<meta charset=\"UTF-8\">")
            .addIndexHeadLine("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">")
            .addIndexHeadLine("<script src=\"https://unpkg.com/core-js/client/shim.min.js\"></script>")
            .addIndexHeadLine("<script src=\"https://unpkg.com/zone.js@0.6.25?main=browser\"></script>")
            .addIndexHeadLine("<script src=\"https://unpkg.com/reflect-metadata@0.1.3\"></script>")
            .addIndexHeadLine("<script src=\"https://unpkg.com/systemjs@0.19.27/dist/system.src.js\"></script>")
            .addFile({ name: 'app.component.ts', contents: appComponentTsCode(code) })
            .addFile({ name: 'main.ts', contents: mainTsCode() })
            .addFile({ name: 'systemjs.config.js', contents: systemjsConfigJsCode() })
            .addFile({ name: 'tsconfig.json', contents: tsconfigJsonCode() })
            .addIndexHeadLine("<script> System.import('app');</script>")
            .setIndexBody("<my-app>Loading...</my-app>")
            .save();
    };
    SourceCodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SourceCodeService);
    return SourceCodeService;
}());

function tsconfigJsonCode() {
    return "\n{\n  \"compilerOptions\": {\n    \"target\": \"es5\",\n    \"module\": \"commonjs\",\n    \"moduleResolution\": \"node\",\n    \"sourceMap\": true,\n    \"emitDecoratorMetadata\": true,\n    \"experimentalDecorators\": true,\n    \"removeComments\": false,\n    \"noImplicitAny\": true,\n    \"suppressImplicitAnyIndexErrors\": true\n  }\n}\n  ";
}
function mainTsCode() {
    return "\n// The browser platform with a compiler\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\n\nimport { NgModule }       from '@angular/core';\nimport { BrowserModule }  from '@angular/platform-browser';\nimport { FormsModule, ReactiveFormsModule }    from \"@angular/forms\";\n\nimport { AppComponent }   from './app.component';\n\n//noinspection TypeScriptCheckImport\nimport { NguiMapModule } from '@ngui/map';\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    FormsModule,\n    ReactiveFormsModule,\n    NguiMapModule.forRoot({\n      apiUrl: 'https://maps.google.com/maps/api/js?libraries=visualization,places,drawing'\n    })\n  ],\n  declarations: [AppComponent],\n  bootstrap: [ AppComponent ]\n})\nexport class AppModule { }\n\n// Compile and launch the module\nplatformBrowserDynamic().bootstrapModule(AppModule);\n  ";
}
function appComponentTsCode(code) {
    return code
        .replace("@Component({", "@Component({\n  selector: 'my-app',")
        .replace("\nimport { SourceCodeService } from '../source-code.service';", '')
        .replace("<pre class=\"prettyprint\">{{code}}</pre>", '')
        .replace(/sc\.getText\(['"A-Za-z0-9]+\)\.subscribe\(text => this\.code = text\);/, '')
        .replace(/[, public]*sc: SourceCodeService\)/, ')')
        .replace(/<code>[\s\S]*<\/code>/, '')
        .replace("code: string;", '')
        .replace(/constructor\s*\(\)\s*{\s*}/m, '')
        .replace("<button (click)=\"sc.plnkr(code)\">See in plunker</button>", '')
        .replace(/export class [A-Za-z0-9]+Component/, 'export class AppComponent')
        .replace(/^\s*\n/gm, '\n');
}
function systemjsConfigJsCode() {
    return "\nSystem.config({\n  // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER\n  transpiler: 'ts',\n  typescriptOptions: {\n    tsconfig: true\n  },\n  meta: {\n    'typescript': {\n      \"exports\": \"ts\"\n    }\n  },\n  paths: {     // paths serve as alias\n    'npm:': 'https://unpkg.com/'\n  },\n  map: {      // map tells the System loader where to look for things\n    app: '.', // our app is within the app folder\n\n    // angular bundles\n    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',\n    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',\n    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',\n    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',\n    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',\n    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',\n    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',\n    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',\n    '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',\n\n    // other libraries\n    'rxjs':                       'npm:rxjs',\n    'ts':                         'npm:plugin-typescript@4.0.10/lib/plugin.js',\n    'typescript':                 'npm:typescript@2.0.2/lib/typescript.js',\n\n    '@ngui/map': 'npm:@ngui/map/dist/bundles/map.umd.js'\n  },\n  packages: {   // packages tells the System loader how to load when no filename and/or no extension\n    app: { main: './main.ts', defaultExtension: 'ts' },\n    rxjs: { defaultExtension: 'js' }\n  }\n});\n  ";
}


/***/ }),

/***/ "./src/components/custom-marker.ts":
/*!*****************************************!*\
  !*** ./src/components/custom-marker.ts ***!
  \*****************************************/
/*! exports provided: CustomMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMarker", function() { return CustomMarker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_ngui_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ngui-map */ "./src/services/ngui-map.ts");
/* harmony import */ var _ngui_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngui-map.component */ "./src/components/ngui-map.component.ts");






var INPUTS = [
    'position'
];
// to avoid DOM event conflicts map_*
var OUTPUTS = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged',
    'map_click', 'map_mouseover', 'map_mouseout', 'map_mouseup', 'map_mousedown', 'map_drag', 'map_dragend'
];
/**
 * Wrapper to a create extend OverlayView at runtime, only after google maps is loaded.
 * Otherwise throws a google is unknown error.
 */
function getCustomMarkerOverlayView(htmlEl, position) {
    var CustomMarkerOverlayView = /** @class */ (function (_super) {
        tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomMarkerOverlayView, _super);
        function CustomMarkerOverlayView(htmlEl, position) {
            var _this = _super.call(this) || this;
            _this.visible = true;
            _this.setPosition = function (position) {
                _this.htmlEl.style.visibility = 'hidden';
                if (position.constructor.name === 'Array') {
                    _this.position = new google.maps.LatLng(position[0], position[1]);
                }
                else if (typeof position === 'string') {
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ address: position }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            console.log('setting custom marker position from address', position);
                            _this.setPosition(results[0].geometry.location);
                        }
                        else {
                            console.log('Error in custom marker geo coding, position');
                        }
                    });
                }
                else if (position && typeof position.lng === 'function') {
                    _this.position = position;
                }
                if (_this.getProjection() && typeof _this.position.lng === 'function') {
                    var positionOnMap_1 = function () {
                        var projection = _this.getProjection();
                        if (!projection) {
                            return;
                        }
                        var posPixel = projection.fromLatLngToDivPixel(_this.position);
                        var x = Math.round(posPixel.x - (_this.htmlEl.offsetWidth / 2));
                        var y = Math.round(posPixel.y - _this.htmlEl.offsetHeight / 2);
                        _this.htmlEl.style.left = x + 'px';
                        _this.htmlEl.style.top = y + 'px';
                        _this.htmlEl.style.visibility = 'visible';
                    };
                    if (_this.htmlEl.offsetWidth && _this.htmlEl.offsetHeight) {
                        positionOnMap_1();
                    }
                    else {
                        setTimeout(function () { return positionOnMap_1(); });
                    }
                }
            };
            _this.htmlEl = htmlEl;
            _this.position = position;
            return _this;
        }
        CustomMarkerOverlayView.prototype.onAdd = function () {
            this.getPanes().overlayMouseTarget.appendChild(this.htmlEl);
            // required for correct display inside google maps container
            this.htmlEl.style.position = 'absolute';
        };
        CustomMarkerOverlayView.prototype.draw = function () {
            this.setPosition(this.position);
            this.setZIndex(this.zIndex);
            this.setVisible(this.visible);
        };
        CustomMarkerOverlayView.prototype.onRemove = function () {
            //
        };
        CustomMarkerOverlayView.prototype.getPosition = function () {
            return this.position;
        };
        CustomMarkerOverlayView.prototype.setZIndex = function (zIndex) {
            zIndex && (this.zIndex = zIndex); /* jshint ignore:line */
            this.htmlEl.style.zIndex = this.zIndex;
        };
        CustomMarkerOverlayView.prototype.setVisible = function (visible) {
            this.htmlEl.style.display = visible ? 'inline-block' : 'none';
            this.visible = visible;
        };
        return CustomMarkerOverlayView;
    }(google.maps.OverlayView));
    return new CustomMarkerOverlayView(htmlEl, position);
}
var CustomMarker = /** @class */ (function () {
    function CustomMarker(nguiMapComponent, elementRef, nguiMap) {
        var _this = this;
        this.nguiMapComponent = nguiMapComponent;
        this.elementRef = elementRef;
        this.nguiMap = nguiMap;
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); });
    }
    // Initialize this map object when map is ready
    CustomMarker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    CustomMarker.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    CustomMarker.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        this.nguiMapComponent.removeFromMapObjectGroup('CustomMarker', this.mapObject);
        if (this.mapObject) {
            this.nguiMap.clearObjectEvents(OUTPUTS, this, 'mapObject');
        }
    };
    CustomMarker.prototype.initialize = function () {
        var _this = this;
        console.log('custom-marker is being initialized');
        this.el = this.elementRef.nativeElement;
        this.mapObject = getCustomMarkerOverlayView(this.el, this['position']);
        this.mapObject.setMap(this.nguiMapComponent.map);
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(OUTPUTS, this, 'mapObject');
        // update object when input changes
        this.inputChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (changes) { return _this.nguiMap.updateGoogleObject(_this.mapObject, changes); })).subscribe();
        this.nguiMapComponent.addToMapObjectGroup('CustomMarker', this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CustomMarker.prototype, "initialized$", void 0);
    CustomMarker = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngui-map > custom-marker',
            inputs: INPUTS,
            outputs: OUTPUTS,
            template: "\n    <ng-content></ng-content>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngui_map_component__WEBPACK_IMPORTED_MODULE_5__["NguiMapComponent"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_ngui_map__WEBPACK_IMPORTED_MODULE_4__["NguiMap"]])
    ], CustomMarker);
    return CustomMarker;
}());



/***/ }),

/***/ "./src/components/info-window.ts":
/*!***************************************!*\
  !*** ./src/components/info-window.ts ***!
  \***************************************/
/*! exports provided: InfoWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindow", function() { return InfoWindow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_ngui_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ngui-map */ "./src/services/ngui-map.ts");
/* harmony import */ var _ngui_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngui-map.component */ "./src/components/ngui-map.component.ts");






var INPUTS = [
    'content', 'disableAutoPan', 'maxWidth', 'pixelOffset', 'position', 'zIndex', 'options'
];
var OUTPUTS = [
    'closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'
];
var InfoWindow = /** @class */ (function () {
    function InfoWindow(elementRef, nguiMap, nguiMapComponent) {
        var _this = this;
        this.elementRef = elementRef;
        this.nguiMap = nguiMap;
        this.nguiMapComponent = nguiMapComponent;
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.objectOptions = {};
        this.inputChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); });
    }
    // Initialize this map object when map is ready
    InfoWindow.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    InfoWindow.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    // called when map is ready
    InfoWindow.prototype.initialize = function () {
        var _this = this;
        console.log('infowindow is being initialized');
        this.objectOptions = this.nguiMapComponent.optionBuilder.googlizeAllInputs(INPUTS, this);
        this.infoWindow = new google.maps.InfoWindow(this.objectOptions);
        this.infoWindow['mapObjectName'] = 'InfoWindow';
        console.log('INFOWINDOW objectOptions', this.objectOptions);
        // register infoWindow ids to NguiMap, so that it can be opened by id
        if (this.elementRef.nativeElement.id) {
            this.nguiMapComponent.infoWindows[this.elementRef.nativeElement.id] = this;
        }
        else {
            console.error('An InfoWindow must have an id. e.g. id="detail"');
        }
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(OUTPUTS, this, 'infoWindow');
        // update object when input changes
        this.inputChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (changes) { return _this.nguiMap.updateGoogleObject(_this.infoWindow, changes); })).subscribe();
        this.nguiMapComponent.addToMapObjectGroup('InfoWindow', this.infoWindow);
        this.initialized$.emit(this.infoWindow);
    };
    InfoWindow.prototype.open = function (anchor) {
        // set content and open it
        this.infoWindow.setContent(this.template.element.nativeElement);
        this.infoWindow.open(this.nguiMapComponent.map, anchor);
    };
    InfoWindow.prototype.close = function () {
        // check if infoWindow exists, and closes it
        if (this.infoWindow)
            this.infoWindow.close();
    };
    InfoWindow.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        if (this.infoWindow) {
            this.nguiMap.clearObjectEvents(OUTPUTS, this, 'infoWindow');
            delete this.infoWindow;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], InfoWindow.prototype, "initialized$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('template', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], InfoWindow.prototype, "template", void 0);
    InfoWindow = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngui-map > info-window',
            inputs: INPUTS,
            outputs: OUTPUTS,
            template: "<div #template><ng-content></ng-content></div>",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_ngui_map__WEBPACK_IMPORTED_MODULE_4__["NguiMap"],
            _ngui_map_component__WEBPACK_IMPORTED_MODULE_5__["NguiMapComponent"]])
    ], InfoWindow);
    return InfoWindow;
}());



/***/ }),

/***/ "./src/components/ngui-map.component.ts":
/*!**********************************************!*\
  !*** ./src/components/ngui-map.component.ts ***!
  \**********************************************/
/*! exports provided: NguiMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiMapComponent", function() { return NguiMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_option_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/option-builder */ "./src/services/option-builder.ts");
/* harmony import */ var _services_navigator_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navigator-geolocation */ "./src/services/navigator-geolocation.ts");
/* harmony import */ var _services_geo_coder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/geo-coder */ "./src/services/geo-coder.ts");
/* harmony import */ var _services_ngui_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ngui-map */ "./src/services/ngui-map.ts");
/* harmony import */ var _services_api_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api-loader */ "./src/services/api-loader.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/util */ "./src/services/util.ts");










var INPUTS = [
    'backgroundColor', 'center', 'disableDefaultUI', 'disableDoubleClickZoom', 'draggable', 'draggableCursor',
    'draggingCursor', 'heading', 'keyboardShortcuts', 'mapMaker', 'mapTypeControl', 'mapTypeId', 'maxZoom', 'minZoom',
    'noClear', 'overviewMapControl', 'panControl', 'panControlOptions', 'rotateControl', 'scaleControl', 'scrollwheel',
    'streetView', 'styles', 'tilt', 'zoom', 'streetViewControl', 'zoomControl', 'zoomControlOptions', 'mapTypeControlOptions',
    'overviewMapControlOptions', 'rotateControlOptions', 'scaleControlOptions', 'streetViewControlOptions', 'fullscreenControl', 'fullscreenControlOptions',
    'options',
    // ngui-map-specific inputs
    'geoFallbackCenter'
];
var OUTPUTS = [
    'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'heading_changed', 'idle',
    'typeid_changed', 'mousemove', 'mouseout', 'mouseover', 'projection_changed', 'resize', 'rightclick',
    'tilesloaded', 'tile_changed', 'zoom_changed',
    // to avoid DOM event conflicts
    'mapClick', 'mapMouseover', 'mapMouseout', 'mapMousemove', 'mapDrag', 'mapDragend', 'mapDragstart'
];
var NguiMapComponent = /** @class */ (function () {
    function NguiMapComponent(optionBuilder, elementRef, geolocation, geoCoder, nguiMap, apiLoader, zone) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.geolocation = geolocation;
        this.geoCoder = geoCoder;
        this.nguiMap = nguiMap;
        this.apiLoader = apiLoader;
        this.zone = zone;
        this.mapReady$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapOptions = {};
        this.inputChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        // map objects by group
        this.infoWindows = {};
        // map has been fully initialized
        this.mapIdledOnce = false;
        this.initializeMapAfterDisplayed = false;
        apiLoader.load();
        // all outputs needs to be initialized,
        // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
        OUTPUTS.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); });
    }
    NguiMapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.apiLoaderSub = this.apiLoader.api$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe(function () { return _this.initializeMap(); });
    };
    NguiMapComponent.prototype.ngAfterViewChecked = function () {
        if (this.initializeMapAfterDisplayed && this.el && this.el.offsetWidth > 0) {
            this.initializeMap();
        }
    };
    NguiMapComponent.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    NguiMapComponent.prototype.initializeMap = function () {
        var _this = this;
        this.el = this.elementRef.nativeElement.querySelector('.google-map');
        if (this.el && this.el.offsetWidth === 0) {
            this.initializeMapAfterDisplayed = true;
            return;
        }
        this.initializeMapAfterDisplayed = false;
        this.mapOptions = this.optionBuilder.googlizeAllInputs(INPUTS, this);
        console.log('ngui-map mapOptions', this.mapOptions);
        this.mapOptions.zoom = this.mapOptions.zoom || 15;
        typeof this.mapOptions.center === 'string' && (delete this.mapOptions.center);
        this.zone.runOutsideAngular(function () {
            _this.map = new google.maps.Map(_this.el, _this.mapOptions);
            _this.map['mapObjectName'] = 'NguiMapComponent';
            if (!_this.mapOptions.center) {
                _this.setCenter();
            }
            // set google events listeners and emits to this outputs listeners
            _this.nguiMap.setObjectEvents(OUTPUTS, _this, 'map');
            _this.map.addListener('idle', function () {
                if (!_this.mapIdledOnce) {
                    _this.mapIdledOnce = true;
                    setTimeout(function () {
                        _this.mapReady$.emit(_this.map);
                    });
                }
            });
            // update map when input changes
            _this.inputChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (changes) { return _this.nguiMap.updateGoogleObject(_this.map, changes); })).subscribe();
            if (typeof window !== 'undefined' && window['nguiMapRef']) {
                // expose map object for test and debugging on (<any>window)
                window['nguiMapRef'].map = _this.map;
            }
        });
    };
    NguiMapComponent.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this.geolocation.getCurrentPosition().subscribe(function (position) {
                console.log('setting map center from current location');
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.map.setCenter(latLng);
            }, function (error) {
                console.error('ngui-map: Error finding the current position');
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            });
        }
        else if (typeof this['center'] === 'string') {
            this.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                console.log('setting map center from address', _this['center']);
                _this.map.setCenter(results[0].geometry.location);
            }, function (error) {
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            });
        }
    };
    NguiMapComponent.prototype.openInfoWindow = function (id, anchor) {
        this.infoWindows[id].open(anchor);
    };
    NguiMapComponent.prototype.closeInfoWindow = function (id) {
        // if infoWindow for id exists, close the infoWindow
        if (this.infoWindows[id])
            this.infoWindows[id].close();
    };
    NguiMapComponent.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        if (this.el && !this.initializeMapAfterDisplayed) {
            this.nguiMap.clearObjectEvents(OUTPUTS, this, 'map');
        }
        if (this.apiLoaderSub) {
            this.apiLoaderSub.unsubscribe();
        }
    };
    // map.markers, map.circles, map.heatmapLayers.. etc
    NguiMapComponent.prototype.addToMapObjectGroup = function (mapObjectName, mapObject) {
        var groupName = Object(_services_util__WEBPACK_IMPORTED_MODULE_9__["toCamelCase"])(mapObjectName.toLowerCase()) + 's'; // e.g. markers
        this.map[groupName] = this.map[groupName] || [];
        this.map[groupName].push(mapObject);
    };
    NguiMapComponent.prototype.removeFromMapObjectGroup = function (mapObjectName, mapObject) {
        var groupName = Object(_services_util__WEBPACK_IMPORTED_MODULE_9__["toCamelCase"])(mapObjectName.toLowerCase()) + 's'; // e.g. markers
        if (this.map && this.map[groupName]) {
            var index = this.map[groupName].indexOf(mapObject);
            console.log('index', mapObject, index);
            (index > -1) && this.map[groupName].splice(index, 1);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NguiMapComponent.prototype, "mapReady$", void 0);
    NguiMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngui-map',
            providers: [_services_ngui_map__WEBPACK_IMPORTED_MODULE_5__["NguiMap"], _services_option_builder__WEBPACK_IMPORTED_MODULE_2__["OptionBuilder"], _services_geo_coder__WEBPACK_IMPORTED_MODULE_4__["GeoCoder"], _services_navigator_geolocation__WEBPACK_IMPORTED_MODULE_3__["NavigatorGeolocation"]],
            styles: ["\n    ngui-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
            inputs: INPUTS,
            outputs: OUTPUTS,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: "\n    <div class=\"google-map\"></div>\n    <ng-content></ng-content>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_option_builder__WEBPACK_IMPORTED_MODULE_2__["OptionBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_navigator_geolocation__WEBPACK_IMPORTED_MODULE_3__["NavigatorGeolocation"],
            _services_geo_coder__WEBPACK_IMPORTED_MODULE_4__["GeoCoder"],
            _services_ngui_map__WEBPACK_IMPORTED_MODULE_5__["NguiMap"],
            _services_api_loader__WEBPACK_IMPORTED_MODULE_6__["NgMapApiLoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], NguiMapComponent);
    return NguiMapComponent;
}());



/***/ }),

/***/ "./src/directives/base-map-directive.ts":
/*!**********************************************!*\
  !*** ./src/directives/base-map-directive.ts ***!
  \**********************************************/
/*! exports provided: BaseMapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseMapDirective", function() { return BaseMapDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/util */ "./src/services/util.ts");



var BaseMapDirective = /** @class */ (function () {
    function BaseMapDirective(nguiMapComponent, mapObjectName, inputs, outputs) {
        var _this = this;
        this.nguiMapComponent = nguiMapComponent;
        this.mapObjectName = mapObjectName;
        this.inputs = inputs;
        this.outputs = outputs;
        // this should be redefined on each childr directive
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._subscriptions = [];
        this.nguiMap = this.nguiMapComponent['nguiMap'];
        this.optionBuilder = this.nguiMapComponent['optionBuilder'];
        // all outputs must be initialized
        this.outputs.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); });
        this.mapObjectName = mapObjectName;
    }
    // Initialize this map object when map is ready
    BaseMapDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    // only called when map is ready
    BaseMapDirective.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        console.log(this.mapObjectName, 'initialization options', this.objectOptions);
        // will be set after geocoded
        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
        typeof this.objectOptions.center === 'string' && (delete this.objectOptions.center);
        // noinspection TypeScriptUnresolvedFunction
        if (this.libraryName) {
            if (!google.maps[this.libraryName]) {
                throw Object(_services_util__WEBPACK_IMPORTED_MODULE_2__["missingLibraryError"])(this.mapObjectName, this.libraryName);
            }
            this.mapObject = new google.maps[this.libraryName][this.mapObjectName](this.objectOptions);
        }
        else {
            this.mapObject = new google.maps[this.mapObjectName](this.objectOptions);
        }
        this.mapObject.setMap(this.nguiMapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        this.mapObject['nguiMapComponent'] = this.nguiMapComponent;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    // When input is changed, update object too.
    // e.g., when map center is changed by user, update center on the map
    BaseMapDirective.prototype.ngOnChanges = function (changes) {
        console.log(this.mapObjectName, 'objectOptions are changed', changes);
        this.nguiMap.updateGoogleObject(this.mapObject, changes);
    };
    // When destroyed, remove event listener, and delete this object to prevent memory leak
    BaseMapDirective.prototype.ngOnDestroy = function () {
        this._subscriptions.map(function (subscription) { return subscription.unsubscribe(); });
        this.nguiMapComponent.removeFromMapObjectGroup(this.mapObjectName, this.mapObject);
        if (this.mapObject) {
            this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BaseMapDirective.prototype, "initialized$", void 0);
    return BaseMapDirective;
}());



/***/ }),

/***/ "./src/directives/bicycling-layer.ts":
/*!*******************************************!*\
  !*** ./src/directives/bicycling-layer.ts ***!
  \*******************************************/
/*! exports provided: BicyclingLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BicyclingLayer", function() { return BicyclingLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_map_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-map-directive */ "./src/directives/base-map-directive.ts");
/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ngui-map.component */ "./src/components/ngui-map.component.ts");




var INPUTS = [];
var OUTPUTS = [];
var BicyclingLayer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BicyclingLayer, _super);
    function BicyclingLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'BicyclingLayer', INPUTS, OUTPUTS) || this;
    }
    BicyclingLayer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ngui-map > bicycling-layer',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__["NguiMapComponent"]])
    ], BicyclingLayer);
    return BicyclingLayer;
}(_base_map_directive__WEBPACK_IMPORTED_MODULE_2__["BaseMapDirective"]));



/***/ }),

/***/ "./src/directives/circle.ts":
/*!**********************************!*\
  !*** ./src/directives/circle.ts ***!
  \**********************************/
/*! exports provided: Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_map_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-map-directive */ "./src/directives/base-map-directive.ts");
/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ngui-map.component */ "./src/components/ngui-map.component.ts");




var INPUTS = [
    'center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
    // ngui-map specific inputs
    'geoFallbackCenter'
];
var OUTPUTS = [
    'centerChanged', 'click', 'dblclick', 'drag', 'dragend', 'dragstart',
    'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'radiusChanged', 'rightclick',
];
var Circle = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Circle, _super);
    function Circle(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'Circle', INPUTS, OUTPUTS) || this;
        _this.nguiMapComp = nguiMapComp;
        _this.objectOptions = {};
        return _this;
    }
    Circle.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setCenter();
    };
    Circle.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (center) {
                console.log('setting circle center from current location');
                var latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);
                _this.mapObject.setCenter(latLng);
            }, function (error) {
                console.error('ngui-map, error in finding the current position');
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
        else if (typeof this['center'] === 'string') {
            this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                console.log('setting circle center from address', _this['center']);
                _this.mapObject.setCenter(results[0].geometry.location);
            }, function (error) {
                console.error('ngui-map, error in finding location from', _this['center']);
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
    };
    Circle = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ngui-map>circle, ngui-map>map-circle',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__["NguiMapComponent"]])
    ], Circle);
    return Circle;
}(_base_map_directive__WEBPACK_IMPORTED_MODULE_2__["BaseMapDirective"]));



/***/ }),

/***/ "./src/directives/data-layer.ts":
/*!**************************************!*\
  !*** ./src/directives/data-layer.ts ***!
  \**************************************/
/*! exports provided: DataLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayer", function() { return DataLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_map_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-map-directive */ "./src/directives/base-map-directive.ts");
/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ngui-map.component */ "./src/components/ngui-map.component.ts");




var INPUTS = ['controlPosition', 'controls', 'drawingMode', 'featureFactory', 'style', 'geoJson', 'geoJsonUrl'];
var OUTPUTS = [
    'addfeature', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover',
    'mouseup', 'removefeature', 'removeproperty', 'rightclick', 'setgeometry', 'setproperty'
];
var DataLayer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DataLayer, _super);
    function DataLayer(nguiMapComponent) {
        return _super.call(this, nguiMapComponent, 'Data', INPUTS, OUTPUTS) || this;
    }
    // only called when map is ready
    DataLayer.prototype.initialize = function () {
        if (this['geoJson']) {
            // addGeoJson from an object
            console.log('this.geoJson', this['geoJson']);
            this.nguiMapComponent.map.data.addGeoJson(this['geoJson']);
        }
        else if (this['geoJsonUrl']) {
            // loadGeoJson from a URL
            console.log('this.geoJsonUrl', this['geoJsonUrl']);
            this.nguiMapComponent.map.data.loadGeoJson(this['geoJsonUrl']);
        }
        else {
            this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
            console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);
            this.nguiMapComponent.map.data.add(this.objectOptions);
        }
        // unlike others, data belongs to map. e.g., map.data.loadGeoJson(), map.data.add()
        this.mapObject = this.nguiMapComponent.map.data;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    DataLayer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ngui-map > data-layer',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__["NguiMapComponent"]])
    ], DataLayer);
    return DataLayer;
}(_base_map_directive__WEBPACK_IMPORTED_MODULE_2__["BaseMapDirective"]));



/***/ }),

/***/ "./src/directives/directions-renderer.ts":
/*!***********************************************!*\
  !*** ./src/directives/directions-renderer.ts ***!
  \***********************************************/
/*! exports provided: DirectionsRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsRenderer", function() { return DirectionsRenderer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_map_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-map-directive */ "./src/directives/base-map-directive.ts");
/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ngui-map.component */ "./src/components/ngui-map.component.ts");
/* harmony import */ var _services_navigator_geolocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/navigator-geolocation */ "./src/services/navigator-geolocation.ts");





var INPUTS = [
    'directions', 'draggable', 'hideRouteList', 'infoWindow', 'panel', 'markerOptions',
    'polylineOptions', 'preserveViewport', 'routeIndex', 'suppressBicyclingLayer',
    'suppressInfoWindows', 'suppressMarkers', 'suppressPolylines'
];
var OUTPUTS = ['directions_changed'];
var DirectionsRenderer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DirectionsRenderer, _super);
    function DirectionsRenderer(nguiMapComponent, geolocation) {
        var _this = _super.call(this, nguiMapComponent, 'DirectionsRenderer', INPUTS, OUTPUTS) || this;
        _this.geolocation = geolocation;
        return _this;
    }
    // only called when map is ready
    DirectionsRenderer.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        if (typeof this.objectOptions['panel'] === 'string') {
            this.objectOptions['panel'] = document.querySelector(this.objectOptions['panel']);
        }
        console.log('DirectionsRenderer', 'initialization options', this.objectOptions, this.directionsRequest);
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer(this.objectOptions);
        this.directionsRenderer.setMap(this.nguiMapComponent.map);
        // set google events listeners and emidirectionsRenderer to this outputs listeners
        this.showDirections(this.directionsRequest);
        this.nguiMap.setObjectEvents(this.outputs, this, 'directionsRenderer');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.directionsRenderer);
    };
    DirectionsRenderer.prototype.ngOnChanges = function (changes) {
        var newOptions = {};
        for (var key in changes) {
            if (this.inputs.indexOf(key) !== -1) {
                newOptions[key] = this.optionBuilder.googlize(changes[key].currentValue);
            }
        }
        if (changes['directionsRequest'] && this.directionsRenderer) {
            this.directionsService && this.showDirections(this.directionsRequest);
        }
    };
    DirectionsRenderer.prototype.showDirections = function (directionsRequest) {
        var _this = this;
        this.directionsService.route(directionsRequest, function (response, status) {
            // in some-case the callback is called during destroy component,
            // we should make sure directionsRenderer is still defined (cancelling `route` callback is not possible).
            if (!_this.directionsRenderer) {
                return;
            }
            if (status === google.maps.DirectionsStatus.OK) {
                _this.directionsRenderer.setDirections(response);
            }
            else {
                console.error('Directions request failed due to ' + status);
            }
        });
    };
    DirectionsRenderer.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.nguiMap.clearObjectEvents(this.outputs, this, 'directionsRenderer');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('directions-request'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DirectionsRenderer.prototype, "directionsRequest", void 0);
    DirectionsRenderer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ngui-map > directions-renderer',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__["NguiMapComponent"],
            _services_navigator_geolocation__WEBPACK_IMPORTED_MODULE_4__["NavigatorGeolocation"]])
    ], DirectionsRenderer);
    return DirectionsRenderer;
}(_base_map_directive__WEBPACK_IMPORTED_MODULE_2__["BaseMapDirective"]));



/***/ }),

/***/ "./src/directives/drawing-manager.ts":
/*!*******************************************!*\
  !*** ./src/directives/drawing-manager.ts ***!
  \*******************************************/
/*! exports provided: DrawingManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingManager", function() { return DrawingManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_map_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-map-directive */ "./src/directives/base-map-directive.ts");
/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ngui-map.component */ "./src/components/ngui-map.component.ts");




var INPUTS = [
    'options',
    'circleOptions', 'drawingControl', 'drawingControlOptions', 'drawingMode',
    'map', 'markerOptions', 'polygonOptions', 'polylineOptions', 'rectangleOptions'
];
var OUTPUTS = [
    'circlecomplete', 'markercomplete', 'overlaycomplete',
    'polygoncomplete', 'polylinecomplete', 'rectanglecomplete'
];
var DrawingManager = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DrawingManager, _super);
    function DrawingManager(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'DrawingManager', INPUTS, OUTPUTS) || this;
        _this.libraryName = 'drawing';
        return _this;
    }
    DrawingManager = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ngui-map > drawing-manager',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__["NguiMapComponent"]])
    ], DrawingManager);
    return DrawingManager;
}(_base_map_directive__WEBPACK_IMPORTED_MODULE_2__["BaseMapDirective"]));



/***/ }),

/***/ "./src/directives/ground-overlay.ts":
/*!******************************************!*\
  !*** ./src/directives/ground-overlay.ts ***!
  \******************************************/
/*! exports provided: GroundOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroundOverlay", function() { return GroundOverlay; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_map_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-map-directive */ "./src/directives/base-map-directive.ts");
/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ngui-map.component */ "./src/components/ngui-map.component.ts");




var INPUTS = ['url', 'bounds', 'clickable', 'opacity'];
var OUTPUTS = ['click', 'dblclick'];
var GroundOverlay = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroundOverlay, _super);
    function GroundOverlay(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'GroundOverlay', INPUTS, OUTPUTS) || this;
        _this.objectOptions = {};
        return _this;
    }
    // re-declaring initialize function. called when map is ready
    GroundOverlay.prototype.initialize = function () {
        // url, bounds are not the options of GroundOverlay
        this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this);
        console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);
        // noinspection TypeScriptUnresolvedFunction
        this.mapObject = new google.maps.GroundOverlay(this['url'], this['bounds'], this.objectOptions);
        this.mapObject.setMap(this.nguiMapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    GroundOverlay = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ngui-map > ground-overlay',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__["NguiMapComponent"]])
    ], GroundOverlay);
    return GroundOverlay;
}(_base_map_directive__WEBPACK_IMPORTED_MODULE_2__["BaseMapDirective"]));



/***/ }),

/***/ "./src/directives/heatmap-layer.ts":
/*!*****************************************!*\
  !*** ./src/directives/heatmap-layer.ts ***!
  \*****************************************/
/*! exports provided: HeatmapLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapLayer", function() { return HeatmapLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_map_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-map-directive */ "./src/directives/base-map-directive.ts");
/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ngui-map.component */ "./src/components/ngui-map.component.ts");




var INPUTS = ['data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options'];
var OUTPUTS = [];
var HeatmapLayer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HeatmapLayer, _super);
    function HeatmapLayer(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'HeatmapLayer', INPUTS, OUTPUTS) || this;
        _this.libraryName = 'visualization';
        return _this;
    }
    HeatmapLayer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ngui-map > heatmap-layer',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__["NguiMapComponent"]])
    ], HeatmapLayer);
    return HeatmapLayer;
}(_base_map_directive__WEBPACK_IMPORTED_MODULE_2__["BaseMapDirective"]));



/***/ }),

/***/ "./src/directives/kml-layer.ts":
/*!*************************************!*\
  !*** ./src/directives/kml-layer.ts ***!
  \*************************************/
/*! exports provided: KmlLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayer", function() { return KmlLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_map_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-map-directive */ "./src/directives/base-map-directive.ts");
/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ngui-map.component */ "./src/components/ngui-map.component.ts");




var INPUTS = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex', 'options'];
var OUTPUTS = ['click', 'defaultviewport_changed', 'status_changed'];
var KmlLayer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](KmlLayer, _super);
    function KmlLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'KmlLayer', INPUTS, OUTPUTS) || this;
    }
    KmlLayer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ngui-map > kml-layer',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__["NguiMapComponent"]])
    ], KmlLayer);
    return KmlLayer;
}(_base_map_directive__WEBPACK_IMPORTED_MODULE_2__["BaseMapDirective"]));



/***/ }),

/***/ "./src/directives/marker.ts":
/*!**********************************!*\
  !*** ./src/directives/marker.ts ***!
  \**********************************/
/*! exports provided: Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_map_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-map-directive */ "./src/directives/base-map-directive.ts");
/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ngui-map.component */ "./src/components/ngui-map.component.ts");




var INPUTS = [
    'anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity',
    'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex', 'options',
    // ngui-map specific inputs
    'geoFallbackPosition'
];
var OUTPUTS = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged'
];
var Marker = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Marker, _super);
    function Marker(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'Marker', INPUTS, OUTPUTS) || this;
        _this.nguiMapComp = nguiMapComp;
        _this.objectOptions = {};
        console.log('marker constructor', 9999999);
        return _this;
    }
    // Initialize this map object when map is ready
    Marker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    Marker.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setPosition();
    };
    Marker.prototype.setPosition = function () {
        var _this = this;
        if (!this['position']) {
            this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (position) {
                console.log('setting marker position from current location');
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.mapObject.setPosition(latLng);
            }, function (error) {
                console.error('ngui-map, error finding the current location');
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            }));
        }
        else if (typeof this['position'] === 'string') {
            this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({ address: this['position'] }).subscribe(function (results) {
                console.log('setting marker position from address', _this['position']);
                _this.mapObject.setPosition(results[0].geometry.location);
            }, function (error) {
                console.error('ngui-map, error finding the location from', _this['position']);
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            }));
        }
    };
    Marker = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ngui-map > marker',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__["NguiMapComponent"]])
    ], Marker);
    return Marker;
}(_base_map_directive__WEBPACK_IMPORTED_MODULE_2__["BaseMapDirective"]));



/***/ }),

/***/ "./src/directives/places-auto-complete.ts":
/*!************************************************!*\
  !*** ./src/directives/places-auto-complete.ts ***!
  \************************************************/
/*! exports provided: PlacesAutoComplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesAutoComplete", function() { return PlacesAutoComplete; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-loader */ "./src/services/api-loader.ts");
/* harmony import */ var _services_option_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/option-builder */ "./src/services/option-builder.ts");
/* harmony import */ var _services_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/util */ "./src/services/util.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var PlacesAutoComplete = /** @class */ (function () {
    function PlacesAutoComplete(optionBuilder, elementRef, apiLoader) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.apiLoader = apiLoader;
        this.place_changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // only called when map is ready
        this.initialize = function () {
            _this.objectOptions =
                _this.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], _this);
            console.log('places autocomplete options', _this.objectOptions);
            if (!google.maps.places) {
                throw Object(_services_util__WEBPACK_IMPORTED_MODULE_4__["missingLibraryError"])('PlacesAutoComplete', 'places');
            }
            _this.autocomplete = new google.maps.places.Autocomplete(_this.elementRef.nativeElement, _this.objectOptions);
            console.log('this.autocomplete', _this.autocomplete);
            _this.autocomplete.addListener('place_changed', function (place) {
                _this.place_changed.emit(_this.autocomplete.getPlace());
            });
            _this.initialized$.emit(_this.autocomplete);
        };
        apiLoader.load();
        apiLoader.api$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function () { return _this.initialize(); });
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlacesAutoComplete.prototype, "bounds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlacesAutoComplete.prototype, "componentRestrictions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PlacesAutoComplete.prototype, "types", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('place_changed'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PlacesAutoComplete.prototype, "place_changed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PlacesAutoComplete.prototype, "initialized$", void 0);
    PlacesAutoComplete = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[places-auto-complete]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_option_builder__WEBPACK_IMPORTED_MODULE_3__["OptionBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_api_loader__WEBPACK_IMPORTED_MODULE_2__["NgMapApiLoader"]])
    ], PlacesAutoComplete);
    return PlacesAutoComplete;
}());



/***/ }),

/***/ "./src/directives/polygon.ts":
/*!***********************************!*\
  !*** ./src/directives/polygon.ts ***!
  \***********************************/
/*! exports provided: Polygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_map_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-map-directive */ "./src/directives/base-map-directive.ts");
/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ngui-map.component */ "./src/components/ngui-map.component.ts");




var INPUTS = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'paths',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
];
var OUTPUTS = [
    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick',
];
var Polygon = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Polygon, _super);
    function Polygon(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'Polygon', INPUTS, OUTPUTS) || this;
    }
    Polygon = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ngui-map>polygon, ngui-map>map-polygon',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__["NguiMapComponent"]])
    ], Polygon);
    return Polygon;
}(_base_map_directive__WEBPACK_IMPORTED_MODULE_2__["BaseMapDirective"]));



/***/ }),

/***/ "./src/directives/polyline.ts":
/*!************************************!*\
  !*** ./src/directives/polyline.ts ***!
  \************************************/
/*! exports provided: Polyline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_map_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-map-directive */ "./src/directives/base-map-directive.ts");
/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ngui-map.component */ "./src/components/ngui-map.component.ts");




var INPUTS = [
    'clickable', 'draggable', 'editable', 'geodesic', 'icons', 'path', 'strokeColor',
    'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'options'
];
var OUTPUTS = [
    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'
];
var Polyline = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Polyline, _super);
    function Polyline(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'Polyline', INPUTS, OUTPUTS) || this;
    }
    Polyline = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ngui-map > polyline',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__["NguiMapComponent"]])
    ], Polyline);
    return Polyline;
}(_base_map_directive__WEBPACK_IMPORTED_MODULE_2__["BaseMapDirective"]));



/***/ }),

/***/ "./src/directives/street-view-panorama.ts":
/*!************************************************!*\
  !*** ./src/directives/street-view-panorama.ts ***!
  \************************************************/
/*! exports provided: StreetViewPanorama */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewPanorama", function() { return StreetViewPanorama; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_map_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-map-directive */ "./src/directives/base-map-directive.ts");
/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ngui-map.component */ "./src/components/ngui-map.component.ts");




var INPUTS = [
    'selector', 'options',
    'addressControl', 'addressControlOptions', 'clickToGo', 'disableDefaultUI', 'disableDoubleClickZoom',
    'enableCloseButton', 'fullscreenControl', 'fullscreenControlOptions', 'imageDateControl', 'linksControl',
    'motionTracking', 'motionTrackingControl', 'panControl', 'panControlOptions', 'pano',
    'position', 'pov', 'scrollwheel', 'showRoadLabels', 'visible', 'zoomControl', 'zoomControlOptions'
];
var OUTPUTS = [
    'closeclick', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'status_changed',
    'visible_changed', 'zoom_changed'
];
var StreetViewPanorama = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StreetViewPanorama, _super);
    function StreetViewPanorama(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'StreetViewPanorama', INPUTS, OUTPUTS) || this;
    }
    // only called when map is ready
    StreetViewPanorama.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);
        var element;
        if (this.objectOptions.selector) {
            // noinspection TypeScriptValidateTypes
            element = document.querySelector(this['selector']);
            delete this.objectOptions.selector;
        }
        else {
            element = this.nguiMapComponent.el;
        }
        // will be set after geocoded
        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
        this.mapObject = new google.maps[this.mapObjectName](element, this.objectOptions);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        this.mapObject['nguiMapComponent'] = this.nguiMapComponent;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    // When destroyed, remove event listener, and delete this object to prevent memory leak
    StreetViewPanorama.prototype.ngOnDestroy = function () {
        if (this.nguiMapComponent.el) {
            this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
        }
    };
    StreetViewPanorama = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ngui-map > street-view-panorama',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__["NguiMapComponent"]])
    ], StreetViewPanorama);
    return StreetViewPanorama;
}(_base_map_directive__WEBPACK_IMPORTED_MODULE_2__["BaseMapDirective"]));



/***/ }),

/***/ "./src/directives/traffic-layer.ts":
/*!*****************************************!*\
  !*** ./src/directives/traffic-layer.ts ***!
  \*****************************************/
/*! exports provided: TrafficLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLayer", function() { return TrafficLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_map_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-map-directive */ "./src/directives/base-map-directive.ts");
/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ngui-map.component */ "./src/components/ngui-map.component.ts");




var INPUTS = ['autoRefresh', 'options'];
var OUTPUTS = [];
var TrafficLayer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TrafficLayer, _super);
    function TrafficLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'TrafficLayer', INPUTS, OUTPUTS) || this;
    }
    TrafficLayer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ngui-map > traffic-layer',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__["NguiMapComponent"]])
    ], TrafficLayer);
    return TrafficLayer;
}(_base_map_directive__WEBPACK_IMPORTED_MODULE_2__["BaseMapDirective"]));



/***/ }),

/***/ "./src/directives/transit-layer.ts":
/*!*****************************************!*\
  !*** ./src/directives/transit-layer.ts ***!
  \*****************************************/
/*! exports provided: TransitLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitLayer", function() { return TransitLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_map_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-map-directive */ "./src/directives/base-map-directive.ts");
/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ngui-map.component */ "./src/components/ngui-map.component.ts");




var INPUTS = [];
var OUTPUTS = [];
var TransitLayer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TransitLayer, _super);
    function TransitLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'TransitLayer', INPUTS, OUTPUTS) || this;
    }
    TransitLayer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ngui-map > transit-layer',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_ngui_map_component__WEBPACK_IMPORTED_MODULE_3__["NguiMapComponent"]])
    ], TransitLayer);
    return TransitLayer;
}(_base_map_directive__WEBPACK_IMPORTED_MODULE_2__["BaseMapDirective"]));



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: BicyclingLayer, NavigatorGeolocation, OptionBuilder, NG_MAP_CONFIG_TOKEN, NgMapApiLoader, NgMapAsyncApiLoader, NgMapAsyncCallbackApiLoader, NguiMapComponent, InfoWindow, CustomMarker, Circle, DataLayer, DirectionsRenderer, DrawingManager, GeoCoder, GroundOverlay, HeatmapLayer, KmlLayer, Marker, NguiMap, PlacesAutoComplete, Polygon, Polyline, StreetViewPanorama, TrafficLayer, TransitLayer, NguiMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives_bicycling_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/bicycling-layer */ "./src/directives/bicycling-layer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BicyclingLayer", function() { return _directives_bicycling_layer__WEBPACK_IMPORTED_MODULE_0__["BicyclingLayer"]; });

/* harmony import */ var _services_navigator_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/navigator-geolocation */ "./src/services/navigator-geolocation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigatorGeolocation", function() { return _services_navigator_geolocation__WEBPACK_IMPORTED_MODULE_1__["NavigatorGeolocation"]; });

/* harmony import */ var _services_option_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/option-builder */ "./src/services/option-builder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionBuilder", function() { return _services_option_builder__WEBPACK_IMPORTED_MODULE_2__["OptionBuilder"]; });

/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/config */ "./src/services/config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NG_MAP_CONFIG_TOKEN", function() { return _services_config__WEBPACK_IMPORTED_MODULE_3__["NG_MAP_CONFIG_TOKEN"]; });

/* harmony import */ var _services_api_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api-loader */ "./src/services/api-loader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgMapApiLoader", function() { return _services_api_loader__WEBPACK_IMPORTED_MODULE_4__["NgMapApiLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgMapAsyncApiLoader", function() { return _services_api_loader__WEBPACK_IMPORTED_MODULE_4__["NgMapAsyncApiLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgMapAsyncCallbackApiLoader", function() { return _services_api_loader__WEBPACK_IMPORTED_MODULE_4__["NgMapAsyncCallbackApiLoader"]; });

/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ngui-map.component */ "./src/components/ngui-map.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NguiMapComponent", function() { return _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_5__["NguiMapComponent"]; });

/* harmony import */ var _components_info_window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/info-window */ "./src/components/info-window.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWindow", function() { return _components_info_window__WEBPACK_IMPORTED_MODULE_6__["InfoWindow"]; });

/* harmony import */ var _components_custom_marker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/custom-marker */ "./src/components/custom-marker.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomMarker", function() { return _components_custom_marker__WEBPACK_IMPORTED_MODULE_7__["CustomMarker"]; });

/* harmony import */ var _directives_circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/circle */ "./src/directives/circle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _directives_circle__WEBPACK_IMPORTED_MODULE_8__["Circle"]; });

/* harmony import */ var _directives_data_layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/data-layer */ "./src/directives/data-layer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataLayer", function() { return _directives_data_layer__WEBPACK_IMPORTED_MODULE_9__["DataLayer"]; });

/* harmony import */ var _directives_directions_renderer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/directions-renderer */ "./src/directives/directions-renderer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionsRenderer", function() { return _directives_directions_renderer__WEBPACK_IMPORTED_MODULE_10__["DirectionsRenderer"]; });

/* harmony import */ var _directives_drawing_manager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/drawing-manager */ "./src/directives/drawing-manager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawingManager", function() { return _directives_drawing_manager__WEBPACK_IMPORTED_MODULE_11__["DrawingManager"]; });

/* harmony import */ var _services_geo_coder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/geo-coder */ "./src/services/geo-coder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeoCoder", function() { return _services_geo_coder__WEBPACK_IMPORTED_MODULE_12__["GeoCoder"]; });

/* harmony import */ var _directives_ground_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/ground-overlay */ "./src/directives/ground-overlay.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroundOverlay", function() { return _directives_ground_overlay__WEBPACK_IMPORTED_MODULE_13__["GroundOverlay"]; });

/* harmony import */ var _directives_heatmap_layer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/heatmap-layer */ "./src/directives/heatmap-layer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeatmapLayer", function() { return _directives_heatmap_layer__WEBPACK_IMPORTED_MODULE_14__["HeatmapLayer"]; });

/* harmony import */ var _directives_kml_layer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/kml-layer */ "./src/directives/kml-layer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KmlLayer", function() { return _directives_kml_layer__WEBPACK_IMPORTED_MODULE_15__["KmlLayer"]; });

/* harmony import */ var _directives_marker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/marker */ "./src/directives/marker.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return _directives_marker__WEBPACK_IMPORTED_MODULE_16__["Marker"]; });

/* harmony import */ var _services_ngui_map__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/ngui-map */ "./src/services/ngui-map.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NguiMap", function() { return _services_ngui_map__WEBPACK_IMPORTED_MODULE_17__["NguiMap"]; });

/* harmony import */ var _directives_places_auto_complete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/places-auto-complete */ "./src/directives/places-auto-complete.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlacesAutoComplete", function() { return _directives_places_auto_complete__WEBPACK_IMPORTED_MODULE_18__["PlacesAutoComplete"]; });

/* harmony import */ var _directives_polygon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/polygon */ "./src/directives/polygon.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return _directives_polygon__WEBPACK_IMPORTED_MODULE_19__["Polygon"]; });

/* harmony import */ var _directives_polyline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/polyline */ "./src/directives/polyline.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return _directives_polyline__WEBPACK_IMPORTED_MODULE_20__["Polyline"]; });

/* harmony import */ var _directives_street_view_panorama__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/street-view-panorama */ "./src/directives/street-view-panorama.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StreetViewPanorama", function() { return _directives_street_view_panorama__WEBPACK_IMPORTED_MODULE_21__["StreetViewPanorama"]; });

/* harmony import */ var _directives_traffic_layer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/traffic-layer */ "./src/directives/traffic-layer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrafficLayer", function() { return _directives_traffic_layer__WEBPACK_IMPORTED_MODULE_22__["TrafficLayer"]; });

/* harmony import */ var _directives_transit_layer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/transit-layer */ "./src/directives/transit-layer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitLayer", function() { return _directives_transit_layer__WEBPACK_IMPORTED_MODULE_23__["TransitLayer"]; });

/* harmony import */ var _ngui_map_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ngui-map.module */ "./src/ngui-map.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NguiMapModule", function() { return _ngui_map_module__WEBPACK_IMPORTED_MODULE_24__["NguiMapModule"]; });




























/***/ }),

/***/ "./src/ngui-map.module.ts":
/*!********************************!*\
  !*** ./src/ngui-map.module.ts ***!
  \********************************/
/*! exports provided: NguiMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiMapModule", function() { return NguiMapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_option_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/option-builder */ "./src/services/option-builder.ts");
/* harmony import */ var _services_geo_coder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/geo-coder */ "./src/services/geo-coder.ts");
/* harmony import */ var _services_navigator_geolocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/navigator-geolocation */ "./src/services/navigator-geolocation.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/config */ "./src/services/config.ts");
/* harmony import */ var _services_api_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/api-loader */ "./src/services/api-loader.ts");
/* harmony import */ var _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ngui-map.component */ "./src/components/ngui-map.component.ts");
/* harmony import */ var _components_info_window__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/info-window */ "./src/components/info-window.ts");
/* harmony import */ var _components_custom_marker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/custom-marker */ "./src/components/custom-marker.ts");
/* harmony import */ var _directives_bicycling_layer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/bicycling-layer */ "./src/directives/bicycling-layer.ts");
/* harmony import */ var _directives_circle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/circle */ "./src/directives/circle.ts");
/* harmony import */ var _directives_data_layer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/data-layer */ "./src/directives/data-layer.ts");
/* harmony import */ var _directives_directions_renderer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/directions-renderer */ "./src/directives/directions-renderer.ts");
/* harmony import */ var _directives_drawing_manager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/drawing-manager */ "./src/directives/drawing-manager.ts");
/* harmony import */ var _directives_ground_overlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/ground-overlay */ "./src/directives/ground-overlay.ts");
/* harmony import */ var _directives_heatmap_layer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/heatmap-layer */ "./src/directives/heatmap-layer.ts");
/* harmony import */ var _directives_kml_layer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/kml-layer */ "./src/directives/kml-layer.ts");
/* harmony import */ var _directives_marker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/marker */ "./src/directives/marker.ts");
/* harmony import */ var _services_ngui_map__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/ngui-map */ "./src/services/ngui-map.ts");
/* harmony import */ var _directives_places_auto_complete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/places-auto-complete */ "./src/directives/places-auto-complete.ts");
/* harmony import */ var _directives_polygon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/polygon */ "./src/directives/polygon.ts");
/* harmony import */ var _directives_polyline__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/polyline */ "./src/directives/polyline.ts");
/* harmony import */ var _directives_street_view_panorama__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directives/street-view-panorama */ "./src/directives/street-view-panorama.ts");
/* harmony import */ var _directives_traffic_layer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/traffic-layer */ "./src/directives/traffic-layer.ts");
/* harmony import */ var _directives_transit_layer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./directives/transit-layer */ "./src/directives/transit-layer.ts");



























var COMPONENTS_DIRECTIVES = [
    _components_ngui_map_component__WEBPACK_IMPORTED_MODULE_8__["NguiMapComponent"], _components_info_window__WEBPACK_IMPORTED_MODULE_9__["InfoWindow"],
    _directives_marker__WEBPACK_IMPORTED_MODULE_19__["Marker"], _directives_circle__WEBPACK_IMPORTED_MODULE_12__["Circle"], _components_custom_marker__WEBPACK_IMPORTED_MODULE_10__["CustomMarker"], _directives_polygon__WEBPACK_IMPORTED_MODULE_22__["Polygon"], _components_info_window__WEBPACK_IMPORTED_MODULE_9__["InfoWindow"], _directives_polyline__WEBPACK_IMPORTED_MODULE_23__["Polyline"], _directives_ground_overlay__WEBPACK_IMPORTED_MODULE_16__["GroundOverlay"],
    _directives_transit_layer__WEBPACK_IMPORTED_MODULE_26__["TransitLayer"], _directives_traffic_layer__WEBPACK_IMPORTED_MODULE_25__["TrafficLayer"], _directives_heatmap_layer__WEBPACK_IMPORTED_MODULE_17__["HeatmapLayer"], _directives_bicycling_layer__WEBPACK_IMPORTED_MODULE_11__["BicyclingLayer"], _directives_kml_layer__WEBPACK_IMPORTED_MODULE_18__["KmlLayer"], _directives_data_layer__WEBPACK_IMPORTED_MODULE_13__["DataLayer"],
    _directives_street_view_panorama__WEBPACK_IMPORTED_MODULE_24__["StreetViewPanorama"], _directives_places_auto_complete__WEBPACK_IMPORTED_MODULE_21__["PlacesAutoComplete"], _directives_directions_renderer__WEBPACK_IMPORTED_MODULE_14__["DirectionsRenderer"],
    _directives_drawing_manager__WEBPACK_IMPORTED_MODULE_15__["DrawingManager"],
];
var NguiMapModule = /** @class */ (function () {
    function NguiMapModule() {
    }
    NguiMapModule_1 = NguiMapModule;
    NguiMapModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NguiMapModule_1,
            providers: [
                { provide: _services_config__WEBPACK_IMPORTED_MODULE_6__["NG_MAP_CONFIG_TOKEN"], useValue: config }
            ],
        };
    };
    NguiMapModule = NguiMapModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: COMPONENTS_DIRECTIVES,
            exports: [COMPONENTS_DIRECTIVES],
            providers: [
                _services_geo_coder__WEBPACK_IMPORTED_MODULE_4__["GeoCoder"],
                _services_navigator_geolocation__WEBPACK_IMPORTED_MODULE_5__["NavigatorGeolocation"],
                _services_ngui_map__WEBPACK_IMPORTED_MODULE_20__["NguiMap"],
                _services_option_builder__WEBPACK_IMPORTED_MODULE_3__["OptionBuilder"],
                { provide: _services_api_loader__WEBPACK_IMPORTED_MODULE_7__["NgMapApiLoader"], useClass: _services_api_loader__WEBPACK_IMPORTED_MODULE_7__["NgMapAsyncCallbackApiLoader"] },
            ]
        })
    ], NguiMapModule);
    return NguiMapModule;
    var NguiMapModule_1;
}());



/***/ }),

/***/ "./src/services/api-loader.ts":
/*!************************************!*\
  !*** ./src/services/api-loader.ts ***!
  \************************************/
/*! exports provided: NgMapApiLoader, NgMapAsyncCallbackApiLoader, NgMapAsyncApiLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMapApiLoader", function() { return NgMapApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMapAsyncCallbackApiLoader", function() { return NgMapAsyncCallbackApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMapAsyncApiLoader", function() { return NgMapAsyncApiLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./src/services/util.ts");





var NgMapApiLoader = /** @class */ (function () {
    function NgMapApiLoader(config) {
        this.config = config;
        this.api$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.config = this.config || { apiUrl: 'https://maps.google.com/maps/api/js' };
    }
    NgMapApiLoader.prototype.ngOnDestroy = function () {
        this.api$.complete();
    };
    return NgMapApiLoader;
}());

var NgMapAsyncCallbackApiLoader = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgMapAsyncCallbackApiLoader, _super);
    function NgMapAsyncCallbackApiLoader(zone, config) {
        var _this = _super.call(this, config) || this;
        _this.zone = zone;
        return _this;
    }
    NgMapAsyncCallbackApiLoader.prototype.load = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return;
        }
        if (Object(_util__WEBPACK_IMPORTED_MODULE_4__["isMapsApiLoaded"])()) {
            this.api$.next(google.maps);
        }
        else if (!document.querySelector('#ngui-map-api')) {
            window['nguiMapRef'] = window['nguiMapRef'] || [];
            window['nguiMapRef'].push({ zone: this.zone, componentFn: function () { return _this.api$.next(google.maps); } });
            this.addGoogleMapsApi();
        }
    };
    NgMapAsyncCallbackApiLoader.prototype.addGoogleMapsApi = function () {
        window['initNguiMap'] = window['initNguiMap'] || function () {
            window['nguiMapRef'].forEach(function (nguiMapRef) {
                nguiMapRef.zone.run(function () { nguiMapRef.componentFn(); });
            });
            window['nguiMapRef'].splice(0, window['nguiMapRef'].length);
        };
        var script = document.createElement('script');
        script.id = 'ngui-map-api';
        // script.src = "https://maps.google.com/maps/api/js?callback=initNguiMap";
        var apiUrl = this.config.apiUrl;
        apiUrl += apiUrl.indexOf('?') !== -1 ? '&' : '?';
        script.src = apiUrl + 'callback=initNguiMap';
        document.querySelector('body').appendChild(script);
    };
    NgMapAsyncCallbackApiLoader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_3__["NG_MAP_CONFIG_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], Object])
    ], NgMapAsyncCallbackApiLoader);
    return NgMapAsyncCallbackApiLoader;
}(NgMapApiLoader));

var NgMapAsyncApiLoader = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgMapAsyncApiLoader, _super);
    function NgMapAsyncApiLoader(config) {
        return _super.call(this, config) || this;
    }
    NgMapAsyncApiLoader.prototype.load = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return;
        }
        if (Object(_util__WEBPACK_IMPORTED_MODULE_4__["isMapsApiLoaded"])()) {
            this.api$.next(google.maps);
        }
        else if (!document.querySelector('#ngui-map-api')) {
            var script = document.createElement('script');
            script.id = 'ngui-map-api';
            script.async = true;
            script.onload = function () { return _this.api$.next(google.maps); };
            script.src = this.config.apiUrl;
            document.querySelector('body').appendChild(script);
        }
    };
    NgMapAsyncApiLoader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_3__["NG_MAP_CONFIG_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], NgMapAsyncApiLoader);
    return NgMapAsyncApiLoader;
}(NgMapApiLoader));



/***/ }),

/***/ "./src/services/config.ts":
/*!********************************!*\
  !*** ./src/services/config.ts ***!
  \********************************/
/*! exports provided: NG_MAP_CONFIG_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_MAP_CONFIG_TOKEN", function() { return NG_MAP_CONFIG_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NG_MAP_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NG_MAP_CONFIG_TOKEN');


/***/ }),

/***/ "./src/services/geo-coder.ts":
/*!***********************************!*\
  !*** ./src/services/geo-coder.ts ***!
  \***********************************/
/*! exports provided: GeoCoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoCoder", function() { return GeoCoder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-loader */ "./src/services/api-loader.ts");




/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */
var GeoCoder = /** @class */ (function () {
    function GeoCoder(apiLoader) {
        this.apiLoader = apiLoader;
        this.apiLoaderSubs = [];
    }
    GeoCoder.prototype.geocode = function (options) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            _this.apiLoaderSubs.push(_this.apiLoader.api$
                .subscribe(function () { return _this.requestGeocode(options, responseObserver); }));
        });
    };
    GeoCoder.prototype.ngOnDestroy = function () {
        this.apiLoaderSubs.map(function (sub) { return sub.unsubscribe(); });
    };
    GeoCoder.prototype.requestGeocode = function (options, observer) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode(options, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                observer.next(results);
                observer.complete();
            }
            else {
                observer.error(results);
            }
        });
    };
    GeoCoder = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_loader__WEBPACK_IMPORTED_MODULE_3__["NgMapApiLoader"]])
    ], GeoCoder);
    return GeoCoder;
}());



/***/ }),

/***/ "./src/services/navigator-geolocation.ts":
/*!***********************************************!*\
  !*** ./src/services/navigator-geolocation.ts ***!
  \***********************************************/
/*! exports provided: NavigatorGeolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorGeolocation", function() { return NavigatorGeolocation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



/**
 *  service for navigator.geolocation methods
 */
var NavigatorGeolocation = /** @class */ (function () {
    function NavigatorGeolocation() {
    }
    NavigatorGeolocation.prototype.getCurrentPosition = function (geoLocationOptions) {
        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    responseObserver.next(position);
                    responseObserver.complete();
                }, function (evt) { return responseObserver.error(evt); }, geoLocationOptions);
            }
            else {
                responseObserver.error('Browser Geolocation service failed.');
            }
        });
    };
    NavigatorGeolocation = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NavigatorGeolocation);
    return NavigatorGeolocation;
}());



/***/ }),

/***/ "./src/services/ngui-map.ts":
/*!**********************************!*\
  !*** ./src/services/ngui-map.ts ***!
  \**********************************/
/*! exports provided: NguiMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiMap", function() { return NguiMap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _option_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./option-builder */ "./src/services/option-builder.ts");
/* harmony import */ var _geo_coder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geo-coder */ "./src/services/geo-coder.ts");




/**
 * collection of map instance-related properties and methods
 */
var NguiMap = /** @class */ (function () {
    function NguiMap(geoCoder, optionBuilder, zone) {
        var _this = this;
        this.geoCoder = geoCoder;
        this.optionBuilder = optionBuilder;
        this.zone = zone;
        this.updateGoogleObject = function (object, changes) {
            var val, currentValue, setMethodName;
            if (object) {
                for (var key in changes) {
                    setMethodName = "set" + key.replace(/^[a-z]/, function (x) { return x.toUpperCase(); });
                    currentValue = changes[key].currentValue;
                    if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
                        // To preserve setMethod name in Observable callback, wrap it as a function, then execute
                        (function (setMethodName) {
                            _this.geoCoder.geocode({ address: currentValue }).subscribe(function (results) {
                                if (typeof object[setMethodName] === 'function') {
                                    object[setMethodName](results[0].geometry.location);
                                }
                                else {
                                    console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' +
                                        'Please check Google Maps API documentation, and use "setOptions" instead.');
                                }
                            });
                        })(setMethodName);
                    }
                    else {
                        val = _this.optionBuilder.googlize(currentValue);
                        if (typeof object[setMethodName] === 'function') {
                            object[setMethodName](val);
                        }
                        else {
                            console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' +
                                'Please check Google Maps API documentation, and use "setOptions" instead.');
                        }
                    }
                }
            }
        };
    }
    NguiMap.prototype.setObjectEvents = function (definedEvents, thisObj, prefix) {
        var _this = this;
        definedEvents.forEach(function (definedEvent) {
            var eventName = _this.getEventName(definedEvent), zone = _this.zone;
            zone.runOutsideAngular(function () {
                thisObj[prefix].addListener(eventName, function (event) {
                    var param = event ? event : {};
                    param.target = this;
                    zone.run(function () { return thisObj[definedEvent].emit(param); });
                });
            });
        });
    };
    NguiMap.prototype.clearObjectEvents = function (definedEvents, thisObj, prefix) {
        var _this = this;
        definedEvents.forEach(function (definedEvent) {
            var eventName = _this.getEventName(definedEvent);
            _this.zone.runOutsideAngular(function () {
                if (thisObj[prefix]) {
                    google.maps.event.clearListeners(thisObj[prefix], eventName);
                }
            });
        });
        if (thisObj[prefix]) {
            if (thisObj[prefix].setMap) {
                thisObj[prefix].setMap(null);
            }
            delete thisObj[prefix].nguiMapComponent;
            delete thisObj[prefix];
        }
    };
    NguiMap.prototype.getEventName = function (definedEvent) {
        return definedEvent
            .replace(/([A-Z])/g, function ($1) { return "_" + $1.toLowerCase(); }) // positionChanged -> position_changed
            .replace(/^map_/, ''); // map_click -> click  to avoid DOM conflicts
    };
    NguiMap = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_geo_coder__WEBPACK_IMPORTED_MODULE_3__["GeoCoder"],
            _option_builder__WEBPACK_IMPORTED_MODULE_2__["OptionBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], NguiMap);
    return NguiMap;
}());



/***/ }),

/***/ "./src/services/option-builder.ts":
/*!****************************************!*\
  !*** ./src/services/option-builder.ts ***!
  \****************************************/
/*! exports provided: OptionBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionBuilder", function() { return OptionBuilder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/services/util.ts");



/**
 * change any object to google object options
 * e.g. [1,2] -> new google.maps.LatLng(1,2);
 */
var OptionBuilder = /** @class */ (function () {
    function OptionBuilder() {
    }
    OptionBuilder.prototype.googlizeAllInputs = function (definedInputs, userInputs) {
        var _this = this;
        var options = {};
        // if options given from user, only take options and ignore other inputs
        if (userInputs.options) {
            console.log('userInputs.options .................', userInputs.options);
            options = userInputs.options;
            if (!this.onlyOptionsGiven(definedInputs, userInputs)) {
                console.error('when "options" are used, other options are ignored');
            }
        }
        else {
            definedInputs.forEach(function (input) {
                if (userInputs[input] !== undefined) {
                    options[input] = _this.googlize(userInputs[input], { key: input });
                }
            });
        }
        return options;
    };
    OptionBuilder.prototype.googlizeMultiple = function (inputs, options) {
        options = options || {};
        for (var key in inputs) {
            var val = inputs[key];
            // (non-strings are fully converted)
            if (typeof val !== 'string') {
                options[key] = val;
            } // sometimes '0' needed to stay as it is
            else if (!(options['doNotConverStringToNumber'] && val.match(/^[0-9]+$/))) {
                options[key] = this.googlize(val, { key: key });
            }
        } // for(var key in attrs)
        return options;
    };
    OptionBuilder.prototype.googlize = function (input, options) {
        options = options || {};
        var output = input;
        if (typeof input === 'string') {
            if (input === 'false') {
                output = false;
            }
            else if (input === '0') {
                output = 0;
            }
            else {
                output =
                    // -> googlize -> getJsonParsed -> googlizeMultiple -> googlize until all elements are parsed
                    this.getJSONParsed(input, options)
                        /* Foo.Bar(...) -> new google.maps.Foo.Bar(...) */
                        || this.getAnyMapObject(input)
                        /*  MapTypeID.HYBRID -> new google.maps.MapTypeID.HYBRID */
                        || this.getAnyMapConstant(input, options)
                        /*  2016-06-20 -> new Date('2016-06-20') */
                        || this.getDateObject(input)
                        || input;
            }
        }
        if (options['key']) {
            var key = options['key'];
            if (output instanceof Array) {
                if (key === 'bounds') {
                    output = new google.maps.LatLngBounds(output[0], output[1]);
                }
                else if (key === 'icons') {
                    output = this.getMapIcons(output);
                }
                else if (key === 'position' || key.match(/^geoFallback/)) {
                    output = this.getLatLng(output);
                }
            }
            else if (output instanceof Object) {
                if (key === 'icon') {
                    output = this.getMarkerIcon(output);
                }
                else if (key.match(/ControlOptions$/)) {
                    output = this.getMapControlOption(output);
                }
            }
        }
        // delete keys only for processing, not used by google
        delete output['doNotConverStringToNumber'];
        delete output['key'];
        return output;
    };
    OptionBuilder.prototype.getLatLng = function (input) {
        var output;
        if (input[0].constructor === Array) {
            output = input.map(function (el) { return new google.maps.LatLng(el[0], el[1]); });
        }
        else if (!isNaN(parseFloat(input[0])) && isFinite(input[0])) {
            output = new google.maps.LatLng(input[0], input[1]);
        }
        return output;
    };
    OptionBuilder.prototype.getJSONParsed = function (input, options) {
        var output;
        try {
            output = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getJSON"])(input);
            if (output instanceof Array) {
                // [{a:1}] : not lat/lng ones
                if (output[0].constructor !== Object) {
                    output = this.getLatLng(output);
                }
            }
            else if (output === Object(output)) {
                // check for nested hashes and convert to Google API options
                var newOptions = options;
                newOptions['doNotConverStringToNumber'] = true;
                output = this.googlizeMultiple(output, newOptions);
            }
        }
        catch (e) {
        }
        return output;
    };
    OptionBuilder.prototype.getAnyMapObject = function (input) {
        var output;
        if (input.match(/^[A-Z][a-zA-Z0-9]+\(.*\)$/)) {
            try {
                output = Function("return new google.maps." + input + ";")();
            }
            catch (e) { }
        }
        return output;
    };
    OptionBuilder.prototype.getAnyMapConstant = function (input, options) {
        var output;
        if (input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/)) {
            try {
                var matches = input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/);
                output = google.maps[matches[1]][matches[2]];
            }
            catch (e) { }
        }
        else if (input.match(/^[A-Z]+$/)) {
            try {
                var capitalizedKey = options['key'].charAt(0).toUpperCase() +
                    options['key'].slice(1);
                output = google.maps[capitalizedKey][input];
            }
            catch (e) { }
        }
        return output;
    };
    /**
     * streetviewControl, panControl, etc, not a general control
     */
    OptionBuilder.prototype.getMapControlOption = function (controlOptions) {
        var newControlOptions = controlOptions;
        for (var key in newControlOptions) {
            if (newControlOptions[key]) {
                var value = newControlOptions[key];
                if (typeof value === 'string') {
                    value = value.toUpperCase();
                }
                else if (key === 'mapTypeIds') {
                    value = value.map(function (str) {
                        if (str.match(/^[A-Z]+$/)) {
                            return google.maps.MapTypeId[str.toUpperCase()];
                        }
                        else {
                            return str;
                        }
                    });
                }
                if (key === 'style') {
                    var objName = key.replace(/Options$/, '') + 'Style';
                    newControlOptions[key] = google.maps[objName][value];
                }
                else if (key === 'position') {
                    newControlOptions[key] = google.maps.ControlPosition[value];
                }
                else {
                    newControlOptions[key] = value;
                }
            }
        }
        return newControlOptions;
    };
    OptionBuilder.prototype.getDateObject = function (input) {
        var output;
        if (input.match(/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/)) {
            try {
                output = new Date(input);
            }
            catch (e) { }
        }
        return output;
    };
    OptionBuilder.prototype.getMapIcons = function (input) {
        return input.map(function (el) {
            if (el.icon.path.match(/^[A-Z_]+$/)) {
                el.icon.path = google.maps.SymbolPath[el.icon.path];
            }
            return el;
        });
    };
    OptionBuilder.prototype.getMarkerIcon = function (input) {
        var output = input;
        if (('' + output.path).match(/^[A-Z_]+$/)) {
            output.path = google.maps.SymbolPath[output.path];
        }
        for (var key in output) {
            var arr = output[key];
            if (key === 'anchor' || key === 'origin' || key === 'labelOrigin') {
                output[key] = new google.maps.Point(arr[0], arr[1]);
            }
            else if (key === 'size' || key === 'scaledSize') {
                output[key] = new google.maps.Size(arr[0], arr[1]);
            }
        }
        return output;
    };
    OptionBuilder.prototype.onlyOptionsGiven = function (definedInputs, userInputs) {
        for (var i = 0; i < definedInputs.length; i++) {
            var input = definedInputs[i];
            if (input !== 'options' && typeof userInputs[input] !== 'undefined') {
                return false;
            }
        }
        return true;
    };
    OptionBuilder = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], OptionBuilder);
    return OptionBuilder;
}());



/***/ }),

/***/ "./src/services/util.ts":
/*!******************************!*\
  !*** ./src/services/util.ts ***!
  \******************************/
/*! exports provided: jsonize, getJSON, toCamelCase, isMapsApiLoaded, missingLibraryError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonize", function() { return jsonize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJSON", function() { return getJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCamelCase", function() { return toCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMapsApiLoaded", function() { return isMapsApiLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missingLibraryError", function() { return missingLibraryError; });
/**
 * return json string from json-like string
 */
function jsonize(str) {
    try {
        JSON.parse(str);
        return str;
    }
    catch (e) {
        return str
            .replace(/([\$\w]+)\s*:/g, // wrap keys without double quote
        function (_, $1) {
            return '"' + $1 + '":';
        })
            .replace(/'([^']+)'/g, // replacing single quote to double quote
        function (_, $1) {
            return '"' + $1 + '"';
        });
    }
}
/**
 * Returns string to an object by using JSON.parse()
 */
function getJSON(input) {
    if (typeof input === 'string') {
        var re = /^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/; // lat,lng
        if (input.match(re)) {
            input = '[' + input + ']';
        }
        return JSON.parse(jsonize(input));
    }
    else {
        return input;
    }
}
/* tslint:enable */
/**
 * Returns camel-cased from string 'Foo Bar' to 'fooBar'
 */
function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}
function isMapsApiLoaded() {
    return typeof google === 'object' && typeof google.maps === 'object';
}
function missingLibraryError(component, libName) {
    return Error(component + ": library '" + libName + "' is missing, please ensure to include it in a 'libraries' parameter.\n    Example:\n      NguiMapModule.forRoot({\n        apiUrl: 'https://maps.googleapis.com/maps/api/js?libraries=" + libName + "'\n      })\n  ");
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./app/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\projects\javascript_practice\angular_practice\map\app\main.ts */"./app/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map