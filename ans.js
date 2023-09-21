var lengthOfLongestSubstring = function(s) {
    
    if(s.length <= 1){
        return s.length;
    }

    let letters = {};
    let left = 0;
    let max = 0;

    for(let counter = 0; counter < s.length; counter++){
        //If we don't have the letter yet.
        if(letters[s[counter]] == undefined){
             letters[s[counter]] = counter;
        }

        //If letter has been passed
        else{
            //is its last occurence outside our bounds? Keep going.
            if(letters[s[counter]] < left){
                letters[s[counter]] = counter;
            }
            //otherwise update our lefthand side to one past its occurence.
            else{
                //we may need to update our max found so far, since we are moving our lefthand side. 
                if(counter - left > max){
                    max = counter - left;
                }

                left = letters[s[counter]] + 1;
                letters[s[counter]] = counter;
            }
        }
    }

    //is the final substring the longest?
    if(s.length - left > max){
        max = s.length - left;
    }

    return max;
    
};
