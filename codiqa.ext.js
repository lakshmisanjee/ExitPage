// Put your custom code here

//document.addEventListener("deviceready", onDeviceReady, true);
// 
//  function onDeviceReady(){


$(document).ready(function () {
    $("#about").click(function () {
        window.location.href = "#page2";
    });
    $('#accele').click(function () {
        window.location.href = "#page2";
    });
    $('#camera').click(function () {
        window.location.href = "#page2";
    });
    $('#geolocation').click(function () {
        window.location.href = "#page2";
    });
    $('#device').click(function () {
        window.location.href = "#page2";
    });
    $('#event').click(function () {
        window.location.href = "#page2";
    });
    $('#file').click(function () {
        window.location.href = "#page2";
    });
    $('#media').click(function () {
        window.location.href = "#page2";
    });
    $('#contacts').click(function () {
        window.location.href = "#page2";
    });

    //alert(backbutton);
    //    var backbutton = document.getElementById('backbutton');
    //    alert(backbutton);
    //    backbutton.addEventListener('click', function () {

   // $("#back-button").trigger("click");
    //document.fireEvent("backbutton");
  $("#backbutton").click(function(e){


      // document.addEventListener("backbutton", function (e) {
        alert(backbutton);
        if ($('.ui-page-active').attr('id') == 'page1') {
            // if ($.mobile.activePage.attr("id") == "page1") {
            //if ($.mobile.activePage.is('#page1')) { 
            e.preventDefault();
            exitAppPopup();
        }
        else {
            history.back();
        }
    }, false);


    function exitAppPopup() {
        alert("a1");
        navigator.notification.confirm('Exit PhoneGap' + device.cordova + 'Demo?'
        , function (button) {
            if (button == 2) {
                navigator.app.exitApp();

            }
        }
, 'Exit'
, 'No,Yes'
);
        return false;
    }


    //    $('#button2').click(function () {
    //        history.back();
    //    });


});
