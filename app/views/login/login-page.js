let dialogsModule = require("tns-core-modules/ui/dialogs");
let frameModule = require("tns-core-modules/ui/frame");

let UserViewModel = require("../common/view-models/user-view-model");

let user = new UserViewModel({
    email: "dummyUser@email.com",
    password: "pass"
});

let page;

exports.loaded = ((args) => {
    page = args.object;
    page.actionBarHidden = true;
    page.bindingContext = user;
});

exports.signIn = (() => {
    user.login()
    .catch(function (error) {
        console.log(error);
        dialogsModule.alert({
            message: "Unfortunately we could not find your account.",
            okButtonText: "OK"
        });
        return Promise.reject();
    })
    .then(function () {
        frameModule.topmost().navigate("views/home/home-page");
    });
});

exports.register = (() => {
    user.register()
    .then(function () {
        dialogsModule
            .alert("Your account was successfully created.")
            .then(function () {
                alert("you need a better way to let users know they're registered here.")
                // exports.toggleDisplay();
            });
    }).catch(function (error) {
        dialogsModule
            .alert({
                message: "Unfortunately we were unable to create your account.",
                okButtonText: "OK"
            });
    });
});