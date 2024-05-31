function override(url){ if (url.indexOf("licensing.bitmovin.com/licensing") > -1) return "data:text/plain;charset=utf-8;base64,eyJzdGF0dXMiOiJncmFudGVkIiwibWVzc2FnZSI6IlRoZXJlIHlvdSBnby4ifQ=="; if (url.indexOf("licensing.bitmovin.com/impression") > -1) return "data:text/plain;charset=utf-8;base64,eyJzdGF0dXMiOiJncmFudGVkIiwibWVzc2FnZSI6IlRoZXJlIHlvdSBnby4ifQ=="; return url;}
var opens = XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open = function() {var url = override(arguments[1]);arguments[1] = url;return opens.apply(this, arguments);}
var config = {key: "11d3698c-efdf-42f1-8769-54663995de2b",playback: {autoplay:true,muted: false,}};
var source = {'hls':'https://tonton-live-ssai.akamaized.net/live/2dd2b7cd-1b34-4871-b669-57b5c9beca23/cmaf.isml/.m3u8'};
var playerContainer = document.getElementById('playerdiv');
var player = new bitmovin.player.Player(playerContainer, config);
player.load(source).then(function() {player.play();console.log();});
