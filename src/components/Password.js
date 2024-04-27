import React , {useState} from 'react'
import Passwordinput from './Passwordinput'
import Passwordlength from './Passwordlength'
import Passwordcheck from './Passwordcheck'
import usepasswordgenerator from '../hooks/use-password-generators'

function Password() {
  const[length,setLength]=useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: 'Numbers(0-9)', state: false },
    { title: 'Small Letters (a-z)', state: false },
    { title: 'Capital Letters(A-Z)', state: false },
    { title: 'Special Characters(!#$%&@..)', state: false },
  ]);
  const { password, errorMessage, generatePassword } = usepasswordgenerator();

  const handleGeneratePassword=()=>{
    generatePassword(checkboxData,length);
  }
  return (
    <div className='container d-flex justify-content-center '>
      <div className='container back-container my-5 '>
        {/* Use the variables in your component */}
        <Passwordinput password={password} />
        <Passwordlength length={length} setLength ={setLength}  />
        <Passwordcheck checkboxData ={checkboxData} setCheckboxData={setCheckboxData} generatePassword ={handleGeneratePassword} />
      </div>
    </div>
  )
}

export default Password;
