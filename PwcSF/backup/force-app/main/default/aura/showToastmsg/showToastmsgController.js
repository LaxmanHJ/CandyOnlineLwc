({
    submit : function(component, event, helper) {
        var toastEvent = $A.get('e.force:showToast');
        toastEvent.setParams(
            {
                "title":"Sucess",
                "message":"This is saved yoooo!!!"	
            }
        );
        toastEvent.fire();
    }
})