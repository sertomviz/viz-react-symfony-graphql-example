import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EditForm = ({ company, loading, submitAction }) => {

  const btnContent = loading ? <span className="spinner-border spinner-border-sm ml-3 mr-3" role="status" aria-hidden="true"></span> : "Save";

  return (
    <Formik
      enableReinitialize
      initialValues={company}
      validationSchema={Yup.object().shape({
          name: Yup.string()
              .required('Name is required'),
          country: Yup.string()
              .required('Country is required'),
          website: Yup.string(),
      })}
      onSubmit={(values, actions) => {
        submitAction({ variables: values }).then(
          data => {},
          error => {
            const validationErrors = error.graphQLErrors[0].extensions.validation;
            const errors = {}
            Object.keys(validationErrors).forEach(key => errors[key] = validationErrors[key][0].message);
            actions.setErrors(errors);
          }
        );
      }}
      render={({ errors, touched }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">Company name</label>
            <Field type="text" name="name" placeholder="Enter name" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
            <ErrorMessage name="name" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <Field type="text" name="country" placeholder="Enter country" className={'form-control' + (errors.country && touched.country ? ' is-invalid' : '')}/>
            <ErrorMessage name="country" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <Field type="text" name="website" placeholder="Enter website" className={'form-control' + (errors.website && touched.website ? ' is-invalid' : '')}/>
            <ErrorMessage name="website" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {btnContent}
            </button>
          </div>
        </Form>
      )}
    />
  );
}

export default EditForm;
