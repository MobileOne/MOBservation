/*global Ext*/
Ext.define('MOBservation.view.navigation.VwNavigationMOBservation', {

    extend: 'MOBservation.view.navigation.common.VwNavigation',

    alternateClassName: 'xNavigationMOBservation',

    xtype: 'xNavigationMOBservation',

    requires : [
    	'MOBservation.view.mobservation.menu.VwMOBservationMenu',
    	'MOBservation.form.mobservation.customer.VwMOBservationCustomer'
    ]
});
