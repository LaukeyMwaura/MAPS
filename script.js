mapboxgl.accessToken = 'pk.eyJ1IjoibGF1a2V5a2UiLCJhIjoiY2tocHdkejZkMDNtaDJ6dDBqMnpid3hrciJ9.bS96QEdA_Nt4eTNWiJYnNQ';


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})


function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap(36.9580, -0.4371)
}


const setupMap = (center) => {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-left');

    const directions = new MapboxDirections({
        accessToken: 'pk.eyJ1IjoibGF1a2V5a2UiLCJhIjoiY2tocHdkejZkMDNtaDJ6dDBqMnpid3hrciJ9.bS96QEdA_Nt4eTNWiJYnNQ'
    });
    map.addControl(directions, 'top-left');
}