({
	handlerEvent : function(component, event, helper) {
		var FirstNumber = event.getParams("FirstNumber") ;
        var SecondNumber = event.getParams("Secondumber") ;
        var sum = parseInt(FirstNumber) + parseInt(SecondNumber) ;
        component.set("v.sum",sum) ;
	}
})