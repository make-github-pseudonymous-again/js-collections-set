'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._Set = exports._set = exports.Set = exports.set = undefined;

var _Set2 = require('./_Set');

var _Set3 = _interopRequireDefault(_Set2);

var _set2 = require('./_set');

var _set3 = _interopRequireDefault(_set2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NativeSet = Set; // Use native implementation of set

exports.Set = Set = (0, _Set3.default)(NativeSet); // overwrite native implementation

var set = (0, _set3.default)(Set);

exports.default = set;
exports.set = set;
exports.Set = Set;
exports._set = _set3.default;
exports._Set = _Set3.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJOYXRpdmVTZXQiLCJTZXQiLCJzZXQiLCJfc2V0IiwiX1NldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVlDLEdBQWxCLEMsQ0FBd0I7O0FBRXhCLFFBUUNBLEdBUkQsU0FBTSxtQkFBTUQsU0FBTixDQUFOLEMsQ0FBMEI7O0FBRTFCLElBQU1FLE1BQU0sbUJBQU1ELEdBQU4sQ0FBWjs7a0JBRWVDLEc7UUFHZEEsRyxHQUFBQSxHO1FBQ0FELEcsR0FBQUEsRztRQUNBRSxJO1FBQ0FDLEkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX1NldCBmcm9tICcuL19TZXQnIDtcbmltcG9ydCBfc2V0IGZyb20gJy4vX3NldCcgO1xuXG5jb25zdCBOYXRpdmVTZXQgPSBTZXQgOyAvLyBVc2UgbmF0aXZlIGltcGxlbWVudGF0aW9uIG9mIHNldFxuXG5TZXQgPSBfU2V0KCBOYXRpdmVTZXQgKSA7IC8vIG92ZXJ3cml0ZSBuYXRpdmUgaW1wbGVtZW50YXRpb25cblxuY29uc3Qgc2V0ID0gX3NldCggU2V0ICkgO1xuXG5leHBvcnQgZGVmYXVsdCBzZXQgO1xuXG5leHBvcnQge1xuXHRzZXQgLFxuXHRTZXQgLFxuXHRfc2V0ICxcblx0X1NldCAsXG59IDtcbiJdfQ==