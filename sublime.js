/*function Box(){
	this.age=100;
	this.run=function(){
		return'运行中'
	}
}
var box=new Box()
alert(box.age)
alert(box.run())*/
/*function Box(){
	var age=100;
	function run(){
		return'运行中'
	}
	this.publicGo=function(){
		return age+run()
	}
	this.getAge=function(){
		return age
	}
}
var box=new Box()
alert(box.getAge())*/
/*function Box(value){
	var user=value;
	this.getUser=function(){
		return user
	}
	this.setUser=function(value){
		user=value
	}
}
var box= new Box('mr')
alert(box.getUser());
box.setUser('ooo');
alert(box.getUser())*/
/*var box = {
	user:'Lee',
	run:function(){
		return'lll'
	}
}*/
/*var box=prompt('请输入一个数字',5)
if(box!=null){
	alert(box)
}
*/

// function a(){
// 	alert('heeh')
// }
/*alert(window.outerWidth)
alert(window.outerHeight)*/
/*var width=window.innerWidth
var height=window.innerHeight
if(typeof width!='number'){
	if(document.compatMode=='CSS1Compat'){
		width=document.documentElement.clientWidth;
		height=document.documentElement.clientHeight;
	}else{
		width=document.body.clientWidth;
		height=document.body.clientHeight;
	}


}
alert(width)
alert(height)*/
/*var num=0;
var max=5;
setInterval(function(){
		num++;
		document.getElementById('a').innerHTML+=num;
		if(num==max){
			clearInterval(this);
			alert('fuck')
		}

},1000)
*/
/*var num=0;
var max=5;
var id=null;
function box(){
	num++;
	document.getElementById('a').innerHTML+=num;
	if(num==max){
		clearInterval(id);
		alert('5秒到了');
	}


}
id= setInterval(box,1000)*/
/*var num=0;
var max=5;
function box(){
	num++;
	document.getElementById('a').innerHTML+=num;
	if(num==max){
		alert('5秒到了')
	}else{
		setTimeout(box,1000)
	}
}
setTimeout(box,1000)*/
/*function getArgs(){
		var qs=location.search.length>0?location.search.substring(1):'赵=玉要怎=样'
		var items=qs.split('要')
		var item=null,name=null,value=null;


		for(var i =0;i<items.length;i++){

			item=items[i].split('=');
			name=item[0];
			value=item[1];
			alert(name);
			alert(value)
			alert(item);

		}
return items
}
alert(getArgs())*/

/*function myfunction(){
	var x;
	var txt='';
	var person={fname:'mr',lname:'zhang',age:24}

for(x in person){
	txt=txt+person[x]
}
document.getElementById('demo').innerHTML=txt
}
*/

/*var mycars= new Array()
mycars[0] ='saab'
mycars[1]='vovle'
mycars[2]='bmw'
for(i=0;i<mycars.length;i++){
	document.write(mycars[i]+'<br>')
}*/
/*var x;
var mycars=new Array()
mycars[0]='saaa'
mycars[1]='vavlo'
mycars[2]='bmw'
for(x in mycars){
	document.write(mycars[x]+'<br>')
}*/
/*var arr= new Array(3)
arr[0]='george'
arr[1]='john'
arr[2]='thomas'

var arr2=new Array(3)
arr2[0]='jame'
arr2[1]='adres'
arr2[2]='maths'
document.write(arr.concat(arr2))*/
/*var arr=new Array(3)
arr[0]="gengor"
arr[1]='john'
arr[2]='thoms'
document.write(arr.join('hehe'))
document.write('<br>')
document.write(arr.join('.'))*/
/*var mycars= new Array(0)
mycars[0]='sas'
mycars[1]='volve'
mycars[2]='Bme'
mycars[3]='ddddd'
document.write(mycars)*/
// alert(BrowserDetect.version)
// if(BrowserDetect.browser=='Internet Explorer'&&BrowserDetect.version<7){
// 	alert('兼容')
// }
/*for(var i=0;i<navigator.plugins.length;i++){
	document.write('文件名'+navigator.plugins[i].filename+'<br>')
	document.write('miaoshu '+navigator.plugins[i].description+'<br>')
}*/
/*function hasPlugin(name){
	var name=name.toLowerCase();
	for(var i=0;i<navigator.plugins.length;i++){
		if(navigator.plugins[i].name.toLowerCase().indexOf(name)>-1){
			return true;
		}
		return false
	}

}
alert(hasPlugin('Flash'))*/
/*function hasIEPlugin(name){
	try{
		new ActiveObject(name)
		return true;
	}catch(e){
		return false
	}
}
alert(hasIEPlugin('ShockwaveFlash.ShockwaveFlash'))*/

