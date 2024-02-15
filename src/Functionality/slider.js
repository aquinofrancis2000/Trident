export function slide(){
   // Select all slides
   const $slides = $(".slide");

   // Loop through slides and set each slide's translateX
   $slides.each(function (indx) {
     $(this).css("transform", `translateX(${indx * 100}%)`);
   });
 
   // Select next slide button
   const $nextSlide = $(".btn-next");
 
   // Current slide counter
   let curSlide = 0;
 
   // Maximum number of slides (updated to reflect the total number of slides)
   let maxSlide = $slides.length - 1;
 
   // Add event listener and navigation functionality for next slide
   $nextSlide.on("click", function () {
     // Check if current slide is the last and reset current slide
     if (curSlide === maxSlide) {
       curSlide = 0;
     } else {
       curSlide++;
     }
 
     // Move slides by -100%
     $slides.each(function (indx) {
       $(this).css("transform", `translateX(${100 * (indx - curSlide)}%)`);
     });
   });
 
   // Select previous slide button
   const $prevSlide = $(".btn-prev");
 
   // Add event listener and navigation functionality for previous slide
   $prevSlide.on("click", function () {
     // Check if current slide is the first and reset current slide to last
     if (curSlide === 0) {
       curSlide = maxSlide;
     } else {
       curSlide--;
     }
 
     // Move slides by 100%
     $slides.each(function (indx) {
       $(this).css("transform", `translateX(${100 * (indx - curSlide)}%)`);
     });
   });
 
}
 