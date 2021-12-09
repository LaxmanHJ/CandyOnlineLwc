@isTest 
class AccountContactProcessTest { 
    @isTest 
    static void testAccInsert(){ 
        AccountContactProcess acp = new AccountContactProcess(); 
        acp.InsertAccount('test Account 1'); 
        
        Account a = [Select Name From Account LIMIT 1]; 
        System.assertEquals('test Account 1', a.Name); 
    } 
    
    @isTest 
    static void getAccIndustry(){ 
        //test data 
        List<account> accs = new List<account>(); 
        for(Integer i = 1; i < 11; i++ ){ 
            Account a1 = new Account(Name= 'test Account ' + i, Industry = 'Energy'); 
            accs.add(a1); 
        } 
        for(Integer i = 11; i < 16; i++ ){ 
            Account a1 = new Account(Name= 'test Account ' + i, Industry = 'Apparel'); 
            accs.add(a1); 
        } 
        Account a1 = new Account(Name= 'test Account ', Industry = 'Technology'); 
        accs.add(a1); 
        insert accs; 
        
        AccountContactProcess acp = new AccountContactProcess();
        List<Account> accounts1 = acp.getAccountDetails('Energy');       
        System.assertEquals(10, accounts1.size());
        List<Account> accounts2 = acp.getAccountDetails('Apparel');       
        System.assertEquals(5, accounts2.size());
        
        List<Account> accounts3 = acp.getAccountDetails('Technology');       
        System.assertEquals(1, accounts3.size());
        
   }  
        @istest
        static void testgetcontacts(){ 
            //test data 
            List<contact> cons = new List<contact>(); 
            List<account> accs = new List<account>(); 
            
            for(Integer i = 1; i < 11; i++ ){ 
                Account a = new Account();
                a.name = 'Test'+i;
                accs.add(a); 
            }
            insert accs;
            for(Integer i = 1; i < 11; i++ ){ 
                contact c1 = new contact(lastname = 'testlastname'+i,accountID = accs[0].id);
                cons.add(c1);
                
            }
            insert cons;
        AccountContactProcess acp = new AccountContactProcess();
         List<contact> conlret = acp.getcontacts('Test');
         system.assertEquals(10, conlret.size());
        }        
    }