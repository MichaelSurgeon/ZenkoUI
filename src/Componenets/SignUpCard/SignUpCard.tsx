import "./SignUpCard.css"

function SignUpCard() {
    return (
        <>
        <div className="card-wrapper">
          <div className="card-header">
              <h1>Sign Up</h1>
          </div>
          <div className="card-content">
              <form>
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
                      <p>First Name</p>
                      <input className="input-item" type="text" name ="firstname" />
                  </label>
                  <br />
                  <label>
                      <p>Second Name</p>
                      <input className="input-item" type="text" name ="secondname" />
                  </label>
                  <br />
                  <label>
                      <p>Address line</p>
                      <input className="input-item" type="text" name ="addressline" />
                  </label>
                  <br />
                  <label>
                      <input className="input-button" type="submit" name ="submit" />
                  </label>
              </form>
          </div>
        </div>
        </>
      )
}

export default SignUpCard;