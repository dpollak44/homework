/*global $*/
(function () {
    'use strict';


    $('.potatoHead').click(function () {
        if ($(this).attr("src", "potatoHeadBlue.jpg")) {
            $(this).attr("src", "potatoHeadGreen.jpg");
        }
        else {
            $(this).attr("src", "potatoHeadBlue.jpg");
        }

    });

    let dragging;
    let offset;


    $(document)
        .on('mousedown', '.bodyPart', e => {
            dragging = $(e.target);
            offset = { y: e.offsetY, x: e.offsetX };
        }).mousemove(e => {
            if (dragging) {
                dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
                const part = { bpart: dragging, position: dragging.offset() };
                localStorage.part = JSON.stringify(part);
                e.preventDefault();
            }
        }).mouseup(() => {
            dragging = null;
        });

    if (localStorage.part) {
        let partReturn = JSON.parse(localStorage.getItem('part'));
        const newBpart = $(partReturn.bpart);
        newBpart.offset(partReturn.position);
    }


}());