Ext.define('MOBservation.view.mobservation.menu.VwMOBservationMenu', {

    extend: 'Ext.Container',

    alternateClassName: 'xVwMOBservationMenu',

    xtype: 'xVwMOBservationMenu',

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
						text : 'Button1'
					},
					{
						text : 'Button2'
					},
					{
						text : 'Button3'
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
						text : 'Button1'
					},
					{
						text : 'Button2'
					},
					{
						text : 'Button3'
					}
				]
			}
		]
	}
});