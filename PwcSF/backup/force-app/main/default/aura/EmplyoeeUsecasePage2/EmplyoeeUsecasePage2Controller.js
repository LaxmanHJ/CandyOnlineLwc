({
    getvaluefromApplicationEvent: function(cmp,event){
        var showname= event.getParam("pass_name");
        var showsalary= event.getParam("pass_salary");
        var showcity= event.getParam("pass_city");
        var showsubmit= event.getParam("pass_submit");
        if(showcity=="chennai"){
            showsalary  = showsalary + 1000;
        }
        
        else if(showcity=="Banglore"){
            showsalary  = showsalary + 2000;

        }
        cmp.set("v.Get_name",showname);  
        cmp.set("v.Get_salary",showsalary);
        cmp.set("v.Get_city",showcity);
         cmp.set("v.Get_submit",showsubmit);

        console.log(showsubmit);// showresultvalue and showResultValue are also treat as differnt 
    },
})