const fibonacci = function(num) {
    num = Number(num)

    if(num < 0)
        return "OOPS"
    if(num === 0)
        return 0
    else if(num === 1){
        return 1
    }else{
        let first = 0
        let second = 1
        let third

        for(let i = 0; i < num - 1; i++){
            third = first + second
            first = second
            second = third
        }
        return third
    }
};

// Do not edit below this line
module.exports = fibonacci;
