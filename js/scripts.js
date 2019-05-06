// setup of mapbox access token.
mapboxgl.accessToken = 'pk.eyJ1Ijoibmljb2xlbXVyZG9jaCIsImEiOiJjanV4MHpkcGkwaTllNDNzMGY1dWM5OXdvIn0.L10-eZL5K7-c8d7WemjfVg';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-73.952408,40.726966],
  zoom: 10,
});

// zoom and rotation tools are added to the map.
map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup({ offset: 40 })
  .setText('Dial up the volume on these NYC music joints!');

var marker = new mapboxgl.Marker()
  .setLngLat([-73.952408,40.726966])
  .setPopup(popup)
  .addTo(map);

//adding marker tools and colors to depict different music venue atmospheres.
nycMusicSpots.forEach(function(venueData) {

  var thisVenuesColor = 'steelblue';
  if (venueData.venueAtmosphere === 'funky') thisVenuesColor = 'orange';
  if (venueData.venueAtmosphere === 'chill') thisVenuesColor = 'purple';
  if (venueData.venueAtmosphere === 'smorgasbord') thisVenuesColor = 'green';
  if (venueData.venueAtmosphere === 'highenergy') thisVenuesColor = 'yellow';

  new mapboxgl.Marker({
    color: thisVenuesColor,
  })
    .setLngLat([venueData.lng, venueData.lat])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setText(`${venueData.name} is the venue to check out if you dig ${venueData.genres}`))
    .addTo(map);
})
