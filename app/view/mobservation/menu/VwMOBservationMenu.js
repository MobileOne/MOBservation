Ext.define('MOBservation.view.mobservation.menu.VwMOBservationMenu', {

    extend: 'Ext.Container',

    alternateClassName: 'xVwMOBservationMenu',

    xtype: 'xVwMOBservationMenu',

   	requires : [
   		'Ext.Button',
   		'Ext.Label'
	],

	config: {
		cls : 'menu',
		currentCustomer : null,
		layout : 'vbox',
		title : MOBservation_strings.app_name,
		items : [
			{
				xtype : 'label',
				html : MOBservation_strings.mobservation_welcome,
				flex : 1
			},
			{
				xtype : 'container',
				layout: 'vbox',
				flex : 5,
				defaults :{
					layout: 'hbox'
				},
				items : [
					{
						xtype : 'container',
						flex : 1,
						items : [
							{
								xtype : 'button',
								name: 'picture',
								baseCls : 'home_button take_picture',
								flex : 1
							},
							{
								xtype : 'label',
								html : MOBservation_strings.mobservation_take_picture,
								flex : 3
							}
						]
					},
					{
						xtype : 'container',
						flex : 1,
						items : [
							{
								xtype : 'button',
								name : 'sound',
								baseCls : 'home_button take_sound',
								flex : 1
							},
							{
								xtype : 'label',
								html : MOBservation_strings.mobservation_get_sound,
								flex : 3
							}
						]
					},
					{
						xtype : 'container',
						flex : 1,
						items : [
							{
								xtype : 'button',
								name : 'folder',
								baseCls : 'home_button customer_folder',
								flex : 1
							},
							{
								xtype : 'label',
								html : MOBservation_strings.mobservation_folder,
								flex : 3
							}
						]
					},
					{
						xtype : 'container',
						flex : 1,
						items : [
							{
								xtype : 'button',
								name: 'disconnect',
								baseCls : 'home_button disconnect',
								flex : 1
							},
							{
								xtype : 'label',
								html : MOBservation_strings.mobservation_disconnect,
								flex : 3
							}
						]
					}
				]
			},
			{
				xtype : 'label',
				name : 'customerInformation',
				flex : 2
			}
		]
	},
	updateCurrentCustomer : function(value){
		this.fireEvent('updateCurrentCustomer', this, value);
	},
});