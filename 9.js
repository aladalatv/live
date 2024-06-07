var video = document.querySelector('video');
video.autoplay = true; // Menambahkan atribut autoplay pada elemen video
if (Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource('https://tonton-live-ssai.akamaized.net/live/2020783a-0303-401a-9c92-b7c3c9108c0b/cmaf.isml/.m3u8');
  hls.attachMedia(video);
}
var player = new Plyr(video, {
  resetOnEnd: true,
  autoplay: true // Mengaktifkan autoplay di Plyr
});
