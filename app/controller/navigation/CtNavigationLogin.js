Ext.define('MOBservation.controller.navigation.CtNavigationLogin', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            viewNavigationLogin : 'xNavigationLogin',
            vwLogin             : 'xVwLogin'
        },
        control: {
            viewNavigationLogin : {
                'show' : 'onShowNavigationLogin'
            }
        }
    },
    onShowNavigationLogin : function (navigationLoginView) {
        navigationLoginView.removeAll();
        var vwLogin = Ext.create('Login');
        navigationLoginView.push(vwLogin);
    }
});
