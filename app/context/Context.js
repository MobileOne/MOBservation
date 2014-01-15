Ext.define('MOBservation.context.Context', {

	config: {
	    currentCustomer: null,
	    currentUser : null,
	    latitude : null,
	    longitude: null,
	    currentObservation : null,
	    uploadedSounds : 0,
	    sounds : 0
	},

	constructor: function(config) {
	    this.initConfig(config);
	},

    reset : function() {
	    this.setCurrentCustomer(null);
	    this.setLatitude(null);
	    this.setLongitude(null);
	    this.setCurrentObservation(null);
	    this.setUploadedSounds(0);
	    this.setSounds(0);
	    Ext.getStore('Pictures').removeAll();
	    Ext.getStore('Sounds').removeAll();
    }
});
