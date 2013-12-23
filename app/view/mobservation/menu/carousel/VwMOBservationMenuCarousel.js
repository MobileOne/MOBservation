Ext.define('MOBservation.view.mobservation.menu.carousel.VwMOBservationMenuCarousel', {

    extend: 'Ext.carousel.Carousel',

    alternateClassName: 'xVwMOBservationMenuCarousel',

    xtype: 'xVwMOBservationMenuCarousel',

   	requires : [
   		'Ext.Button'
	],

	config: {
		cls : 'mobservation_carousel',
		items : [
			{
				xtype : 'container',
				flex : 5,
				layout: 'vbox',
				items : [
				{
					xtype : 'container',
					flex : 1,
					layout : 'hbox',
					defaults : {
						flex : 1,
						xtype: 'button'
					},
					items : [
						{
							text : MOBservation_strings.mobservation_take_picture,
							name: 'picture'
						},
						{
							text : MOBservation_strings.mobservation_get_sound,
							name : 'sound'
						}
					]
				},
				{
					xtype : 'container',
					flex : 1,
					layout : 'hbox',
					defaults : {
						flex : 1,
						xtype: 'button'
					},
					items : [
						{
							text : MOBservation_strings.mobservation_list_pictures,
							name: 'list_pictures'
						},
						{
							text : MOBservation_strings.mobservation_list_sounds,
							name: 'list_sounds'
						}
					]
				}]
			},
			{
				xtype : 'container',
				flex : 5,
				layout: 'vbox',
				items : [
				{
					xtype : 'container',
					flex : 1,
					layout : 'hbox',
					defaults : {
						flex : 1,
						xtype: 'button'
					},
					items : [
						{
							text : MOBservation_strings.mobservation_customer,
							name: 'customer'
						},
						{
							text : MOBservation_strings.mobservation_observations,
							name : 'observations',
							disabled : true
						}
					]
				},
				{
					xtype : 'container',
					flex : 1,
					layout : 'hbox',
					defaults : {
						flex : 1,
						xtype: 'button'
					},
					items : [
						{
							text : MOBservation_strings.mobservation_send_observation,
							name: 'send',
							disabled : true
						},
						{
							text : MOBservation_strings.mobservation_disconnect,
							name: 'disconnect'
						}
					]
				}]
			},
		]
	},

	setDisabledOldObservation : function (disable) {
		this.down('button[name=observations]').setDisabled(disable);
	},
	setDisabledSendObservation : function (disable) {
		this.down('button[name=send]').setDisabled(disable);
	}
});
