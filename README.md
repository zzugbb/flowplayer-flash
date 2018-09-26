# video-test

视频播放测试：

* flowplayer-flash版播放器测试
* VideoJs&videojs-contrib-hls测试

## 使用

1. npm install
2. npm run start
3. 访问 http://localhost:3001/   //flowplayer-flash播放器参数测试
4. 访问 http://localhost:3001/api  //flowplayer-flash播放器api测试
5. 访问 http://localhost:3001/videojs-test  //流媒体测试 VideoJs&videojs-contrib-hls


### flowplayer-flash 相关

#### 参考资料

* [Flowplayer@官网](https://flowplayer.com/)
* [Flowplayer@github](https://github.com/flowplayer/flowplayer)
* [Flowplayer视频播放插件@jquery插件库](http://www.jq22.com/jquery-info6854)
* [Flowplayer-flash@官网](http://flash.flowplayer.org/)
* [Flowplayer-flash@github](https://github.com/flowplayer/flash)
* [Flowplayer-flash@Player-api](http://flash.flowplayer.org/documentation/api/player.html)


### 流媒体相关

#### 介绍

> `m3u8` 格式的视频是将文件分成一小段一小段的 `ts` 文件，播放完一个在播放下一个，由于每次请求的 ts 文件都很小，所以基本可以做到无延时播放。目前WEB上主流的直播方案主要是 `HLS` 和 `RTMP` ，移动端主要是 HLS，PC端主要是 RTMP

HLS是苹果推出的，移动端不管是IOS还是Android都天然支持HLS协议，直接在h5页面直接配置即可使用；PC端只有safari浏览器支持，其他浏览器均不支持。

#### 参考文档

* [前端如何播放m3u8格式的视频](https://blog.csdn.net/lch_cui/article/details/79688894)
* [VideoJS@官网](https://videojs.com/)
* [VideoJS HLS@官网](http://videojs.github.io/videojs-contrib-hls/)
* [videojs-contrib-hls@github](https://github.com/videojs/videojs-contrib-hls)
