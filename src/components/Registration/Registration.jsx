
import Wavelabel from '../Wavelabel/Wavelabel'
import registrationImg from '../../assets/registration.png'
import { useState } from 'react';
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const Registration = () => {

  // for email validation
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState("")

  const handleEmail = (e)=>{
    setEmail(e.target.value)
    setEmailErr("")
  }

  // for fullname validation
  const [fullName, setFullName] = useState("")
  const [fullNameErr, setFullNameErr] = useState("")
  
  const handleFullName = (e)=>{
    setFullName(e.target.value)
    setFullNameErr("")
  }

  // for Passwoord validation
  const [password, setPassword] = useState("")
  const [passwordErr, setPasswordErr] = useState("")

  // for multiple error 
  const [uppercaseErr, setUppercaseErr] = useState("")
  const [lowercaseErr, setLowercaseErr] = useState("")
  const [numberErr, setNumberErr] = useState("")
  const [specialErr, setSpecialErr] = useState("")
  const [eightErr, setEightErr] = useState("")
  const [greenOne, setGreenOne] = useState(false)
  const [greenTwo, setGreenTwo] = useState(false)
  const [greenThree, setGreenThree] = useState(false)
  const [greenFour, setGreenFour] = useState(false)
  const [greenFive, setGreenFive] = useState(false)

  
  const handlePassword = (e)=>{
    const value = e.target.value
    setPassword(value)
    setPasswordErr("")

    setUppercaseErr("Uppercase,");
    setLowercaseErr("Lowercase,");
    setNumberErr("Number,");
    setSpecialErr("Special Character,");
    setEightErr("At least 8 characters long");
    
      if(/(?=.*[A-Z])/.test(value)){
          setGreenOne(true)
          
      }else{
            setGreenOne(false)
      }
      
    if (/(?=.*[a-z])/.test(value)) {
      setGreenTwo(true)
    }else{
      setGreenTwo(false)
}
    
    if (/(?=.*[0-9])/.test(value)) {
      setGreenThree(true)
    } else{
      setGreenThree(false)
}
    
    if (/(?=.*[!@#$%^&*(),.?":{}|<>])/.test(value)) {
      setGreenFour(true)
    } else{
      setGreenFour(false)
}
    
    if (/(?=.{8,})/.test(value)) {
      setGreenFive(true)
    } else{
      setGreenFive(false)
}
    
  }

    // for confirm password 
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordErr, setConfirmPasswordErr] = useState("")

    const handleConfirmPassword =(e)=>{
       setConfirmPassword(e.target.value)

    }

  // show password hide password 
  const [showPassword, setShowPassword]= useState(false)
  const [showConfirmPassword, setShowConfirmPassword]= useState(false)

  const handleShowPass = ()=>{
    setShowPassword(!showPassword)
  }
  const handleShowConfirmPass = ()=>{
    setShowConfirmPassword(!showConfirmPassword)
  }

const handleSubmit = ()=>{
  // Condition for email 
    if(!email){
      setEmailErr("Enter an email address")
      
    }else{
      if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
      ){
        
        setEmailErr("Enter a valid email address")
    
      }

    }
    
    // condition for fullname 
    if(!fullName){
      setFullNameErr("Enter your full name")
    }else if(!/^[A-Za-z]+([ '-][A-Za-z]+)*$/.test(fullName)){
      setFullNameErr("numbers and special characters aren't acceptable")
    }

    // condition for password 
       if(!password){
        setPasswordErr("Enter a password")
        setUppercaseErr("")
        setLowercaseErr("")
        setSpecialErr("")
        setNumberErr("")
        setEightErr("")

       }else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~-]).{8,}$/.test(password)){
        setUppercaseErr("")
        setLowercaseErr("")
        setSpecialErr("")
        setNumberErr("")
        setEightErr("")
       }

    // condition for Confirm password 
    if(!confirmPassword){
      setConfirmPasswordErr("Confirm your password")
    }else{
      setConfirmPasswordErr("")

    }
    // if password matches confirm password and all error clears then sign up btn submits 
    if(confirmPassword===password && !emailErr && !fullNameErr && !uppercaseErr && email && password && confirmPassword){
      alert("success")
        setEmail("")
        setFullName("")
        setPassword("")
        setConfirmPassword("")
    }
}


  return (
    <>
      <section className="md:flex">
        <div className="md:w-1/2 md:pt-[80px] md:ps-[190px] pt-10 ps-4 pe-4 md:pe-0">
          <h1 className="text-darkBlueOne font-nunito md:text-[34px] text-2xl font-bold md:mb-3 mb-2">
            Get started with easily register
          </h1>

          <p className="md:text-xl text-[18px] opacity-50 font-nunito md:mb-[60px] mb-8">
            Free register and you can enjoy it
          </p>

          <form className="mb-[36px]">
            <div className="form-control relative md:mb-[56px] mb-8">
              <input
                onChange={handleEmail}
                value={email}
                className="peer w-full md:w-[370px] md:pl-[53px] pl-8 py-[27px] text-darkBlueOne font-nunito text-xl font-semibold border-darkBlueOne border-[2px] border-opacity-30 rounded-[9px] block focus:outline-none bg-white"
                type="text"
                required
              />
             <Wavelabel classname={"absolute top-[30px] md:left-[37px] left-4 px-4 text-xl opacity-50 text-darkBlueOne peer-focus:top-[0px] peer-valid:top-[0px]  peer-focus:text-[14px] peer-valid:text-[14px] peer-focus:font-semibold peer-valid:font-semibold peer-focus:tracking-[1px] peer-valid:tracking-[1px] peer-focus:opacity-100 peer-valid:opacity-100 peer-focus:text-opacity-70 peer-valid:text-opacity-70 bg-white transition-all duration-300"} text={"Emailaddress"}></Wavelabel>
              <p className='absolute top-[90px] left-[10px] font-nunito text-red-600'>{emailErr}</p>
            </div>


            <div className="form-control relative md:mb-[56px] mb-8">
              <input
                onChange={handleFullName}
                value={fullName}
                className="peer w-full md:w-[370px] md:pl-[53px] pl-8 py-[27px] text-darkBlueOne font-nunito text-xl font-semibold border-darkBlueOne border-[2px] border-opacity-30 rounded-[9px] block focus:outline-none bg-white"
                type="text"
                required
              />
              
              <Wavelabel classname={"absolute top-[30px] md:left-[37px] left-4 px-4 text-xl opacity-50 text-darkBlueOne peer-focus:top-[0px] peer-valid:top-[0px]  peer-focus:text-[14px] peer-valid:text-[14px] peer-focus:font-semibold peer-valid:font-semibold peer-focus:tracking-[1px] peer-valid:tracking-[1px] peer-focus:opacity-100 peer-valid:opacity-100 peer-focus:text-opacity-70 peer-valid:text-opacity-70 bg-white transition-all duration-300"} text={"Fullname"}></Wavelabel>
              <p className='absolute top-[90px] left-[10px] font-nunito text-red-600'>{fullNameErr}</p>
            </div>


            <div className="form-control relative md:mb-[56px] mb-8">
              {
                showPassword ? <FaRegEyeSlash onClick={handleShowPass} className='absolute top-[40%] md:left-[43%] left-[90%] cursor-pointer text-2xl text-darkBlueOne' /> : <IoEyeOutline onClick={handleShowPass} className='absolute top-[40%] md:left-[43%] left-[90%] cursor-pointer text-2xl text-darkBlueOne' />
              }
            
              <input
                onChange={handlePassword}
                value={password}
                className="peer w-full md:w-[370px] md:pl-[53px] pl-8 py-[27px] text-darkBlueOne font-nunito text-xl font-semibold border-darkBlueOne border-[2px] border-opacity-30 rounded-[9px] block focus:outline-none bg-white"
                type={`${showPassword ? "text" : "password"}`}
                required
              />
              <Wavelabel classname={"absolute top-[30px] md:left-[37px] left-4 px-4 text-xl opacity-50 text-darkBlueOne peer-focus:top-[0px] peer-valid:top-[0px]  peer-focus:text-[14px] peer-valid:text-[14px] peer-focus:font-semibold peer-valid:font-semibold peer-focus:tracking-[1px] peer-valid:tracking-[1px] peer-focus:opacity-100 peer-valid:opacity-100 peer-focus:text-opacity-70 peer-valid:text-opacity-70 bg-white transition-all duration-300"} text={"Password"}></Wavelabel>
              <p className='absolute top-[90px] left-[10px] font-nunito text-red-600'>
                {/* {`${uppercaseErr} ${lowercaseErr} ${numberErr} ${specialErr} ${eightErr}`} */}
                <span className={`${greenOne ? "text-green-500" : "text-red-600"} me-1 `}>{uppercaseErr}</span>
                <span className={`${greenTwo ? "text-green-500" : "text-red-600"} me-1`}>{lowercaseErr}</span>
                <span className={`${greenThree ? "text-green-500" : "text-red-600"} me-1`}>{numberErr}</span>
                <span className={`${greenFour ? "text-green-500" : "text-red-600"} me-1`}>{specialErr}</span>
                <span className={`${greenFive ? "text-green-500" : "text-red-600"}`}>{eightErr}</span>
               
              </p>
              <span className='absolute top-[90px] left-[10px] font-nunito text-red-600'>{passwordErr}</span>
            </div>
            
            


              <p onClick={handleSubmit} className="py-5 md:px-[145px] md:mt-0 mt-8 w-full md:w-auto text-center inline-block bg-violet text-white font-nunito text-xl font-semibold rounded-[86px] cursor-pointer active:scale-[0.98]">
                Sign up
                </p>            
             
            
          </form>
          <p className="text-darkBlueTwo font-opnesans text-[14px] text-center w-[350px] mb-12 md:mb-0">
            Already have an account ?{" "}
            <a
              className="text-orange font-opnesans text-[14px] font-bold"
              href="#"
            >
              Sign In
            </a>
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            className="w-full h-screen object-cover"
            src={registrationImg}
            alt="registrationImg"
          />
        </div>
      </section>
    </>
  );
}

export default Registration