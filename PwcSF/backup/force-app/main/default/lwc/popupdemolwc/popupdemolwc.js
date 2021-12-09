/*import { LightningElement,track,api,wire } from 'lwc';
import { getRecordUi } from "lightning/uiRecordApi";


export default class Popupdemolwc extends LightningElement {
    //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    @track isModalOpen = false;
    @api recordId;
    @wire(getRecordUi, {
        recordIds: "$recordId",
        layoutTypes: "Full",
        modes: "View",
      })
    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
    }
}*/
import { LightningElement,api } from 'lwc';

export default class ExploreModalsLWC extends LightningElement {
  
  @api recordId;
  modalPopUpToggleFlag = false;

    handlePopup(){
        this.modalPopUpToggleFlag = true;
    }

    handleSkip(){
        this.modalPopUpToggleFlag = false;
    }

}