
/*global google, $*/
window.initMap = function () {
    'use strict';


    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13
    });

    const places = $("#sidDiv ul");
    const tagsInput = $('#findPlace');
    const rowsInput = $('#numRows');
    $('#inputForm').submit(e => {
        e.preventDefault();
        fetch(`http://api.geonames.org/wikipediaSearch?username=slubowsky&type=json&q=${tagsInput.val()}&maxRows=${rowsInput.val()}`)
            .then(r => r.json())
            .then(data => {

                data.geonames.forEach(place => {
                    places.append$(`<li title="${place.title}">`);

                    const location = { lat: place.lat, lng: place.lng };
                    const marker = new google.maps.Marker({
                        position: location,
                        map: map,
                        title: place.title
                    });

                });

            });
    });

};