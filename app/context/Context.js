Ext.define('MOBservation.context.Context', {

	config: {
	    currentCustomer: null
	},

	constructor: function(config) {

	    this.initConfig(config);
	},

    reset : function() {
	    this.setCurrentCustomer(null);
    }

});
