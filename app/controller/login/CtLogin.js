/*global Ext*/
Ext.define('MOBservation.controller.login.CtLogin', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            vwLogin : 'xVwLogin'
        },
        control: {
            vwLogin : {
                'show' : 'onShowViewLogin'
            }
        }
    },

    onShowViewLogin: function (viewLogin) {
        console.log('CtLogin - onShowViewLogin')
    }
});
