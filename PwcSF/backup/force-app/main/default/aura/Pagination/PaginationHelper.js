({
    getContactList: function(component, pageNumber, pageSize,searchValue) {
        var action = component.get("c.getContactData");
        action.setParams({
            "pageNumber": pageNumber,
            "pageSize": pageSize,
            "searchvalue":searchValue
        });
        action.setCallback(this, function(result) {
            var state = result.getState();
            if (component.isValid() && state === "SUCCESS"){
                var resultData = result.getReturnValue();
                component.set("v.ContactList", resultData.contactList);
                component.set("v.PageNumber", resultData.pageNumber);
                component.set("v.TotalRecords", resultData.totalRecords);
                component.set("v.RecordStart", resultData.recordStart);
                component.set("v.RecordEnd", resultData.recordEnd);
                component.set("v.TotalPages", Math.ceil(resultData.totalRecords / pageSize));
                console.log("resultos",searchValue,resultData.contactList)
            }
        });
        $A.enqueueAction(action);
    }
})