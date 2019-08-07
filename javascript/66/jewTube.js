
/*global $*/
(function () {
    'use strict';

    const videoWrap = $('#videoWrap');

    fetch('media.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(videoURLs => {
            videoURLs.forEach(videoURL => {
                fetch(`${videoURL}.json`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`${response.status} ${response.statusText}`);
                        }
                        return response.json();
                    })
                    .then(video => {
                        let videoDisplay = $('<div></div>');
                        videoDisplay.append('<h2>', `${video.title}`, '</h2>');
                        // videoDisplay.append(`<img src=${video.img}></img>`);
                        // videoDisplay.append(`<video width="200px" height="200px" controls src= ${video.url}></video>`);
                        // let videoTitle = $('h2');
                        // videoDisplay.append(videoTitle);
                        // videoTitle.text(video.title);

                        videoDisplay.css('background-image', `url(${video.img})`).width('200px').height('200px');
                        videoDisplay.css('flex-grow', '1');
                        videoDisplay.css('height', '200px');
                        videoDisplay.css('min-width', '200px');
                        videoDisplay.css('margin', '10px');
                        videoDisplay.css('color', 'Tomato');
                        videoDisplay.css('text-align', 'center');

                        videoDisplay.click(event => {
                            $('#video').attr('src', video.url);
                        });

                        videoWrap.append(videoDisplay);
                    })

                    .catch(err => console.error('Failure', err));
            });
        })


        .catch(err => console.error('Failure', err));

}());