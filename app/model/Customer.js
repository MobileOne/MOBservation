Ext.define("MOBservation.model.Customer", {
	extend: 'Ext.data.Model',
	requires : [
		'Ext.data.identifier.Uuid'
	],
	config: {
		identifier : 'uuid',
		fields:[
			{name : "id" },
			{name: "firstName", type: "string"},
			{name: "lastName", type: "string"}
		],
		proxy: {
            type: 'sessionstorage',
            id  : 'Customer'
        }
	}
});