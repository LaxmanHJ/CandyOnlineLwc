public class SelectOptionClass {
    public String selectedOption {get; set;}
    public List<SelectOption> options {get; set;}
    public List<contact> conlist {get;set;}
   
    
    public SelectOptionClass(){
        List<String>  cities = new List<String>{'Chennai','Pune','Banglr','Delhi'};
            
        options = new List<SelectOption>();
       // SelectOption option1 = new SelectOption('Chennai','Chennai');
       // SelectOption option2 = new SelectOption('Pune','Pune');
       // options.add(option1);
       // options.add(option2);
        for(String s: cities){
            SelectOption option1 = new SelectOption(s, s);
			options.add(option1);
        }
    Account a = new Account();
    a.customerId__c = 'ETSFDsmeet';
    a.Name = 'sfdcmeet';
    }
    
    
    public void callApex(){
    }
}