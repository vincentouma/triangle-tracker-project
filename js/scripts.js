function triangle(){
    var a = document.getElementById("a").value;
    var b= document.getElementById("b").value
    var c = document.getElementById("c").value;

    if(  a == "" || b=="" || c==""){
        alert("Enter a number");

        return
    }
    else if (a<=0 || b<=0 || c<=0) {
        alert ("Not a triangle");
        return
    }
    
    if (a===b && b===c && c===a) {
        alert("equilateral");
    }
    
    else if (a===b || b===c || c===a) {
        alert ("isosceles");
    }
    
    
    else if (a!==b && b!==c && c!==a) {
        alert ("scalene")
    
    }
    else if (a+b<=c || b+C <=a || c+a<=b){
        alertt("triangle cannot be formed");
        
    }
    else if (a=0, b=0, c=0) {
        alert ("not a triangle");
    }
    else
    alert("please ckeck your values")
    }