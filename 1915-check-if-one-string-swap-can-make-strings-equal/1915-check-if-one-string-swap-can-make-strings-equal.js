/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1===s2) return true;

    let diff=[];

for(let i=0;i<s1.length;i++){
    if(s1[i] !== s2[i]){
        diff.push(i);
    }
}

if(diff.length!==2) return false;

 let[i,j]=diff;
 return s1[i]=== s2[j] && s1[j] ===s2[i];

    
};