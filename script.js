// script.js

$(document).ready(function() {
    let currentIndex = 0;
    const images = $('#gallery .image');
    const totalImages = images.length;

    function showImage(index) {
        const offset = -index * 100;
        $('#gallery').css('transform', `translateX(${offset}%)`);
    }

    $('#next').click(function() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });

    $('#prev').click(function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });

    $('#filters button').click(function() {
        const category = $(this).data('category');
        if (category === 'all') {
            images.show();
        } else {
            images.hide();
            $(`#gallery .image[data-category="${category}"]`).show();
        }
    });

    $('#gallery .image img').click(function() {
        const src = $(this).attr('src');
        $('.lightbox-image').attr('src', src);
        $('#lightbox').removeClass('hidden');
    });

    $('#lightbox .close, #lightbox').click(function() {
        $('#lightbox').addClass('hidden');
    });
});
// script.js

$(document).ready(function() {
    let currentIndex = 0;
    const images = $('#gallery .image');
    const totalImages = images.length;

    function showImage(index) {
        const offset = -index * 100;
        $('#gallery').css('transform', `translateX(${offset}%)`);
    }

    $('#next').click(function() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });

    $('#prev').click(function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });

    $('#filters button').click(function() {
        const category = $(this).data('category');
        if (category === 'all') {
            images.show();
        } else {
            images.hide();
            $(`#gallery .image[data-category="${category}"]`).show();
        }
    });

    $('#gallery .image img').click(function() {
        const src = $(this).attr('src');
        $('.lightbox-image').attr('src', src);
        $('#lightbox').removeClass('hidden');
    });

    $('#lightbox .close, #lightbox').click(function() {
        $('#lightbox').addClass('hidden');
    });
});
