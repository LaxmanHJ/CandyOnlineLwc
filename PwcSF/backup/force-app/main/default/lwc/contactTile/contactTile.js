import { LightningElement,api} from 'lwc';
import { NavigationMixin} from 'lightning/navigation';
import image from '@salesforce/resourceUrl/person';
export default class ContactTile extends NavigationMixin(LightningElement) {
    @api conid
    @api email
    @api phone
    @api title
    @api name
    dispImage=image;


    navigateToContact(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.target.dataset.id,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
    }

}