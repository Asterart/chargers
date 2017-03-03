var mymap;

function geoFindMe() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, geoOptions);
    } else {
        console.log("Geolocation services are not supported by your web browser.");
    }
}

function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var accuracy = position.coords.accuracy;
    console.log("lat: " + latitude + " long: " + longitude);
    
    mymap = L.map('mapid').setView([latitude, longitude], 15);
    
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(mymap);
    

    L.marker([latitude, longitude]).addTo(mymap)
        .bindPopup('Here you are')
        .openPopup();
        

}

function error(error) {
    console.log("Unable to retrieve your location due to " + error.code + ": " + error.message);
}

var geoOptions = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
};



function showSC(kind){
    
    console.log(kind);
    if (kind == 1){
    L.marker([53, 22]).addTo(mymap)
        .bindPopup('This is my SC')
        .openPopup();
    }if (kind == 2){
        L.marker([43, 32]).addTo(mymap)
        .bindPopup('This is my T2')
        .openPopup();
    }
}