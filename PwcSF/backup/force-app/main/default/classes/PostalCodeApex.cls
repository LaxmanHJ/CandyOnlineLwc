public class PostalCodeApex {
    public string Message;
    public string Status;
    public List<PostOffice> PostOffice;
    
    public class PostOffice{
        public string Name;
        public string Description;
        public string BranchType;
        public string DeliveryStatus;
        public string Circle;
        public string District;
        public string Division;
        public string Region;
        public string Block;
        public string State;
        public string Country;
        public string Pincode;

    }

    public static void getPostalDetails(){
        Http hp = new Http();
        string resp;
      //po;
       
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://api.postalpincode.in/pincode/'+'500018');
        request.setMethod('GET');
       
        HttpResponse response = hp.send(request);
        system.debug(response.getBody());
        
        resp = response.getBody();
        JSONParser parser = JSON.createParser(resp);
        parser.nextToken();
        
		//List<PostalCodeApex> po =(List<PostalCodeApex>) system.JSON.deserialize(resp, List<PostalCodeApex>.class);
        List<PostalCodeApex> poList =(List<PostalCodeApex>)parser.readValueAs(List<PostalCodeApex>.class);
         //PostalCodeApex po =(PostalCodeApex)parser.readValueAs(PostalCodeApex.class);

        for(PostalCodeApex pp:poList){
            String name = pp.message;
            

        }
        
      
    }
    
}