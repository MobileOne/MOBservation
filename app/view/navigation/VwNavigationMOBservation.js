/*global Ext*/
Ext.define('MOBservation.view.navigation.VwNavigationMOBservation', {

    extend: 'MOBservation.view.navigation.common.VwNavigation',

    alternateClassName: 'xNavigationMOBservation',

    xtype: 'xNavigationMOBservation',

    requires : [
    	'MOBservation.view.mobservation.menu.VwMOBservationMenu',
    	'MOBservation.view.mobservation.customers.VwMOBservationCustomersList',
    	'MOBservation.view.mobservation.observations.VwMOBservationObservationsList',
    	'MOBservation.view.mobservation.pictures.VwMOBservationPicturesList',
        'MOBservation.view.mobservation.sounds.VwMOBservationSoundsList',
    	'MOBservation.view.mobservation.pictures.VwMOBservationPicture'
    ]
});
