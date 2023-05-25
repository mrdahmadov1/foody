import "./login.css";

function Login() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="row flex-row-reverse justify-content-center">
            <div className="col-12 col-md-6 col-lg-5 left text-center">
              <img src="../public/images/login.png" alt="Admin-Login-Image" />
            </div>
            <div className="col col-md-6 col-lg-5 right d-flex flex-column mt-4 px-4 m-md-0 p-md-5">
              <h2 className="text-center mb-3">Welcome Admin</h2>
              <input className="mb-2" type="text" placeholder="Username" />
              <input className="mb-4" type="password" placeholder="Password" />
              <button className="btnSignIn">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
