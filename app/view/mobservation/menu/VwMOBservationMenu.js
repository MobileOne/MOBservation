Ext.define('MOBservation.view.mobservation.menu.VwMOBservationMenu', {

    extend: 'Ext.Container',

    alternateClassName: 'xVwMOBservationMenu',

    xtype: 'xVwMOBservationMenu',

   	requires : [
   		'Ext.Button',
   		'MOBservation.view.mobservation.menu.carousel.VwMOBservationMenuCarousel',
   		'Ext.Label'
	],

	config: {
		items : [
			{
				xtype : 'label',
				html : MOBservation_strings.mobservation_welcome
			},
			{
				xtype : 'xVwMOBservationMenuCarousel',
				height: '80%'
			}
		]
	}
});