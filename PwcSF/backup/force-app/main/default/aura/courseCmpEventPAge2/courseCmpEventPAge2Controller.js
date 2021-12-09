({
    getvaluefromApplicationEvent: function(cmp,event){
        var showname= event.getParam("pass_name");
        if(showname=="chennai"){
            cmp.set("v.isTrue",true);
            console.log("hii")
        }
        
        else {
			cmp.set("v.isTrue",false)
        }
        cmp.set("v.Get_name",showname);  

        console.log("Here name s",showname);// showresultvalue and showResultValue are also treat as differnt 
    }
})