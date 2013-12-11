/*global Ext*/
Ext.define('MOBservation.view.navigation.VwNavigationLogin', {

    extend: 'Ext.navigation.View',

    xtype: 'xNavigationLogin',

    requires : [
        'MOBservation.form.login.VwLogin',
        'MOBservation.view.login.VwLoginInformation'
    ],

    config : {

		useTitleForBackButtonText : false,

        navigationBar : {

			backButton : {
				hidden : true,
				ui : 'myback'
			},

			items		: [
    	        {
        	    	xtype 	: 'button',
            	    id		: 'homeIcon',
					align   : 'right',
            	    hidden	: true
	            }
			]
        }
    }
});
