global class Cron implements Schedulable{

    global void execute(SchedulableContext SC)
    {
        deleteopp();
    }

    public static void deleteopp() {
            delete [SELECT Id FROM Opportunity WHERE StageName LIKE 'Closed Lost']; 
    }
}