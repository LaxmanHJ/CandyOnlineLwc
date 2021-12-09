public class Usecase1controller {
    Public Integer sno{get;set;}
    public List<Opportunity>oppList{get;set;}
    public List<Contact>conList{get;set;}
    public List<Case>caseList{get;set;}
    public Id contactID {get;set;}
    Public Integer contacts{get;set;}
    Public Integer opportunities{get;set;}
    Public Integer cases{get;set;}
    public String accName{get;set;}

    public void getRelatedData(){
        sno =1 ;
        contacts = [select count() From Contact where account.name = :accName];
        opportunities = [select count() From opportunity where account.name = :accName];
        cases = [select count() From Case where account.name = :accName];

    }
    public PageReference refresh(){
        PageReference pageRef = new PageReference('/apex/Usecase1vf');
        pageRef.setRedirect(true);
        return pageRef;
    }
    
    public void getContacts(){
        conList = [select Id,firstname,lastname,Email,phone from Contact where account.name = :accName];
        
    }
     public void getOpp(){
        oppList = [select name,stagename,amount from Opportunity where account.name = :accName];
        
    }
     public void getCases(){
        caseList = [select casenumber,subject,status from Case where account.name = :accName];
        
    }
     public PageReference goToContact(){
        PageReference pf = new PageReference('https://ap16.salesforce.com/'+contactID);
        pf.setRedirect(true);
        return pf;
    }
    
    
}