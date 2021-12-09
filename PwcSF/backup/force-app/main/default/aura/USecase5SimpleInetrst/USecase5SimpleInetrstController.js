({
	
	result : function(component, event, helper) {
		var amt = component.get("v.princ");
        var rate1 = component.get("v.rate");
        var year = component.get("v.time");
        console.log(amt);
        console.log(rate1);
        console.log(year);
        var sumResult = (amt * rate1 * year)/100;
        component.set('v.total', sumResult);
	}
})