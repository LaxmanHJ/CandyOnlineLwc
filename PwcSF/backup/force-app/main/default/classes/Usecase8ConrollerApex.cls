public class Usecase8ConrollerApex {
      @AuraEnabled
    public static Account getacc(){
        Account a = new Account(Name='Brillio',Phone='596-1239',Industry='Energy');
        return a;
    } 
    
   /* @AuraEnabled
    public static List<Account> getAccountRecord()
    {
        return new List<Account>([Select id,Name,Phone,Industry from Account LIMIT 1]);
    }
    */
    
     @AuraEnabled
    public static List<Account> getentity(string inputval)
    {
        return  [Select Name,Phone,Industry from Account where Name='Edge Communications'];
 
        
    }
     @AuraEnabled
    public static List<Contact> getListOfcontacts(){
        return [SELECT Id, firstname,Lastname,Email FROM Contact LIMIT 10];
    }
    
    @AuraEnabled
    public static List<Contact> getListOfcontacts2(){
        return [SELECT Id, name,phone,Email,account.Name,title FROM Contact LIMIT 100];
    }
}