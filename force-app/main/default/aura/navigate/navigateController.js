({
	 navigateToHome: function(component, event, helper) {
		 var nav = component.find("navService") ;
         var PageReference = {
             type: 'standard__namedPage',
             attributes:{
             	pageName :'home' 
         	 }
         };
    	 nav.navigate(PageReference)
	},
    navigateToNewContDef: function(cmp,event,helper){
        var nav = cmp.find("navService") ;
        var PageReference = {
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues:{
                    FirstName:'Mahi',
                    LastName:'SF Developer',
                    Phone:'7674847489'
                }
            }
		}
        nav.navigate(PageReference) ;
    },
    navigateToNewCon: function(component,event,helper){
    	var nav = component.find("navService") ;
    	var PageReference = {
    		type: 'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName : 'new' 
        	}
        }
        nav.navigate(PageReference) ;
	},
    navigateToConList: function(component,event,helper){
    	var nav = component.find("navService") ;
    	var PageReference = {
            type: 'standard__objectPage',
            attributes:{
    			objectApiName:'Contact',
    			actionName:'list'
        	}
		}
 		nav.navigate(PageReference) ;
	}
})