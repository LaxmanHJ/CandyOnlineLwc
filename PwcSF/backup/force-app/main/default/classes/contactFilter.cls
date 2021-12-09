public class contactFilter {
    @AuraEnabled
    public static List<Contact> findByName(String searchKey) {
        String name =  + searchKey + '%';
        return [SELECT id, name,title,phone,email FROM Contact WHERE (firstname LIKE :name) or (lastname Like :name)];
    }
}