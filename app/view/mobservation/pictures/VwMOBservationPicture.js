Ext.define('MOBservation.view.mobservation.pictures.VwMOBservationPicture', {

    extend: 'Ext.Img',

    fullscreen: true,

    alternateClassName: 'xVwMOBservationPicture',

    xtype: 'xVwMOBservationPicture',

   	requires : [
   		'Ext.Img'
   	],

   	config : {
   		height: '100%',
      width: '100%'
   	},

   	onError : function (e) {
   		this.fireEvent('error', this, e);
   	}
});