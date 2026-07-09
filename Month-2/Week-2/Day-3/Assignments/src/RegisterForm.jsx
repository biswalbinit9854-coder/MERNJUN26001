import React, {useState} from "react";

function RegisterForm() {
  const[formdata, setFormdata]= useState({
    name:"",
    email:"",
    phone:"",
    password:"",
  });
    
   function handleChange(e) {
    const {name,value} = e.target;
    setFormData((prev)=> ({
      ...prev,
      [name]:value,
       }));
   }
   function handleSubmit(){
    localStorage.setItem("formData",JSON.stringify(formData));
  }
  function handleReset(){
     localStorage.setItem("formData",JSON.stringify(formData));
  }
  
  return (
    <div className="text-center font-bold text-black-200px">

      <h2 className="font-bold text-center text-gray-200px px-2 py-3">Resgister Account</h2>



    <input className="m-2 p-2 text-center w-[600px]"
        type="text" 
        placeholder="Enter your Name"
        name="name" 
        onChange={handleChange}
      />
     <br/>
      <input className="m-2 p-2 text-center w-[600px]"
        type="email"
        placeholder="Enter your email"
        name="email"
        onChange={handleChange}
      />
        <br />
    <input className="m-2 p-2 text-center w-[600px]"
        type="number"
        placeholder="Enter your phone"
        name="number"
        onChange={handleChange}
      />
      <br />
      <input className="m-2 p-2 text-center w-[600px]"
        type="password"
        placeholder="Enter your password"
        name="password"
        onChange={handleChange}
      />
      <br/>
      <input className="m-2 p-2 text-center w-[600px]"
        type="password"
        placeholder="Enter your confirm password"
        name="confirm password"
        onChange={handleChange}
      />
      <br />
      
      <button onClick={handleSubmit}className="rounded m-2 p-2 w-[300px] bg-blue-500 text-center cursor-pointer ">Submit</button>
      <button onClick={handleReset}className="rounded m-2 p-2 w-[300px] bg-blue-500 text-center cursor-pointer ">Reset</button>
    </div>
  );
}

export default RegisterForm;
