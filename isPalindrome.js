const isPalindrome = word => {
    let k = word.length-1

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[k]) {
            return false
        } else {
            k--
        }
    }
    return true
}

console.log(isPalindrome(`a`))