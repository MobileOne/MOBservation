Ext.define("MOBservation.model.Sound", {
	extend: 'Ext.data.Model',
	requires : [
		'Ext.data.identifier.Uuid'
	],
	config: {
		identifier : 'uuid',
		fields:[
			{name : "id" },
			{name: "name", type: "string"},
			{name: "sound", type: "string"}
		],
		proxy: {
            type: 'sessionstorage',
            id  : 'Sound'
        }
	}
});