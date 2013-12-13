Ext.define('MOBservation.controller.navigation.CtNavigationMOBservation', {
    extend: 'MOBservation.controller.navigation.common.CtNavigation',
    
    config: {
        refs: {
            navigationView : 'xNavigationMOBservation'
        },
        control: {
            navigationView : {
                'show' : 'onShowNavigationMOBservation'
            }
        }
    },
    onShowNavigationMOBservation : function (viewNavigationMOBservation) {
        this.showView('xVwMOBservationMenu');
    },
});
