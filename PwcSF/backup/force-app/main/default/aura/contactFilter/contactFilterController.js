({ 
    searchKeyChange: function(component, event) {
        var searchKey = component.find("searchKey").get("v.value");
        console.log('searchKey:::::'+searchKey);
        var evt = $A.get("e.c:Resultevt");
        evt.setParams({"searchkey": searchKey});
        evt.fire();
    }   

})