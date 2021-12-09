trigger isPrimaryFieldUpdate on Contact (before update,before insert) {
  if(trigger.isBefore && trigger.isUpdate ){
    List<contact> conlist = new List<contact>();
    List<contact> conlist2 = new List<contact>();

    
    for(Contact con: Trigger.old) {
       
        // condition to check the old value and new value
        contact newcon = trigger.newMap.get(con.Id);
        if(newcon.isPrimary__c == true && con.isPrimary__c == true){
           //con.isPrimary__c = false;
           //updates.add(new Opportunity(Id = opp.Id, Opp.OppStatus__c = 'Won'));

            conlist.add(new Contact(Id = con.id,isPrimary__c = false));
        }
    }
     
    // DML to insert the Invoice List in SFDC
    if(conlist.size()>0){ 
        insert conlist;
	system.debug('Hello');
    }

     }
}
/*
if(trigger.isAfter && trigger.isUpdate){
List<Contact> contactList = new List<Contact>();
for(Account acct : trigger.new){
Account oldAcct = trigger.oldMap.get(acct.Id);
if(acct.Create_Contact__c == true && oldAcct.Create_Contact__c == false){
Contact cont = new Contact(
lastName = 'lastName',
firstName = 'firstName',
AccountId = acct.Id
);
contactList.add(cont);
}
}
if(!contactList.isEmpty()){
insert contactList;
}
for(Contact contacts:conlist){
             contacts.isPrimary__c = false; 
             conlist2.add(contacts);
         }
*/