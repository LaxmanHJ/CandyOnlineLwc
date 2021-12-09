({
    getvaluefromfilterContact : function(component, event, helper) {
        var samp= event.getParam("searchkey");
        var action = component.get("c.findByName");
        var result;
        action.setParams({
            "searchKey": samp
        });
        action.setCallback(this, function(a) {
            result = a.getReturnValue()
            component.set("v.contacts", result);
            console.log(result);
        });
        $A.enqueueAction(action);
        
    },
    navigatetocontact : function(cmp, event, helper){
   	var navService = cmp.find("navId");      
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                //recordId : '0032w00000JKiuwAAD',
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filterName: 'MyAccounts'
            } 
        };
        event.preventDefault();
        //navService.navigate(pageReference);
    
    }
})