function palindrome(str) {
    var newStr = str.replace(/ /g, "").replace(/[^\w\s]|_/g, '').toLowerCase();
    // console.log(newStr);
    var reversedStr = newStr.split('').reverse().join('');
    if (newStr === reversedStr) {
      console.log("It's a palindrome!")
    } else {
      console.log("Pitty, it's not a palindrome..");
    }
  }
  
   palindrome('Was it a car or a cat I saw?');