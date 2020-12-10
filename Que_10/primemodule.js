exports.myprime=function(a){
    for(var i=2;i<=a/2;i++){
        if(a%i==0){
            console.log(a+ " " +i);
            return false;
        }
    }
        return true;
    
}