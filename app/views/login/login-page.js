
let page;
let email;

let observableModule = require("tns-core-modules/data/observable");

let user = new observableModule.fromObject({
    email: "nativescriptrocks@progress.com",
    password: "password"
});

exports.loaded = ((args) => {
    page = args.object;
    page.bindingContext = user;
});

exports.createAccount = (() => {
    password = page.getViewById("password");
    console.log(password.text);
});

exports.logIn = (() => {
    email = page.getViewById("email");
    console.log(email.text);
});