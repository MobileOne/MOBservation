Ext.define('MOBservation.view.login.VwLoginInformation', {

	alternateClassName: 'xVwLoginInformation',

    extend: 'Ext.Container',

    xtype: 'xVwLoginInformation',

   	requires : [
   		'Ext.Label'
	],

	config: {
		title : MOBservation_strings.login_infos,
		cls : 'login_infos',
		items : [
			{
				html : MOBservation_strings.login_information_description
			}
		]
	}
});