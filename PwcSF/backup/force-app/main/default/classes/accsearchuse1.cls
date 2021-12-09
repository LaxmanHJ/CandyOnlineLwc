public class accsearchuse1 {
    public String search{get;set;}
    public List<Account>res{get;set;}
    public List<Opportunity>opplist{get;set;}
    public List<Contact>conlist{get;set;}
    public List<Case>caselist{get;set;}
    public List<Lead>leadlist{get;set;}
    public List<Integer> count{get;set;}
    Public Integer sum{get;set;}
    Public Integer sum1{get;set;}
    Public Integer sum2{get;set;}
    Public Integer sum3{get;set;}
    Public String firstname{get;set;}
    Public String lastname{get;set;}
    Public String email{get;set;}
    Public String phone{get;set;}


    Integer count1=0;
    
    public accsearchuse1(){
        
        res=new List<Account>();
        opplist=new List<Opportunity>();
        conlist=new List<Contact>();
        caselist=new List<Case>();
        leadlist=new List<Lead>();
    }
    
    public void showdetails(){
        res=new List<Account>();
       // opplist=new List<Opportunity>();
        //opplist=[select name from Opportunity];
        conlist=new List<Contact>();
        res=[select name,(select id,firstname,lastname,email,phone from Contacts) from Account where name=:search];
        for(Account acc:res)
        {
            
            List<Contact>conlist=acc.contacts;
            sum=conlist.size();

            for(Contact con:acc.contacts){
                firstname = con.firstname;
                lastname = con.lastname;
                email = con.Email;
                phone = con.Phone;
            }
            
        }
        
       // update res;
       opplist=new List<Opportunity>();
       res=[select name,(select id from Opportunities) from Account where Account.name=:search];
        for(Account acc1:res)
        {
            List<Opportunity>opplist=acc1.Opportunities;
            sum1=opplist.size();
            
        }
        
        caselist=new List<Case>();
       res=[select name,(select id from cases) from Account where name=:search];
        for(Account acc2:res)
        {
            List<case>caselist=acc2.cases;
            sum2=caselist.size();
            
        }
        
    }
   


}