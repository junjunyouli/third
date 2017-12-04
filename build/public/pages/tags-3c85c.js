webpackJsonp([1],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pariseButton = new _index2.default();

xtag.register('x-praise', {
    content: '<div id="hands" >' + ' <div class="pd ">' + '<span class="hs1"></span>' + '<span class="hs2"></span>' + '<span class="hs3"></span>' + ' <span class="hs4"></span>' + '<span class="hs5"></span>' + '<span class="hs6"></span>' + '</div>' + '<div id="add" class="hide" ><span >+1</span></div>' + '</div>',
    methods: {
        parise: function parise() {
            var _this = this;
            pariseButton.addThumb();
            var add = _this.querySelector("#add");
            add.className = "show";
            setTimeout(function () {
                add.className = "hide";
            }, 800);
        }
    },
    events: {
        click: function click(e) {
            var _this = this;
            console.log(e.target);
            if (e.target.class == "pd") {
                var t = "";
                if (t) {
                    clearTimeout(t);
                }
                t = setTimeout(function () {
                    _this.parise();
                }, 500);
            }
        }
    }
});

/***/ })

},[4]);