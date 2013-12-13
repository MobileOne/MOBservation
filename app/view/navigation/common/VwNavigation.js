/*global Ext*/
Ext.define('MOBservation.view.navigation.common.VwNavigation', {

    extend: 'Ext.navigation.View',

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
