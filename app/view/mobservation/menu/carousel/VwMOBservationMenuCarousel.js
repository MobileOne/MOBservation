Ext.define('MOBservation.view.mobservation.menu.carousel.VwMOBservationMenuCarousel', {

    extend: 'Ext.carousel.Carousel',

    alternateClassName: 'xVwMOBservationMenuCarousel',

    xtype: 'xVwMOBservationMenuCarousel',

   	requires : [
   		'Ext.Button'
	],

	config: {
		items : [
			{
				xtype : 'container',
				layout : 'hbox',
				defaults : {
					flex : 1,
					xtype: 'button'
				},
				items : [
					{
						text : MOBservation_strings.mobservation_take_picture
					},
					{
						text : MOBservation_strings.mobservation_get_sound
					},
					{
						text : MOBservation_strings.mobservation_customer,
						name : 'customer'
					}
				]
			},
			{
				xtype : 'container',
				layout : 'hbox',
				defaults : {
					flex : 1,
					xtype: 'button'
				},
				items : [
					{
						text : MOBservation_strings.mobservation_list_pictures
					},
					{
						text : MOBservation_strings.mobservation_list_sounds
					},
					{
						text : MOBservation_strings.mobservation_disconnect,
						name: 'disconnect'
					}
				]
			}
		]
	}
});