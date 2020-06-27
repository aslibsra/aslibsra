// GIS Project ABC&MA

var map = L.map( 'map', {
  center: [47.577, 14.502],
  minZoom: 4,
  zoom: 4
})

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo( map )

var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' )

var myIcon = L.icon({
  iconUrl: myURL + 'images/covid40.png',
  iconRetinaUrl: myURL + 'images/covid70.png',
  iconSize: [40, 40],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
})

for ( var i=0; i < markers.length; ++i )
{
 L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
  .bindPopup( '<a>'  + markers[i].name + ': ' + markers[i].case_per_100000 + '</a>' )
  .addTo( map );
}
