'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchLiveRoom = undefined;

var searchLiveRoom = exports.searchLiveRoom = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(keyword) {
        var page = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
        var options;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        options = {
                            method: 'GET',
                            url: _apiService2.default.searchHuyaLiveRoom + '/?' + _querystring2.default.stringify({
                                m: 'Search',
                                do: 'getSearchContent',
                                q: keyword,
                                uid: 0,
                                app: 11,
                                v: 4,
                                typ: -5,
                                rows: 20,
                                start: (page - 1) * 20
                            }),
                            json: true
                        };
                        return _context.abrupt('return', (0, _requestPromise2.default)(options));

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function searchLiveRoom(_x, _x2) {
        return ref.apply(this, arguments);
    };
}();

var _apiService = require('../lib/apiService');

var _apiService2 = _interopRequireDefault(_apiService);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

//# sourceMappingURL=huyaService.js.map