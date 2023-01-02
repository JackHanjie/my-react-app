const changeToNum = (n) => {
    let num = ["一", "二", "三", "四", "五", "六", "日"]
    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        if(n == 1){
            return element
        }
        if(n == 2){
            return num[n-1]
        }
        if(n == 3){
            return num[n-1]
        }
        if(n == 4){
            return num[n-1]
        }
        if(n == 5){
            return num[n-1]
        }
        if(n == 6){
            return num[n-1]
        }
        if(n == 7){
            return num[n-1]
        }
        else {
            return "hanjie"
        }
        
    }

}

export {changeToNum}