// import React, { Component } from 'react';
// import { Control, Form, Errors, action } from 'react-redux-form';

// const required = val => val && val.length;
// const maxLength = len => val => !val || (val.length <= len);
// const minLength = len => val => val && (val.length >= len);
// const isNumber = val => !isNaN(+val);
// const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

// class EntryForm extends Component {
//     constructor(props) {
//         super(props);

//         this.handleSubmit = this.handleSubmit.bind(this)
//     };

//     handleSubmit(values) {
//         console.log("Current state is: " + JSON.stringify(values));
//         alert("Current state is: " + JSON.stringify(values));
//         this.props.resetFeedbackForm();
//     }

//     render() {

// <div className="container" >
// <div className="row row-content">
//                     <div className="col-12">
//                         <h2>Send us your Feedback</h2>
//                         <hr />
//                     </div>
//                     <div className="col-md-10">
//                         <Form model="feedbackForm" onSubmit={values => this.handleSubmit(values)}>
//                             <Row className="form-group">
//                                 <Label htmlFor="firstName" md={2}>First Name</Label>
//                                 <Col md={10}>
//                                     <Control.text model=".firstName" id="firstName" name="firstName"
//                                         placeholder="First Name"
//                                         className="form-control"
//                                         validators={{
//                                             required,
//                                             minLength: minLength(2),
//                                             maxLength: maxLength(15)
//                                         }}
//                                     />
//                                     <Errors
//                                         className="text-danger"
//                                         model=".firstName"
//                                         show="touched"
//                                         component="div"
//                                         messages={{
//                                             required: 'Required',
//                                             minLength: 'Must be at least 2 characters',
//                                             maxLength: 'Must be 15 characters or less'
//                                         }}
//                                     />
//                                 </Col>
//                             </Row>
//                             <Row className="form-group">
//                                 <Label htmlFor="lastName" md={2}>Last Name</Label>
//                                 <Col md={10}>
//                                     <Control.text model=".lastName" id="lastName" name="lastName"
//                                         placeholder="Last Name"
//                                         className="form-control"
//                                         validators={{
//                                             required,
//                                             minLength: minLength(2),
//                                             maxLength: maxLength(15)
//                                         }} />
//                                     <Errors
//                                         className="text-danger"
//                                         model=".lastName"
//                                         show="touched"
//                                         component="div"
//                                         messages={{
//                                             required: 'Required',
//                                             minLength: 'Must be at least 2 characters',
//                                             maxLength: 'Must be 15 characters or less'
//                                         }}
//                                     />
//                                 </Col>
//                             </Row>
//                             <Row className="form-group">
//                                 <Label htmlFor="phoneNum" md={2}>Phone</Label>
//                                 <Col md={10}>
//                                     <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
//                                         placeholder="Phone number"
//                                         className="form-control"
//                                         validators={{
//                                             required,
//                                             minLength: minLength(10),
//                                             maxLength: maxLength(15),
//                                             isNumber
//                                         }}

//                                     />
//                                     <Errors
//                                         className="text-danger"
//                                         model=".phoneNum"
//                                         show="touched"
//                                         component="div"
//                                         messages={{
//                                             required: 'Required',
//                                             minLength: 'Must be at least 10 numbers',
//                                             maxLength: 'Must be 15 numbers or less',
//                                             isNumber: 'Must be a number'
//                                         }}
//                                     />
//                                 </Col>
//                             </Row>
//                             <Row className="form-group">
//                                 <Label htmlFor="email" md={2}>Email</Label>
//                                 <Col md={10}>
//                                     <Control.text model=".email" id="email" name="email"
//                                         placeholder="Email"
//                                         className="form-control"
//                                         validators={{
//                                             required,
//                                             validEmail
//                                         }}
//                                     />
//                                     <Errors
//                                         className="text-danger"
//                                         model=".email"
//                                         show="touched"
//                                         component="div"
//                                         messages={{
//                                             required: 'Required',
//                                             validEmail: 'Invalid email address'
//                                         }}
//                                     />
//                                 </Col>
//                             </Row>
//                             <Row className="form-group">
//                                 <Col md={{ size: 4, offset: 2 }}>
//                                     <Row check>
//                                         <Label check>
//                                             <Control.checkbox model=".agree"
//                                                 name="agree"
//                                                 className="form-check-input" /> {' '}
//                                             <strong>May we contact you?</strong>
//                                         </Label>
//                                     </Row>
//                                 </Col>
//                                 <Col md={4}>
//                                     <Control.select model=".contactType" name="contactType"
//                                         className="form-control">
//                                         <option>By Phone</option>
//                                         <option>By Email</option>
//                                     </Control.select>
//                                 </Col>
//                             </Row>
//                             <Row className="form-group">
//                                 <Label htmlFor="feedback" md={2}>Your Feedback</Label>
//                                 <Col md={10}>
//                                     <Control.textarea model=".feedback" id="feedback" name="feedback"
//                                         rows="12"
//                                         className="form-control" />
//                                 </Col>
//                             </Row>
//                             <Row className="form-group">
//                                 <Col md={{ size: 10, offset: 2 }}>
//                                     <Button type="submit" color="primary">
//                                         Send Feedback
//                                     </Button>
//                                 </Col>
//                             </Row>
//                         </Form>
//                     </div>
//                 </div>
//             </div>
//                                     }}

// export default EntryForm;
