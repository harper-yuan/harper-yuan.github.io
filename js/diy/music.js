const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: "where we're going",
        artist: 'elijah woods',
        url: '//music.163.com/outchain/player?type=2&id=2064620976&auto=1&height=66',
        cover: 'https://p1.music.126.net/byjfkEIOWI_RmxSKEWTPyw==/18910500486297525.jpg?param=200y200',	
    },
	]
});