var data=[];
var dataStr='1、霍比特人3<br>\
<br>\
导演：彼得杰克逊<br>\
编剧：弗兰 /<br>\
主演：马丁/ 杰克逊/ 柯里/ 约翰<br>\
类型：动作 /奇幻 /冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23 (中国大陆)<br>\
片长：166分钟<br>\
<br>\
<br>\
2、栀子花开<br>\
<br>\
导演：彼得杰克逊<br>\
编剧：弗兰 /<br>\
主演：马丁/ 杰克逊/ 柯里/ 约翰<br>\
类型：动作 /奇幻 /冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23 (中国大陆)<br>\
片长：166分钟<br>\
<br>\
<br>\
3、变形金刚<br>\
<br>\
导演：彼得杰克逊<br>\
编剧：弗兰 /<br>\
主演：马丁/ 杰克逊/ 柯里/ 约翰<br>\
类型：动作 /奇幻 /冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23 (中国大陆)<br>\
片长：166分钟<br>\
<br>\
<br>\
4、四月是你的谎言<br>\
<br>\
导演：彼得杰克逊<br>\
编剧：弗兰 /<br>\
主演：马丁/ 杰克逊/ 柯里/ 约翰<br>\
类型：动作 /奇幻 /冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23 (中国大陆)<br>\
片长：166分钟<br>\
<br>\
<br>\
5、濑户小春<br>\
<br>\
导演：彼得杰克逊<br>\
编剧：弗兰 /<br>\
主演：马丁/ 杰克逊/ 柯里/ 约翰<br>\
类型：动作 /奇幻 /冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23 (中国大陆)<br>\
片长：166分钟<br>\
<br>\
<br>\
6、婚纱姑娘<br>\
<br>\
导演：彼得杰克逊<br>\
编剧：弗兰 /<br>\
主演：马丁/ 杰克逊/ 柯里/ 约翰<br>\
类型：动作 /奇幻 /冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23 (中国大陆)<br>\
片长：166分钟<br>\
<br>\
<br>\
7、小猪猪<br>\
<br>\
导演：彼得杰克逊<br>\
编剧：弗兰 /<br>\
主演：马丁/ 杰克逊/ 柯里/ 约翰<br>\
类型：动作 /奇幻 /冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23 (中国大陆)<br>\
片长：166分钟<br>\
<br>\
<br>\
8、棕色小熊<br>\
<br>\
导演：彼得杰克逊<br>\
编剧：弗兰 /<br>\
主演：马丁/ 杰克逊/ 柯里/ 约翰<br>\
类型：动作 /奇幻 /冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23 (中国大陆)<br>\
片长：166分钟<br>\
';
var d = dataStr.split('<br><br><br>');
for(var i=0;i<d.length;i++){
  var c = d[i].split('<br><br>');
  data.push({
    img:c[0].replace('、',' ')+'.jpg',
    caption:c[0].split('、')[1],
    desc:c[1]
  });
  console.log(c[0].replace('、',' ')+'.jpg');
}
