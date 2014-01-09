Ext.define('MOBservation.controller.mobservation.customers.CtMOBservationCustomersList', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            vwMOBservationCustomers     : 'xVwMOBservationCustomersList',
            vwMOBservationCustomersList : 'xVwMOBservationCustomersList list'
        },
        control: {
            vwMOBservationCustomersList : {
                'itemtap' : 'onItemTapCustomersList'
            },
            vwMOBservationCustomers : {
                'initialize' : 'onInitializeVwCustomers'
            }
        }
    },
    onItemTapCustomersList : function(list, index, domItem, item, eOpts){
        MOBservation.app.context.setCurrentCustomer(item.getId());
        this.getVwMOBservationCustomers().fireEvent('CUSTOMER_SELECTED', this.getVwMOBservationCustomers());
    },
    onInitializeVwCustomers : function (vwCustomers) {
        Ext.getStore('Customers').removeAll();
        this.getCustomers();
    },
    getCustomers : function () {
        MOBservation.app.showLoadingMask();
        Ext.Ajax.request({
            url: Configuration.urlBase + Configuration.customers,
            method : 'GET',
            disableCaching : true,
            success : Ext.bind(this.getCustomersSuccess, this),
            failure : Ext.bind(this.getCustomersFailure, this)
        });
    },
    getCustomersSuccess : function (response) {
        MOBservation.app.hideLoadingMask();
        var responseObject = Ext.JSON.decode(response.responseText),
            customers = responseObject.customers;
        Ext.getStore('Customers').add(customers);
    },
    getCustomersFailure : function (error) {
        MOBservation.app.hideLoadingMask();
    }
});
