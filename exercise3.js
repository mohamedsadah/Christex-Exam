const testCoercion = (a,b) => {
    b+="";
    console.log(`LooseEqual: ${a==b}, StrictEqual: ${a===b}`);

}


testCoercion(0,"");