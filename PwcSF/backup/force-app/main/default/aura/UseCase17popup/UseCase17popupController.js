({
    openModel: function(component, event, helper) {
        // Set isModalOpen attribute to true
        component.set("v.isModalOpen", true);
    },
    submitDetails: function(component, event, helper) {
        // Set isModalOpen attribute to false
        //Add your code to call apex method or do some processing
        component.set("v.isModalOpen", false);
    },
    
    
    closeModel: function(component, event, helper) {
        // Set isModalOpen attribute to false  
        // 
        // 
        var fname = component.find('cfname').get('v.value');
        var lname = component.find('clname').get('v.value');
        var email = component.find('cemail').get('v.value');
        
        var action = component.get('c.addCon');
        component.set("v.isModalOpen", false);
        
        action.setParams({
            cfname: fname,
            clname: lname,
            cemail: email,
            accId:component.get('v.recordId')
            
        });
        
        action.setCallback(this, function(response){
            var state = response.getState();
            console.log('state:'+ state);
            
            if(state === 'SUCCESS'){
                var contact = response.getReturnValue();
                comp.set('v.cId', contact);
                console.log('contact' + contact);
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title":"success",
                    "message":"contact has added"
                });
                toastEvent.fire();
            }else {
                console.log('failed');
            }
        });
        $A.enqueueAction(action);            
    }
    
    
})