const generatePassword = (long) => {
  let generalPass = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  
  let newPass = '';
  for(let i = 0 ; i < long ; i++) {
    let index = Math.floor(Math.random() * (generalPass.length - 1) + 1);
    
    let newChar = generalPass[index];
    console.log(newChar); //siiiii
    // y ahora???
    newPass += newChar 
  };
  
  return newPass;
};

const password = generatePassword(5);
console.log(`Generated password: ${password}`);