puremvc.define({
        name: 'drawsomething.view.mediator.ConnectPanelMediator',
        parent: puremvc.Mediator
    },
    {
        // Notifications this mediator is interested in 
        listNotificationInterests: function() {
            return [drawsomething.AppConstants.CONNECT_SUCCESS];
        },
        
        // Code to be executed when the Mediator instance is registered with the View
        onRegister: function() {
            this.setViewComponent( new drawsomething.view.component.ConnectPanel);
            this.viewComponent.addEventListener( drawsomething.view.event.AppEvents.CONNECT_SOCKET, this );
        },
        
        // Handle events from the view component
        handleEvent: function ( event ) {            
            switch( event.type ) {
                case drawsomething.view.event.AppEvents.CONNECT_SOCKET:
                    this.sendNotification( drawsomething.AppConstants.CONNECT_SOCKET, event.msg );
                    break;
             }
            
        },
 
        // Handle notifications from other PureMVC actors
        handleNotification: function( note ) {
            switch ( note.getName() ) {
                case drawsomething.AppConstants.CONNECT_SUCCESS:
                    this.viewComponent.hide();
                    $("#readyPanel").show();
                    break;
            }
        },
    },
 
    // STATIC MEMBERS
    {
        NAME: 'ConnectPanelMediator'
    }    
);
