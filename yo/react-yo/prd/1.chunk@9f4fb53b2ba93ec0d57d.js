webpackJsonp([1],{58:function(e,t,n){"use strict";function y(e){return e&&e.__esModule?e:{"default":e}}function b(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function w(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function E(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}function T(e){var t=[];for(var n=0;n<e;n++){t[n]=null}return t}function N(e){return T(e).fill(1).map(function(e){return parseInt(Math.random()*100)})}function C(e){return N(e).map(function(e){return{text:e,key:++x}})}function k(){$.ajax({type:"post",url:"http://chinayj.online/php/getsign.php",data:{url:window.location.href},dataType:"json"}).done(function(e){wx.config({debug:true,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["scanQRCode"]});wx.ready(function(){wx.scanQRCode({needResult:0,scanType:["qrCode","barCode"],success:function(t){var n=t.resultStr;alert(n)}})})})}Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var i=n(4);var s=y(i);var o=n(59);var u=y(o);var a=n(12);var f=y(a);var l=n(25);var c=y(l);var h=n(27);var p=y(h);var d=n(26);var v=y(d);var m=n(28);var g=y(m);var S=function(e){function t(){b(this,t);var e=w(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.state={dataSource:[{text:null,key:0}]};return e}E(t,e);r(t,[{key:"componentWillMount",value:function(){var t=this;g.default.get("http://chinayj.online/yophp/skills.php").then(function(e){t.setState({dataSource:e.data})}).catch(function(e){console.log(e)})}},{key:"refresh",value:function(){this.setState({dataSource:C(25)})}},{key:"fetch",value:function(){this.setState({dataSource:this.state.dataSource.concat(C(15))})}},{key:"render",value:function(){return s.default.createElement("div",{className:"yo-flex"},s.default.createElement(c.default,{title:"skills",right:{title:s.default.createElement("i",{className:"yo-ico iconfont icon-saomiao3"}),onTap:function(){return k()}}}),s.default.createElement(u.default,{ref:"list",extraClass:"flex",dataSource:this.state.dataSource,renderItem:function(t,n){return s.default.createElement("li",null,s.default.createElement("div",{className:"li-left"},s.default.createElement("img",{src:t.images})),s.default.createElement("div",{className:"li-right"},s.default.createElement("h3",null,"类型：",t.category),s.default.createElement("div",null,"名称：",t.name),s.default.createElement("div",{className:"time"},"使用时长：",t.time),s.default.createElement("div",null,"熟练程度：",t.level),s.default.createElement("div",null,"相类似:",t.like)))},onItemTap:function(t,n,r){v.default.push("/detail/"+t.id)}}),s.default.createElement(p.default,null))}}]);return t}(i.Component);var x=-1;t.default=S},59:function(e,t,n){e.exports=n(60)},60:function(e,t,n){e.exports=n(3)(74772050)}})