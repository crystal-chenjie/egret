//Timer 类是计时器的接口，它使您能按指定的时间序列运行代码。 使用 start() 方法来启动计时器。为 timer 事件添加事件侦听器，以便将代码设置为按计时器间隔运行。
// 可以创建 Timer 对象以运行一次或按指定间隔重复运行，从而按计划执行代码。 

// Timer 相关的有两个属性，三个方法和两个事件。

// 两个属性   delay  分别表示每次间隔的时间（以毫秒为单位）repeatCount  执行的次数（如果次数为0，则表示不停的执行）。
// 三个方法为 start, reset 和 stop。作用分别是开始计时，重新计时和暂停计时。
/ /两个事件分别为 TimerEvent.TIMER 和 TimerEvent.TIMER_COMPLETE 。分别在计时过程中触发和计时结束后触发。

// 创建 timer 对象

 public timer:egret.Timer;
 
 this.timer.start();
 this.timer.reset();
 this.timer.stop();
 
 // 创建函数时  要传入 e:egret.TimerEvent  而不是  e:egret.Event
 public onTimer(e:egret.TimerEvent):void{
      
 }
 
 this.timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this); //为timer 添加监听事件
 this.timer.removeEventListener(egret.TimerEvent.TIMER,this.onTimer,this); //为timer 移除监听事件
 
 //官方文档示例
 class TimerDemo extends egret.DisplayObjectContainer
{
    public constructor()
    {
        super();
        //创建一个计时器对象
        var timer:egret.Timer = new egret.Timer(500,5);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this); // 
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
        //开始计时
        timer.start();
    }
    private timerFunc()
    {
        console.log("计时");
    }
    private timerComFunc()
    {
        console.log("计时结束");
    }
}
