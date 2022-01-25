import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import classes from "./Editor.module.css";

const empFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  gender: Yup.string().required("Required"),
});

const Editor: React.FC = (props) => {
  return (
    <div>
      <h1>Edit Employee</h1>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", gender: "" }}
        validationSchema={empFormSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field
            id="firstName"
            name="firstName"
            placeholder="Enter First Name"
          />
          <ErrorMessage
            name="firstName"
            render={(msg) => <div className={classes.errorMsg}>{msg}</div>}
          />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Enter Last Name" />
          <ErrorMessage
            name="lastName"
            render={(msg) => <div className={classes.errorMsg}>{msg}</div>}
          />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <ErrorMessage
            name="email"
            render={(msg) => <div className={classes.errorMsg}>{msg}</div>}
          />

          <label htmlFor="gender">Gender</label>
          <Field id="gender" name="gender" component="select">
            <option value="">Select Option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="transgender">Transgender</option>
          </Field>
          <ErrorMessage
            name="gender"
            render={(msg) => <div className={classes.errorMsg}>{msg}</div>}
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Editor;
