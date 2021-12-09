({
    handlesubmit : function(component, event, helper) {
        var empname = component.get('v.empName');
        var empsal = component.get('v.empSalary');
        var empcity = component.get('v.empCity');
        
        console.log("Name is",empname,empsal,empcity);
        var evt = $A.get("e.c:Result");
        evt.setParams({"pass_name": empname,"pass_salary":empsal,"pass_city":empcity,"pass_submit":"true"});
        evt.fire();
        //window.open('/' + recordId,'_blank',empname,empsal,empcity);       
    },
 
    handlecancel : function(component, event, helper) {
    component.set("v.empName", "");
    component.set("v.empSalary", "");
    component.set("v.empCity", "");
    
    
    var empname = component.get('v.empName');
    var empsal = component.get('v.empSalary');
    var empcity = component.get('v.empCity');
    
    console.log("Name is",empname,empsal,empcity);
    var evt = $A.get("e.c:Result");
    evt.setParams({"pass_name": empname,"pass_salary":empsal,"pass_city":empcity,"pass_submit":"false"});
	evt.fire();
//window.open('/' + recordId,'_blank',empname,empsal,empcity);       
}
})