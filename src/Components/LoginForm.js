import react, {useState} from 'react'
import ReactDOM from 'react-dom'
import React from 'react'


function LoginForm({Login ,error}) {
  const [details,setDetails] = useState({ name:"", email:"",password:""});
  const submitHandeler = e =>{
    e.preventDefault();
    Login(details);
  }

  return(
    
    <form onSubmit={submitHandeler}>      
      <div className='form-inner'>
        {(error != "")? ( <div className='error'>{error}</div>):""}
        <div className='form-group'>
            <label htmlFor='email'></label>
            <input placeholder='Enter your email address ...' name='email' type="email" id='email' onChange={e => setDetails({...details, name: e.target.value})} value ={details.name} size='100px'/>
        </div>
        <br/>
        <div className='form-group'>
            <label htmlFor='password'></label>
            <input placeholder='Enter your password ...' name='password' type="password" id='password' onChange={e => setDetails({...details, password: e.target.value})} value ={details.password}/>
        </div>
        <br/>
        <br/>
        <div>
          <button type="button">LOGIN</button>
        </div>
        <br/>
        <br/>
        <br/>
        <div className='forget-password'>
          <a href='' >Forget password?</a>
        </div>
        <br/>

      </div>
    </form>

  )
}

export default LoginForm