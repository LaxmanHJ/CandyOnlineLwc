import { LightningElement,wire } from 'lwc';
import getContacts from  '@salesforce/apex/searchContacts.getContacts';
import { subscribe, MessageContext } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/demo__c';

export default class ContactTileListss extends LightningElement {
    @wire(MessageContext)
    messageContext;

    visibleContacts;
   
    co;
    @wire (getContacts,{searchText:'$co'}) cons;
    subscribeToMessageChannel() {

      /*     if (!this.subscription) {
                this.subscription = subscribe(
                this.messageContext,
                SAMPLEMC,
                (message) => this.handleMessage(message)
            );
        }
*/
        this.subscription = subscribe(
        this.messageContext,
          SAMPLEMC, 
          (message) => {
             this.handleMessage(message);
           }
           );
    }

    handleMessage(message) {
        this.co = message.conlist;
    }

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

         updateContactHandler(event){
           //this.visibleContacts = [...event.detail.records]
           this.visibleContacts = [...event.detail.yy];
           console.log(event.detail.records);
        }

}