import { LightningElement,wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/demo__c';

export default class ContactFilterss extends LightningElement {
    searchKey = '';
  //  @wire (getContacts,{searchText:'$searchKey'}) cons;
    @wire(MessageContext)
    messageContext;

    handleTextChange(event){
     //   event.preventDefault();
        this.searchKey  = event.target.value;
        console.log('start '+this.searchKey);
    //  this.searchKey = event.target.value;
    const message = {
        conlist: this.searchKey
    };
    //    setTimeout(() => {
            publish(this.messageContext, SAMPLEMC, message);
            console.log('published'+this.searchKey);
   //     },50);

    //    const message = {
     //       conlist: this.cons 
     //   }; 
     //   publish(this.messageContext, SAMPLEMC, message);
      
    }
    resethandler(){
        this.searchKey = '';
    }
}