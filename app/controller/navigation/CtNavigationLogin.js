Ext.define('MOBservation.controller.navigation.CtNavigationLogin', {
    extend: 'MOBservation.controller.navigation.common.CtNavigation',
    
    config: {
        refs: {
            navigationView : 'xNavigationLogin',
            vwLogin : 'xVwLogin'
        },
        control: {
            navigationView : {
                'show' : 'onShowNavigationLogin',

            },
            vwLogin : {
            	'LOGIN_TAP_NO_ACCOUNT' : 'onLoginTapNoAccount',
                'USER_LOGGED' : 'onUserLogged'
            }
        }
    },

    onShowNavigationLogin : function (navigationLoginView) {
        this.showView('xVwLogin');
    },
    
    onLoginTapNoAccount : function () {
    	this.showView('xVwLoginInformation');
    },

    onUserLogged : function (viewLogin) {
        this.getNavigationView().fireEvent('LOGIN_COMPLETED')
    }
});
