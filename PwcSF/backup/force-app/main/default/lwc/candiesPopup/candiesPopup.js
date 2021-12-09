import { LightningElement,track,api} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import createOrder from '@salesforce/apex/CatProd.createOrder';

export default class CandiesPopup extends NavigationMixin(LightningElement) {
    @track isModalOpen = false;
    @api ParentMessageName = '';
    @api ParentMessageImage='';
    @api ParentMessagePrice='';
    @api ParentMessageId='';
    @api ParentMessageQuantity = '';
    @api count=1;
    @track flagsold;
    @track flagcart;
    @track checkButton;
    @track calsum;
    status;
    @api orders;
    @api orderId;
    a;
    areDetailsVisible = false;
  
    //sets the isModalOpen property to true, indicating that the Modal is Open
  showModal() {
    this.isModalOpen = true;
  }

  //sets the isModalOpen property to false, indicating that the Modal is Closed
  closeModal() {
    this.isModalOpen = false;
    this.count = 0;
  }

  /* 
  can be used instead of the above two methods - showModal() & closeModal()
  just toggles the isModalOpen property - true if false, false if true 
  */
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  //compute the CSS classes of the Modal(popup) based on the value of isModalOpen property
  get modalClass() {
    return `slds-modal ${this.isModalOpen ? "slds-fade-in-open" : ""}`;
  }

  //compute the CSS classes of the Modal Backdrop(grey overlay) based on the value of isModalOpen property
  get modalBackdropClass() {
    return `slds-backdrop ${this.isModalOpen ? "slds-backdrop_open" : ""}`;
  }

    handleChange(event) {
        this.areDetailsVisible = event.target.checked;
    }

    //increment and decrement event
     handleincrement(){
       // amount of increments can upto availabe quantity -10
           if(this.count<this.ParentMessageQuantity-5){
               this.count=this.count+1;
           
           this.a = this.ParentMessagePrice; 
           this.calsum = this.calsum + this.a;
           console.log('val'+this.calsum);
           console.log('val'+this.a);
           }
        }

     handledecrement(){
        if(this.count>1){
          this.count = this.count-1;
           this.a = this.ParentMessagePrice; 
           this.calsum = this.calsum - this.a;
        }
     }

     connectedCallback(){
      setTimeout(()=>{
         if(this.ParentMessageQuantity<12){
          this.flagsold = false;
          this.flagcart = true;
         }
         this.calsum=this.ParentMessagePrice;
         console.log(this.calsum);
      },1500);
  }

  saveOrder(){
    this.status='In Cart';
     createOrder({status:this.status,amount:this.calsum,prodId:this.ParentMessageId,quant:this.count}).then(result=>{
      console.log(result);
      this.orders=result;
      this.orderId=this.orders.Id;
      console.log(this.orderId);
      this.navigateToOrderPage();
     })
     .catch(error => {
      this.error = error;
       console.log(this.error);
      });
  }  


    navigateToOrderPage(event) {
      console.log("Checkout done!!!")
      let compDefinition = {
          componentDef:"c:orderPage",
          attributes: {
            Name : this.ParentMessageName,
            Image: this.ParentMessageImage, 
            Price: this.ParentMessagePrice,  
            subtotal: this.calsum,
            Count: this.count,
            total:this.calsum+10,
            prodId:this.ParentMessageId,
            OrderId:this.orderId
          }
      };
      // Base64 encode the compDefinition JS object
      let encodedCompDef = btoa(JSON.stringify(compDefinition));
    //  console.log('eventId:'+event.target.dataset.recordId);
      this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
        url: "/one/one.app#" + encodedCompDef           
      },
  });
}

     remove1(){
        this.checkButton = true;
        this.ParentMessageName = '';
        this.ParentMessageImage='';
        this.ParentMessagePrice='';
        this.calsum='';
        this.count=1;
     }

}