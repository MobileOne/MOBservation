Ext.define('MOBservation.controller.mobservation.observations.CtMOBservationObservationsList', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            vwMOBservationObservations     : 'xVwMOBservationObservationsList',
            vwMOBservationObservationsList : 'xVwMOBservationObservationsList list'
        },
        control: {
            vwMOBservationObservations : {
                'initialize' : 'onInitializeObservations'
            }
        }
    },
    onInitializeObservations : function () {
        Ext.getStore('Observations').removeAll();
        this.getObservations(MOBservation.app.context.getCurrentCustomer());
    },
    getObservations : function (customerId) {
        MOBservation.app.showLoadingMask();
        Ext.Ajax.request({
            url: Configuration.urlBase + Configuration.observations_pre_id + customerId + Configuration.observations_post_id,
            method : 'GET',
            disableCaching : true,
            success : Ext.bind(this.getObservationsSuccess, this),
            failure : Ext.bind(this.getObservationsFailure, this)
        });
    },
    getObservationsSuccess : function (response) {
        MOBservation.app.hideLoadingMask();
        var observations = Ext.JSON.decode(response.responseText);
        for (var i=0;i<observations.length;i++){
            var observation = {
                customer_id : observations[i].customer.id,
                picturesCount : observations[i].pictures.length,
                soundsCount : observations[i].songs.length,
                title : observations[i].title
            };
            Ext.getStore('Observations').add(observation);
        }
    },
    getObservationsFailure : function (error) {
        MOBservation.app.hideLoadingMask();
    }
});
