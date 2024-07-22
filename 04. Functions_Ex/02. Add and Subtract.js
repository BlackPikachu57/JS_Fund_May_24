function main(a,b,c){
    function sum(a,b){
        return a + b;
    }
    
    function subtract(s,c){
        return s - c;
    }
    console.log(subtract(sum(a,b),c));
}

main(23,6,10)