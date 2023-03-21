function generateOTP() {
    let OTP = "";
    //Generating a 6-digit OTP
    for (let i = 1; i <= 6; i++) {
        OTP += Math.floor(Math.random() * 10);
    }
    return OTP;
}
// call the function to generate a 6-digit OTP
console.log(generateOTP()); 
console.log(generateOTP()); 
console.log(generateOTP()); 
console.log(generateOTP()); 
console.log(generateOTP()); 
