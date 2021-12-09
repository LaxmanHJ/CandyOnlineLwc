({
	doInit: function(component, event, helper) {
        /** Server side controller calling logic. **/
        
        /*<getListOfAccounts> is server side controller method, 
         * which return list of 10 account records.*/
        var action = component.get("c.getListOfcontacts2");
        
        action.setCallback(this, function(response){
            /*<response.getState()> return response status as SUCCESS/ERROR/INCOMPLETE etc.*/
            var state = response.getState();
            /*If response from server side is <SUCCESS>, then we will set response (list of accouts)
             *under lightning attribute <listOfAccounts> (defined under ViewListOfAccount.cmp)*/
            if (state === "SUCCESS"){
                var lstOfAcc = response.getReturnValue();
                console.log("State === > "+lstOfAcc);
             if(lstOfAcc != null)
                 component.set("v.listOfcontacts", lstOfAcc);
            }
        });
        
        $A.enqueueAction(action);
	}
})