/* eslint-disable func-names */
/* eslint-disable no-undef */
$(document).ready(function () {
    const $modal = $('.js--modal');
    const $gallery = $('.gallery');
    const $galleryItems = $('.js--gal_item');
    const $modalContent = $modal.find('.js--modal__content');
    let currentIndex = 0;

    $gallery.on('click', '.js--gal_item', function () {
        currentIndex = $galleryItems.index($(this));
        const $image = $(this).find('img');
        $modalContent.html(`<img src="${$image.attr('src')}" alt="image">`);
        $modal.fadeTo(600, 1).css('display', 'block');
    });

    $modal.on('click', '.js--modal__next', function () {
        currentIndex = (currentIndex === $galleryItems.length - 1) ? 0 : currentIndex + 1;
        const $image = $galleryItems.eq(currentIndex).find('img');
        $modalContent.html(`<img src="${$image.attr('src')}" alt="image">`);
    });

    $modal.on('click', '.js--modal__prev', function () {
        currentIndex = (currentIndex === 0) ? $galleryItems.length - 1 : currentIndex - 1;
        const $image = $galleryItems.eq(currentIndex).find('img');
        $modalContent.html(`<img src="${$image.attr('src')}" alt="image">`);
    });

    $modal.on('click', '.js--modal__close', function () {
        $modal.fadeOut(600, 0);
    });
});
