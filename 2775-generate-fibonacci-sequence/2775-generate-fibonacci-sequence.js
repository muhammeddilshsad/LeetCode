/**
 * @return {Generator<number>}
 */
var fibGenerator = function() {
    let a=0,b=1;
    return {
        next:function(){
            let current=a;
            a= b;
            b= current +b;
            return {value:current};

        }
    }
    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */