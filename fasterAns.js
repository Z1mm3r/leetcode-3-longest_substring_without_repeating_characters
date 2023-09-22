var lengthOfLongestSubstring = function(s) {
    
    //We can also simply use Arrays for faster performance, smaller storage usage.

    //Under length 1 ? return
    if(s.length <= 1){
        return s.length;
    }

    //Initialize values
    let letters = [];
    let max = 0;

    for(let counter = 0; counter < s.length; counter++){
       
        //Check for matches
        let match = letters.indexOf(s[counter]);
     
        //If letter is not in the array.
        if(match != -1){
            //we may need to update our max found so far, since we are moving our lefthand side. 
            if(letters.length > max){
                max = letters.length;
            }
            //update array to remove everything up to and including matching char
            letters.splice(0, match + 1);
        }
        //add current char to array.
        letters.push(s[counter]);
    }

    //is the final substring the longest?
    if(letters.length> max){
        max = letters.length;
    }

    return max;
    
};
