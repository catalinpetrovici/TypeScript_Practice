"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
axios_1.default
    .get(`https://jsonplaceholder.typicode.com/users/1`)
    .then((res) => {
    const { data } = res;
    printUser(data);
})
    .catch((err) => console.log(err));
axios_1.default
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
    const { data } = res;
    data.forEach(printUser);
    // printUser(data);
})
    .catch((err) => console.log(err));
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
console.log(lodash_1.default.shuffle([1, 2, 3, 4]));
console.log(lodash_1.default.sample([12312, 12312, 14, 1]));
