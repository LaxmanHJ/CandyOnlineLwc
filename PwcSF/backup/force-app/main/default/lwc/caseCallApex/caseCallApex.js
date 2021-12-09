import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

import getAccountList from '@salesforce/apex/ControllerCase.getAccountList';
  
export default class AccountListLWC extends LightningElement {
    @wire(getAccountList) cases;
}