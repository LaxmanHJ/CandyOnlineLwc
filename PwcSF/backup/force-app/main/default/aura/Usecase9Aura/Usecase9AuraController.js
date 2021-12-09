({
    doInit : function(component, event, helper) {
        
        var action = component.get('c.getentity'); 
        action.setParams({
            "inputval" : component.get('v.accInput')
        });
        action.setCallback(this, function(response){
            var state = response.getState(); // get the response state
            if(state === "SUCCESS") {
                component.set("v.acc1", response.getReturnValue());
                console.log(response.getReturnValue());

            }
        });
        $A.enqueueAction(action);
        
        
        
    }
})