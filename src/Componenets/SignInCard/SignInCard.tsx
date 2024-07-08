import "./SignInCard.css"

function SignInCard() {

    const submitForm = (event : any) => {
        event.preventDefault();
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