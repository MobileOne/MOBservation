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
            viewLogin = this.getVwLogin(),
            reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');

    	if (Ext.isEmpty(values.email)){
    		Ext.Msg.alert(MOBservation_strings.app_name, MOBservation_strings.login_error_no_email, Ext.emptyFn);
    	} else if (!reg.test(values.email)){ 
            Ext.Msg.alert(MOBservation_strings.app_name, MOBservation_strings.login_error_is_not_an_email, Ext.emptyFn);
    	} else if (Ext.isEmpty(values.password)) {
            Ext.Msg.alert(MOBservation_strings.app_name, MOBservation_strings.login_error_no_password, Ext.emptyFn);
        } else {
            this.login(values.email, values.password);
        }
    },

    onTapButtonNoAccount : function (button) {
    	var viewLogin = this.getVwLogin();
    	viewLogin.fireEvent('LOGIN_TAP_NO_ACCOUNT', viewLogin);
    },

    login : function (email, password) {
        MOBservation.app.showLoadingMask();
        Ext.Ajax.request({
            url: Configuration.urlBase + Configuration.login,
            jsonData: {
                email: email,
                password: password
            },
            success : Ext.bind(this.onLoginSuccess, this),
            failure : Ext.bind(this.onLoginFailure, this)
        });
    },
    onLoginSuccess : function (response) {
        MOBservation.app.hideLoadingMask();
        var user = Ext.JSON.decode(response.responseText);
        if (user == "Wrong user"){
            Ext.Msg.alert(MOBservation_strings.app_name, MOBservation_strings.login_wrong_user);
        } else {
            MOBservation.app.context.setCurrentUser(user.id);
            this.getVwLogin().fireEvent('USER_LOGGED', this.getVwLogin());
        }
    },
    onLoginFailure : function (error) {
        MOBservation.app.hideLoadingMask();
        Ext.Msg.alert(MOBservation_strings.app_name, MOBservation_strings.login_error);
    }
});
