import { LightningElement,wire} from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/demoMessageChannel__c';
import { publish,MessageContext } from 'lightning/messageService';
const DELAY = 100;
export default class FilterContact extends LightningElement {
    searchKey = '';
    @wire(MessageContext)
    messageContext;

    handleKeyChange(event) {
        event.preventDefault()
        const searchKey = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
        const key = {
            inputFrom: searchKey
        };
    
        publish(this.messageContext, SAMPLEMC, key);
    }
    
}