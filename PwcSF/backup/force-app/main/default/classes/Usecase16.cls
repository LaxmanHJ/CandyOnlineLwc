public class Usecase16 {
    @AuraEnabled
    public static String insertAccount(String cName, String cEmail, String aName, String aIndustry, String aPhn){
        String accId;
        
        try{
            Account a = new Account();
            a.Name = aName;
            a.Industry = aIndustry;
            a.Phone = aPhn;
            insert a;   
            
            Contact c = new Contact(); 
            c.LastName = cName;
            c.Email = cEmail;
            c.accountId = a.Id;
            insert c;
            accId = a.Id;
            
        } catch(Exception e){
            accId = e.getMessage();
        }        
        return accId;
    }
}