
/*function that returns the login form with export default to it can my imported to index.js
returns the jsx I want to be rendered*/
export default function LoginForm() {
  return (
    <div id='form-div'>
    <div className='container'>
      <h3>Log In</h3> 
      <div className='mb-3'>
        <label for='usernameinput' className='form-label'>Username</label>
        <input type='username' className='w-25' id='username-input'></input>
      </div>
      <div className='mb-3'>
      <label for="passwordinput" className='form-label'>Password</label>
      <input type="password" class="w-25" id="password-input"></input>
      <br></br>
      <button type="button" class="btn btn-outline-info">Log In</button>
      </div>
    </div>
    </div>
  )
}
