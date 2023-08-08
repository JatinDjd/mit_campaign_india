console.log('custom script running');
var imagegallery_wordpress = document.querySelectorAll('.image-gallery-img')
var imagegallery_section = document.getElementsByClassName('image-gallery-section')
var image_gallery = document.querySelectorAll('.image-gallery') 
var cross_icon  = document.getElementsByClassName('cross-icon')
var rightarrow = document.querySelectorAll('.right-arrow')
var leftarrow = document.querySelectorAll('.left-arrow')
const imageGalleryInner = document.getElementById("image-gallery-inner");
var currentIndex = 0;
imagegallery_wordpress.forEach((val , index) => {
    imagegallery_wordpress[index].addEventListener('click' , function(){
        console.log('running');
        // display none all first
        image_gallery[0].style.display ="none";
        image_gallery[1].style.display ="none";
        image_gallery[2].style.display ="none";
        image_gallery[3].style.display ="none";
        image_gallery[4].style.display ="none";
        image_gallery[5].style.display ="none";
        //now block the visible one
        imagegallery_section[0].style.display = 'block';
        image_gallery[index].style.display ="block";
        imageGalleryInner.scrollIntoView({
            behavior: "smooth", // Use "auto" for instant scrolling
                block: "start", // Scroll to the top of the element
        });
    })
    cross_icon[0].addEventListener('click' , function(){
        imagegallery_section[0].style.display = 'none';
        image_gallery[index].style.display ="none"
        
    })
    imagegallery_section[0].addEventListener('click' , function(){
      imagegallery_section[index].style.display = 'none';
        image_gallery[index].style.display ="none"
    })


})