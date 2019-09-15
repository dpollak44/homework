
/*global google, $*/
window.initMap = function () {
    'use strict';

    const lakewood = { lat: 40.096068191437205, lng: -74.222168870743332 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: lakewood,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    const infoWindow = new google.maps.InfoWindow({
        maxWidth: 250
    });

    let openSummary;
    const placesList = $("#sidebar ul");
    const tagsInput = $('#tags');
    const rowsInput = $('#rows');
    $('#inputForm').submit(e => {
        e.preventDefault();

        /*$.getJSON('http://api.geonames.org/wikipediaSearch?username=slubowsky&type=json',
                    { q: tagsInput.val(), maxRows: rowsInput.val() })*/
        /*$.ajax({
            dataType: "json",
            url: 'http://api.geonames.org/wikipediaSearch?username=slubowsky&type=json',
            data: { q: tagsInput.val(), maxRows: rowsInput.val() },
            cache: false
        })
            .done(data => {*/
        fetch(`http://api.geonames.org/wikipediaSearch?username=slubowsky&type=json&q=${tagsInput.val()}&maxRows=${rowsInput.val()}`/*, { cache: 'no-store' }*/)
            .then(r => r.json())
            .then(data => {
                console.log(data);

                const bounds = new google.maps.LatLngBounds();

                data.geonames.forEach(place => {
                    /*let icon;
                    if (place.thumbnailImg) {
                        icon = {
                            url: place.thumbnailImg,
                            scaledSize: new google.maps.Size(50, 50)
                        };
                    }*/
                    const loc = { lat: place.lat, lng: place.lng };
                    bounds.extend(loc);
                    const marker = new google.maps.Marker({
                        position: loc,
                        map: map,
                        title: place.title,
                        icon: place.thumbnailImg ? {
                            url: place.thumbnailImg,
                            scaledSize: new google.maps.Size(50, 50)
                        } : null
                    });

                    marker.addListener('click', () => {
                        infoWindow.setContent(`${place.summary}<br/><a href="http://${place.wikipediaUrl} target="_blank">see more</a>`);
                        infoWindow.open(map, marker);
                    });

                    const placeInfo = $(`<li title="${place.summary}">
                           <img src="${place.thumbnailImg || "images\\default.png"}" alt="${place.title}"/>
                           <span>${place.title}</span>
                           <div class="summary">${place.summary}</div>
                       </li>`)
                        .appendTo(placesList)
                        .click(() => {
                            const placeSummary = $(placeInfo.find('.summary'));
                            //if (!placeSummary.is(":visible")) {
                            if (!placeSummary.is(openSummary)) {
                                map.fitBounds(bounds);
                                setTimeout(() => {
                                    map.panTo(loc);
                                    setTimeout(() => {
                                        map.setZoom(18);
                                    }, 500);
                                }, 500);
                                //$('.summary').slideUp('slow');
                                if (openSummary) {
                                    openSummary.slideUp('slow');
                                }
                                placeSummary.slideDown('slow');

                                openSummary = placeSummary;
                            }
                        });
                });

                map.fitBounds(bounds);
            });
    });

    const drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);

    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
        console.log(event);
        if (event.type === 'marker') {
            //console.log(event.overlay.position.lat(), event.overlay.position.lng());
            localStorage.marker = JSON.stringify(event.overlay.position);
        }
    });

    if (localStorage.marker) {
        new google.maps.Marker({
            position: JSON.parse(localStorage.marker),
            map: map
        });
    }
};