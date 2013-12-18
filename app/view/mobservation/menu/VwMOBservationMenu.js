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
		currentCustomer : null,
		layout : 'vbox',
		items : [
			{
				xtype : 'label',
				html : MOBservation_strings.mobservation_welcome
			},
			{
				xtype : 'xVwMOBservationMenuCarousel',
				flex : 5
			},
			{
				xtype : 'label',
				name : 'customerInformation',
				flex : 1
			}
		]
	},
	initialize : function(config){
		this.initConfig(config);
		this.updateCurrentCustomer(this.getCurrentCustomer());
	},
	updateCurrentCustomer : function (newValue){
		var customerData = Ext.getStore('Customers').getCustomer(newValue),
			customerInformation = MOBservation_strings.mobservation_no_selected_customer;
		if (customerData){
			customerInformation = MOBservation_strings.mobservation_customer_selection + customerData.firstName + " " + customerData.lastName;
			this.down('xVwMOBservationMenuCarousel').setDisabledOldObservation(false);
			this.down('xVwMOBservationMenuCarousel').setDisabledSendObservation(false);
		}
		this.down('label[name=customerInformation]').setHtml(customerInformation);
	}
});