export const validate = data => {
    const errors = {};
    // Username Validation
    if(!data.name.trim()){
        errors.name = "Username required"
    }else{
        delete errors.name
    }
    // Email Validation
    if(!data.email){
        errors.email = "Email required"
    }else if(!/^\S+@\S+\.\S+$/.test(data.email)){
        errors.email = "Email address is invalid"
    }else{
        delete errors.email
    }
    // Password Validation
    if(!data.password){
        errors.password = "password is required"
    }else if (data.password.length <6){
        errors.password = "passsword need to be 6 character or more"
    }else{
        delete errors.password
    }
    // ConfirmPassword Validation
    if(!data.confirmPassword){
        errors.confirmPassword = "confirm the password"
    }else if (data.confirmPassword !== data.password){
        errors.confirmPassword = "password do not match"
    }else {
        delete errors.confirmPassword
    }
    // isAccepted Validation
    if(data.isAccepted){
        delete errors.isAccepted
    }else{
        errors.isAccepted = "Accept our requlations"
    }
    return errors;
}
