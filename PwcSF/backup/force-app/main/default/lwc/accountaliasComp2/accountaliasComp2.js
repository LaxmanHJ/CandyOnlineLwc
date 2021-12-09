import { LightningElement,wire } from 'lwc';

import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import CONTACT_ID from "@salesforce/schema/User.ContactId";

// this gets you the logged in user
import USER_ID from "@salesforce/user/Id";
export default class AccountaliasComp2 extends LightningElement {

  @wire(getRecord, { recordId: USER_ID, fields: [CONTACT_ID] })
  user;

  get contactId() {
    return getFieldValue(this.user.data, CONTACT_ID);
  }
}