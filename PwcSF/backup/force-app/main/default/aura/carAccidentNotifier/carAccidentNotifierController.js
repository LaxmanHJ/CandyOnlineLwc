({
	fireCarAccidentEvent  : function(component, event, helper) {
		var accidentEvent = component.getEvent("newCarAccident");
        accidentEvent.setParams({"msg":"there is car Accident. Send ambulance."});
        accidentEvent.fire();
    }
})