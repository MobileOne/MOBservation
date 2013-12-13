Ext.define('MOBservation.controller.CtMain', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            vwNavigationLogin : 'xNavigationLogin',
            vwNavigationMOBservation : 'xNavigationMOBservation'
        },
        control: {
            vwNavigationLogin : {
            	'LOGIN_COMPLETED' : 'onLoginCompleted'
            }
        }
    },
    launch : function(){
        this.showView('xNavigationLogin');
    },
    showView : function(alias){
        Ext.Viewport.removeAll();
        var view = Ext.create(alias);
        Ext.Viewport.add(view);
    },
    onLoginCompleted : function (viewLogin) {
        this.showView('xNavigationMOBservation');
    }
});