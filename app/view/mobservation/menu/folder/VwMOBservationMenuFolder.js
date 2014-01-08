Ext.define('MOBservation.view.mobservation.menu.folder.VwMOBservationMenuFolder', {

    extend: 'Ext.Container',

    alternateClassName: 'xVwMOBservationMenuFolder',

    xtype: 'xVwMOBservationMenuFolder',

   	requires : [
   		'Ext.Button',
   		'Ext.Label'
	],

	config: {
		cls : 'folder',
		layout : 'vbox',
		title : MOBservation_strings.mobservation_folder,
		items : [
			{
				xtype : 'container',
				flex : 1,
				layout: 'hbox',
				items : [
					{
						xtype : 'button',
						text : MOBservation_strings.mobservation_list_pictures,
						name: 'list_pictures',
						baseCls : 'home_button list_pictures',
						flex : 1
					},
					{
						xtype : 'button',
						text : MOBservation_strings.mobservation_list_sounds,
						name: 'list_sounds',
						baseCls : 'home_button list_sounds',
						flex : 1
					},
					{
						xtype : 'button',
						text : MOBservation_strings.mobservation_geolocation,
						name: 'geolocation',
						baseCls : 'home_button geolocation',
						flex : 1
					},
				]
			},
			{
				xtype : 'container',
				flex : 1,
				layout : 'hbox',
				items : [
					{
						xtype : 'button',
						text : MOBservation_strings.mobservation_customer,
						name: 'customer',
						baseCls : 'home_button customer',
						flex : 1
					},
					{
						xtype : 'button',
						text : MOBservation_strings.mobservation_observations,
						name : 'observations',
						baseCls : 'home_button observations',
						disabled : true,
						flex : 1
					},
					{
						xtype : 'button',
						text : MOBservation_strings.mobservation_send_observation,
						name: 'send',
						baseCls : 'home_button send',
						flex : 1,
						disabled : true
					},
				]
			}
		]
	},
	setDisabledOldObservation : function (disable) {
		this.down('button[name=observations]').setDisabled(disable);
	},
	setDisabledSendObservation : function (disable) {
		this.down('button[name=send]').setDisabled(disable);
	}
});