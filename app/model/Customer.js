Ext.define("MOBservation.model.Customer", {
	extend: 'Ext.data.Model',
	requires : [
		'Ext.data.identifier.Uuid'
	],
	config: {
		identifier : 'uuid',
		fields:[
			{name : "id" },
			{name: "first_name", type: "string"},
			{name: "last_name", type: "string"}
		],
		proxy: {
            type: 'sessionstorage',
            id  : 'Customer'
        }
	}
});