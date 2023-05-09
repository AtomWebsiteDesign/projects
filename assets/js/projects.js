/**
 * Template Name: HeroBiz - v2.4.0
 * Template URL: https://bootstrapmade.com/herobiz-bootstrap-business-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener("DOMContentLoaded", () => {
    ("use strict");

    /**
     * Preloader
     */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
        window.addEventListener("load", () => {
            preloader.remove();
        });
    }

    /**
     * Popover
     */
    var popover = (function () {
        var popoverTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="popover"]')
        );
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
    })();

    /**
     * Function to scroll to an element with top ofset
     */
    function scrollto(el) {
        const selectHeader = document.querySelector("#header");
        let offset = 0;

        if (selectHeader.classList.contains("sticked")) {
            offset = document.querySelector("#header.sticked").offsetHeight;
        } else if (selectHeader.hasAttribute("data-scrollto-offset")) {
            offset =
                selectHeader.offsetHeight -
                parseInt(selectHeader.getAttribute("data-scrollto-offset"));
        }
        window.scrollTo({
            top: document.querySelector(el).offsetTop - offset,
            behavior: "smooth",
        });
    }

    /**
     * Fires the scrollto function on click to links .scrollto
     */
    let selectScrollto = document.querySelectorAll(".scrollto");
    selectScrollto.forEach((el) =>
        el.addEventListener("click", function (event) {
            if (document.querySelector(this.hash)) {
                event.preventDefault();

                let mobileNavActive =
                    document.querySelector(".mobile-nav-active");
                if (mobileNavActive) {
                    mobileNavActive.classList.remove("mobile-nav-active");

                    let navbarToggle =
                        document.querySelector(".mobile-nav-toggle");
                    navbarToggle.classList.toggle("bi-list");
                    navbarToggle.classList.toggle("bi-x");
                }
                scrollto(this.hash);
            }
        })
    );

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener("load", () => {
        if (window.location.hash) {
            if (document.querySelector(window.location.hash)) {
                scrollto(window.location.hash);
            }
        }
    });

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
        const togglescrollTop = function () {
            window.scrollY > 100
                ? scrollTop.classList.add("active")
                : scrollTop.classList.remove("active");
        };
        window.addEventListener("load", togglescrollTop);
        document.addEventListener("scroll", togglescrollTop);
        scrollTop.addEventListener(
            "click",
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        );
    }

    /**
     * Swiper Slider
     */
    new Swiper(".portfolio-details-slider", {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: true,
        },
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
    });

    /**
     * Swiper Slider
     */
    new Swiper(".product-details-slider", {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: true,
        },
        slidesPerView: "auto",
        thumbs: {
            thumbsContainerClass: "thumbsSwiper",
        },
    });

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
        selector: ".glightbox",
    });

    /**
     * Animation on scroll function and init
     */
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }
    window.addEventListener("load", () => {
        aos_init();
    });
});
