import lightGallery from 'lightgallery';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'


lightGallery(document.getElementById('gallery-animated-captions-demo'), {
  speed: 500,
  // Append caption inside the slide item
  // This way you can make use of lightGallery active slide class names to add animation
  appendSubHtmlTo: '.lg-item',
  // Delay slide transition to complete captions animations
  // before navigating to different slides (Optional)
  // You can find caption animation demo on the captions demo page
  slideDelay: 400,
});