/*function hasPlugin(name){
	var name=name.toLowerCase();
	for(var i=0;i<navigator.plugins.length;i++){
		if(navigator.plugins[i].name.toLowerCase().indexOf(name)>-1){
			return true;
		}
	}
	return false;
}
function hasIEPlugin(name){
	try{
		new ActiveXObject(name)
		return true;
	}catch(e){
		return false
	}

}
function hasFlash(){
	var result=hasPlugin('Flash');
	if(!result){
		result=hasIEPlugin('ShockwavaFlash.ShockwavaFlash')
	}
	return result
}
alert(hasFlash())
*/
/*var client=function(){
	var engine={
		ie:false,
		gecko:false,
		webkit:false,
		khtml:false,
		opera:false,
		ver:0



	}
	var ua=navigator.userAgent;
	if(window.opera){
		engine.opera=true;
		engine.ver=window.opera.version()
	}else if(/AppleWebKit\/(\S+)/.test(ua)){
		engine.webkit=true;
		engine.ver =RegExp['$1']
	}else if(/rv:([^\)]+)\)Gecko\/\d{8}/.test(ua)){
			engine.gecko=true;
			engine.ver=RegExp['$1']

	}else if(/MSIE([^;]+)/.test(ua)){
			engine.ie=true;
			engine.ver=RegExp['$1']
	}

	return{
		engine:engine
	}
}()
if(client.engine.gecko){
	alert('gecko引擎版本为:'+client.engine.ver)
}*/
/*var str='Visit W3school'
var patt1=/w3school/i;
document.write(str.match(patt1))
*/
/*var client=function(){

	var engine={
		ie:false,
		gecko:false,
		webkit:false,
		khtml:false,
		opera:false,
	}
var browser={
	ie:false,
	firefox:false,
	chrome:false,
	safari:false,
	opera:false,

	ver:0,
	name:''

}

var system={
	win:false,
	mac:false,
	x11:false,


	sysname:''
}
}
var ua= navigator.userAgent;
var p=navigator.platform;
if(p.indexOf('Win')==0){
	system.win=true;
	system.sysname='Windows'
}else if(p.indexOf('Mac')==0){
	system.win=true;
	system.sysname='Windows'
}else if(p=='X11'||p.indexOf('Linux')==0){
	system.sysname='Linux'
}
if(window.opera){
		engine.opera=true;
		engine.ver=browser.ver=window.opera.version()
		browser.name='Opeara'
	}else if(/AppleWebKit\/(\S+)/.test(ua)){
		engine.webkit=true;
		engine.ver =RegExp['$1']
		if(/Chrome\/(\S+)/.test(ua)){
			browser.chrome=true;
			browser.ver=RegExp['$1']
			browser.name='Chrome'

		}else{
			browser.safari=true;
			if(/Version\/(\S+)/.test(ua)){
				browser.ver=RegExp['$1']
			}
			browser.name='Safari'
		}
	}else if(/rv:([^\)]+)\)Gecko\/\d{8}/.test(ua)){
			engine.gecko=true;
			engine.ver=RegExp['$1']
			if(/Firefox\/(\S+)/.test(ua)){
				browser.firefox=true;
				browser.ver=RegExp['$1']
				browser.name='Firefox'
			}

	}else if(/MSIE([^;]+)/.test(ua)){
			engine.ie=true;
			engine.ver=RegExp['$1']
	}

	return{



	}
}()
alert(client.system.sysname+client.browser.name+client.browser.ver)*/

