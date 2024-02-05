"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var todoContainer = document.querySelector('.todo');
var buttons = document.querySelectorAll('.toggle-button');
var timeTrackingData = [];
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('data.json')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    timeTrackingData = (_a.sent()).Todo;
                    createTopElements();
                    initializeTimeTrackingData();
                    updateTime('h1');
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error fetching data:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function createTopElements() {
    todoContainer.innerHTML = timeTrackingData.map(function (item) { return "\n    <div class=\"top\">\n      <div class=\"work\">\n        <h2>".concat(item.title, "</h2>\n        <div class=\"time\">\n          <h1>0hrs</h1>\n          <p></p>\n        </div>\n      </div>\n    </div>\n  "); }).join('');
}
function updateTime(timeframe) {
    var timePeriodText = {
        daily: 'Yesterday',
        weekly: 'Last Week',
        monthly: 'Last Month'
    };
    document.querySelectorAll('.top').forEach(function (currentItem, i) {
        var _a = timeTrackingData[i], title = _a.title, timeframes = _a.timeframes;
        var _b = timeframes[timeframe], current = _b.current, previous = _b.previous, random = _b.random;
        var _c = currentItem.querySelectorAll('h2, h1, p'), titleElement = _c[0], timeElement = _c[1], previousTimeElement = _c[2];
        titleElement.innerHTML = "".concat(title, " <i class=\"fas fa-ellipsis\"></i>");
        timeElement.textContent = "".concat(current + random, "hrs");
        previousTimeElement.textContent = "".concat(timePeriodText[timeframe], " - ").concat(previous + random, "hrs");
    });
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + min * 2)) + min;
}
function initializeTimeTrackingData() {
    timeTrackingData.forEach(function (entry) {
        var timeframes = entry.timeframes;
        Object.keys(timeframes).forEach(function (timeframe) {
            timeframes[timeframe].random = getRandomNumber(0, 10);
        });
    });
}
document.addEventListener('DOMContentLoaded', function () {
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var timeframe = button.textContent.toLowerCase();
            updateTime(timeframe);
            buttons.forEach(function (b) { return b.classList.remove('active'); });
            button.classList.add('active');
        });
    });
    fetchData();
});
