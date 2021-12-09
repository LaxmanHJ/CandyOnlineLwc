import { LightningElement, api } from 'lwc';

export default class CustomEventParentComp extends LightningElement {
    @api
    messageFrmChild;
    handelMessageFromChild(event){
        this.messageFrmChild = event.detail;
    }
}