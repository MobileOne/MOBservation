Ext.define('MOBservation.store.Observations', {
    extend: 'Ext.data.Store',
    config: {
        model: 'MOBservation.model.Observation',
        autoLoad: true
	 }
});