/*document.ready=function(){

	y=document.getElementsByTagName('p')
	document.write('id为"main"的div中的第一段文本是：'+y[0].innerHTML)
}
*/
/*function getElements(){
	var x=document.getElementsByTagName('input');
	alert(x.length)
}*/
/*window.onload=function(){
	var box= document.getElementById('box')
	for(var i =0;i<box.childNodes.length;i++){
		if(box.childNodes[i].nodeType===1){
			alert('元素节点'+box.childNodes[i].nodename)
		}else if(box.childNodes[i].nodeType===3){
			alert('文本节点'+box.childNodes[i].nodeValue)
		}



	}

}*/
/*window.onload=function(){
	var pox=document.getElementById('pox')
	pox.childNodes[0].nodeValue='loom me '
}*/
/*window.onload=function(){
	var box= document.getElementById('box')
	alert(box.lastChild.nodeValue)

}*/
/*window.onload=function(){
	var box=document.getElementById('box')
	alert(filterWhiteNode(box.childNodes).length)
}
function filterWhiteNode(node){
	var ret=[]
		for(var i =0;i<node.length;i++){
			if(node[i].nodeType===3 && /^\s+$/.test(node[i].nodeValue)){
				continue;
			}else{
				ret.push(node[i])
			}
		}
      return ret;
}*/
/*window.onload=function(){
	var box=document.getElementById('box')
	alert(filterWhiteNode(box.childNodes).length)

}
function filterWhiteNode(node){
	var ret=[]
	for(var i=0;i<node.length;i++){
		if(node[i].nodeType===3 && /^\s+$/.test(node[i].nodeValue)){
			continue
		}else{
			ret.push(node[i])
		}
	}
	return ret
*/

/*window.onload=function(){
	var box=document.getElementById('box')
	alert(removeWhiteNode(box).firstChild.nodeName)
}
function removeWhiteNode(node){
	for(var i=0;i<node.childNodes.length;i++){
		if(node.childNodes[i].nodeType===3 &&/^\s+$/.test(node.childNodes[i].nodeValue)){
			node.childNodes[i].parentNode.removeChild(node.childNodes[i])
		}
	}
	return node
}
*/
/*window.onload=function(){
	var box= document.getElementById('box')
	var p =document.createElement('p')
	box.appendChild(p)
	var text=document.createTextNode('mr.zhang')
	// p.appendChild(text)
	// box.appendChild(text)
	document.getElementsByTagName('body')[0].appendChild(text)
}*/
/*window.onload=function(){
	var box=document.getElementById('box')
	var p=document.createElement('p')
	insertAfter(p,after)
}
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild===targetElement){
		parent.appendchild()
	}
	parent.insertBefore(newElement,targetElement.nextSibing)
}*/
/*window.onload=function(){
	var input=document.createElement('input')
	var body=document.getElementsByTagName('body')[0]
	if(BrowserDetect.browser=='Internet Explorer'&& BrowserDetect.version<=7){
		var input=document.createElement('<input type=\'radio\' name=\'sex\'>')
	}else{

	}
	input.setAttribute('type','radio')
	input.setAttribute('name','sex')
	body.appendChild(input)
}*/
/*window.onload=function(){
	var box=document.getElementById('box')
	var clone=removeWhiteNode(box).firstChild.cloneNode(false)
	box.appendChild(clone)

}
function removeWhiteNode(node){
	for(var i=0;i<node.childNodes.length;i++){
		if(node.childNodes[i].nodeType===3 && /^\s+$/.test(node.childNodes[i].nodeValue)){
			node.childNodes[i].parentNode.removeChild(node.childNodes[i])

		}
	}
	return node
}
*/

