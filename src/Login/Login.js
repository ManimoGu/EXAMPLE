import React from "react";
import './Login.css';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            
          <i class="fas fa-times-circle">
              
              </i>
            
          </div>
          <div class="modal-body">


          <div class="Popup">
    <div class="row">
        <div class="col-md-offset-5 col-md-3">
            <div class="form-login">
            <h4>Welcome back.</h4>
            <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="username" />
            <br/>
            <input type="text" id="userPassword" class="form-control input-sm chat-input" placeholder="password" />
            <br/>
            <div class="wrapper">
            <span class="group-btn">     
                <a href="#" class="btn btn-warning">login <i class="fa fa-sign-in"></i></a>
            </span>
            </div>
            </div>
        
        </div>
    </div>
</div>
          </div>
          <div class="modal-footer">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
