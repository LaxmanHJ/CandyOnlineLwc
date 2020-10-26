public with sharing class searchCon {
    @AuraEnabled(Cacheable = true)
    public static list<Contact> retriveCons(String strConName) {
        strConName = '%' + strConName + '%';
        list<Contact> lstCons = [SELECT  Id, Name, Phone, Email,Title
         FROM Contact
         WHERE (LastName LIKE :strConName) or (FirstName LIKE :strConName)];

        if(lstCons.isEmpty()) {
            throw new AuraHandledException('No Record Found..');
        }
        return lstCons; 
    }
    @AuraEnabled(Cacheable = true)
    public static list<Contact> retriveConsDesc(String strConName) {
        strConName = '%' + strConName + '%';
        list<Contact> lstConsdesc = [SELECT  Id, Name, Phone, Email,Title
         FROM Contact
         WHERE (LastName LIKE :strConName) or (FirstName LIKE :strConName) 
         ORDER BY Name DESC];


        if(lstConsdesc.isEmpty()) {
            throw new AuraHandledException('No Record Found..');
        }
        return lstConsdesc; 
    }
    @AuraEnabled(Cacheable = true)
    public static list<Contact> retriveConsAsc(String strConName) {
        strConName = '%' + strConName + '%';
        list<Contact> lstConsAsc = [SELECT  Id, Name, Phone, Email,Title
         FROM Contact
         WHERE (LastName LIKE :strConName) or (FirstName LIKE :strConName) 
         ORDER BY Name];

        if(lstConsAsc.isEmpty()) {
            throw new AuraHandledException('No Record Found..');
        }
        return lstConsAsc; 
    }
}