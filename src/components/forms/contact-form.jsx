import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import ErrorMsg from './error-msg';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  firstname: Yup.string().required('Adınızı giriniz.'),
  lastname: Yup.string().required('Soyadınızı giriniz.'),
  email: Yup.string().email('Geçerli bir e-posta adresi giriniz.').required('E-posta adresinizi giriniz.'),
  message: Yup.string().required('Mesajınızı giriniz.')
});

const ContactForm = () => {
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { firstname: '', lastname: '', email: '', message: '',phone:'' },
    onSubmit: async (values, { resetForm }) => {
      console.log('Gönderilen değerler:', values); 
      try {
        await axios.post('https://api.sosyaldugun.com/api/contact/create', values);
        toast.success(`${values.firstname}, mesajınız başarıyla gönderildi.`, {
          position: 'top-left'
        });
        resetForm();
        
      } catch (error) {
        toast.error('Mesaj gönderilirken bir hata oluştu.');
        console.log(error);
      }
    },
    validationSchema: contactSchema
  });

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className='mb-30'>
        <input
          value={values.firstname}
          onChange={handleChange}
          onBlur={handleBlur}
          name="firstname"
          type="text"
          placeholder="Adınızı Giriniz"
          required
        />
        {touched.firstname && <ErrorMsg error={errors.firstname} />}
      </div>
      <div className='mb-30'>
        <input
          value={values.lastname}
          onChange={handleChange}
          onBlur={handleBlur}
          name="lastname"
          type="text"
          placeholder="Soyadınızı Giriniz"
          required
        />
        {touched.lastname && <ErrorMsg error={errors.lastname} />}
      </div>
      <div className='mb-30'>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          type="email"
          placeholder="Mailinizi Giriniz"
          required
        />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className='mb-30'>
        <input
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          name="phone"
          type='tel'
          pattern="[0-9]*"
          placeholder="Telefon Numaranızı Giriniz"
          required
       />
        {touched.phone && <ErrorMsg error={errors.phone} />}
      </div>
      <div className='mb-30'>
        <textarea
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          name="message"
          placeholder="Mesajınızı Giriniz"
          required
        ></textarea>
        {touched.message && <ErrorMsg error={errors.message} />}
      </div>
      <button type="submit" className="tp-btn-yellow">
        Gönder
      </button>
    </form>
  );
};

export default ContactForm;
