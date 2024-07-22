import NavBar from '../../Componenets/NavBar/NavBar';
import { updateUser } from '../../Componenets/Services/AccountService';
import './Account.css'

function Account() {
    const localStorageUserId = localStorage.getItem("UserId");

    const submitForm = async (e : any) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        if(localStorageUserId) {
            formData.append("userId", localStorageUserId);
        } else {
            alert("No user found");
            return;
        }

        const userId = formData.get('userId');
        const email = formData.get('email');
        const password = formData.get('password');
        const firstName = formData.get('firstname');
        const lastName = formData.get('lastname');
        const address = formData.get('address')

        const body = JSON.stringify({ userId, email, password, firstName, lastName, address });
        try {
            const response = await updateUser(body);
            console.log(response)
            alert(response);
        } catch (error) {
            alert('Error getting user. Please try again.');
        }
    }

    return (
        <>
        <div className="account-nav-wrapper">
            <NavBar></NavBar>
        </div>
        <h1 className='account-heading'>Update Account</h1>
        <div className='account-image-wrapper'>
            <div className='account-profile-picture'></div>
        </div>
        <div className="account-update-container">
                    <form className='account-form' onSubmit={submitForm}>
                        <label>
                            <p className='account-text'>Email</p>
                            <input className="account-input-item" type="email" name="email" />
                        </label>
                        <br />
                        <label className='account-text'>
                            <p className='account-text'>First name</p>
                            <input className="account-input-item" type="text" name="firstname" />
                        </label>
                        <br />
                        <label className='account-text'>
                            <p className='account-text'>Second name</p>
                            <input className="account-input-item" type="text" name="lastname" />
                        </label>
                        <br />
                        <label className='account-text'>
                            <p className='account-text'>Address Line</p>
                            <input className="account-input-item" type="text" name="address" />
                        </label>
                        <br />
                        <label className='account-text'>
                            <p className='account-text'>Password</p>
                            <input className="account-input-item" type="password" name="password" />
                        </label>
                        <label className='account-submit'>
                            <input className="account-button" type="submit" name="submit" />
                        </label>
                    </form>
            </div>
        </>
    )
}

export default Account;