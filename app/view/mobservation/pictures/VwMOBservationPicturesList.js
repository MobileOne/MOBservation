Ext.define('MOBservation.view.mobservation.pictures.VwMOBservationPicturesList', {

	alternateClassName: 'xVwMOBservationPicturesList',

    extend: 'Ext.Container',

    xtype: 'xVwMOBservationPicturesList',

   	requires : [
   		'Ext.dataview.List',
      'Ext.Label'
	],

	config: {
    layout: 'vbox',
    items : [
      {
        xtype : 'label',
        html :  MOBservation_strings.mobservation_list_pictures
      },
      {
        xtype : 'list',
        store : 'Pictures',
        emptyText : MOBservation_strings.mobservation_pictures_empty_text,
        itemTpl: '{id}',
        flex: 1
      }
		]
	}
});