const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: "where we're going",
        artist: 'elijah woods',
        url: 'https://m804.music.126.net/20241204022425/3e25279427f6af7e1f8e9f686e38da8f/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/29405971135/b0ee/ccc4/f397/b102c6b41dc18bfa72eeb1f6793adfde.mp3?authSecret=000001938dad4df311c40a3b1db04865',
        cover: 'https://p1.music.126.net/byjfkEIOWI_RmxSKEWTPyw==/18910500486297525.jpg?param=200y200',	
    },
	]
});