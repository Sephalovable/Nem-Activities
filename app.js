webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(16);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var component = {
    templateUrl: _app2.default,
    controller: function () {
        function controller(DatabaseService, GeneratorService) {
            _classCallCheck(this, controller);

            this.GeneratorService = GeneratorService;

            this.thumbnail = "";
            this.thumbnail2 = "";
            this.activityListKeys = DatabaseService.activityListKeys;
            this.tackListKeys = DatabaseService.tackListKeys;
            this.blessingListKeys = DatabaseService.blessingListKeys;
            this.rankListKeys = DatabaseService.rankListKeys;
            this.companionListKeys = DatabaseService.companionListKeys;
        }

        _createClass(controller, [{
            key: 'selectedChanged',
            value: function selectedChanged(key, value) {
                this.GeneratorService.setKeySelected(key, value);
            }
        }, {
            key: 'generateOutput',
            value: function generateOutput() {
                var _this = this;

                this.GeneratorService.generateResponse().then(function (result) {
                    return {
                        header: _this.GeneratorService.generateHeader(),
                        values: result
                    };
                }).then(function (result) {
                    return _this.result = result;
                });
            }
        }]);

        return controller;
    }()
};

exports.default = component;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _database = __webpack_require__(9);

var _database2 = _interopRequireDefault(_database);

var _generator = __webpack_require__(10);

