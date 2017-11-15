// 生命周期
stage.addEventListener(egret.Event.ACTIVATE,() = >{
	console.log("app 进入前台")
},this)
stage.addEventListener(egret.Event.DEACTIVATE,() = >{
	console.log("app 进入后台")
},this)

//egret 生命周期管理器

egret.lifecycle.onPause = () =>{
	console.log("app 进入后台");
	egret.ticker.pause();//关闭渲染和心跳
}
egret.lifecycle.onResume =() =>{
	console.log("app 进入前台");
	egret.ticker.rusume(); //打开渲染和心跳

}




//手机QQ 注册了 appInBackground 这一变量 在typescript 中进行声明 防止报错
declare interface Window{
	appInBackground:boolean;
}
egret.lifecycle.addLifecycleListener((context) = >{
	// 方法一：通过事件监听的方式进行通知
	document.addLifecycleListener("qbrowerVisibilityChange",function function_name(e:any) {
		if(e.hidden){
			context.pause();
		}else{
			context.resume();
		};
	});
	//方法二：在每一帧进行判断
	context.onUpdate = ()=>{
		if(window.appInBackground){
			context.pause();
		}else{
			context.resume();
		}
	}
})
