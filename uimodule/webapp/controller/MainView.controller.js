sap.ui.define([
    "./BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("pin.org.confirmButton.controller.MainView", {
            onInit: function () {
                
            },
            finallyDelete : function(oEvent){
                sap.m.MessageToast.show('Finally You can delete')
            }
        });
    });
