Ext.define('MOBservation.view.mobservation.geolocation.VwMOBservationGeolocation', {

    extend: 'Ext.Container',

    alternateClassName: 'xVwMOBservationGeolocation',

    xtype: 'xVwMOBservationGeolocation',

   	requires : [
   		'Ext.Button',
   		'Ext.field.Text',
   		'Ext.Label'
	],

	config: {
		cls : 'geolocation',
		title : MOBservation_strings.mobservation_geolocation,
		items : [
			{
				xtype : 'container',
				items : [
					{
						xtype : 'textfield',
						name: 'latitude',
						label : MOBservation_strings.mobservation_geolocation_label_latitude,
						readOnly : true
					},
					{
						xtype : 'textfield',
						name: 'longitude',
						label : MOBservation_strings.mobservation_geolocation_label_longitude,
						readOnly : true
					},
					{
						xtype : 'textareafield',
						name: 'address',
						label : 'Adresse',
						labelAlign : 'top',
						readOnly: true
					},
					{
						xtype : 'container',
						cls : 'container_geolocation',
						layout: 'hbox',
						items: [
							{
								xtype : 'label',
								html : MOBservation_strings.mobservation_geolocation_get_location_label,
								cls : 'label_geolocation',
								flex : 1
							},
							{
								xtype : 'button',
								name : 'geolocation',
								baseCls : 'home_button button_geolocation',
								flex : 1
							}
						]
					},
					{
						xtype : 'button',
						name : 'save_geolocation',
						cls : 'save_geolocation',
						text: MOBservation_strings.mobservation_geolocation_save_location
					}
				]
			}
		]
	}
});