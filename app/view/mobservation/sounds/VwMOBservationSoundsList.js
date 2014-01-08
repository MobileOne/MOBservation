Ext.define('MOBservation.view.mobservation.sounds.VwMOBservationSoundsList', {

	alternateClassName: 'xVwMOBservationSoundsList',

    extend: 'Ext.Container',

    xtype: 'xVwMOBservationSoundsList',

   	requires : [
   		'Ext.dataview.List',
      'Ext.Label'
	],

	config: {
    layout: 'vbox',
    title : MOBservation_strings.mobservation_list_sounds,
    items : [
      {
        xtype : 'list',
        store : 'Sounds',
        emptyText : MOBservation_strings.mobservation_sounds_empty_text,
        itemTpl: '{id}',
        flex: 1
      }
		]
	}
});