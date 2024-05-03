sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("quizapp.controller.View1", {
            onInit: function () {

            },
            onNavToQuestions: function(){
                this.getOwnerComponent().getRouter().navTo("quizQuestions")
            }
        });
    });
