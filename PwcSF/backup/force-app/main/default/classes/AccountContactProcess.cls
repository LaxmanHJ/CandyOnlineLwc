public class AccountContactProcess {
    public void InsertAccount(string myname){
        account a = new account(name = myname);
        insert a;
    }
    
    public List<Account> getAccountDetails(string domain){
        List<Account> accounts = [select id from account where industry=:domain];
        return accounts;
    }
    
    public List<Contact> getcontacts(string accname){
        List<Contact> conlist = [select id from contact where Account.name = :accname];
        return conlist;
    }
    
}