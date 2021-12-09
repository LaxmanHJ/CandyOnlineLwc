import { LightningElement, wire, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'Case.CaseNumber',
    'Case.Status',
    'Case.Subject',
];
export default class UsingWireService extends LightningElement {

    @api recordId;
    @track case;
    @track casenumber;
    @track status;
    @track subject;

    @wire(getRecord,  { recordId: '$recordId', fields: FIELDS}) 
    wiredRecord({ error, data }) {
        if (error) {
            let message = 'Unknown error';
            if (Array.isArray(error.body)) {
                message = error.body.map(e => e.message).join(', ');
            } else if (typeof error.body.message === 'string') {
                message = error.body.message;
            }
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading account',
                    message,
                    variant: 'error',
                }),
            );
        } else if (data) {
            this.case = data;
            this.casenumber = this.case.fields.CaseNumber.value;
            this.subject = this.case.fields.Subject.value;
            this.status = this.case.fields.Status.value;
        }
    }    
}