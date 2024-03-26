const getpercentage=(a)=>{
    if(a){
    switch(a!=null)
        {
            case a>=40&&a<=50:
            console.log("buy a pen")
            break;
            case a>=50&&a<=60:
            console.log("buy a book")
            break;
            case a>=60&&a<=70:
            console.log("buy a bag")
            break;
            case a>=70&&a<=80:
            console.log("buy a watch")
            break;
            case a>=80&&a<=90:
            console.log("buy a mobile")
            break;
            case a>=90&&a<=100:
            console.group("buy a laptop")
            break;
            default:
            console.log("fail")


        }
}
}


getpercentage(42)


console.log("hello")


