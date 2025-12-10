let email = 'delfisamperi@gmail.com';

const maskEmail = (email) => {
    //encontrar @
  let at = email.indexOf('@');
  //separar lo anterior a @ (que debe ser enmascarado)
  let userName = email.slice(0, at++);
  console.log(userName);
    //separar lo posterior a @ (que no debe ser enmascarado)
  let domain = email.slice(at-1, email.length);
  console.log(domain);

  //let masked = userName.replaceAll('*'); 
  // enmascarar todo menos la primera y ultima letra del userName
  email = userName[0] + '*'.repeat(userName.length -2) + userName[userName.length -1] + domain;
  return email;
};

console.log(maskEmail(email));


console.log(maskEmail("apple.pie@example.com"));    //"a*******e@example.com"
console.log(maskEmail("freecodecamp@example.com"));   // "f**********p@example.com"
console.log(maskEmail("info@test.dev"));   // "i**o@test.dev"
console.log(maskEmail("user@domain.org")); //  "u**r@domain.org"
