public class usecase2delet {
    public static void blockdeletecont(List<Contact> oldconList){
        List<Contact> conList=[select Id,name from Contact where AccountId IN (Select AccountId from Opportunity
                                                                               where Amount>1000000) and ID IN:oldconList];
        
        Map<Id,Contact> conMap = new Map<Id,Contact>(conList);
        
        for(Contact c : oldconList)
        {
            if(conMap.containsKey(c.Id))
            {
                c.addError('Cannot delete contact which has more than 1 million amount');
            }
        }
    }
    
}