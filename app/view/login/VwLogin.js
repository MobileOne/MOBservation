Ext.define('MOBservation.view.login.VwLogin', {

	alternateClassName: 'Login',

    extend: 'Ext.Container',

    xtype: 'xVwLogin',

   	requires : [

	],

	config: {
		items : [
			{
				xtype : 'textfield',
				label  : MOBservation_strings.login_input_label
			},
			{
				xtype : 'passwordfield',
				label : MOBservation_strings.login_input_password
			}
		]
	}
});