var _generator2 = _interopRequireDefault(_generator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _module = _angular2.default.module("app.common", []).service("DatabaseService", _database2.default).service("GeneratorService", _generator2.default);

exports.default = _module.name;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _optionCheckbox = __webpack_require__(11);

var _optionCheckbox2 = _interopRequireDefault(_optionCheckbox);

var _resultDisplay = __webpack_require__(13);

var _resultDisplay2 = _interopRequireDefault(_resultDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _module = _angular2.default.module('app.components', [_optionCheckbox2.default, _resultDisplay2.default]);

exports.default = _module.name;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _activityData = __webpack_require__(21);

var _activityData2 = _interopRequireDefault(_activityData);

var _roleplayData = __webpack_require__(25);

var _roleplayData2 = _interopRequireDefault(_roleplayData);

var _tackData = __webpack_require__(26);

var _tackData2 = _interopRequireDefault(_tackData);

var _blessingData = __webpack_require__(22);

var _blessingData2 = _interopRequireDefault(_blessingData);

var _rankData = __webpack_require__(24);

var _rankData2 = _interopRequireDefault(_rankData);

var _companionData = __webpack_require__(23);

var _companionData2 = _interopRequireDefault(_companionData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DatabaseService = function () {
    function DatabaseService() {
        _classCallCheck(this, DatabaseService);
    }

    _createClass(DatabaseService, [{
        key: 'activityListKeys',
        get: function get() {
            return Object.keys(_activityData2.default);
        }
    }, {
        key: 'tackListKeys',
        get: function get() {
            return Object.keys(_tackData2.default);
        }
    }, {
        key: 'blessingListKeys',
        get: function get() {
            return Object.keys(_blessingData2.default);
        }
    }, {
        key: 'rankListKeys',
        get: function get() {
            return Object.keys(_rankData2.default);
        }
    }, {
        key: 'companionListKeys',
        get: function get() {
            return Object.keys(_companionData2.default);
        }
    }, {
        key: 'activityDatabase',
        get: function get() {
            return _activityData2.default;
        }
    }, {
        key: 'tackDatabase',
        get: function get() {
            return _tackData2.default;
        }
    }, {
        key: 'blessingDatabase',
        get: function get() {
            return _blessingData2.default;
        }
    }, {
        key: 'rankDatabase',
        get: function get() {
            return _rankData2.default;
        }
    }, {
        key: 'companionDatabase',
        get: function get() {
            return _companionData2.default;
        }
    }, {
        key: 'roleplayDatabase',
        get: function get() {
            return _roleplayData2.default;
        }
    }]);

    return DatabaseService;
}();

exports.default = DatabaseService;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeneratorService = function () {
    function GeneratorService($q, DatabaseService) {
        _classCallCheck(this, GeneratorService);

        this.$q = $q;
        this.DatabaseService = DatabaseService;

        this._selectedKeys = [];
    }

    _createClass(GeneratorService, [{
        key: 'setKeySelected',
        value: function setKeySelected(key, value) {
            var item = this._selectedKeys.find(function (item) {
                return item.key === key;
            });
            if (item) {
                item.value = value;
            } else {
                this._selectedKeys.push({ key: key, value: value });
            }
        }
    }, {
        key: 'generateResponse',
        value: function generateResponse() {
            var _this = this;

            return this.$q(function (fulfill) {
                var items = _this._getDataItemsFromKeys();
                var result = [];

                items.forEach(function (item) {
                    var maxCount = _lodash2.default.random(item.min, item.max);

                    for (var i = 0; i < maxCount; i++) {
                        result.push(_this._randomlySelectItemData(item));
                    }
                });

                fulfill(result);
            });
        }
    }, {
        key: '_getDataItemsFromKeys',
        value: function _getDataItemsFromKeys() {
            var _this2 = this;

            var items = [];

            this._getSelectedKeys().forEach(function (key) {
                var originalItem = _this2.DatabaseService.activityDatabase[key] || _this2.DatabaseService.tackDatabase[key] || _this2.DatabaseService.blessingDatabase[key] || _this2.DatabaseService.rankDatabase[key] || _this2.DatabaseService.companionDatabase[key];
                var item = Object.assign({}, originalItem, { name: key });
                items.push(item);
            });

            return items;
        }
    }, {
        key: '_getSelectedKeys',
        value: function _getSelectedKeys() {
            return this._selectedKeys.filter(function (item) {
                return item.value;
            }).map(function (item) {
                return item.key;
            });
        }
    }, {
        key: '_randomlySelectItemData',
        value: function _randomlySelectItemData(item) {
            var maxIndex = item.values.length - 1;
            var index = _lodash2.default.random(0, maxIndex);
            return item.values[index];
        }
    }, {
        key: 'generateHeader',
        value: function generateHeader() {
            var headerOptions = this.DatabaseService.roleplayDatabase.responses;
            var maxIndex = headerOptions.length - 1;
            var index = _lodash2.default.random(0, maxIndex);
            return headerOptions[index];
        }
    }]);

    return GeneratorService;
}();

exports.default = GeneratorService;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _optionCheckbox = __webpack_require__(12);

var _optionCheckbox2 = _interopRequireDefault(_optionCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _module = _angular2.default.module('app.components.option-checkbox', []).component('optionCheckbox', _optionCheckbox2.default);

exports.default = _module.name;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _optionCheckbox = __webpack_require__(17);

var _optionCheckbox2 = _interopRequireDefault(_optionCheckbox);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var component = {
    templateUrl: _optionCheckbox2.default,
    controller: function controller($scope) {
        var _this = this;

        _classCallCheck(this, controller);

        // attaches a watcher to the component's scope to watch for changes in the isSelected binding value
        // it triggers the onSelectedChanged callback passing the listKey and current value
        $scope.$watch(function () {
            return _this.isSelected;
        }, function () {
            return _this.onSelectedChanged({
                key: _this.listKey,
                value: _this.isSelected
            });
        });
    },
    bindings: {
        listKey: '@',
        isSelected: '<?',
        onSelectedChanged: '&'
    }
};

exports.default = component;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _resultDisplay = __webpack_require__(14);

var _resultDisplay2 = _interopRequireDefault(_resultDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _module = _angular2.default.module('app.components.result-display', []).component('resultDisplay', _resultDisplay2.default);

exports.default = _module.name;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resultDisplay = __webpack_require__(18);

var _resultDisplay2 = _interopRequireDefault(_resultDisplay);

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var component = {
    templateUrl: _resultDisplay2.default,
    controller: function () {
        function controller() {
            _classCallCheck(this, controller);
        }

        _createClass(controller, [{
            key: 'listItems',
            value: function listItems() {
                return this.values.join('  ');
            }
        }]);

        return controller;
    }(),
    bindings: {
        header: '@',
        values: '<'
    }
};

exports.default = component;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _common = __webpack_require__(3);

var _common2 = _interopRequireDefault(_common);

var _components = __webpack_require__(4);

var _components2 = _interopRequireDefault(_components);

var _app = __webpack_require__(2);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _module = _angular2.default.module('app', [_common2.default, _components2.default]).component('app', _app2.default);

exports.default = _module.name;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var path = 'C:/Users/Master/Documents/Nephilim-Activity/src/app/app.html';
var html = "<div class=\"center\">\r\n    <div class=\"container\">\r\n        <div class=\"center\">\r\n            <div class=\"boxed\">\r\n                <br>\r\n                <center>Deviation Thumbnail&nbsp;<input type=\"text\" ng-value=\"$ctrl.thumbnail\" ng-model=\"$ctrl.thumbnail\"> &nbsp; \r\n                    Nephilim Name and ID <input type=\"text\" ng-value=\"$ctrl.thumbnail2\" ng-model=\"$ctrl.thumbnail2\"></center><br>\r\n\r\n                <section class=\"app__options-menu\">\r\n                    <hr><center><b><font size=\"5\">Selection</font></u><hr><br><br></b></center><left>\r\n                   <option-checkbox class=\"app__option\"\r\n                                     data-ng-repeat=\"listKey in $ctrl.activityListKeys\"\r\n                                     data-list-key=\"{{ listKey }}\"\r\n                                     data-on-selected-changed=\"$ctrl.selectedChanged(key, value)\">\r\n                </option-checkbox>\r\n                </left>\r\n                </section>\r\n\r\n                <div class=\"left\">\r\n                    <blockquote>\r\n                        <section class=\"app__options-menu\">\r\n                    <hr><center><b><font size=\"5\">Attributes</font><hr></b><br>\r\n                    <option-checkbox class=\"app__option\"\r\n                                     data-ng-repeat=\"listKey in $ctrl.blessingListKeys\"\r\n                                     data-list-key=\"{{ listKey }}\"\r\n                                     data-on-selected-changed=\"$ctrl.selectedChanged(key, value)\">\r\n                        </option-checkbox><br><br><br><br><br><br><br><br><br><br><br>\r\n                        </blockquote>\r\n                        </section>\r\n\r\n                    <blockquote>\r\n                        <section class=\"app__options-menu\">\r\n                            <hr><center><b><font size=\"5\">Familiars</font><hr></b><br>\r\n                                <option-checkbox class=\"app__option\" \r\n                                data-ng-repeat=\"listKey in $ctrl.companionListKeys\" \r\n                                data-list-key=\"{{ listKey }}\" \r\n                                data-on-selected-changed=\"$ctrl.selectedChanged(key, value)\">\r\n                    </option-checkbox>\r\n                    <br><br><br><br><br><br><br><br><br><br><br>\r\n                    </blockquote>\r\n                    </section>\r\n                    </div>\r\n\r\n\r\n    <div class=\"left\">\r\n        <blockquote>\r\n        <section class=\"app__options-menu\">\r\n            <hr><center><b><font size=\"5\">Gear</font><hr></b><br>\r\n                <option-checkbox class=\"app__option\" \r\n                data-ng-repeat=\"listKey in $ctrl.tackListKeys\" \r\n                data-list-key=\"{{ listKey }}\" \r\n                data-on-selected-changed=\"$ctrl.selectedChanged(key, value)\">\r\n        </option-checkbox>\r\n        <br><br><br><br><br>\r\n        </blockquote>\r\n        </section>\r\n\r\n    <blockquote>\r\n        <section class=\"app__options-menu\">\r\n    <hr>\r\n    <center><b><font size=\"5\">Ranks</font><hr></b><br>\r\n\r\n       <option-checkbox class=\"app__option\" \r\n        data-ng-repeat=\"listKey in $ctrl.rankListKeys\" \r\n        data-list-key=\"{{ listKey }}\" \r\n        data-on-selected-changed=\"$ctrl.selectedChanged(key, value)\">\r\n        </option-checkbox><br><br><br><br>\r\n        </blockquote>\r\n</section>\r\n</div>\r\n                <br><br><br><br><br><br><br>\r\n                    <button data-ng-click=\"$ctrl.generateOutput()\">Roll Activity</button><br><hr><br>\r\n                    <span ng-if=\"$ctrl.result\">{{ $ctrl.thumbnail }} </span><br><br>\r\n                    <b><div ng-if=\"$ctrl.result\">{{ $ctrl.thumbnail2 }} has returned successful!</b><br> <br>\r\n                    <result-display class=\"app__generation-result-container\"\r\n                                    data-ng-if=\"$ctrl.result\"\r\n                                    data-values=\"$ctrl.result.values\"></result-display></div>\r\n                                    <br>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n<br>\r\n<center><p style=\"color:#FFFFFF\" ;><b>Roller designed by <a href=\"https://www.deviantart.com/sephasaur\" style=\"color: #FFFFFF\">@Sephasaur</a> for <a href=\"https://www.deviantart.com/nephilim-arpg\"style=\"color: #FFFFFF\">Nephilim-ARPG</a></b></p></center>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var path = 'C:/Users/Master/Documents/Nephilim-Activity/src/app/components/option-checkbox/option-checkbox.html';
var html = "<label class=\"option-checkbox__label\">\r\n    {{ $ctrl.listKey }}\r\n    <input type=\"checkbox\"\r\n           class=\"option-checkbox__checkbox\"\r\n           data-ng-model=\"$ctrl.isSelected\"/>\r\n</label>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var path = 'C:/Users/Master/Documents/Nephilim-Activity/src/app/components/result-display/result-display.html';
var html = "<header class=\"result-display__header\">{{ $ctrl.header }}</header>\r\n<p></p>\r\n<span class=\"result-display__list\">{{ $ctrl.listItems() }}</span>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

module.exports = {
	"roleplay response": {
		"min": 1,
		"max": 1,
		"values": [
			"Following their expedition they fought off another Nephilim, took a nap, and ended up fleeing for their life. When they returned home they brought back the following: <br><br>",
			"Following their expedition they followed a stranger, got lost in the forest, and ended up getting stuck in a tree. When they returned home they brought back the following: <br><br>"
		]
	},
	"adventuring": {
		"min": 1,
		"max": 2,
		"values": [
			":thumb770570129: eggs",
			":thumb778694310: brevi"
		]
	},
	"fishing": {
		"min": 1,
		"max": 2,
		"values": [
			":thumb770570398: ball mace",
			":thumb694238336: sword"
		]
	},
	"hunting: argentavis": {
		"min": 1,
		"max": 2,
		"values": [
			":thumb778700898: eggplant",
			":thumb694238704: Charon"
		]
	},
	"hunting: aurochs": {
		"min": 1,
		"max": 2,
		"values": [
			":thumb778700898: eggplant",
			":thumb694238704: Charon"
		]
	},
	"hunting: cave bear": {
		"min": 1,
		"max": 2,
		"values": [
			":thumb778700898: eggplant",
			":thumb694238704: Charon"
		]
	},
	"hunting: cave lion": {
		"min": 1,
		"max": 2,
		"values": [
			":thumb778700898: eggplant",
			":thumb694238704: Charon"
		]
	},
	"hunting: daeodon": {
		"min": 1,
		"max": 2,
		"values": [
			":thumb778700898: eggplant",
			":thumb694238704: Charon"
		]
	},
	"hunting: megaloceros": {
		"min": 1,
		"max": 2,
		"values": [
			":thumb778700898: eggplant",
			":thumb694238704: Charon"
		]
	},
	"attribute roll": {
		"min": 1,
		"max": 1,
		"values": [
			"Your Nephilim has been bestowed a rare gift! They have received the following:<br><br><b>Inoculated</b><br>- Cannot receive illnesses via activities",
			"Your Nephilim has been bestowed a rare gift! They have received the following:<br><br><b>One With Nature</b><br>- 25% increased chance to find Familiars in Hunting, Adventuring, and Fishing",
			"Your Nephilim has been bestowed a rare gift! They have received the following:<br><br><b>Popular</b><br>- +2 additional AP for all Nephilim depicted alongside the Nephilim with this attribute",
			"Your Nephilim has been bestowed a rare gift! They have received the following:<br><br><b>Touch Skin</b><br>- Cannot receive injuries via activities",
			"Your Nephilim has been bestowed a rare gift! They have received the following:<br><br><b>Casanova</b><br>- Unlocks 1 additional breeding over the monthly limit",
			"Your Nephilim has been bestowed a rare gift! They have received the following:<br><br><b>Fertility Treatment/b><br>- Chance to roll an additional 1 - 3 whelps per litter",
			"Your Nephilim has been bestowed a rare gift! They have received the following:<br><br><b>Ambassador</b><br>- Adds -50 off of persuasion checks when Recruiting Nomads",
			"Your Nephilim has been bestowed a rare gift! They have received the following:<br><br><b>Lucky</b><br>- Small chance for an additional item roll on top of the normal roll in activities",
			"Your Nephilim has been bestowed a rare gift! They have received the following:<br><br><b>Pack Leader</b><br>- May have a total of 3 Familiars, up from the maximum of 2",
			"Your Nephilim has been bestowed a rare gift! They have received the following:<br><br><b>Scholar</b><br>- Small increased chance to find Scrolls in any activity"
		]
	}
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {
	"One With Nature": {
		"min": 0,
		"max": 1,
		"values": [
			"companion 1",
			"companion 2 etc"
		]
	},
	"Lucky": {
		"min": 0,
		"max": 1,
		"values": [
			"ADD ANOTHER ROLL",
			"companion 2 etc"
		]
	},
	"Scholar": {
		"min": 0,
		"max": 1,
		"values": [
			"Scroll",
			"Scroll 1"
		]
	}
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
	"companion1": {
		"min": 0,
		"max": 1,
		"values": [
			":thumb694238482:",
			":thumb770570288:"
		]
	},
	"snake": {
		"min": 0,
		"max": 1,
		"values": [
			":thumb734688944:",
			":thumb734688944:",
			":thumb734688924:",
			":thumb734688924:",
			":thumb734688924:",
			":thumb734688938:"
		]
	}
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
	"Rank: Expert Assassin +": {
		"min": 0,
		"max": 1,
		"values": [
			":thumb694238095:",
			":thumb694238089:",
			":thumb694238082:",
			":thumb694237938:",
			":thumb694237992:",
			":thumb694237942:",
			":thumb734688914:",
			":thumb694238002:",
			":thumb734689001:",
			":thumb734688976:",
			":thumb734688976:",
			":thumb734688976:",
			":thumb734688976:",
			":thumb694238353:",
			":thumb734689009:",
			":thumb734689009:",
			":thumb734689009:",
			":thumb734689009:",
			":thumb734689009:",
			":thumb734689009:",
			":thumb734689009:",
			":thumb734689009:",
			":thumb734689009:",
			":thumb734689009:",
			":thumb694238679:",
			":thumb694238702:",
			":thumb694238702:",
			":thumb694238702:",
			":thumb694238702:",
			":thumb694238702:",
			":thumb694238702:",
			":thumb694238702:",
			":thumb694238702:",
			":thumb694238552:",
			":thumb694238552:",
			":thumb694238552:",
			":thumb694238552:",
			":thumb694238684:",
			":thumb694238684:",
			":thumb694238684:",
			":thumb694238678:",
			":thumb694238675:",
			":thumb694238675:",
			":thumb694238675:",
			":thumb694238675:",
			":thumb694238675:",
			":thumb694238675:",
			":thumb694238675:",
			":thumb694238675:",
			":thumb694238675:",
			":thumb694238675:",
			":thumb694238675:",
			":thumb694238675:",
			":thumb694238675:",
			":thumb694238671:",
			":thumb694238651:",
			":thumb694238651:",
			":thumb694238651:",
			":thumb694238651:",
			":thumb694238651:",
			":thumb694238651:",
			":thumb694238651:",
			":thumb694238651:",
			":thumb694238651:",
			":thumb694238651:",
			":thumb694238651:",
			":thumb694238646:",
			":thumb694238646:",
			":thumb694238646:",
			":thumb694238646:",
			":thumb694238646:",
			":thumb694238646:",
			":thumb694238646:",
			":thumb694238646:",
			":thumb694238646:",
			":thumb694238646:",
			":thumb694238646:",
			":thumb694238646:",
			":thumb694238641:",
			":thumb694238641:",
			":thumb694238641:",
			":thumb694238641:",
			":thumb694238641:",
			":thumb694238641:",
			":thumb694238638:",
			":thumb694238638:",
			":thumb694238638:",
			":thumb694238638:",
			":thumb694238638:",
			":thumb694238638:",
			":thumb694238638:",
			":thumb694238638:",
			":thumb694238632:",
			":thumb694238632:",
			":thumb694238627:",
			":thumb694238627:",
			":thumb734688981:",
			":thumb694238595:",
			":thumb694238579:",
			":thumb694238574:",
			":thumb694238574:",
			":thumb694238574:",
			":thumb694238574:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238573:",
			":thumb694238572:",
			":thumb694238598:",
			":thumb694238598:",
			":thumb694238598:",
			":thumb694238598:",
			":thumb694238559:",
			":thumb694238559:",
			":thumb694238557:",
			":thumb694238549:",
			":thumb694238549:",
			":thumb694238549:",
			":thumb694238549:",
			":thumb694238549:",
			":thumb694238549:",
			":thumb694238549:",
			":thumb694238543:",
			":thumb694238537:",
			":thumb694238533:",
			":thumb694238518:",
			":thumb694238494:",
			":thumb694238494:",
			":thumb694238494:",
			":thumb734693592:",
			":thumb734693592:",
			":thumb734693592:",
			":thumb694238489:",
			":thumb694238489:",
			":thumb694238489:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb734688967:",
			":thumb694238485:",
			":thumb694238457:",
			":thumb694238457:",
			":thumb694238457:",
			":thumb694238457:",
			":thumb694238451:",
			":thumb734688951:",
			":thumb694238368:",
			":thumb694238368:",
			":thumb694238368:",
			":thumb694238368:",
			":thumb694238368:",
			":thumb694238368:",
			":thumb694238368:",
			":thumb694238368:",
			":thumb694238368:",
			":thumb694238368:",
			":thumb694238368:",
			":thumb694238417:",
			":thumb694238417:",
			":thumb694238417:",
			":thumb694238417:",
			":thumb694238417:",
			":thumb694238417:",
			":thumb694238417:",
			":thumb694238417:",
			":thumb694238417:",
			":thumb694238417:",
			":thumb694238417:",
			":thumb694238417:",
			":thumb694238414:",
			":thumb694238404:",
			":thumb694238404:",
			":thumb694238620:",
			":thumb694238389:",
			":thumb694238389:",
			":thumb694238386:",
			":thumb694351024:",
			":thumb694351017:",
			":thumb694351022:",
			":thumb694238357:",
			":thumb694238352:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb694238349:",
			":thumb734688909:",
			":thumb734688909:",
			":thumb734688909:",
			":thumb734688909:",
			":thumb734688909:",
			":thumb734688909:",
			":thumb734688909:",
			":thumb734688909:",
			":thumb734688909:",
			":thumb694238342:",
			":thumb694238342:",
			":thumb694238342:",
			":thumb694238342:",
			":thumb694238342:",
			":thumb694238342:",
			":thumb694238339:",
			":thumb694238339:",
			":thumb694238339:",
			":thumb694238339:",
			":thumb694238513:",
			":thumb694238513:",
			":thumb694238513:",
			":thumb694238331:",
			":thumb694238361:",
			":thumb694238361:",
			":thumb694238361:",
			":thumb694238361:",
			":thumb694238361:",
			":thumb694238361:",
			":thumb694238328:",
			":thumb694238317:",
			":thumb694238283:",
			":thumb694238468:",
			":thumb694238468:",
			":thumb694238468:",
			":thumb694238468:",
			":thumb694238468:",
			":thumb694238468:"
		]
	},
	"Rank: Expert Blacksmith +": {
		"min": 0,
		"max": 3,
		"values": [
			":thumb694238671:",
			":thumb694238632:",
			":thumb694238518:",
			":thumb694238494:",
			":thumb694238352:",
			":thumb694238328:"
		]
	},
	"Rank: Expert Cutpurse +": {
		"min": 0,
		"max": 1,
		"values": [
			":thumb778636524:",
			":thumb778636516:",
			":thumb778636508:",
			":thumb778636499:",
			":thumb778636490:"
		]
	},
	"Rank: Expert Chef +": {
		"min": 0,
		"max": 3,
		"values": [
			":thumb734688976:",
			":thumb734689009:",
			":thumb734689009:",
			":thumb734689009:",
			":thumb734689009:",
			":thumb734689009:",
			":thumb694238679:",
			":thumb694238702:",
			":thumb694238702:",
			":thumb694238702:",
			":thumb694238702:",
			":thumb694238702:",
			":thumb694238702:",
			":thumb694238702:",
			":thumb694238684:",
			":thumb694238684:",
			":thumb694238684:",
			":thumb694238684:",
			":thumb694238684:",
			":thumb694238651:",
			":thumb694238651:",
			":thumb694238651:",
			":thumb694238651:",
			":thumb694238651:",
			":thumb694238651:",
			":thumb694238646:",
			":thumb694238646:",
			":thumb694238646:",
			":thumb694238646:",
			":thumb694238638:",
			":thumb694238638:",
			":thumb694238638:",
			":thumb694238638:",
			":thumb694238638:",
			":thumb694238638:",
			":thumb694238638:",
			":thumb694238627:",
			":thumb694238627:",
			":thumb694238598:",
			":thumb694238598:",
			":thumb694238598:",
			":thumb694238598:",
			":thumb694238598:",
			":thumb694238598:",
			":thumb734693592:",
			":thumb694238489:",
			":thumb694238482:",
			":thumb694238457:",
			":thumb694238417:",
			":thumb694238404:",
			":thumb694238342:",
			":thumb694238339:",
			":thumb694238468:",
			":thumb694238598:",
			":thumb694238598:",
			":thumb734693592:",
			":thumb694238489:",
			":thumb694238482:",
			":thumb694238457:",
			":thumb694238417:",
			":thumb694238404:",
			":thumb694238342:",
			":thumb694238339:",
			":thumb694238468:",
			":thumb694238598:",
			":thumb694238598:",
			":thumb734693592:",
			":thumb694238489:",
			":thumb694238482:",
			":thumb694238457:",
			":thumb694238417:",
			":thumb694238404:",
			":thumb694238342:",
			":thumb694238339:",
			":thumb694238468:",
			":thumb694238598:",
			":thumb694238598:",
			":thumb734693592:",
			":thumb694238489:",
			":thumb694238482:",
			":thumb694238457:",
			":thumb694238417:",
			":thumb694238404:",
			":thumb694238342:",
			":thumb694238339:",
			":thumb694238468:"
		]
	},
	"Rank: Expert Bartender +": {
		"min": 0,
		"max": 2,
		"values": [
			":thumb734688976:",
			":thumb734688976:"
		]
	}
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
	"responses": [
		"<br>Following {{Nephname}}'s quest they narrowly evaded a town guard, got into a fight with a kid, and passed out in a pile of hay. When they home returned they brought back the following: "
	]
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
	"bear trap": {
		"min": 1,
		"max": 3,
		"values": [
			"PELTS",
			"PELTS GO HERE",
			"yes"
		]
	},
	"fishing bucket": {
		"min": 0,
		"max": 2,
		"values": [
			"BRING ME FISH",
			"Fish yep"
		]
	},
	"fishing pole": {
		"min": 0,
		"max": 1,
		"values": [
			"GIVE RARE FISH",
			"Aaaaaa"
		]
	},
	"hunting horn": {
		"min": 0,
		"max": 1,
		"values": [
			"GIVE RARE FISH",
			"Aaaaaa"
		]
	},
	"leather belt": {
		"min": 0,
		"max": 1,
		"values": [
			"GIVE ATTRIBUTES",
			"Aaaaaa"
		]
	},
	"pickaxe": {
		"min": 0,
		"max": 1,
		"values": [
			"GIVE GEMS",
			"Aaaaaa"
		]
	},
	"quiver": {
		"min": 0,
		"max": 1,
		"values": [
			"GIVE RARE HUNTING",
			"Aaaaaa"
		]
	},
	"razor claws": {
		"min": 0,
		"max": 1,
		"values": [
			"The winner has also received an additional 50 gold",
			"The winner has also received an additional 100 gold"
		]
	},
	"satchel": {
		"min": 0,
		"max": 2,
		"values": [
			"GIVE ADVENTURE ITEMS",
			"Aaaaaa"
		]
	},
	"slingshot": {
		"min": 0,
		"max": 2,
		"values": [
			"MORE HUNTING ITEMS",
			"Aaaaaa"
		]
	},
	"torch": {
		"min": 0,
		"max": 2,
		"values": [
			"GIVE RARE ITEMS",
			"Aaaaaa"
		]
	}
};

/***/ })
],[15]);
//# sourceMappingURL=app.js.map