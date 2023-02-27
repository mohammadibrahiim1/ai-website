import React, { useContext, useState } from "react";
import { Link} from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./SignIn.css";
import { AuthContext } from "../../Context/Context";

const SignIn = () => {
  const [error, setError] = useState();

  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);

        setError("");
      })
      .catch((error) => {
        // console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <section className="container">
        <div className="Login-heading  text-center">
          <h5>
            Please sign up or login to view your favourited AI tools and posts.
          </h5>
          <Link
            className="btn btn-light mt-3 login-button"
            onClick={handleGoogleSignIn}
          >
            <span className="me-3">
              <FcGoogle style={{ height: "23px", width: "23px" }} />
            </span>
            <span className="pt-2"> SIGN IN WITH GOOGLE</span>
          </Link>
          <p className="mt-3">
            I'll also send a weekly newsletter with new AI tools and <br />{" "}
            updates. You can unsubscribe at any time.
          </p>
          <p>{error}</p>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
