// const ap = new APlayer({
//     container: document.getElementById('aplayer'),
//     fixed: true,
// 	  autoplay: true, //自动播放
//     audio: [
// 	{
//         name: '特别的人',
//         artist: '方大同',
//         url: 'http://music.163.com/song/media/outer/url?id=28403111.mp3',
//         cover: 'https://p1.music.126.net/RTB72JJJapo01l4XfVDAWQ==/109951166349819975.jpg',
//         lrc: 'https://zhouyinglin.cn/lrcs/特别的人.lrc',
//     },
//         {
//         name: '身骑白马',
//         artist: '徐佳莹',
//         url: 'http://music.163.com/song/media/outer/url?id=5233038.mp3',
//         cover: 'http://p2.music.126.net/jSLMqcE_Yq27rRKDNrRKcA==/109951163187407183.jpg',
//         lrc: 'https://zhouyinglin.cn/lrcs/身骑白马.lrc',
//     },
// 	]
// });

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    volume: 0.5,
    audio: [
        {
            name: "where we\'re going",
            artist: 'elijah woods',
            url: 'http://music.163.com/song/media/outer/url?id=2064620976.mp3',
            cover: 'https://p1.music.126.net/i29ug6vPubo0OyOovEs2Aw==/109951168744612304.jpg?param=90y90',	
    },
	]
});

// const ap = new APlayer({
//     container: document.getElementById('aplayer'),
//     fixed: true,
// 	autoplay: true, //自动播放
//     volume: 0.5,		// 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
//     mutex: true,		// 阻止多个播放器同时播放
//     audio: [
// 	{
//         name: "where we're going",
//         artist: 'elijah woods',
//         url: 'http://lzxyh.online:8002/pd/lzx/xu/obj_wo3DlMOGwrbDjj7DisKw_29405971135_b0ee_ccc4_f397_b102c6b41dc18bfa72eeb1f6793adfde.mp3?signature=3331843bcbdfff00dc17ba441b2263dbec27b77b6c13a35ff3d46a715ffdbc4e805dd30a3765ba45d4fdb781bda644008f074b9ba7b5490008d711846400a37ac79d7704311d2091321c04d07f4110857d56287f481a66792b48b0bbbf664b9998f274718db772ad6742c606c3d9f93a',
//         cover: 'https://p1.music.126.net/i29ug6vPubo0OyOovEs2Aw==/109951168744612304.jpg?param=90y90',	
//     },
// 	]
// });