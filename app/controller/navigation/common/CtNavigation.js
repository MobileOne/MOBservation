Ext.define('MOBservation.controller.navigation.common.CtNavigation', {
    extend: 'Ext.app.Controller',
    config : {},
    showView : function (alias) {
        var navigationView = this.getNavigationView(),
            view = navigationView.down(alias);

        if (view) view.destroy();
        view = Ext.create(alias);
        navigationView.push(view);
    },
});
