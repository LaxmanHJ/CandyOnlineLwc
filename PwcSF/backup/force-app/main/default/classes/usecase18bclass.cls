public class usecase18bclass {
    
    @AuraEnabled
    public static string addCon(String cfname,String clname,String cemail,String accId){
        string cId;
        try{
            Contact c = new Contact();
            c.FirstName = cfname;
            c.LastName = clname;
            c.Email = cemail;
            c.AccountId = accId;
            
            insert c;
            cId = c.Id;
        }catch(Exception e){
            
        }
         return cId;
        
    }
   

}