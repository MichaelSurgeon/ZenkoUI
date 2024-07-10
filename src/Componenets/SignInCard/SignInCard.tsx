import "./SignInCard.css"
import { getUser } from '../Services/AccountService.js'; // Adjust path if needed
import  { useNavigate } from 'react-router-dom'

function SignInCard() {

    const navigate = useNavigate();

    const submitForm = async (e : any) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        
        try {
            const createUserResponse = await getUser(email?.toString(), password?.toString());
            alert(createUserResponse); 
            if(createUserResponse === "Authorised") {
                navigate("/Home")
            }
        } catch (error) {
            alert('Error getting user. Please try again.');
        }
    }

    return (
        <>
        <div className="card-wrapper">
          <div className="card-header">
              <h1>Sign In</h1>
          </div>
          <div className="card-content">
              <form onSubmit={submitForm}>
                  <label>
                      <p>Email</p>
                      <input className="input-item" type="email" name ="email" />
                  </label>
                  <br />
                  <label>
                      <p>Password</p>
                      <input className="input-item" type="password" name ="password" />
                  </label>
                  <br />
                  <label>
                      <button className="input-button">Log in!</button>
                  </label>
              </form>
          </div>
        </div>
        </>
      )
}

export default SignInCard;