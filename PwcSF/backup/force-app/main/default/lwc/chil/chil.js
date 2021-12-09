import { LightningElement, track } from 'lwc';
export default class chil extends LightningElement {
    @track  log = '';
    customClick() {
        const event = new CustomEvent('modelclick', {
            // detail contains only primitives
            detail: 'there is car Accident. Send ambulance.'
        });
        // Fire the event from model 3
        this.dispatchEvent(event);
        this.log = ' Event Fired';
    }
}