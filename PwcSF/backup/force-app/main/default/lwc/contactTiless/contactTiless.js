import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import image from '@salesforce/resourceUrl/person';

export default class ContactTiless extends NavigationMixin(LightningElement) {
    dispImage=image;
    @api pass;
    redirectToContactPage(event) {
        // Navigate to the Account home page
        //console.log("id is",event.target.dataset.id)
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                //recordId : event.target.dataset.id,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
    }
}