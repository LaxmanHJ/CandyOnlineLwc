public class accsearchuse2 {
    public String search{get;set;}
    public List<Account>res{get;set;}
    public List<Account>res1{get;set;}
    public List<Account>res2{get;set;}
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
    public String Name{get;set;}
    
    public String StageName{get;set;}
    public Decimal Amount{get;set;}
    
    public String Type{get;set;}
    public String Status{get;set;}
    public String Origin{get;set;}
    
    public List<Contact>condemo{get;set;}

    Integer count1=0;
    
    public accsearchuse2(){
        
        res=new List<Account>();
        res1=new List<Account>();
        res2=new List<Account>();
        opplist=new List<Opportunity>();
        conlist=new List<Contact>();
        caselist=new List<Case>();
        leadlist=new List<Lead>();
        condemo = new List<Contact>();
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
       res1=[select name,(select id,Name,StageName,Amount from Opportunities) from Account where Account.name=:search];
        for(Account acc1:res1)
        {
            List<Opportunity>opplist=acc1.Opportunities;
            sum1=opplist.size();
            
            for(Opportunity op: acc1.Opportunities)
            {
                Name=op.Name;
                StageName=op.StageName;
                Amount=op.Amount;
            }
            
        }
        
       caselist=new List<Case>();
       res2=[select name,(select id,Type,Status,Origin from cases) from Account where name=:search];
        for(Account acc2:res2)
        {
            List<case>caselist=acc2.cases;
            sum2=caselist.size();
            for(Case c : acc2.cases)
            {
                Type=c.Type;
                Status=c.Status;
                Origin=c.Origin;
            }
            
        }
        
    }
    
    
    public void condetails(){
        condemo=[select id,firstname,lastname,email,phone from Contact LIMIT:sum];
    }
  

}