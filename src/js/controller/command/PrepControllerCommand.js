puremvc.define({
		name:'drawsomething.controller.command.PrepControllerCommand',
		parent:puremvc.SimpleCommand
	},
	{
		execute:function(){
			this.facade.registerCommand(drawsomething.AppConstants.CONNECT_SOCKET,drawsomething.controller.command.SocketCommand);
		}
	}
)