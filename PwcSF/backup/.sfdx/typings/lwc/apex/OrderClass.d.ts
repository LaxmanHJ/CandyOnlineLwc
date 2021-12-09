declare module "@salesforce/apex/OrderClass.createContact" {
  export default function createContact(param: {con: any}): Promise<any>;
}
declare module "@salesforce/apex/OrderClass.updateOrder" {
  export default function updateOrder(param: {orderId: any, contactId: any, address: any, amount: any}): Promise<any>;
}
declare module "@salesforce/apex/OrderClass.getContact" {
  export default function getContact(): Promise<any>;
}
