import { LightningElement, api, wire } from "lwc";
import { getRecordUi } from "lightning/uiRecordApi";
import getcontactList from '@salesforce/apex/getcontacts.getcontactList';
import getoppList from '@salesforce/apex/getcontacts.getoppList';

export default class Accountalias extends LightningElement {
  @api recordId;
  accountType;
  accountSite="";
 //accountOwner;
  accountName;
  accountPhone;
  accountIndustry;
  accountWebsite;

  modalPopUpToggleFlag = false;

    handlePopup(){
        this.modalPopUpToggleFlag = true;
    }

    handleSkip(){
        this.modalPopUpToggleFlag = false;
    }

  @wire(getcontactList,{recordId: '$recordId'}) contacts;
    @wire(getoppList,{recordId: '$recordId'}) opps;

  @wire(getRecordUi, {
    recordIds: "$recordId",
    layoutTypes: "Full",
    modes: "View",
  })
  wiredRecord({ error, data }) {
    if (data) {
      this.accountType = data.records[this.recordId].fields["Type"].value;
      this.accountSite = data.records[this.recordId].fields["Site"].value;
      this.accountWebsite = data.records[this.recordId].fields["Website"].value;
      //this.accountOwner = data.records[this.recordId].fields["Owner.Name"].value;
      this.accountPhone = data.records[this.recordId].fields["Phone"].value;
      this.accountIndustry = data.records[this.recordId].fields["Industry"].value;
      this.accountName = data.records[this.recordId].fields["Name"].value;
        console.log(this.recordId);

    } else{
      // TODO: Data handling
      console.log(error);
    }
  }
  
  
}