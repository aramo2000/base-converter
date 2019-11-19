function convertToBinary(n) {
    let result = "" ;
    while( n >= 2 ) {
        if( n % 2 === 0 ) {
            result = "0" + result;
            n = n/2 ;
        } else {
            result = "1" + result;
            n = Math.floor(n/2) ;
        }
    } result = "1" + result;
    return result;
}

function convertToHexa(m) {
    let result1 = "" ;
    while( m >= 1 ) {
        switch(m % 16) {
            case (0) :
            result1 = "0" + result1;
            m = Math.floor(m/16) ;
            break;
            case (1) :
            result1 = "1" + result1;
            m = Math.floor(m/16) ;
            break;
            case (2) :
            result1 = "2" + result1;
            m = Math.floor(m/16) ;
            break;
            case (3) :
            result1 = "3" + result1;
            m = Math.floor(m/16) ;
            break;
            case (4) :
            result1 = "4" + result1;
            m = Math.floor(m/16) ;
            break;
            case (5) :
            result1 = "5" + result1;
            m = Math.floor(m/16) ;
            break;
            case (6) :
            result1 = "6" + result1;
            m = Math.floor(m/16) ;
            break;
            case (7) :
            result1 = "7" + result1;
            m = Math.floor(m/16) ;
            break;
            case (8) :
            result1 = "8" + result1;
            m = Math.floor(m/16) ;
            break;
            case (9) :
            result1 = "9" + result1;
            m = Math.floor(m/16) ;
            break;
            case (10) :
            result1 = "A" + result1;
            m = Math.floor(m/16) ;
            break;
            case (11) :
            result1 = "B" + result1;
            m = Math.floor(m/16) ;
            break;
            case (12) :
            result1 = "C" + result1;
            m = Math.floor(m/16) ;
            break;
            case (13) :
            result1 = "D" + result1;
            m = Math.floor(m/16) ;
            break;
            case (14) :
            result1 = "E" + result1;
            m = Math.floor(m/16) ;
            break;
            case (15) :
            result1 = "F" + result1;
            m = Math.floor(m/16) ;
            break;   
        }
    }
    return result1;
}

module.exports = {
    convertToBinary,
    convertToHexa,
}