import { LightningElement,track,api} from 'lwc';

export default class PickList extends LightningElement {
    
    @api variant;
    @track value = 'Full Day';
    @track label = 'label';
    @track options = [
        { label: 'Full-Day', value: 'Full Day' },
        { label: 'Half-Day', value: 'Half Day' },
        { label: 'Only-Morning', value: "Only Morning" },
        { label: 'Only-Evening', value: "Only Evening" }
];   
}