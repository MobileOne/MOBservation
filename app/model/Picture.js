Ext.define("MOBservation.model.Picture", {
	extend: 'Ext.data.Model',
	requires : [
		'Ext.data.identifier.Uuid'
	],
	config: {
		identifier : 'uuid',
		fields:[
			{name : "id" },
			{name: "name", type: "string"},
			{name: "picture", type: "string"}
		],
		proxy: {
            type: 'sessionstorage',
            id  : 'Picture'
        }
	}
});