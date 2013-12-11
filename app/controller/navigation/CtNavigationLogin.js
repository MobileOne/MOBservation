Ext.define('MOBservation.controller.navigation.CtNavigationLogin', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            vwNavigationLogin : 'xNavigationLogin',
            vwLogin : 'xVwLogin'
        },
        control: {
            vwNavigationLogin : {
                'show' : 'onShowNavigationLogin',

            },
            vwLogin : {
            	'LOGIN_TAP_NO_ACCOUNT' : 'onLoginTapNoAccount'
            }
        }
    },

    onShowNavigationLogin : function (navigationLoginView) {
        this.showView('xVwLogin');
    },

    showView : function (alias) {
    	var navigationLoginView = this.getVwNavigationLogin(),
    		view = navigationLoginView.down(alias);

    	if (view) view.destroy();
    	view = Ext.create(alias);
    	navigationLoginView.push(view);
    },
    
    onLoginTapNoAccount : function () {
    	this.showView('xVwLoginInformation');
    }
});