/*window.onload=function(){
	var box=document.getElementById('box')

	box.parentNodferemoveChild(removeWhiteNode(box).firstChild)
}
function removeWhiteNode(node){
	for(var i=0;i<node.childNodes.length;i++){
		if(node.childNodes[i].nodeType===3 && /^\s+$/.test(node.childNodes[i].nodeValue)){
			node.childNodes[i].parentNode.removeChild(node.childNodes[i])

		}
	}
	return node
}*/
/*function addTextNode(){
var y=document.createTextNode('再次dianji')
var x=document.getElementById('demo')
x.appendChild(y)
var z=document.getElementById('cc')
z.innerHTML=x.childNodes.length


}
function normPara(){
	var x=document.getElementById('demo')
	x.normalize()
	var z=document.getElementById('cc')
	z.innerHTML=x.childNodes.length
}
if(document.compatMode=='CSS1Compat'){
	//alert(document.documentElement.clientWidth)
	alert(document.documentElement.clientWidth)
}else{
	alert(document.body.clientWidth)
}


*/
/*window.onload=function(){
  var box=document.getElementById('box')
  var p =box.firstChild;
  // alert(box.contains(p))
  // alert(box.compareDocumentPosition(p)>16)

  alert(typeof box.contains)
}
function contains(refNode,otherNode){
      if(typeof refNode.contains != 'undefined' && !(BrowserDetect.browser=='Safari' && BrowserDetect.version<3)){
      	return refNode.contains(otherNode)
      }else if(typeof refNode.compareDocumentPosition=='function'){
      	return refNode.compareDocumentPosition(otherNode)>16;
      }else{
      	var node=otherNode.parentNode;
      	do{
      		if(node === refNode){
      			return true
      		}else{
      			node=otherNode.parentNode
      		}
      	}while(node!=null)
      	return false
      }
}*/

