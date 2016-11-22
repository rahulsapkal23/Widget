// Ti.API.info("fdfd" + $.Nxt.src);
Ti.API.info("In Next.js" + JSON.stringify($.header));
$.header.__views.tital.text = "2 Window";
$.header.__views.back.text = "Back";
if (OS_ANDROID) {
    $.nextView.top = "70";

} else {
    $.nextView.top = "90";
}

$.header.__views.back.addEventListener('click', function(e) {
    $.nextWindow.close();
});
