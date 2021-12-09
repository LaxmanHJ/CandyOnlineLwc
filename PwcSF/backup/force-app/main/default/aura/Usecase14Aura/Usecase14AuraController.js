({
    createButton : function(component, event, helper) {
        $A.createComponent(
            "lightning:input", 
            {
						"label":"Enter Company Name"              
            }, 
            function (cmp, status, errorMessage){
                if(status === 'SUCCESS'){
                    var bodyVar = component.get('v.body');
                    bodyVar.push(cmp);
                    component.set('v.body',bodyVar); 
                } else if(status === 'INCOMPLETE'){
                    console.log("No response from server or client is offline.")
                    // Show offline error
                } else if (status === 'ERROR'){
                    console.log('error: ' + errorMessage);                    
                }
            })
    }
})