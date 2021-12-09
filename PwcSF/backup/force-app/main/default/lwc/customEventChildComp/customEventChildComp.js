import { LightningElement } from 'lwc';

export default class CustomEventChildComp extends LightningElement {
    handleCustomEvent(){
        //Use the CustomEvent() constructor to create an event. And always use event name in lower case.
        const myCustomEvent = new CustomEvent("displaymessage", { detail: "Message Passing from child component using custom event." });

        //Use dispatchEvent() method to dispatch the above created event.
        this.dispatchEvent(myCustomEvent);
    }
}