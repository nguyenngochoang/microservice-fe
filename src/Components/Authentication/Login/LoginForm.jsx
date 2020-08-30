import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './LoginForm.scss'
import { TOO_SHORT_FIELD, TOO_LONG_FIELD, REQUIRED_FIELD, LOGIN_FORM_INIT, SIGNUP_LOGIN_PATH, USER_LOGIN_PATH } from "constants.js"
import { Form, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
class CLoginForm extends Component {


  validationSchema() {
    return (
      Yup.object().shape({
        email: Yup.string()
          .min(5, TOO_SHORT_FIELD("Email"))
          .max(50, TOO_LONG_FIELD("Email"))
          .required(REQUIRED_FIELD),
        password: Yup.string()
          .min(6, TOO_SHORT_FIELD("Password"))
          .max(20, TOO_LONG_FIELD("Password"))
          .required(REQUIRED_FIELD)
      })
    )
  }

  renderForm(props) {
    const { values, touched, errors,
            isSubmitting, handleChange,
            handleSubmit
          } = props;
    let isValidEmail = errors.email && touched.email
    let isValidPassword = errors.password && touched.password
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter email" value={values.email} onChange={handleChange} name="email"
                        className={ isValidEmail ? "text-input error": "text-input"}/>
          {isValidEmail ? <span className="error-text">{errors.email}</span> : null}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" values={values.password} onChange={handleChange} name="password"
                        className={ isValidPassword ? "text-input error": "text-input"}/>
          {isValidPassword ? <span className="error-text">{errors.password}</span> : null}
        </Form.Group>
        <div className="form-btn-container row">
          <div className="btns-left col-6">
            <Button variant="primary" type="submit" disabled={isSubmitting}> Login </Button>
            <Link to={SIGNUP_LOGIN_PATH[1]}>
              <Button variant="primary" type="submit" disabled={isSubmitting} className="ml-3"> Signup </Button>
            </Link>
          </div>
          <div className="btns-right col-6 text-right">
            <Link to="/">
              <Button variant="primary" type="submit" disabled={isSubmitting} className="align-self-end"> Homepage </Button>
            </Link>
          </div>
        </div>
      </Form>
    )
  }

  submitForm(values, setSubmitting) {
    let users_authentication = {email: values.email, password: values.password}
    setSubmitting(false)
    console.log(JSON.stringify(users_authentication))
    window.axios.post(USER_LOGIN_PATH, {users_authentication: users_authentication}).then(response => {
      console.log("login successfully")
    })
  }

  render() {
    return (
      <div className="loginform-container h-100 d-flex justify-content-center align-items-center">
        <div className="login-form w-50">
          <h3 className="text-center mb-5">Welcome, please login to continue</h3>
          <Formik initialValues={LOGIN_FORM_INIT} onSubmit={(values, { setSubmitting }) => this.submitForm(values, setSubmitting)}
            validationSchema={this.validationSchema()} className="user-form">
            {props => {
              return this.renderForm(props)
            }}
          </Formik>
        </div>
      </div>
    )
  }
}


const mapStoreToProps = store => ({

})

const mapDispatchToProps = {
}

export const LoginForm = connect(
  mapStoreToProps,
  mapDispatchToProps
)(CLoginForm)

// export default
export default LoginForm