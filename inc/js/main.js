//Funktion för att få rätt kartvy till första sidan.
function initMap() {
  var tarningen = {lat: 56.6629679, lng: 16.364658100000042};
  var map = new google.maps.Map(document.getElementById('karta'), {
    zoom: 15,
    scrollwheel:  false,
    center: tarningen
  });
  var marker = new google.maps.Marker({
    position: tarningen,
    map: map
  });
}
