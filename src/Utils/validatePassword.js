 export const validatePassword = (rule, value, callback) => {
    if (value.length < 6) {
        callback('Password cannot be less than 6 characters')
    } else {
        callback()
    }
}
