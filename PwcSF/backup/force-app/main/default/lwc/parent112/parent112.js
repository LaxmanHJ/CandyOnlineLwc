import { LightningElement, track } from 'lwc';
export default class Chil extends LightningElement {
    @track  log = ''; 
    modelClick(e){
        this.log = this.log + ' Captured event - '+ e.detail+' ';
          /*const event = new CustomEvent('modelclick', {
            // detail contains only primitives
            detail: 'Event Started in Tesla'
        });
        // Fire the event
        this.dispatchEvent(event);*/
    }
}