/*function myFunction(){
	var x='',i=0;
	do
	{
		x=x+'The number is'+i+'<br>'
		i++
	}
	while(i<5)
		document.getElementById('demo').innerHTML=x
}
*/
/*window.onload=function(){
	var box=document.getElementById('box')
	// alert(box.innerText)
	// box.innerText='<b>111</b>'
	// alert(typeof box.textContent)
	alert(getInnerText(box))
}
function getInnerText(element){
	if(typeof element.textContent=='string'){
		return element.textContent
	}else{
		return element.innerText
	}

}
function setInnerText(element,text){
	if(typeof element.textContent=='string'){
		element.textContent=text
	}else{
		element.innerText=text
	}
}
 var table=document.createElement('table')
 table.width=300;
 // table.setAttribute('width','300')
 table.border=1;
 var caption=document.createElement('caption')
table.appendChild(caption);
// caption.innerHTML='人员表'
var captionText=document.createTextNode('人员表')
caption.appendChild(captionText);
var thead=document.createElement('thead')
table.appendChild(thead);
var tr=document.createElement('tr')
thead.appendChild(tr)
var th=document.createElement('th')
tr.appendChild(th)

th.appendChild(document.createTextNode('数据'))

var th2=document.createElement('th')
tr.appendChild(th2)
th2.appendChild(document.createTextNode('数据2'))

var table=document.getElementsByTagName('table')[0]
// alert(table.children[0].innerHTML)
// alert(table.children[2].children[1].children[1].innerHTML)
var tbody=table.getElementsByTagName('tbody')[0]
// alert(tbody)
var tr=tbody.getElementsByTagName('tr')[1]
// alert(tr)
var td=tr.getElementsByTagName('td')[1]
alert(td.innerHTML)



 document.body.appendChild(table)
var table=document.getElementsByTagName('table')[0]
	// table.caption.innerHTML='zenmeban'
	// alert(table.rows.length)
	// alert(table.tBodies[0].rows[0].cells.length)
	// alert(table.tBodies[0].rows[1].cells[1].innerHTML)
	// table.deleteCaption()
	// table.deleteTHead()
	// table.tBodies[0].deleteRow(0)
	table.tBodies[0].rows[0].deleteCell(1)
*/
/*window.onload=function(){
var table=document.createElement('table')
table.width=300;
table.border=1;
document.body.appendChild(table);
table.createCaption().innerHTML='人员表';

// table.createTHead()
// var tr=table.tHead.insertRow(0)

var thead=table.createTHead();
var tr=thead.insertRow(0)
tr.insertCell(0).innerHTML='数据1'
tr.insertCell(1).innerHTML='数据2'
tr.insertCell(2).innerHTML='数据3'
// alert(box.style)
	// alert(box.style.color)
	// alert(box.style.background)
	// alert(box.style.styleFloat)
	// alert(box.style.cssFloat)
	// alert(box.style.cssFloat || box.style.styleFloat)
}
var box=document.getElementById('box')
	box.style.color='blue'
	box.style.fontSize='25px'
	box.style.background="#ccc"
	// box.style.float='right'
	// box.style.styleFloat='right'
	typeof box.style.cssFloat!='undefined'?box.style.cssFloat='right':box.style.styleFloat='right'


*/
/*window.onload=function(){
	var box=document.getElementById('box')
	// alert(box.style.cssText)
	// alert(box.style.length)
	// box.style.setProperty('color','red')
	// box.style.removeProperty('color')
	// alert(box.style.fontSize)
	// var style=window.getComputedStyle(box,null)
	// alert(style.color )
	// var style=box.currentStyle
	// alert(style.color)
	var style=window.getComputedStyle? window.getComputedStyle(box,null):null || box.currentStyle ;
	alert(style.border)

}*/

 // alert(document.implementation.hasFeature('styleSheets','5.0'))
 // var link=document.getElementsByTagName('link')[0]
 // alert(link)
 // var sheet=link.sheet;
 // alert(sheet)
// var sheet=link.sheet||link.styleSheet;
// alert(sheet)
// window.onload=function(){

// 	var box=document.getElementById('box')
// 	alert(box.style.color)
// }
/*function offsetTop(element){
	var top=element.offsetTop;
	var parent=element.offsetParent;
	while(parent!=null){
		top+=parent.offsetTop;
		parent=parent.offsetParent
	return top;
}
if(flag){
	var link=document.createElement('link')
	link.rel='stylesheet'
	link.type='text/css'
	link.href='basic.css'
	document.getElementsByTagName('head')[0].appendChild(link)
}

*/
/*window.onload=function(){
	document.onclick=function(){
		alert('document')
	}
	document.documentElement.onclick=function(){
		alert('html')
	}
	document.body.onclick=function(){
		alert('body')
	}
	document.getElementById('box').onclick=function(){
		alert('div')
	}
	document.getElementsByTagName('input')[0].onclick=function(evt){

		alert('input')
		//e.stopPropagation()
		//e.cancelBubble=true;
		setStop(evt)

	}
}
function setStop(evt){
	var e= evt ||window.event;
	(typeof e.stopPropagation =='function') ? e.stopPropagation() :e.cancelBUbble=true
	window.event ?e.cancelBubble==true:e.stopPropagation()
}*/
// alert(typeof window.onload)

