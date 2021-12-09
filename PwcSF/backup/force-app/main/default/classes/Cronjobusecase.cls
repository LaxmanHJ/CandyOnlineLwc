public with sharing class Cronjobusecase {
    public string TimeSet{get; set;}
    
    public void schedule(){
        Cron cn = new Cron();
        String job = System.schedule('Opp delete', TimeSet, cn); 
    }  


}