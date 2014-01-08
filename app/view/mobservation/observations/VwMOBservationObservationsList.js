Ext.define('MOBservation.view.mobservation.observations.VwMOBservationObservationsList', {

	alternateClassName: 'xVwMOBservationObservationsList',

    extend: 'Ext.Container',

    xtype: 'xVwMOBservationObservationsList',

   	requires : [
   		'Ext.dataview.List',
      'Ext.Label'
	],

	config: {
    layout: 'vbox',
    title : MOBservation_strings.mobservation_observations,
    items : [
      {
        xtype : 'list',
        store : 'Observations',
        emptyText : MOBservation_strings.mobservation_observations_empty_text,
        itemTpl: '{name} : {picturesCount} ' + MOBservation_strings.mobservation_observations_pictures,
        flex: 1
      }
		]
	}
});