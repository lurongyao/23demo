/**
 * ITCAST WEB
 * Created by zhousg on 2017/2/16.
 */
window.onload=function () {

	// 顶部搜索
	  search();
	  // 轮播图
	  banner();
	  // 倒计时
	  downTime();
}
 var search=function () {
 	
 	// 默认顶部固定浮动 背景透明
 	// 当页面滚动的时候， 背景透明度逐渐加深
 	// 当滚动到一定的距离之后 透明度固定不变


 	// 获取需要操作的dom元素
 	var searchBox=document.document.querySelector('.jd_search_box');
 	var bannerBox=document.querySelector('.jd_banner');
 		// 一定距离，
 	var height=bannerBox.offsetHeight;
     // 滚动事件监听
     window.onscroll=function () {
     	
     	// 获取页面滚动的距离
     	var top=document.body.scrollTop;
     	var opacity=0;
     	if (top<height) {
     		opacity=top/height*0.85;
     	}else{
     		
     			opacity=0.85;
     		}
     		searchBox.style.background="rgba(201,21,35,"+opacity+")"

     	}

     }

    var banner=function () {
    	
    	// 1自动轮播  定时器+做滚动+自动动画
    	   // 2点对应滚动， 先清除 当前的样式再给对应的加上当前样式 now
    	   // 3 滑动起来 touch相关事件
    	   // 4当滑动结束后，如果不超过1/3的距离，就吸附回去
    	       // 5当滑动结束后，如果超过1/3的距离， 就切换图片，（上一张或者下一张

    	// 获取当前dom元素
    	var  banner=document.querySelector('.jd_banner') ;
    	var width=banner.offsetWidth;
    	// 图片盒子
    	 var imageBox=banner.querySelector('ul:first-child');
    	 // 点盒子
    	 var pointBox= banner.querySelector('ul:last-child');
    	 var points=pointBox.querySelector('li');

    	 // 加过渡 
    	 var addTransition=function () {
    	 	imageBox.style.transition='all 0.2s';
    	 	imageBox.style.webkitTransition='all 0.2s';

    	 };
    	// 清过度
    	var removeTransition=function () {
    	
    		imageBox.style.transform='none';
    		imageBox.style.webkitTransition='none';
    	};
    	 // 设置定位
    	 var setTranslateX=function (translateX) {
    	 		
    	 	imageBox.style.transform='translateX('+translateX+'px)'	
    	 	imageBox.style.webkitTransform='translateX('+translateX+'px)'	

    	 }

   			// 无缝自动轮播
   			var  index=1;/*默认索引*/
   			var timer=setInterval(function () {
   				
   				index++;
   				// 动画的移动图片盒子
   				// 加过渡
   				addTransition();
   				// 做定位
   				setTranslateX(-index*width);

   			},1000);
    } 
 }