public class LinkedInApi {
    public String linkedcode{get;set;}
    public String client_Id;
    public  String clientSecret;
    public String accesstoken{get;set;}
    public String jsonString;
    public String result{get;set;}
    
    public LinkedInApi(){
        client_Id='86xq6lxs6qlvba';
        clientSecret='cUfh7g1itqEWnPdd';
    }
    
    public PageReference getCode(){
        String endPoint='https://www.linkedin.com/oauth/v2/authorization';
        
        String scope='r_liteprofile%20r_emailaddress%20w_member_social';
        endPoint=endPoint+'?response_type=code&client_id='+client_Id+'&redirect_uri=https://laxmanjee-dev-ed--c.visualforce.com/apex/LinkedInApiweb&scope='+scope;
        
        PageReference pageRef=new PageReference(endPoint);
        return pageRef;
    }
    public void getcodeurl(){
        linkedcode=ApexPages.currentPage().getParameters().get('code');
    }
    
    public void getaccesstoken(){
        String url='https://www.linkedin.com/oauth/v2/accessToken';
        Http hp=new Http();
        // Create request object
        HttpRequest request =new HttpRequest();
        request.setEndpoint(url);
        request.setMethod('POST');
        
        String body='grant_type=authorization_code&code='+linkedcode;
        body=body+ '&redirect_uri=https://curious-hawk-mfygxc-dev-ed--c.visualforce.com/apex/linkedinapi2web';
        body = body+ '&client_id='+client_Id+'&client_secret='+clientSecret;
        request.setBody(body);
        
        HttpResponse response=hp.send(request);
        jsonString=response.getBody();
        
        System.JSONParser jp=JSON.createParser(jsonString);
        while(jp.nextToken()!=null){
            if(jp.getText()=='access_token'){
                jp.nextToken();
                accesstoken=jp.getText();
            }
        }
        System.debug(accesstoken);
        
    }
    public void getmemdetails(){
        String url='https://api.linkedin.com/v2/me';
        
        Http hp = new Http();
        HttpRequest request=new HttpRequest();
        request.setEndpoint(url);
        request.setMethod('GET');
        
        request.setHeader('Authorization','Bearer '+ accesstoken);
        
        HttpResponse response = hp.send(request);
        result=response.getBody();
    }
}