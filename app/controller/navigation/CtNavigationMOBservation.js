Ext.define('MOBservation.controller.navigation.CtNavigationMOBservation', {
    extend: 'MOBservation.controller.navigation.common.CtNavigation',
    
    config: {
        refs: {
            navigationView : 'xNavigationMOBservation',
            vwMOBservationMenu : 'xVwMOBservationMenu'
        },
        control: {
            navigationView : {
                'show' : 'onShowNavigationMOBservation'
            },
            vwMOBservationMenu : {
                'DISCONNECT' : 'onUserDisconnect',
                'CUSTOMER'   : 'onSelectCustomer'
            }
        }
    },
    onShowNavigationMOBservation : function (viewNavigationMOBservation) {
        this.showView('xVwMOBservationMenu');
    },
    onUserDisconnect : function (viewMOBservationMenu) {
        this.getNavigationView().fireEvent('USER_DISCONNECTED', this.getNavigationView());
    },
    onSelectCustomer : function (viewMOBservationMenu){
        this.showView('xVwMOBservationCustomer');
    }
});
