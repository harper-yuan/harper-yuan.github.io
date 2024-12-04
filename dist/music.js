const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    volume: 0.5,		// 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true,		// 阻止多个播放器同时播放
    audio: [
	{
        name: "where we're going",
        artist: 'elijah woods',
        url: 'https://m804.music.126.net/20241204022425/3e25279427f6af7e1f8e9f686e38da8f/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/29405971135/b0ee/ccc4/f397/b102c6b41dc18bfa72eeb1f6793adfde.mp3?authSecret=000001938dad4df311c40a3b1db04865',
        cover: 'https://p1.music.126.net/i29ug6vPubo0OyOovEs2Aw==/109951168744612304.jpg?param=90y90',	
    },
	]
});