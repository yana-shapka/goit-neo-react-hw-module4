import css from './ContactForm.module.css';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {useId} from 'react';
import * as Yup from 'yup';

const customSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long.')
    .max(50, 'Name must be no more than 50 characters long.')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Number must be at least 3 characters long.')
    .max(50, 'Number must be no more than 50 characters long.')
    .required('Number is required'),
});

const ContactForm = ({save}) => {
  const name = useId();
  const number = useId();

  const handleSubmit = (values, actions) => {
    save(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{name: '', number: ''}}
      onSubmit={handleSubmit}
      validationSchema={customSchema}
    >
      <Form className={css.formWrapper}>
        <div className={css.formItem}>
          <label htmlFor={name}>Name:</label>
          <Field
            type="text"
            name="name"
            id={name}
            className="formInput"
            placeholder="Enter name"
          />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorMessage}
          />
        </div>
        <div className={css.formItem}>
          <label htmlFor={number}>Number:</label>
          <Field
            type="text"
            name="number"
            id={number}
            className="formInput"
            placeholder="Enter number"
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        </div>
        <button className={css.addButton}>Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
