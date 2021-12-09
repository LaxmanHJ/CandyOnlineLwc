public class xmlusecase1 {
    public String xmlString {get; set;}

    public xmlusecase1(){
 
        //Document Class is used to build/parse the XML String        
        // Step 1: create instance of document class belong to DOM namespace
        List<Account> accList = [Select Name, Phone From Account Where Phone != NULL LIMIT 3];

        Dom.Document doc   = new Dom.Document();
        Dom.XmlNode root = doc.createRootElement('Accounts',null,null);
        
        for(account a:accList){
            Dom.XmlNode acc = root.addChildElement('Account',null,null);
            Dom.XmlNode lname = acc.addChildElement('Name',null,null);
            lname.addTextNode(a.name);
            Dom.XmlNode lphone = acc.addChildElement ('Phone',null,null);
            lphone.addTextNode(a.phone);
        }
        
        xmlString  = doc.toXmlString();    
        //system.debug('amlstring'+xmlString);
    }
}