function isUSD(str) {
    let reg =/^\$[0-9]\d{0,3}(,\d{3})*(\.\d{1,2})$/;
        return reg.test(str);
 }

 console.log(isUSD('$0.23'))