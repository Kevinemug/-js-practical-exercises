const validatePhoneNumber =phoneNumber =>{
    const regex = /^\d{10}$|^\d{3}-\d{3}-\d{4}$|^\d{3} \d{3} \d{4}$/;
      return regex.test(phoneNumber);
  }
  

  const phoneNumbers = ["1234567890", "123-456-7890", "123 456 7890", "123-45-67890", "1234-567890"];
  for (const phoneNumber of phoneNumbers) {
    console.log(validatePhoneNumber(phoneNumber));
  }
  