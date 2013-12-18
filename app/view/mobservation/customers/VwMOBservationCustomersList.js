Ext.define('MOBservation.view.mobservation.customers.VwMOBservationCustomersList', {

	alternateClassName: 'xVwMOBservationCustomersList',

    extend: 'Ext.Container',

    xtype: 'xVwMOBservationCustomersList',

   	requires : [
   		'Ext.dataview.List',
      'Ext.Label'
	],

	config: {
    layout: 'vbox',
    items : [
      {
        xtype : 'label',
        html : 'Selectionner un client'
      },
      {
        xtype : 'list',
        store : 'Customers',
        itemTpl: '{firstName} {lastName}',
        flex: 1
      }
		]
	}
});