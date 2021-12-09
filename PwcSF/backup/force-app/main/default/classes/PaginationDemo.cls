public class PaginationDemo {
    @AuraEnabled
    public static ContactDataTableWrapper getContactData(Decimal pageNumber, Decimal pageSize,String searchvalue) {
         
        Integer pSize = (Integer)pageSize;
        Integer pNumber = (Integer)pageNumber;
         
        //Offset for SOQL
        Integer offset = (pNumber - 1) * pSize;
        String name =  + searchvalue + '%';

        //Total Records
        Integer totalRecords = [SELECT COUNT()  FROM Contact
                             where (firstname like :name) or (lastname like :name)];
        Integer recordEnd = pSize * pNumber;
 
        //Instance of Contact DataTable Wrapper Class
        ContactDataTableWrapper objDT =  new ContactDataTableWrapper();  
        objDT.pageSize = pSize;
        objDT.pageNumber = pNumber;
        objDT.recordStart = offset + 1;
        objDT.searchvalue = name;
        objDT.recordEnd = totalRecords >= recordEnd ? recordEnd : totalRecords;
        objDT.totalRecords = totalRecords;
        objDT.contactList = [SELECT Id, Name, Title,Phone, Email FROM Contact
                             where (firstname like :name) or (lastname like :name)
                             order BY Name
 							 LIMIT :pSize OFFSET :offset];
        return objDT;
    }
     
    //Wrapper Class For Contact DataTable  
    public class ContactDataTableWrapper {
        @AuraEnabled
        public Integer pageSize {get;set;}
        @AuraEnabled
        public Integer pageNumber {get;set;}
        @AuraEnabled
        public Integer totalRecords {get;set;}
         @AuraEnabled
        public String searchvalue {get;set;}
        @AuraEnabled
        public Integer recordStart {get;set;}
        @AuraEnabled
        public Integer recordEnd {get;set;}
        @AuraEnabled
        public List<Contact> contactList {get;set;}
    }


}