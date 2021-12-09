({
	handleNotification : function(component, event, helper){
        var sentMessage= event.getParam("msg");
        component.set("v.msgFromNotifier", sentMessage);
    }
})