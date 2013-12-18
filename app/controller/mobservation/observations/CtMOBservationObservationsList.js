Ext.define('MOBservation.controller.mobservation.observations.CtMOBservationObservationsList', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            vwMOBservationObservations     : 'xVwMOBservationObservationsList',
            vwMOBservationObservationsList : 'xVwMOBservationObservationsList list'
        },
        control: {
            vwMOBservationObservations : {
                'initialize' : 'onInitializeObservations',
                'destroy' : 'onDestroyObservations'
            }
        }
    },
    onInitializeObservations : function () {
        var currentCustomer = MOBservation.app.context.getCurrentCustomer();
        if (currentCustomer){
            this.getVwMOBservationObservationsList().getStore().clearFilter();
            this.getVwMOBservationObservationsList().getStore().filterBy(function(record, id){
                if (currentCustomer == id){
                    return record;
                }
            })
        }
    },
    onDestroyObservations : function () {
        Ext.getStore('Observations').clearFilter();
    }
});
