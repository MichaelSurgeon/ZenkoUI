import "./SignUpCard.css"
import { createUser } from '../Services/AccountService.js';
import { useNavigate } from 'react-router-dom'

function SignUpCard() {

    const navigate = useNavigate();

    const submitForm = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        const firstName = formData.get('firstname');
        const secondName = formData.get('secondname');
        const addressLine = formData.get('addressline')

        const body = JSON.stringify({ email, password, firstName, secondName, addressLine });
        try {
            // do something with plaintext passwords
            const createUserResponse = await createUser(body);
            alert(createUserResponse);
            if (createUserResponse === "User Added") {
                navigate("/SignIn")
            }
        } catch (error) {
            alert('Error creating user. Please try again.');
        }
    }

    return (
        <>
            <div className="card-wrapper">
                <div className="card-header">
                    <h1>Sign Up</h1>
                </div>
                <div className="card-content">
                    <form onSubmit={submitForm}>
                        <label>
                            <p>Email</p>
                            <input className="input-item" type="email" name="email" />
                        </label>
                        <br />
                        <label>
                            <p>Password</p>
                            <input className="input-item" type="password" name="password" />
                        </label>
                        <br />
                        <label>
                            <p>First Name</p>
                            <input className="input-item" type="text" name="firstname" />
                        </label>
                        <br />
                        <label>
                            <p>Second Name</p>
                            <input className="input-item" type="text" name="secondname" />
                        </label>
                        <br />
                        <label>
                            <p>Address line</p>
                            <input className="input-item" type="text" name="addressline" />
                        </label>
                        <br />
                        <label>
                            <input className="input-button" type="submit" name="submit" />
                        </label>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUpCard;