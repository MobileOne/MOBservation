Ext.define('MOBservation.context.Context', {

	config: {
	    currentCustomer: null,
	    latitude : null,
	    longitude: null,
	},

	constructor: function(config) {
	    this.initConfig(config);
	},

    reset : function() {
	    this.setCurrentCustomer(null);
	    this.setLatitude(null);
	    this.setLongitude(null);
    }
});
