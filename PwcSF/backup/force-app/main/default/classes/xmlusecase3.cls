public class xmlusecase3 {
        public String xmlString {get; set;}
        public List<Account> accList {get; set;}
    public xmlusecase3(){
        /*
<Accounts>
<Account Name="GenePoint"  "Phone ="(650) 867-3450"/>
<Account Name="United Oil "  "Phone ="+44 191 4956203"/>    
</Accounts>
*/
        
        accList = [Select Name, (Select lastName, Email From contacts) From Account
                                 Where Id IN (Select accountId From Contact) LIMIT 2];
        
        Dom.Document doc = new Dom.Document();
        
        //add root element       
        Dom.XmlNode root = doc.createRootElement('Accounts', null, null);  
        
        //adding child elements
        for(Account a: accList){
            Dom.XmlNode acc = root.addChildElement('Account', null, null);            
            acc.setAttribute('Name', a.Name);
            acc.setAttribute('count','2');
            for(contact c:a.contacts){
                    Dom.XmlNode con = acc.addChildElement('contact', null, null);  
                    con.setAttribute('lastname', c.lastname);
                    con.setAttribute('email', c.Email);
            }

            
        }
        xmlString = doc.toXmlString();
    }
    
}