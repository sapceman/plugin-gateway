(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56eddfb0"],{"07d0":function(t,e,a){},"11b6":function(t,e,a){},"1a2b":function(t,e,a){"use strict";a("b5e3")},3724:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player-wrap"},[t.loading?a("div",{staticClass:"player-loading"},[t._v("视频加载中...")]):t._e(),t._v(" "),t.rtcStream?[t.controls?[a("video",{attrs:{autoplay:"",controls:"",controlslist:"nodownload nofullscreen noremoteplayback",disablePictureInPicture:""},domProps:{srcObject:t.rtcStream}})]:[a("video",{attrs:{autoplay:""},domProps:{srcObject:t.rtcStream}})]]:t._e()],2)},i=[],s=(a("96cf"),a("3b8d")),r=a("4ec3"),o={name:"WebrtcPlayer",rtcPeerConnection:null,data:function(){return{iceConnectionState:"",rtcPeerConnectionInit:!1,rtcStream:null,loading:!0}},props:{streamPath:{type:String,default:""},controls:{type:Boolean,default:!0}},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initRtcPeerConnection();case 2:if(console.log("initRtcPeerConnectioned"),!this.streamPath){t.next=10;break}return this.loading=!0,t.next=7,this.play(this.streamPath);case 7:this.loading=!1,console.log("played"),this.$emit("doPlayed");case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{initRtcPeerConnection:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new RTCPeerConnection,e.addTransceiver("video",{direction:"recvonly"}),e.addTransceiver("audio",{direction:"recvonly"}),e.onsignalingstatechange=function(t){console.log("onsignalingstatechange",t)},e.oniceconnectionstatechange=function(t){console.log("oniceconnectionstatechange",e.iceConnectionState)},e.onicecandidate=function(t){console.log("onicecandidate",t)},e.ontrack=function(t){console.log("ontrack",t),"video"===t.track.kind&&(n.rtcStream=t.streams[0])},t.next=9,e.createOffer();case 9:return a=t.sent,t.next=12,e.setLocalDescription(a);case 12:this.rtcPeerConnectionInit=!0,this.$options.rtcPeerConnection=e;case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),play:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=this.$options.rtcPeerConnection,n=a.localDescription.toJSON(),t.prev=2,t.next=5,Object(r["o"])(e,n);case 5:if(i=t.sent,console.log(i),!i.errmsg){t.next=11;break}return this.$message({type:"error",message:i.errmsg}),this.close(),t.abrupt("return");case 11:a.setRemoteDescription(new RTCSessionDescription({type:i.type,sdp:i.sdp})),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](2),console.error(t.t0);case 17:case"end":return t.stop()}}),t,this,[[2,14]])})));function e(e){return t.apply(this,arguments)}return e}(),close:function(){var t=this.$options.rtcPeerConnection;t&&t.close()}},destroyed:function(){this.close()}},l=o,c=a("2877"),u=Object(c["a"])(l,n,i,!1,null,"1871937e",null);e["a"]=u.exports},"47a5":function(t,e,a){"use strict";a("f488")},6280:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.time?a("el-tooltip",{attrs:{effect:"light",placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t._f("parseTimeFilter")(t.time)))]),t._v(" "),a("span",[t._v(t._s(t._f("formatPassTimeFilter")(t.time)))])]):t._e()},i=[],s={name:"ShowTime",props:["time"]},r=s,o=a("2877"),l=Object(o["a"])(r,n,i,!1,null,"68b4158a",null);e["a"]=l.exports},"6b39":function(t,e,a){"use strict";a("11b6")},"70db":function(t,e,a){"use strict";a("be59")},"86ae":function(t,e,a){"use strict";a("07d0")},"983b":function(t,e,a){},a7ca:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player-wrap"},[a("div",{ref:"container",attrs:{id:"container"}})])},i=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),r=a("2f62"),o=(a("4ec3"),a("ed08"));function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={name:"JessicaPlayer",jessibuca:null,data:function(){return{}},props:{streamPath:{type:String,default:""},fullPath:{type:String,default:""}},computed:c({},Object(r["b"])({plugins:function(t){return t.plugins}})),mounted:function(){this.create()},methods:{create:function(){var t=this,e=new window.Jessibuca({container:this.$refs.container,forceNoOffscreen:!0,videoBuffer:.2,loadingText:"加载中"});e.onLog=function(t){return console.error(t)},e.hasLoaded()?(this.play(),this.$emit("doPlayed")):e.onLoad=function(){t.play(),t.$emit("doPlayed")},e.on("timeout",(function(){console.log("timeout"),t.$message({type:"error",message:"播放超时"})})),this.$options.jessibuca=e},play:function(){if(this.streamPath){var t=Object(o["h"])(),e=t+this.streamPath;this.$options.jessibuca&&this.$options.jessibuca.play(e),this.$options.jessibuca.cancelMute()}else this.fullPath&&(this.$options.jessibuca&&this.$options.jessibuca.play(this.fullPath),this.$options.jessibuca.cancelMute())}},destroyed:function(){this.$options.jessibuca&&this.$options.jessibuca.destroy()}},d=u,p=(a("6b39"),a("2877")),h=Object(p["a"])(d,n,i,!1,null,"48902910",null);e["a"]=h.exports},b5e3:function(t,e,a){},be59:function(t,e,a){},c26b:function(t,e,a){"use strict";a("983b")},e7d7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"搜索名称关键词"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1),t._v(" "),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.showRecordDialog}},[t._v("录制的视频\n      ")])],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pageList,border:"",fit:""}},[a("el-table-column",{attrs:{fixed:"left","min-width":"200px",prop:"StreamPath",label:"StreamPath"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"100px",label:"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.Type||"await")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"100px",label:"开始时间"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("show-time",{attrs:{time:t.row.StartTime}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"音频"}},[a("el-table-column",{attrs:{align:"center",width:"210px",label:"格式"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.audioTracks.length?[t._l(e.row.audioTracks,(function(n){return[a("div",[t._v(t._s(t._f("soundFormatFilter")(e.row.AudioTracks[n].CodecID)))])]}))]:t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"100px",label:"采样率"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.audioTracks.length?[t._l(e.row.audioTracks,(function(n){return[a("div",[t._v(t._s(t._f("soundRateFilter")(e.row.AudioTracks[n].SoundRate)))])]}))]:t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"80px",label:"声道"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.audioTracks.length?[t._l(e.row.audioTracks,(function(n){return[a("div",[t._v(t._s(e.row.AudioTracks[n].Channels))])]}))]:t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"80px",label:"码率"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.audioTracks.length?[t._l(e.row.audioTracks,(function(n){return[a("div",[t._v(t._s(t._f("unitSpeedFormatFilter")(e.row.AudioTracks[n].BPS)))])]}))]:t._e()]}}])})],1),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"视频"}},[a("el-table-column",{attrs:{align:"center",width:"100px",label:"格式"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.videoTracks.length?[t._l(e.row.videoTracks,(function(n){return[a("div",[t._v(t._s(t._f("codecIDFilter")(e.row.VideoTracks[n].CodecID)))])]}))]:t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"100px",label:"分辨率"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.videoTracks.length?[t._l(e.row.videoTracks,(function(n){return[a("div",[t._v("\n                "+t._s(e.row.VideoTracks[n].SPSInfo.Width)+"x"+t._s(e.row.VideoTracks[n].SPSInfo.Height)+"\n              ")])]}))]:t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"80px",label:"GOP"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.videoTracks.length?[t._l(e.row.videoTracks,(function(n){return[a("div",[t._v(t._s(e.row.VideoTracks[n].GOP))])]}))]:t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"120px",label:"码率"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.videoTracks.length?[t._l(e.row.videoTracks,(function(n,i){return[a("div",[t._v(t._s(t._f("unitSpeedFormatFilter")(e.row.VideoTracks[n].BPS)))])]}))]:t._e()]}}])})],1),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"100px",label:"订阅者"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.Subscribers?[t._v("\n          "+t._s(e.row.Subscribers.length)+"\n        ")]:t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.StreamPath?[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.onPlay(e.row)}}},[t._v("播放\n          ")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.onClose(e.row)}}},[t._v("关闭\n          ")]),t._v(" "),t.isRecording(e.row)?[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.onStopRecord(e.row)}}},[t._v("暂停录制\n            ")])]:[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.onRecord(e.row)}}},[t._v("录制\n            ")])],t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.openStreamData(e.row)}}},[t._v("流数据")])]:t._e()]}}])})],1),t._v(" "),a("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":t.currentLogPage,total:t.dataListFilter.length},on:{"update:currentPage":function(e){t.currentLogPage=e},"update:current-page":function(e){t.currentLogPage=e}}}),t._v(" "),a("el-dialog",{attrs:{title:"直播播放","show-close":!1,"before-close":t.handleCloseDialog,visible:t.dialogVisible,width:"800px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[t.dialogVisible&&t.tempRtcStream?a("div",{staticClass:"stream-play-wrap"},[t.webrtc?a("webrtc-player",{attrs:{"stream-path":t.tempRtcStream}}):a("jessibuca-player",{ref:"jessibucaPlayer",attrs:{"stream-path":t.tempRtcStream}})],1):t._e(),t._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("div",[t._v("播放地址：")]),t._v(" "),a("el-tabs",{model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[t.wsPlayerUrl?a("el-tab-pane",{attrs:{label:"WS-RAW",name:"wsRaw"}},[t._v(t._s(t.wsPlayerUrl))]):t._e(),t._v(" "),t.wsPlayerUrl?a("el-tab-pane",{attrs:{label:"WS-FLV",name:"wsFlv"}},[t._v(t._s(t.wsPlayerUrl+".flv"))]):t._e(),t._v(" "),t.httpPlayUrl?a("el-tab-pane",{attrs:{label:"HTTP-FLV",name:"httpFlv"}},[t._v(t._s(t.httpPlayUrl+".flv"))]):t._e(),t._v(" "),t.hlsPlayUrl?a("el-tab-pane",{attrs:{label:"HLS",name:"hls"}},[t._v(t._s(t.hlsPlayUrl+".m3u8"))]):t._e(),t._v(" "),t.rtmpPlayUrl?a("el-tab-pane",{attrs:{label:"RTMP",name:"rtmp"}},[t._v(t._s(t.rtmpPlayUrl))]):t._e(),t._v(" "),t.rtspPlayUrl?a("el-tab-pane",{attrs:{label:"RTSP",name:"rtsp"}},[t._v(t._s(t.rtspPlayUrl))]):t._e()],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("span",[t._v("WebRTC")]),t._v(" "),a("el-switch",{model:{value:t.webrtc,callback:function(e){t.webrtc=e},expression:"webrtc"}}),t._v(" "),a("el-button",{on:{click:t.handleCloseDialog}},[t._v("关 闭")])],1)]),t._v(" "),a("el-dialog",{attrs:{title:"录制的视频","show-close":!1,visible:t.dialogVisible2,width:"900px"},on:{"update:visible":function(e){t.dialogVisible2=e}}},[t.dialogVisible2?a("records"):t._e(),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleCloseDialog2}},[t._v("关 闭")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"是否开始录制",visible:t.dialogVisible3,width:"300px"},on:{"update:visible":function(e){t.dialogVisible3=e}}},[t._v("\n    追加模式:\n    "),a("el-tooltip",{attrs:{content:t.append?"是":"否",placement:"top"}},[a("el-switch",{model:{value:t.append,callback:function(e){t.append=e},expression:"append"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible3=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.handleSureDialog3}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"数据流",visible:t.dialogVisible4,"show-close":!1,width:"95vw",top:"3h"},on:{"update:visible":function(e){t.dialogVisible4=e}}},[t.dialogVisible4?a("stream-data",{ref:"streamData",attrs:{"search-data":t.tempStreamData}}):t._e(),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-input",{staticStyle:{width:"350px"},attrs:{placeholder:"Payload length"},model:{value:t.tempStreamLen,callback:function(e){t.tempStreamLen=e},expression:"tempStreamLen"}},[a("template",{slot:"prepend"},[t._v("Payload length")]),t._v(" "),a("el-button",{attrs:{slot:"append"},on:{click:t.handleUpdateStream},slot:"append"},[t._v("确定")])],2),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.$refs.streamData.clear()}}},[t._v("清 空")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.handleCloseDialog4}},[t._v("关 闭")])],1)],1)],1)},i=[],s=(a("8e6e"),a("7514"),a("ac6a"),a("456d"),a("bd86")),r=a("2f62"),o=a("3724"),l=a("a7ca"),c=a("6280"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"搜索名称关键词"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dataListFilter,border:"",fit:""}},[a("el-table-column",{attrs:{prop:"Path",label:"文件路径"}}),t._v(" "),a("el-table-column",{attrs:{label:"大小",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("unitSpeedFormatFilter")(e.row.Size))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"时长",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("formatDurationTimeFilter")(e.row.Duration))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return t.onPlay(e.row)}}},[t._v("播放")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return t.onDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"直播播放","append-to-body":"","show-close":!1,"before-close":t.handleCloseDialog,visible:t.dialogVisible,width:"800px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[t.dialogVisible?a("div",{staticClass:"stream-play-wrap"},[a("jessibuca-player",{ref:"jessibucaPlayer",attrs:{"full-path":t.tempFlvStream}})],1):t._e(),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.handleCloseDialog}},[t._v("关 闭")])],1)])],1)},d=[],p=a("4ec3"),h=a("ed08"),f={name:"record",data:function(){return{searchKey:"",dataList:[],dialogVisible:!1,tempFlvStream:null}},components:{JessibucaPlayer:l["a"]},computed:{dataListFilter:function(){var t=[],e=this.searchKey.trim();return t=e?this.dataList.filter((function(t){return-1!==t.Path.indexOf(e)})):this.dataList,t}},created:function(){this.init()},methods:{init:function(){this.getList()},getList:function(){var t=this;this.dataList=[],Object(p["i"])().then((function(e){Array.isArray(e)&&(t.dataList=e||[])}))},handleCloseDialog:function(){this.dialogVisible=!1,this.tempFlvStream=null},onDelete:function(t){var e=this;this.$confirm("是否删除Flv文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(p["d"])(t.Path).then((function(t){"success"===t?(e.$message({type:"success",message:"删除成功!"}),e.getList()):e.$message({type:"error",message:t||"网络异常"})}))})).catch((function(){}))},onPlay:function(t){if(t.Path){var e=Object(h["j"])();this.tempFlvStream=e+t.Path,this.dialogVisible=!0}else this.$message({type:"error",message:"Path is empty"})}}},m=f,g=(a("47a5"),a("2877")),v=Object(g["a"])(m,u,d,!1,null,"c113d916",null),b=v.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stream-data-container"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{staticStyle:{height:"100%"},attrs:{span:12}},[a("div",{staticClass:"head-tags"},[a("div",{staticClass:"head-tag tag-type"},[a("el-tag",{attrs:{type:"success"}},[t._v("Video")])],1),t._v(" "),a("div",{staticClass:"head-tag tag-time"},[t._v("CurrentTime")]),t._v(" "),a("div",{staticClass:"head-tag tag-ts"},[t._v("Timestamp")]),t._v(" "),a("div",{staticClass:"head-tag tag-cts"},[t._v("CTS")]),t._v(" "),a("div",{staticClass:"head-tag tag-payload"},[t._v("Payload")])]),t._v(" "),t.isLocking?t._e():a("log-preview",{ref:"videoLogPreview",attrs:{cache:t.videoList}})],1),t._v(" "),a("el-col",{staticStyle:{height:"100%"},attrs:{span:12}},[a("div",{staticClass:"head-tags"},[a("div",{staticClass:"head-tag tag-type"},[a("el-tag",{attrs:{type:"success"}},[t._v("Audio")])],1),t._v(" "),a("div",{staticClass:"head-tag tag-time"},[t._v("CurrentTime")]),t._v(" "),a("div",{staticClass:"head-tag tag-ts"},[t._v("Timestamp")]),t._v(" "),a("div",{staticClass:"head-tag tag-payload"},[t._v("Payload")])]),t._v(" "),t.isLocking?t._e():a("log-preview",{ref:"audioLogPreview",attrs:{cache:t.audioList}})],1)],1)],1)},y=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"window-log",attrs:{id:t.id}},t._l(t.logWindow,(function(e){return a("div",{key:e.index,attrs:{id:"log-line-"+e.index}},[a("span",{staticClass:"line-index"},[t._v(t._s(e.index))]),t._v(" "),e.line?a("div",{staticClass:"line-content"},[a("span",{domProps:{innerHTML:t._s(e.line)}})]):a("br")])})),0)},S=[],P={name:"LogPreview",props:["cache"],data:function(){return{id:Object(h["t"])(),currentEndIndex:-1,lockScroll:!0,output:[],capacity:50,tick:1,status:"idle"}},computed:{logWindow:function(){this.lockScroll;var t=this.capacity*this.tick,e=this.currentEndIndex-t+1;return e<0&&(e=0),this.output.slice(e,this.currentEndIndex+1)},isRunning:function(){return"running"===this.status}},watch:{status:function(){this.isRunning&&(this.output=[],this.addLine()),this.tick=1,this.lockScroll=!0},output:function(){var t=this;this.lockScroll&&this.$nextTick((function(){t.scrollToBottom()})),this.currentEndIndex=this.output.length-1},lockScroll:function(){this.isRunning&&(this.tick=1),this.currentEndIndex=this.output.length-1}},mounted:function(){this.bindScrollbar(),this.status="running"},methods:{scrollToBottom:function(){var t=document.getElementById(this.id);t&&(t.scrollTop=t.scrollHeight)},bindScrollbar:function(){var t=this,e=document.getElementById(this.id);e.addEventListener("scroll",(function(a){if(t.output.length>t.capacity&&(a.target.scrollTop+e.clientHeight===e.scrollHeight?t.lockScroll=!0:t.lockScroll=!1),(t.isRunning&&!t.lockScroll||!t.isRunning)&&0!==t.output.length&&0===a.target.scrollTop){var n=t.logWindow[t.logWindow.length-1],i=n.index-t.capacity*t.tick;i>0&&t.logWindow.length<t.output.length&&(t.tick++,t.$nextTick((function(){document.getElementById("log-line-"+i).scrollIntoView()})))}}))},flush:function(t,e){var a=this;e=e||!1;var n=this.cache.splice(0,t).map((function(t,e){return{line:t,index:a.output.length+e}}));e?[].push.apply(this.output,n):this.output=this.output.concat(n)},addLine:function(){if(this.isRunning&&!this.lockScroll||!this.isRunning)this.flush(this.cache.length,this.isRunning);else if(this.cache.length>50)this.flush(this.cache.length-50);else{var t=this.cache.shift();t&&this.output.push({line:t,index:this.output.length})}if(this.isRunning||this.cache.length>0){var e=Math.min(1/this.cache.length*1e3,100);setTimeout(this.addLine.bind(this),e)}}},destroyed:function(){}},k=P,x=(a("86ae"),a("70db"),Object(g["a"])(k,w,S,!1,null,"288be6cc",null)),O=x.exports,T=a("5c96"),j={name:"StreamData",props:{searchData:{type:Object,default:function(){return{stream:"",at:"",vt:"",len:""}}}},components:{LogPreview:O},data:function(){return{streamPrintSSE:null,audioList:[],videoList:[],isLocking:!1}},created:function(){this.init()},methods:{init:function(){var t=this;if(this.searchData.stream){var e="stream=".concat(this.searchData.stream,"&at=").concat(this.searchData.at,"&vt=").concat(this.searchData.vt,"&len=").concat(this.searchData.len);this.streamPrintSSE=Object(p["j"])(e),this.streamPrintSSE.onmessage=function(e){if(e.data){var a=JSON.parse(e.data);t.isLocking||(a["Audio"]?t.audioList.push('<span style="display: inline-block;width: 160px">'.concat(Object(h["q"])(new Date,"{h}:{i}:{s}.{p}"),'</span> <span class="preview-tag" style="margin-left: 10px">').concat(a["Ts"],'</span><span class="preview-tag">').concat(a["Payload"],"</span>")):t.videoList.push('<span  style="display: inline-block;width: 160px">'.concat(Object(h["q"])(new Date,"{h}:{i}:{s}.{p}"),'</span> <span class="preview-tag" style="margin-left: 10px">').concat(a["Ts"],'</span><span class="preview-tag">').concat(a["Cts"],'</span> <span class="preview-tag">').concat(a["Payload"],"</span>")))}},this.streamPrintSSE.onerror=function(t){Object(T["Message"])({message:"EventSource failed",type:"error",duration:5e3})}}},update:function(){this.close(),this.clear(),this.init()},clear:function(){var t=this;this.isLocking=!0,this.audioList=[],this.videoList=[],setTimeout((function(){t.isLocking=!1}),300)},close:function(){this.streamPrintSSE&&(this.streamPrintSSE.close(),this.streamPrintSSE=null,this.audioList=[],this.videoList=[])}},destroyed:function(){this.close()}},C=j,L=(a("1a2b"),Object(g["a"])(C,_,y,!1,null,"7db84d89",null)),D=L.exports;function R(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function V(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?R(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var $={name:"stream",components:{ShowTime:c["a"],WebrtcPlayer:o["a"],Records:b,JessibucaPlayer:l["a"],StreamData:D},data:function(){return{webrtc:!1,dialogVisible:!1,dialogVisible2:!1,dialogVisible3:!1,dialogVisible4:!1,searchKey:"",tempRtcStream:"",currentLogPage:1,append:!1,tempStreamPath:"",wsPlayerUrl:"",httpPlayUrl:"",hlsPlayUrl:"",rtmpPlayUrl:"",rtspPlayUrl:"",currentTab:"wsRaw",tempStreamData:null,tempStreamLen:5}},computed:V(V({},Object(r["b"])({streamList:function(t){return t.Streams.map((function(t){var e=Object.keys(t.AudioTracks||{}),a=Object.keys(t.VideoTracks||{});return t.audioTracks=e||[],t.videoTracks=a||[],t}))}})),{},{dataListFilter:function(){var t=[],e=this.searchKey.trim();return t=e?this.streamList.filter((function(t){return-1!==t.StreamPath.indexOf(e)})):this.streamList,t},pageList:function(){return this.dataListFilter.slice(10*(this.currentLogPage-1),10*this.currentLogPage)}}),methods:{onPlay:function(t){var e=this;this.tempRtcStream=t.StreamPath,this.dialogVisible=!0,this.$nextTick((function(){if(e.$refs.jessibucaPlayer){var t=Object(h["h"])();e.wsPlayerUrl=t+e.tempRtcStream}var a=Object(h["f"])();e.httpPlayUrl=a+e.tempRtcStream;var n=Object(h["g"])();e.hlsPlayUrl=n+e.tempRtcStream;var i=Object(h["k"])();e.rtmpPlayUrl=i+e.tempRtcStream;var s=Object(h["l"])();e.rtspPlayUrl=s+e.tempRtcStream}))},onClose:function(t){var e=this;this.$confirm("是否关闭流","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(p["y"])(t.StreamPath).then((function(t){e.$message({type:"success",message:"关闭成功!"})}))})).catch((function(){}))},openStreamData:function(t){this.dialogVisible4=!0,this.tempStreamData={stream:encodeURIComponent(t.StreamPath),at:t.audioTracks[0]||"",vt:t.videoTracks[0]||"",len:this.tempStreamLen}},showRecordDialog:function(){this.dialogVisible2=!0},onRecord:function(t){this.tempStreamPath=t.StreamPath,this.append=!1,this.dialogVisible3=!0},handleSureDialog3:function(){var t=this;this.tempStreamPath&&Object(p["t"])({streamPath:this.tempStreamPath,append:this.append}).then((function(e){t.dialogVisible3=!1,"success"===e?t.$message({type:"success",message:"开始录制"+(t.append?"(追加模式)":"")}):t.$message({type:"error",message:e||"网络异常"})})).catch((function(){t.dialogVisible3=!1}))},onStopRecord:function(t){var e=this;this.$confirm("是否停止录制","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(p["x"])(t.StreamPath).then((function(t){"success"===t?e.$message({type:"success",message:"停止录制，成功!"}):e.$message({type:"error",message:t||"网络异常"})}))})).catch((function(){}))},isRecording:function(t){return t.Subscribers&&t.Subscribers.find((function(t){return"FlvRecord"===t.Type}))},handleCloseDialog:function(){this.dialogVisible=!1,this.tempRtcStream=null},handleCloseDialog2:function(){this.dialogVisible2=!1},handleCloseDialog4:function(){this.dialogVisible4=!1,this.tempStreamData=null},handleUpdateStream:function(){this.tempStreamData.len=this.tempStreamLen,this.$refs.streamData.update()},getItemAudioAndVideo:function(t){console.log(t)}}},E=$,F=(a("c26b"),Object(g["a"])(E,n,i,!1,null,"4c85cd3c",null));e["default"]=F.exports},f488:function(t,e,a){}}]);