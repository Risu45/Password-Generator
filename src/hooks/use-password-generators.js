import { useState } from 'react';
const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const generatePassword = (checkboxData, desiredLength) => {
    let charset = '';
    let generatedPassword = '';

    const selectedOptions = checkboxData.filter((checkbox) => checkbox.state);

    if (selectedOptions.length === 0) {
      setErrorMessage('Select at least one option');
      setPassword('');
      return;
    }

    selectedOptions.forEach((option) => {
      switch (option.title) {
        case 'Numbers(0-9)':
          charset += '0123456789';
          break;
        case 'Small Letters (a-z)':
          charset += 'abcdefghijklmnopqrstuvwxyz';
          break;
        case 'Capital Letters(A-Z)':
          charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          break;
        case 'Special Characters(!#$%&@..)':
          charset += '!@#$%^&*()';
          break;
      }
    });

    for (let i = 0; i < desiredLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setErrorMessage('');
  };

  // Return the generatedPassword along with password and errorMessage
  return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;
