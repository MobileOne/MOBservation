Ext.define('MOBservation.view.mobservation.customers.VwMOBservationCustomersList', {

	alternateClassName: 'xVwMOBservationCustomersList',

    extend: 'Ext.Container',

    xtype: 'xVwMOBservationCustomersList',

   	requires : [
   		'Ext.dataview.List',
      'Ext.Label'
	],

	config: {
    title : MOBservation_strings.app_name,
    layout: 'vbox',
    items : [
      {
        xtype : 'label',
        html : 'Selectionner un client'
      },
      {
        xtype : 'list',
        store : 'Customers',
        itemTpl: '{first_name} {last_name}',
        flex: 1
      }
		]
	}
});