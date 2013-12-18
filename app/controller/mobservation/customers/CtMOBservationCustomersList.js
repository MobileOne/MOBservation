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
            }
        }
    },
    onItemTapCustomersList : function(list, index, domItem, item, eOpts){
        MOBservation.app.context.setCurrentCustomer(item.getId());
        this.getVwMOBservationCustomers().fireEvent('CUSTOMER_SELECTED', this.getVwMOBservationCustomers());
    }
});
