"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _girlBack = _interopRequireDefault(require("../../assets/girl-back.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n.header {\n    display: flex;\n\n    .header__left {\n        width: 580px;\n        height: 580px;\n        margin-top: 180px;\n        background: bottom no-repeat;\n        background-image: url(", ");\n        position: relative;\n        background-size: contain;\n\n        .left__img {\n            position: absolute;\n            margin-top: -81px;\n            margin-left: 100px;\n            height: 100%;\n            transform: rotate(-8deg);\n            width: 100%;\n        }\n    }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), _girlBack.default);

var _default = Container;
exports.default = _default;