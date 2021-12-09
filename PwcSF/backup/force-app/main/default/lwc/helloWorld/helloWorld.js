import { LightningElement } from 'lwc';

/* export default class HelloConditionalRendering extends LightningElement {
    areDetailsVisible = false;
    contacts = [
      {
          Id: 1,
          Name: 'Amy Taylor',
          Title: 'VP of Engineering',
      },
      {
          Id: 2,
          Name: 'Michael Jones',
          Title: 'VP of Sales',
      },
      {
          Id: 3,
          Name: 'Jennifer Wu',
          Title: 'CEO',
      },
  ];
    handleChange(event) {
        this.areDetailsVisible = event.target.checked;
        
    }
} 
*/

export default class HelloForEach extends LightningElement {
  areDetailsVisible = false;

  contacts = [
      {
          Id: 1,
          Name: 'Banglore',
      },
      {
          Id: 2,
          Name: 'Tokyo',
      },
      {
          Id: 3,
          Name: 'Berlin',
      },
  ];
  handleChange(event) {
    this.areDetailsVisible = event.target.checked;
    
}
}