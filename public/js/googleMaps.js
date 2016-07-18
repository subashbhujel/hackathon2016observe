var myCenter = new google.maps.LatLng(47.6450651, -122.1345131);

var pathCoordinates = [
    new google.maps.LatLng(52.3439000, -3.0493927),
    new google.maps.LatLng(52.3440737, -3.0491620),
    new google.maps.LatLng(52.3442474, -3.0494893),
    new google.maps.LatLng(52.3443588, -3.0498272),
    new google.maps.LatLng(52.3446243, -3.0500257),
    new google.maps.LatLng(52.3451716, -3.0507070),
    new google.maps.LatLng(52.3453617, -3.0509162)
];

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var pathToCenter = new google.maps.Polyline({
        path: pathCoordinates,
        strokeColor: '#0000ff',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    pathToCenter.setMap(map);

    /*var marker=new google.maps.Marker({
      position: myCenter,
     });

    marker.setMap(map);*/

    /*google.maps.event.addListener(marker,'click',function() {
    	  map.setZoom(15);
    	  map.setCenter(marker.getPosition());
    });*/

}

google.maps.event.addDomListener(window, 'load', initialize);