public with sharing class searchContacts {
        @AuraEnabled(cacheable=true)
        public static List<Contact> getContacts(String searchText){
            searchText = '%'+searchText+'%';
            return [Select Id,Name,Email,Phone,Title 
                    From Contact 
                    where (firstname like :searchText) or (lastname like :searchText)];        
        }
    }