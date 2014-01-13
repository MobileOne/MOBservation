Ext.define('MOBservation.view.login.VwLoginInformation', {

	alternateClassName: 'xVwLoginInformation',

    extend: 'Ext.Container',

    xtype: 'xVwLoginInformation',

   	requires : [
   		'Ext.Label',
   		'Ext.Img'
	],

	config: {
		title : MOBservation_strings.login_infos,
		cls : 'login_infos',
		items : [
			{
				html : MOBservation_strings.login_information_description,
				flex : 5
			},
			{
				xtype : 'container',
				flex : 1,
				layout: 'hbox',
				cls : 'portraits',
				defaults:{
					xtype : 'img',
					flex : 1
				},
				items : [
					{
						cls : 'portrait fred'
					},
					{
						cls : 'portrait nono'
					},
					{
						cls : 'portrait bastien'
					},
					{
						cls : 'portrait guillaume'
					},
					{
						cls : 'portrait jeremy'
					},
				]
			}
		]
	}
});