/*window.onload=function(){


	 alert('mr.zhang')
}
if(typeof window.onload=='function'){
	var saved = null;
	saved=window.onload;
}
window.onload=function(){
	saved()
	alert('mr.zhang')
}
*/
/*window.addEventListener('load',function(){
	alert('lee')
},false)
window.addEventListener('load',function(){
	alert('mr')
},false)
window.addEventListener('load',function(){
	alert('zhang')
},false)*/
/*window.addEventListener('load',init,false);
window.addEventListener('load',init,false);
window.addEventListener('load',init,false);
function init(){
	alert('mr.zhang')
}*/
/*window.addEventListener('load',function(){
	var box=document.getElementById('box')
	box.addEventListener('click',function(){
		alert('mr.zhang')
	},false)
	box.addEventListener('click',toBlue,false)
},false)
function toRed(){
	this.className='red'
	this.removeEventListener('click',toRed,false);
	this.addEventListener('click',toBlue,false)
}
function toBlue(){
	this.className='blue';
	this.removeEventListener('click',toBlue,false)
	this.addEventListener('click',toRed,false)
}*/
/*window.addEventListener('load',function(){
	var box=document.getElementById('box')
	box.addEventListener('click',function(){
		alert('mr.zhang')
	},true);
	document.addEventListener('click',function(){
				alert('look me ')
	},true)


},false)*/
/*window.attachEvent('onload',function(){
	alert('mr.zhang')
})
window.attachEvent('onload',function(){
	alert('mr.z')
})
window.attachEvent('onload',function(){
	alert('mr.lei')
})*/
/*window.attachEvent('onload',init)
window.attachEvent('onload',init)
function init(){
	alert('mr.zhang')
}*/
/*window.attachEvent('onload',function(){
	var box=document.getElementById('box')
	box.attachEvent('onclick',toBlue)


})

function toRed(){
	var that=window.event.srcElement;

	that.className='red'
	that.detachEvent('onclick',toRed)
	that.attachEvent('onclick',toBlue)
	// this.className='red'
	// this.removeEventlistener('click',toRed,false);
	// this.addEventListener('click',toBlue,false)
}
function toBlue(){
	var that=window.event.srcElement;

	that.className='blue'

	that.detachEvent('onclick',toBlue)
	that.attachEvent('onclick',toRed)
}*/
/*window.attachEvent('onload',function(){
	var box=document.getElementById('box')
	box.onclick=function(evt){
		alert(evt)
	}
	box.attachEvent('onclick',function(evt){
alert(window.event.srcElement.tagName)
	})
})*/
/*function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false)
	}else if(obj.attachEvent){
		obj.attachEvent('on'+type,fn)
	}
}
function removeEvent(obj,type,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(type,fn,false)
	}else if(obj.detachEvent){
		obj.detachEvent('on'+type,fn)
	}
}
function getTarget(evt){
	if(evt.target){
		return evt.target;
	}else if(window.event.srcElement){
		return window.event.srcElement
	}
}

addEvent(window,'load',function(){
	var box=document.getElementById('box')
	addEvent(box,'click',toBlue)
})
// var fm=document.getElementsByTagName('form')[0]
	// var fm=document.forms[0]
	// var fm=document.forms['yourForm']
	// var fm=document.yourForm[0]




*/
//跨浏览器添加事件
function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false)
	}else if(obj.attachEvent){
		obj.attachEvent('on'+type,fn)
	}
}
//跨浏览器移除事件
function removeEvent(obj,type,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(type,fn,false)
	}else if(obj.detachEvent){
		obj.detachEvent('on'+type,fn)
	}
}
//跨浏览器阻止默认行为
function preDef(evt){
	var e =evt || window.event;
	if(e.preventDefault){
		e.preventDefault
	}else{
		e.returnValue=false
	}
}


addEvent(window,'load',function(){

	var fm=document.getElementById('myForm')
	var user=fm.elements['user']
	// alert(fm.elements[0])
	// alert(fm.elements['user'])
	var sexList=fm.elements['sex']
	// alert(sexList[0])
	// alert(sexList[1].value)
	// sexList[1].disabled=true
	// alert(sexList[0].form)
	// sexList[0].type='checkbox'
	// alert(fm.elements['submit'].type)
	// user.focus()
	// user.blur()
	addEvent(user,'change',function(){
		alert('555')
	})

})







