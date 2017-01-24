puremvc.define({
		name:'drawsomething.view.component.ChatRoom',
		constructor:function(event){
			var _this=this;
			this.drawsomethingApp=document.querySelector( '#drawsomething' );
			this.sendBtn=this.drawsomethingApp.querySelector(".connectBtn");
			this.sendBtn.component=this;
			drawsomething.view.event.AppEvents.addEventListener(this.sendBtn,'click',function(event){
				this.component.dispatchSendMsg(event)
			})
		}
	},
	{
		addEventListener:function(type,listener,useCapture){
			drawsomething.view.event.AppEvents.addEventListener(this.drawsomethingApp,type,listener,useCapture);
		},
		createEvent:function(eventName){
			return drawsomething.view.event.AppEvents.createEvent(eventName);
		},
		dispatchEvent:function(event){
			drawsomething.view.event.AppEvents.dispatchEvent(this.drawsomethingApp,event);
		},
		dispatchSendMsg:function(e){						
			var sendMsgEvent = this.createEvent( drawsomething.view.event.AppEvents.SEND_MSG);
			sendMsgEvent.msg="hello";
			this.dispatchEvent( sendMsgEvent );
		}
	},
	{
		NAME:'ChatRoom'
	}
)