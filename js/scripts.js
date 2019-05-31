function triangle(){
    var a = document.getElementById("a").value;
    var b= document.getElementById("b").value
    var c = document.getElementById("c").value;
    
    if (a===b && b===c && c===a) {
        alert("equilateral");
    }
    
    else if (a===b || b===c || c===a) {
        alert ("isoscelese");
    }
    
    
    else if (a!==b && b!==c && c!==a) {
        alert ("scalene")
    
    }
    else if (a+b<=c || b+C <=a || c+a<=b){
        alertt("triangle cannot be formed");
    }
    else
    alert("please ckeck your values")
    }