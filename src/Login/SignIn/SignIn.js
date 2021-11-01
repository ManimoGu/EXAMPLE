import React from "react";
import './SignIn.css';
import {Link} from 'react-router-dom';

const SignIn = () => {
  
  return (
    
<div>
        <div class="container-fluid vh-100 bg-dark">
            <div class="">
                <div class="rounded d-flex justify-content-center" style={{paddingTop : "50px"}}>
                    <div class="col-md-4 col-sm-12 shadow-lg p-5 Sign">
                        <div class="text-center">
                            <h3 class="text-warning">Sign In</h3>
                        </div>
                        <form action="">
                            <div class="p-4">
                                <div class="input-group mb-3">
                                    <span class="input-group-text bg-warning"><i
                                            class="bi bi-person-plus-fill text-dark"></i></span>
                                    <input type="text" class="form-control" placeholder="Username"/>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text bg-warning"><i
                                            class="bi bi-key-fill text-dark"></i></span>
                                    <input type="password" class="form-control" placeholder="password"/>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label text-light" for="flexCheckDefault">
                                        Remember Me
                                    </label>
                                </div>
                                <button class="btn btn-warning text-center mt-2" type="submit">
                                    Login
                                </button>
                                <p class="text-center mt-5 text-light">Don't have an account?
                                    <Link to ="/SignUp"><span class="text-warning">Sign Up</span></Link>
                                </p>
                                <Link to="/ResetPassword"><p class="text-center text-warning">Forgot your password?</p></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


    
  );
};

export default SignIn;
