Ext.define('MOBservation.view.mobservation.menu.folder.VwMOBservationMenuFolder', {

    extend: 'Ext.Container',

    alternateClassName: 'xVwMOBservationMenuFolder',

    xtype: 'xVwMOBservationMenuFolder',

   	requires : [
   		'Ext.Button',
   		'Ext.Label'
	],

	config: {
		cls : 'menu',
		layout : 'vbox',
		items : [
			{
				xtype : 'label',
				html : MOBservation_strings.mobservation_folder,
				flex : 1
			},
			{
				xtype : 'container',
				flex : 4,
				layout: 'hbox',
				items : [
					{
						xtype : 'button',
						text : MOBservation_strings.mobservation_list_pictures,
						name: 'list_pictures',
						flex : 1
					},
					{
						xtype : 'button',
						text : MOBservation_strings.mobservation_list_sounds,
						name: 'list_sounds',
						flex : 1
					},
					{
						xtype : 'button',
						text : MOBservation_strings.mobservation_geolocation,
						name: 'geolocation',
						flex : 1
					},
				]
			},
			{
				xtype : 'container',
				flex : 4,
				layout : 'hbox',
				items : [
					{
						xtype : 'button',
						text : MOBservation_strings.mobservation_customer,
						name: 'customer',
						flex : 1
					},
					{
						xtype : 'button',
						text : MOBservation_strings.mobservation_observations,
						name : 'observations',
						disabled : true,
						flex : 1
					},
					{
						xtype : 'button',
						text : MOBservation_strings.mobservation_send_observation,
						name: 'send',
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