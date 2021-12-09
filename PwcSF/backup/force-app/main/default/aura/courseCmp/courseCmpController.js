({
	 handlesubmit : function(component, event, helper) {
        var input = component.get('v.input');
        
        console.log("Name is",input);
        var evt = $A.get("e.c:courseCmpEvent");
        evt.setParams({"pass_name": input});
        evt.fire();
        //window.open('/' + recordId,'_blank',empname,empsal,empcity);       
    }
})