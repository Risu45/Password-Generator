import React from 'react';

function Passwordcheck(props) {
  const {checkboxData , setCheckboxData , generatePassword} = props;
  

  const handleCheckboxChange = (index) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state;
    setCheckboxData(updatedCheckboxData);
  };

  // const generatePassword = () => {
  //   const selectedOptions = checkboxData.filter((checkbox) => checkbox.state);

  //   if (selectedOptions.length === 0) {
  //     // Handle the case where no option is selected
  //     return 'Select at least one option';
  //   }

    // Your password generation logic here
    // For now, let's assume you want to return the number of selected options
  //   return `Generated Password: ${selectedOptions.length} options selected`;
  // };

  return (
    <div className='checkboxes'>
      {checkboxData.map((checkbox, index) => (
        <div key={index}>
          <input
            type='checkbox'
            onChange={() => handleCheckboxChange(index)}
            checked={checkbox.state}
          />
          <label htmlFor=''>{checkbox.title}</label>
        </div>
      ))}
      <button className='btn btn-primary' onClick={() => generatePassword()}>
        Generate
      </button>
    </div>
  );
}

export default Passwordcheck;
