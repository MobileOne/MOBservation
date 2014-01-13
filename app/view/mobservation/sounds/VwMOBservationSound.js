Ext.define('MOBservation.view.mobservation.sounds.VwMOBservationSound', {

    extend: 'Ext.Video',

    fullscreen: true,

    alternateClassName: 'VwMOBservationSound',

    xtype: 'VwMOBservationSound',

   	config : {
   		height: '100%',
      width: '100%'
   	},

   	onError : function (e) {
   		this.fireEvent('error', this, e);
   	}
});