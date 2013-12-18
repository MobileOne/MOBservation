Ext.define('MOBservation.store.Observations', {
    extend: 'Ext.data.Store',
    config: {
        model: 'MOBservation.model.Observation',
        autoLoad: true,
        data : [
        	{id : '1', name: 'Constat 1', picturesCount: 5, customer_id : '1'},
        	{id : '2', name: 'Constat 2', picturesCount: 3, customer_id : '1'},
            {id : '3', name: 'Constat 1', picturesCount: 2, customer_id : '2'},
            {id : '4', name: 'Constat 1', picturesCount: 2, customer_id : '3'},
        ]
	 }
});