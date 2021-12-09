public class BoxClass {
       public string endpoint ;        
       public string client_Id ;
       public string clientSecret;
       public string boxcode{get;set;}

    
    public BoxClass(){
         endpoint ='https://account.box.com/api/oauth2/authorize';        
         client_Id = 'zqo6id3wq8tidoec00aaoyjjdt7tzj54';
         clientSecret = 'W0YewcrzS8aFyMw4O0sK4sxztZ6JZQnu';
    }
    
    public PageReference requestcode(){
        endpoint = endpoint + '?response_type=code&client_id='+client_Id+'&redirect_url=https://ap16.salesforce.com/apex/BoxApiDemo';
        PageReference pageref = new PageReference(endpoint);
        return pageref;
    }
    
      public void getCodeFromUrl(){
        boxcode = ApexPages.currentPage().getParameters().get('Code');
    }
}