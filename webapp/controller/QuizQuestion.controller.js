sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("quizapp.controller.QuizQuestion", {
            onInit: function () {
                var oModel = new JSONModel();
                oModel.loadData("../model/data.json");
                var that = this;
                oModel.attachRequestCompleted(function () {
                    that.index = 0;
                    that.getView().setModel(oModel, "newModel");
                    that.getView().getModel('newModel').setProperty('/question', that.getView().getModel('newModel').getProperty(`/Questions/${that.index}`));
                });
            },
            handleBackBtn: function(){
                // this.getView().bindElement("/Questions/Question/0");
                if(this.index > 0){
                    this.index--;
                    this.getView().getModel('newModel').setProperty('/question', this.getView().getModel('newModel').getProperty(`/Questions/${this.index}`));
                }
            },
            handleNextBtn: function(){
                // this.byId("questionLabel").setValue(`newModel>/Questions/${questionIndex}/Question`)
                var l = this.getView().getModel('newModel').getProperty('/Questions').length;
                if(this.index < l-1) {
                    this.index++;
                    this.getView().getModel('newModel').setProperty('/question', this.getView().getModel('newModel').getProperty(`/Questions/${this.index}`));
                }
            }
        });
    });
