function gotoNext(e) {

    var view = Alloy.createController('Next').getView();
    view.open();
}
$.header.__views.tital.text = "Home";
Ti.API.info("In Index.js" + JSON.stringify($.header));
$.index.open();
