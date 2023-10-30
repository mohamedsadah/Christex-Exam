const compareValues = (a,b) => {
    let First_value = a==b;
    let Second_value = a===b;

    console.log(StrictEquality(a,b));

    if (First_value){
        return "equal";
    }
    else {
        return "not Equal";
    }

    function StrictEquality(c,d){
        if (Second_value){
            return "Strictly equal";
        }
        else{
            return "not Equal";
        }
    }

    
}

console.log(compareValues(2, 2.1));