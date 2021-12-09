@isTest
public class AcoounttriggerTest {
    @isTest
    static void actr(){
        Account acc = new Account();
        acc.Name ='Lxmn';
        insert acc;
        
        opportunity op = new opportunity();
        op.name = acc.Name;
        op.AccountId = acc.id;
        op.StageName = 'qualification';
        op.CloseDate = system.today();
        insert op;
        
        
        Account a =[select name from account];
        opportunity o = [select name from opportunity];
        system.assertEquals(o.Name,a.name);

    }
/*    @isTest
    static void test{
        
    }
  */  
    
}