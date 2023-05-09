var carousel = (function () {
    // forEach function
    var forEach = function forEach(array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]); // passes back stuff we need
        }
    };

    // Carousel initialisation
    var carousels = document.querySelectorAll(".swiper");
    forEach(carousels, function (index, value) {
        var options;
        if (value.dataset.swiperOptions != undefined)
            options = JSON.parse(value.dataset.swiperOptions);

        // Thumbnails
        if (options.thumbnails) {
            var images = options.thumbnails.images;
            options = Object.assign({}, options, {
                pagination: {
                    el: options.thumbnails.el,
                    clickable: true,
                    bulletActiveClass: "active",
                    renderBullet: function renderBullet(index, className) {
                        return "<li class='swiper-thumbnail "
                            .concat(className, "'>\n              <img src='")
                            .concat(
                                images[index],
                                "' alt='Thumbnail'>\n            </li>"
                            );
                    },
                },
            });
        }
        var swiper = new Swiper(value, options);

        // Controlled slider
        if (options.controlledSlider) {
            var controlledSlider = document.querySelector(
                    options.controlledSlider
                ),
                controlledSliderOptions;
            if (controlledSlider.dataset.swiperOptions != undefined)
                controlledSliderOptions = JSON.parse(
                    controlledSlider.dataset.swiperOptions
                );
            var swiperControlled = new Swiper(
                controlledSlider,
                controlledSliderOptions
            );
            swiper.controller.control = swiperControlled;
        }

        // Binded content
        if (options.bindedContent) {
            swiper.on("activeIndexChange", function (e) {
                var targetItem = document.querySelector(
                        e.slides[e.activeIndex].dataset.swiperBinded
                    ),
                    previousItem = document.querySelector(
                        e.slides[e.previousIndex].dataset.swiperBinded
                    );
                previousItem.classList.remove("active");
                targetItem.classList.add("active");
            });
        }
    });
})();
