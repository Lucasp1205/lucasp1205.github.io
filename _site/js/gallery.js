// Activates the image gallery

function activateGallery() {
    let thumbnails = document.querySelector("#gallery-thumbs").
        querySelectorAll("img");
    let mainImage = document.querySelector("#gallery-photo img");

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function () {
            // Set clicked image as main image.
            let newImageSrc = thumbnail.dataset.largeVersion;
            mainImage.setAttribute("src", newImageSrc);
            mainImage.setAttribute("alt", thumbnail.alt);

            // Change wich image is current.
            document.querySelector(".current").classList.remove("current");
            thumbnail.parentNode.classList.add("current");

            //Update the description of the selected image.
            let galleryInfo = document.querySelector("#gallery-info");
            let title       = galleryInfo.querySelector(".title");
            let description = galleryInfo.querySelector(".description");

            title.innerHTML       = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description; 
        });
    });
}