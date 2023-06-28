import { json } from "node:stream/consumers";
import * as React from "react";
import { Form, useNavigate } from "react-router-dom";

type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  const navigate = useNavigate();
  const [account , setAccount] = React.useState({username:' ', password:' ',})
  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
    
      <h1>Register</h1>

   <form onSubmit={(e: React.FormEvent<Element>) =>{
     e.preventDefault();
     alert("Hi  "+ account.username)
    }}>
      <label htmlFor="">Username : </label>
      <input type="text" 
      name="username" 
      id="username" 
      onChange={(e)=>{console.log(e.target.value);
        setAccount ({
          ...account,
          username: e.target.value,
          
        })
      }}
      
      />
      <br />
      <label htmlFor="">Password : </label>
        <input type="password" 
        name="password" 
        id="password" 
        onChange={(e) => { console.log(e.target.value);
          setAccount({
            ...account,
            password: e.target.value,
          })
        }} /> 
        <br />
      <button type="submit">Submit</button>
<br />
<br />
      <span>
          Debug:{JSON.stringify(account)}
      </span>
      

   </form>

     

    </>
  )
};

export default RegisterPage;
