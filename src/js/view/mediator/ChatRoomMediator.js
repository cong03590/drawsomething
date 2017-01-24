puremvc.define({
        name: 'drawsomething.view.mediator.ChatRoomMediator',
        parent: puremvc.Mediator
    },
    {
        // Notifications this mediator is interested in 
        listNotificationInterests: function() {
            return [];
        },
        
        // Code to be executed when the Mediator instance is registered with the View
        onRegister: function() {
            this.setViewComponent( new drawsomething.view.component.ChatRoom);
            this.viewComponent.addEventListener( drawsomething.view.event.AppEvents.SEND_MSG, this );
        },
        
        // Handle events from the view component
        handleEvent: function ( event ) {
            switch( event.type ) {
                case drawsomething.view.event.AppEvents.SEND_MSG:
                    this.sendNotification( drawsomething.AppConstants.SEND_CHAT_MSG, event.msg );
                    break;
             }
            
        },
 
        // Handle notifications from other PureMVC actors
        handleNotification: function( note ) {
            switch ( note.getName() ) {
                case todomvc.AppConstants.TODOS_FILTERED:
                    this.viewComponent.setFilteredTodoList( note.getBody() );
                    break;
            }
        },
    },
 
    // STATIC MEMBERS
    {
        NAME: 'ChatRoomMediator'
    }    
);
