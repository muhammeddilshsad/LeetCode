/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let clean=s.replace(/[^a-z0-9]/gi,'').toLowerCase();

    let reverse=clean.split('').reverse('').join('');

    return clean===reverse;
    
    
    
    
};