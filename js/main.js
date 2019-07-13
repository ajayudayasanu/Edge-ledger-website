// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 11.264472, lng: 75.891947 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 16,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}
