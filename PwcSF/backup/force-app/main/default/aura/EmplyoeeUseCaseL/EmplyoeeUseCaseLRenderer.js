({
	// Your renderer method overrides go here
	render: function(cmp, helper) {
       console.log('render');
        // Modifying DOM in renderer
       return this.superRender()
    },
})