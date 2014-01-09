/*global Ext*/
Ext.define('MOBservation.view.navigation.VwNavigationLogin', {

    extend: 'MOBservation.view.navigation.common.VwNavigation',

    alternateClassName: 'xNavigationLogin',

    xtype: 'xNavigationLogin',

    requires : [
        'MOBservation.form.login.VwLogin',
        'MOBservation.view.login.VwLoginInformation'
    ],

    config : {
    	name : 'login'
    }
});
