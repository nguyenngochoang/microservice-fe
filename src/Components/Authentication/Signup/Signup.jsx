import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './Signup.scss'
import { TOO_SHORT_FIELD, TOO_LONG_FIELD, REQUIRED_FIELD, SIGN_UP_FORM_INIT, GENDER_VALUES, USER_REGISTRATION_PATH } from "constants.js"
import { Form, Button } from "react-bootstrap"
import Select from 'react-select'
import { Link } from 'react-router-dom';

class CSignup extends Component {


  validationSchema() {
    return (
      Yup.object().shape({
        username: Yup.string()
          .min(5, TOO_SHORT_FIELD("Username"))
          .max(20, TOO_LONG_FIELD("Username"))
          .required(REQUIRED_FIELD),
        password: Yup.string()
          .min(6, TOO_SHORT_FIELD("Password"))
          .max(20, TOO_LONG_FIELD("Password"))
          .required(REQUIRED_FIELD),
        password_confirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required(REQUIRED_FIELD),
        first_name: Yup.string()
        .min(2, TOO_SHORT_FIELD("First name"))
        .max(20, TOO_LONG_FIELD("First name"))
        .required(REQUIRED_FIELD),
        last_name: Yup.string()
        .min(2, TOO_SHORT_FIELD("Last name"))
        .max(20, TOO_LONG_FIELD("Last name"))
        .required(REQUIRED_FIELD),
        gender: Yup.string()
        .required(REQUIRED_FIELD)
      })
    )
  }

  renderForm(props) {
    const { values, touched, errors,
            isSubmitting, handleChange,
            handleSubmit, setFieldValue
          } = props;
    let isValidUsername = errors.username && touched.username
    let isValidPassword = errors.password && touched.password
    let isPasswordMatch = errors.password_confirmation && touched.password_confirmation
    let isValidFirstName = errors.first_name && touched.first_name
    let isValidLastName = errors.last_name && touched.last_name
    let isValidGender = errors.gender && touched.gender
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={values.username} onChange={handleChange} name="username"
                        className={ isValidUsername ? "text-input error": "text-input"}/>
          {isValidUsername ? <span className="error-text">{errors.username}</span> : null}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" value={values.first_name} onChange={handleChange} name="first_name"
                        className={ isValidFirstName ? "text-input error": "text-input"}/>
          {isValidFirstName ? <span className="error-text">{errors.first_name}</span> : null}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" value={values.last_name} onChange={handleChange} name="last_name"
                        className={ isValidLastName ? "text-input error": "text-input"}/>
          {isValidLastName ? <span className="error-text">{errors.last_name}</span> : null}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender</Form.Label>
          <Select options={GENDER_VALUES} onChange={(e) => this.setGenderValue(e, setFieldValue)} value={values.gender} name="gender"
                  className={isValidGender ? "text-input error": "text-input"}/>
          {isValidGender ? <span className="error-text">{errors.gender}</span> : null}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" values={values.password} onChange={handleChange} name="password"
                        className={ isValidPassword ? "text-input error": "text-input"}/>
          {isValidPassword ? <span className="error-text">{errors.password}</span> : null}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control type="password" placeholder="Password confirmation" values={values.password_confirmation} onChange={handleChange} name="password_confirmation"
                        className={ isValidPassword ? "text-input error": "text-input"}/>
          {isPasswordMatch ? <span className="error-text">{errors.password_confirmation}</span> : null}
        </Form.Group>
        <Link to="/login">
          <Button variant="primary" type="submit" disabled={isSubmitting}> Login </Button>
        </Link>
        <Button variant="primary" type="submit" disabled={isSubmitting} className="ml-3"> Signup </Button>
      </Form>
    )
  }

  setGenderValue (value, setFieldValue) {
    setFieldValue("gender", value)
  }

  submitForm(values, setSubmitting) {
    let users_authentication = {username: values.username, password: values.password}
    setSubmitting(false)
    console.log(JSON.stringify(users_authentication))
    window.axios.post(USER_REGISTRATION_PATH, {users_authentication: users_authentication}).then(response => {
      console.log(JSON.stringify(response.data.user))
    })
  }

  render() {
    return (
      <div className="signup-container h-100 d-flex justify-content-center align-items-center">
        <div className="login-form w-50">
          <h3 className="text-center mb-5">REGISTRATION</h3>
          <Formik initialValues={SIGN_UP_FORM_INIT} onSubmit={(values, { setSubmitting }) => this.submitForm(values, setSubmitting)}
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

export const Signup = connect(
  mapStoreToProps,
  mapDispatchToProps
)(CSignup)

// export default
export default Signup