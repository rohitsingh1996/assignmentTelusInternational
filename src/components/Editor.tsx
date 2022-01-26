import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import classes from "./Editor.module.css";
import Employee from "../models/employee";

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

const Editor: React.FC<{
  currentEmployee: any;
  onUpdateEmployee: (data: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
  }) => void;
}> = (props) => {
  return (
    <div className={classes.contact_form}>
      <h1>Edit Employee</h1>
      <Formik
        initialValues={{
          firstName: props.currentEmployee.firstName,
          lastName: props.currentEmployee.lastName,
          email: props.currentEmployee.email,
          gender: props.currentEmployee.gender,
        }}
        validationSchema={empFormSchema}
        onSubmit={(values) => {
          console.log(values);
          props.onUpdateEmployee({ ...values, id: props.currentEmployee.id });
        }}
      >
        <Form>
          <div className={classes.form_group}>
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
          </div>
          <div className={classes.form_group}>
            <label htmlFor="lastName">First Name</label>
            <Field
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
            />
            <ErrorMessage
              name="lastName"
              render={(msg) => <div className={classes.errorMsg}>{msg}</div>}
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="email">First Name</label>
            <Field id="email" name="email" placeholder="Enter First Name" />
            <ErrorMessage
              name="email"
              render={(msg) => <div className={classes.errorMsg}>{msg}</div>}
            />
          </div>
          <div className={classes.form_group}>
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
          </div>
          <button type="submit" className={classes.saveBtn}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Editor;
