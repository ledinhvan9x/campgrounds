mapboxgl.accessToken =
  "pk.eyJ1IjoibGVkaW5odmFuIiwiYSI6ImNsM2dxMGQzNzB2Y2UzaHBnNXp2ejBucGUifQ.oeMaBSo88RRMiqwGg8x3Zw";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: JSON.parse(campground),
  zoom: 10,
});

map.addControl(new mapboxgl.NavigationControl(), "top-right");

new mapboxgl.Marker()
  .setLngLat(JSON.parse(campground))
  .setPopup(new mapboxgl.Popup({ offset: 25 }))
  .addTo(map);
