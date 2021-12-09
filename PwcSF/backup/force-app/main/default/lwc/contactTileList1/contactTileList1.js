import { LightningElement,wire,api } from 'lwc';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/demoMessageChannel__c';
import findContacts from '@salesforce/apex/getcontacts.getcontactList';
export default class contactTileList extends LightningElement {
    @wire(MessageContext)
    messageContext;
    @api contactName;
    @wire(findContacts, { searchKey: '$contactName' })
    contacts;

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                SAMPLEMC,
                (key) => this.handleMessage(key),
            );
        }
        this.subscription = subscribe(
            this.messageContext,
            SAMPLEMC, (key) => {
                this.handleMessage(key);
            });
    }
    handleMessage(key) {
        this.contactName = key.inputFrom;
    }
    connectedCallback() {
        this.subscribeToMessageChannel();
    } 
}