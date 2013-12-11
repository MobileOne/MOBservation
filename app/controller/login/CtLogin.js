/*global Ext*/
Ext.define('MOBservation.controller.login.CtLogin', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            vwLogin : 'xVwLogin'
        },
        control: {
            'xVwLogin button[name=valid]' : {
            	'tap' : 'onTapButtonValid'
            },
            'xVwLogin button[name=noaccount]' : {
            	'tap' : 'onTapButtonNoAccount'
            }
        }
    },
    onTapButtonValid : function (button) {
    	var values = this.getVwLogin().getValues();
    	if (Ext.isEmpty(values.email)){
    		Ext.Msg.alert(MOBservation_strings.app_name, MOBservation_strings.login_error_no_email, Ext.emptyFn);
    	} else {
    		if (Ext.isEmpty(values.password)){
    			Ext.Msg.alert(MOBservation_strings.app_name, MOBservation_strings.login_error_no_password, Ext.emptyFn);
    		}
    	}
    },

    onTapButtonNoAccount : function (button) {
    	var viewLogin = this.getVwLogin();
    	viewLogin.fireEvent('LOGIN_TAP_NO_ACCOUNT', viewLogin);
    }
});
