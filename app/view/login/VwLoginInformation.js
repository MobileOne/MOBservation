Ext.define('MOBservation.view.login.VwLoginInformation', {

	alternateClassName: 'xVwLoginInformation',

    extend: 'Ext.Container',

    xtype: 'xVwLoginInformation',

   	requires : [
   		'Ext.Label'
	],

	config: {
		title : MOBservation_strings.app_name,
		items : [
			{
				xtype : 'label',
				html  : MOBservation_strings.login_information_label
			},
			{
				html : MOBservation_strings.login_information_description
			}
		]
	}
});