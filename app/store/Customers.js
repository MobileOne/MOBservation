Ext.define('MOBservation.store.Customers', {
    extend: 'Ext.data.Store',
    config: {
        model: 'MOBservation.model.Customer',
        autoLoad: true,
        data : [
        	{id : '1', firstName: 'Frédéric', lastName: 'Baraillon'},
        	{id : '2', firstName: 'Guillaume', lastName: 'Roy'},
        	{id : '3', firstName: 'Jérémy', lastName: 'Duval'},
        	{id : '4', firstName: 'Geoffrey', lastName: 'Noël'},
        	{id : '5', firstName: 'Bastien', lastName: 'Poidevain'}
        ]
	 },
	 getCustomer : function (id) {
	 	if (id){
	 		var customer = this.getById(id);
	 		if (customer){
	 			return Ext.clone(customer.getData());
	 		}
	 	}
	 	return null;
	 }
});