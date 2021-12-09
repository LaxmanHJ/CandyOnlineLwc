import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class ContactTile1 extends NavigationMixin(LightningElement) {
    
    @api pass_val;
    redirectToContactPage(event) {
        // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId : event.target.dataset.id,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
    }
}