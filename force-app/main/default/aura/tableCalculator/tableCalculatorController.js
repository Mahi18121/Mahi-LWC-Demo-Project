({
	callTable : function(component, event, helper) {
		var inputNumber = component.get('v.inputNumber');
        console.log(inputNumber);
        var numList = [];
        var i ;
        for(i=1;i<=10;i++){
            var value = parseInt(inputNumber)*i ;
            console.log(value);
            numList.push({key:i,value:value}) ;
        }
        component.set('v.values',numList);
	}
})