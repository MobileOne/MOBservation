Ext.define('MOBservation.form.login.VwLogin', {

	alternateClassName: 'xVwLogin',

    extend: 'Ext.form.Panel',

    xtype: 'xVwLogin',

   	requires : [
   		'Ext.Button',
   		'Ext.field.Email',
   		'Ext.field.Password',
   		'Ext.Label',
   		'Ext.Img'
	],

	config: {
		cls : 'login',
		layout: 'vbox',
		title : MOBservation_strings.app_name,
		items : [
			{
				xtype : 'label',
				html  : MOBservation_strings.login_label_authentification,
				flex : 1
			},
			{
				xtype: 'container',
				cls : 'authentification',
				flex : 5,
				items: [
				{
					xtype : 'emailfield',
					cls : 'emailfield',
					label  : MOBservation_strings.login_input_label,
					placeHolder : MOBservation_strings.login_input_label_placeHolder,
					name : 'email'

				},
				{
					xtype : 'passwordfield',
					cls : 'passwordfield',
					label : MOBservation_strings.login_input_password,
					placeHolder : MOBservation_strings.login_input_password_placeHolder,
					name : 'password'
				},
				{
					xtype: 'image',
					src : 'resources/images/marianne.jpg',
					cls : 'mobservation'
				}]
			},
			{
				xtype : 'container',
				cls : 'buttons',
				layout : 'hbox',
				items : [
					{
						xtype : 'button',
						text : MOBservation_strings.login_noaccount,
						name : 'noaccount',
						flex : 1
					},
					{
						xtype : 'button',
						text : MOBservation_strings.login_valid,
						name : 'valid',
						flex : 1
					}
				]
			}
		]
	}
});