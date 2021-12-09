({
    doInit : function(comp, event, helper) {
        
        var getaccount = comp.get("c.getacc");
        getaccount.setCallback(this,function(response){
        var state = response.getState();
        if(state=="SUCCESS"){
            
            comp.set("v.acc",response.getReturnValue());
        }
        else
        {
            console.log(state);
        }
    });
    $A.enqueueAction(getaccount);
    
 }
 })