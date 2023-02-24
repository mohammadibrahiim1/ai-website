import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './SignIn.css'

const SignIn = () => {
    return (
        <div>
              <section className='container'>
                <div className='favourite-heading'>
                    <h2>Your Favourite</h2>
                    <p>
                        These are the tools and posts you have favoutited.You can remove them from your favourites by clicking the bookmark icon.
                    </p>
                </div>

                <div className='Login-heading  text-center'>
                    <h5>Please sign up or login to view your favourited AI tools and posts.</h5>
                    <Link className="btn btn-light mt-3 login-button">
            <span className="me-3">

              <FcGoogle style={{height:"25px", width:"25px"}} />
            </span>
          SIGN IN WITH GOOGLE
          </Link>
          <p className='mt-3'>I'll also send a weekly newsletter with new AI tools and <br /> updates.  You can unsubscribe at any time.</p>
                </div>
            </section>
        </div>
    );
};

export default SignIn;