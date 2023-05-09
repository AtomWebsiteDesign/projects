const myGallery = cloudinary.galleryWidget({
    container: "#my-gallery",
    cloudName: "computer-comforts",
    mediaAssets: [
        { tag: "active_lectern_slideshow" }, // by default mediaType: "image"
    ],
    aspectRatio: "4:3",
    thumbnailProps: {
        selectedBorderPosition: "left",
        radius: 5,
    },
    accessibilityProps: {
        mediaAltSource: "metadata",
        mediaAltId: "alt_id",
    },
    selectedStyle: "gradient",
    videoProps: {
        controls: true,
        autoplay: true,
    },
});

myGallery.render();
