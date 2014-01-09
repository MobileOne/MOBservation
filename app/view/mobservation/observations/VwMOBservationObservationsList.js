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
        disableSelection : true,
        store : 'Observations',
        emptyText : MOBservation_strings.mobservation_observations_empty_text,
        itemTpl: '{title} : {picturesCount} ' + MOBservation_strings.mobservation_observations_pictures + ', {soundsCount} ' + MOBservation_strings.mobservation_observations_sounds,
        flex: 1
      }
		]
	}
});