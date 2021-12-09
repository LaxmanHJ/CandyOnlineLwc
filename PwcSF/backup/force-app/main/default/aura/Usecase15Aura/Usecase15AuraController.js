({
    handleChange : function(component, event, helper) {
        component.set('v.value', "true");
        var params = [];
        params.push([
            "lightning:input",
            {
                "aura:id" : "dynamic_acc_name",
                "label" : "Name",
                "value" : component.get('v.Account_name')
            }
        ],
        [
            "lightning:input",
             {
                 "aura:id" : "dynamic_acc_ind",
                "label" : "Industry",
                 "value" : component.get('v.Account_industry')
             }
        ],
        [
              "lightning:input",
               {
                   "aura:id" : "dynamic_acc_phone",
                  "label" : "Phone",
                   "value" : component.get('v.Account_phone')
               }
        ],
        [
               "lightning:button",
                {
                    "label" : "Add Account",
                    "variant" : "brand",
                    "onclick" : component.getReference("c.addAcc")
                }
        ]
      );
        
        $A.createComponents(params, function(comp, status, errorMessage){
            if(status == 'SUCCESS'){
                var bodyContent = component.get('v.body');
                bodyContent.push(comp[0]);
                bodyContent.push(comp[1]);
                bodyContent.push(comp[2]);
                bodyContent.push(comp[3]);
                component.set('v.body',bodyContent);
            } else if(status == 'INCOMPLETE'){
                console.log('Incomplete');
            }else{
                console.log('error:' + errorMessage);
            }    
        }
        )
    },
    
    addAcc : function(component, event, helper){
        //console.log('addAcc function called');
 
        var contName = component.get('v.Contact_name');
        var contEmail = component.get('v.Contact_email');
        var accName = component.find('dynamic_acc_name').get('v.value');
        var accInd = component.find('dynamic_acc_ind').get('v.value');
        var accPhn =component.find('dynamic_acc_phone').get('v.value');
        
        console.log(contName);
        console.log(contEmail);
        console.log(accName);
        console.log(accInd);
        console.log(accPhn);
        
        var action = component.get('c.insertAccount'); 
        
        action.setParams({
            cName : contName,
            cEmail : contEmail,
            aName : accName,
            aIndustry : accInd,
            aPhn : accPhn
        });
        
        action.setCallback(this, function(response){
            var state = response.getState();
            console.log('returned state:'+ state);
            if(state == 'SUCCESS'){
                var returned_account_id = response.getReturnValue();
                component.set('v.acctId',returned_account_id);
                console.log('id'+ returned_account_id);
            }else{
                console.log('No Account Created');
            }
        })
        
        $A.enqueueAction(action);
    }
})