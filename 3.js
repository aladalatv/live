var video = document.querySelector('video');
video.autoplay = true; // Menambahkan atribut autoplay pada elemen video
if (Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource('https://tonton-live-ssai.akamaized.net/live/2dd2b7cd-1b34-4871-b669-57b5c9beca23/cmaf.isml/.m3u8');
  hls.attachMedia(video);
}
var player = new Plyr(video, {
  resetOnEnd: true,
  autoplay: true // Mengaktifkan autoplay di Plyr
});
