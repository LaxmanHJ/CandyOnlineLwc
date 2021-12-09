import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class CandieTile extends NavigationMixin(LightningElement) {
    @api pass_val;
  //  @api flagtile;
    @api selectedrecID='';
   /* redirectToContactPage(event) {
        // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId : event.target.dataset.id,
                
                objectApiName: 'ProductStore__c',
                actionName: 'view'
            }
            
        });
    }*/

    navigateToDetailsPage(event) {
        
            let compDefinition = {
                componentDef: "c:candiesPopup",
                attributes: {
                    ParentMessageName : this.pass_val.Name,
                    ParentMessageImage:this.pass_val.image__c,
                    ParentMessagePrice:this.pass_val.Price__c,
                    ParentMessageQuantity: this.pass_val.Quantity__c,
                    ParentMessageId: this.pass_val.Id
                    
                }
                
            };
            // Base64 encode the compDefinition JS object
            let encodedCompDef = btoa(JSON.stringify(compDefinition));
        //console.log('eventId:'+event.target.dataset.recordId);
        console.log('base 64' +encodedCompDef);
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                
                // CustomTabs from managed packages are identified by their
                // namespace prefix followed by two underscores followed by the
                // developer name. E.g. 'namespace__TabName'
               // apiName: 'LWC_Recipes'
               //recordId : event.target.dataset.recordId,
               
              // apiName:'Candies_Popup',
              url: "/one/one.app#" + encodedCompDef
              
               //url:"https://curious-hawk-mfygxc-dev-ed.lightning.force.com/lightning/n/Candies_PopUp" + encodedCompDef
               
            },
           
            
        });
        console.log("/one/one.app#" + encodedCompDef);
    }
   /* handleClickPage(event){
        console.log('eventId:'+event.target.dataset.recordId);
        this.navigateToTabPage(event.target.dataset.recordId);
    }*/



    //jdnsjdnsj
   /* handleClick() {
        let compDefinition = {
            componentDef: "c:targetlwc",
            attributes: {
                ParentMessage : this.text != "" ? this.text : "No Name Provided."
            }
        };
        // Base64 encode the compDefinition JS object
        let encodedCompDef = btoa(JSON.stringify(compDefinition));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: "/one/one.app#" + encodedCompDef
            }
        });
    }*/

}