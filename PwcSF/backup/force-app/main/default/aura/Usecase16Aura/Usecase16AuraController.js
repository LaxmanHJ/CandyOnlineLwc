({
  createAccount : function(component, event) {
    var newAcc = component.get("v.newAccount");
    var action = component.get("c.saveAccount");
    action.setParams({ 
        "acc": newAcc
    });
    action.setCallback(this, function(a) {
           var state = a.getState();
            if (state === "SUCCESS") {
                var name = a.getReturnValue();
               alert("hello from here"+name);
            }
        });
    $A.enqueueAction(action)
}
})