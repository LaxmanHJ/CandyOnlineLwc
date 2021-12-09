public with sharing class getcontacts {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getcontactList(string recordId) {
        return [SELECT Name,Title,Email,Phone FROM Contact where  Account.Id=:recordId];

    }
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getoppList(string recordId) {
        return [SELECT Name,StageName,amount FROM Opportunity where  Account.Id=:recordId];

    }
}