const observableModule = require("tns-core-modules/data/observable");

HomeViewModel = () => {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = HomeViewModel;
