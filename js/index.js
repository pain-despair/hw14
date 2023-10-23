function generateKey(length, characters) {
    let result = ''
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}
let key = generateKey(7, 'sawrogfiha3')
console.log(key);
