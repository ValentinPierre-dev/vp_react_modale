"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles/style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = props => {
  return props.trigger ? /*#__PURE__*/_react.default.createElement("div", {
    className: "modale"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "close",
    onClick: () => props.setTrigger(false)
  }, "X"), /*#__PURE__*/_react.default.createElement("span", {
    className: "text"
  }, props.content))) : '';
};
var _default = Modal;
exports.default = _default;