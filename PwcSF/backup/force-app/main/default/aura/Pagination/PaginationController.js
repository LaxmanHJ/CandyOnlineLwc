({
    doInit: function(component, event, helper) {
        var pageNumber = component.get("v.PageNumber");  
        var searchValue = component.find("searchKey").get("v.value");
        var pageSize = component.find("pageSize").get("v.value"); 
        helper.getContactList(component, pageNumber, pageSize,searchValue);
    },
    searchKeyChange: function(component, event, helper) {
        var pageNumber = component.get("v.PageNumber");  
        var searchValue = component.find("searchKey").get("v.value");

        var pageSize = component.find("pageSize").get("v.value"); 
        helper.getContactList(component, pageNumber, pageSize,searchValue);
    },// LIMIT :pSize OFFSET :offset
     
    handleNext: function(component, event, helper) {
        var pageNumber = component.get("v.PageNumber");  
        var pageSize = component.find("pageSize").get("v.value");
        var searchValue = component.find("searchKey").get("v.value");
        pageNumber++;
        helper.getContactList(component, pageNumber, pageSize,searchValue);
    },
     
    handlePrev: function(component, event, helper) {
        var pageNumber = component.get("v.PageNumber");  
        var pageSize = component.find("pageSize").get("v.value");
        var searchValue = component.find("searchKey").get("v.value");
        pageNumber--;
        helper.getContactList(component, pageNumber, pageSize,searchValue);
    },
     
    onSelectChange: function(component, event, helper) {
        var page = 1
        var pageSize = component.find("pageSize").get("v.value");
        helper.getContactList(component, page, pageSize,searchValue);
    },
})