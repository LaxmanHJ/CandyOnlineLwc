public class DisplayAccountDtlController {

    public list<account> acc {set;get;}  
    public string accname {set;get;}
   
    public void getdata(){
       acc = [select name, industry from account where name = :accname];      
    }
}