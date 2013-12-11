Ext.define('MOBservation.form.login.VwLogin', {

	alternateClassName: 'xVwLogin',

    extend: 'Ext.form.Panel',

    xtype: 'xVwLogin',

   	requires : [
   		'Ext.Button',
   		'Ext.field.Email',
   		'Ext.field.Password',
   		'Ext.Label'
	],

	config: {
		items : [
			{
				xtype : 'label',
				html  : MOBservation_strings.login_label_authentification
			},
			{
				xtype : 'emailfield',
				label  : MOBservation_strings.login_input_label,
				placeHolder : MOBservation_strings.login_input_label_placeHolder,
				name : 'email'

			},
			{
				xtype : 'passwordfield',
				label : MOBservation_strings.login_input_password,
				placeHolder : MOBservation_strings.login_input_password_placeHolder,
				name : 'password'
			},
			{
				xtype : 'container',
				layout : 'hbox',
				items : [
					{
						xtype : 'button',
						text : MOBservation_strings.login_noaccount,
						name : 'noaccount'
					},
					{
						xtype : 'button',
						text : MOBservation_strings.login_valid,
						name : 'valid'
					}
				]
			}
		]
	}
});