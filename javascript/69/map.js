
/*global google, $*/
window.initMap = function () {
    'use strict';

    const list = $("#sidebar ul");

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13
    });

    const infoWindow = new google.maps.InfoWindow({
        maxWidth: 250
    });

    const places = $('#places');
    const numRows = $('#rows');
    $('#findPlaces').submit(e => {
        fetch(`http://api.geonames.org/wikipediaSearch?username=slubowsky&type=json&q=${places.val()}&maxRows=${rows.val()}`
            .then(r => r.json())
            .then(places => {
                const bounds = new google.maps.LatLngBounds();
                places.geonames.forEach(place => {
                    const ltLng = { lt: place.lat, lg: place.lng };
                    bounds.extend(ltLng);
                    const marker = new google.maps.Marker({
                        position: ltLng,
                        map: map,
                        title: place.title,
                        icon: {
                            url: place.thumbnailImg
                        }
                    });

                    marker.addListener('click', () => {
                        infoWindow.setContent(`${place.summary}`);
                        infoWindow.open(map, marker);
                    });

                    const info = $(`<li title="${place.summary}">
                    <img src="${place.thumbnailImg}"/>
                    <div>${place.title} ${place.summary}</div>
                </li>`)
                        .appendTo(list)

                    map.fitBounds(bounds);

                })
            })
        });
    e.preventDefault();
});
}