import React, { Component } from 'react';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
class FormValidator extends Component{
  constructor(props){
     super(props);
     this.state={
       firstName:null,
       lastName:null,
       email:null,
       password:null,
       formErrors:{
         firstName:"",
         lastName:"",
         email:"",
         password:"",
       }
     };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e =>{
     e.preventDefault();
     const { name,value}=e.target;
     let formErrors = this.state.formErrors;
     switch(name){
       case 'firstName':
              formErrors.firstName = value.length < 3 && value.length >0
                                   ? 'minimum 3 characters required'
                                   : "";
        break;
        case 'lastName':
               formErrors.lastName = value.length < 3 && value.length >0
                                    ? 'minimum 3 characters required'
                                    : "";
         break;
         case 'email':
                formErrors.email =emailRegex.test(value) && value.length >0
                                     ? ''
                                     : "Invalid email address";
          break;
          case 'password':
                 formErrors.password = value.length < 6 && value.length >0
                                      ? 'minimum 6 characters required'
                                      : "";
           break;
         default:break;
     }
     this.setState({formErrors,[name]:value});
  }
   render(){
     const { formErrors } = this.state;
      return(
         <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                <label htmlFor="firstName"> First Name</label>
                <input type="text"
                    className={formErrors.firstName.length>0 ? "error" : null }
                    placeholder="First Name"
                    name="firstName"
                    onChange={this.handleChange}
                    noValidate/>
                {<span className="errorMessage">{formErrors.firstName}</span>}
              </div>

              <div className="lastName">
                <label htmlFor="lastName"> Last Name</label>
                <input type="text"
                    className={formErrors.lastName.length>0 ? "error" : null }
                    placeholder="Last Name"
                    name="lastName"
                    onChange={this.handleChange}
                    noValidate/>
                {<span className="errorMessage">{formErrors.lastName}</span>}
              </div>
              <div className="email">
                <label htmlFor="email"> email</label>
                <input type="email"
                  className={formErrors.email.length>0 ? "error" : null }
                  placeholder="email"
                  name="email"
                  onChange={this.handleChange}
                  noValidate/>
                {<span className="errorMessage">{formErrors.email}</span>}
              </div>
              <div className="password">
                <label htmlFor="password"> Password</label>
                <input type="password"
                  className={formErrors.password.length>0 ? "error" : null }
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                  noValidate/>
                {<span className="errorMessage">{formErrors.password}</span>}
              </div>
              <div className="createAccount">
                  <button type="submit">Create Account</button>
                  <small>Already Have an Account?</small>
              </div>
            </form>
          </div>
        </div>
      );
   }
}

export default FormValidator;
