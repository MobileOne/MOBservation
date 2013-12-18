Ext.define("MOBservation.model.Observation", {
	extend: 'Ext.data.Model',
	requires : [
		'Ext.data.identifier.Uuid'
	],
	config: {
		identifier : 'uuid',
		fields:[
			{name : "id" },
			{name: "name", type: "string"},
			{name: "picturesCount", type: "int"},
			{name: "customer_id", type: "string"}
		],
		proxy: {
            type: 'sessionstorage',
            id  : 'Observation'
        }
	}
});