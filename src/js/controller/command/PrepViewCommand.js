puremvc.define({
		name:'drawsomething.controller.command.PrepViewCommand',
		parent:puremvc.SimpleCommand
	},
	//INSTANCE MEMBERS
	{
		execute:function(note){
			this.facade.registerMediator(new drawsomething.view.mediator.ConnectPanelMediator);
			this.facade.registerMediator(new drawsomething.view.mediator.DrawPanelMediator);
		}
	}

)
