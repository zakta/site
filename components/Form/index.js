// 3rd parties
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

// styles
import LoaderForm from '../LoaderForm';
import {
  Erro, Form, InputForm, Position, Textarea, BtnSubmit, Row, Column,
} from './styles';

const ContactForm = function ContactFormPage({ setFormStatus }) {
  function mtel(phoneRaw) {
    let phoneMasked = phoneRaw;

    phoneMasked = phoneMasked.replace(/\D/g, '');
    phoneMasked = phoneMasked.replace(/^(\d{2})(\d)/g, '($1) $2');
    phoneMasked = phoneMasked.replace(/(\d)(\d{4})$/, '$1-$2');

    return phoneMasked;
  }

  function submitFormData(dataForm) {
    const data = {
      service_id: 'service_mpjyx3g',
      template_id: 'template_w8vin3g',
      user_id: 'user_rizvggYkHJhDIQF4MJsbR',
      template_params: dataForm,
    };

    const config = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-type': 'application/json',
      }),
    };

    return fetch('https://api.emailjs.com/api/v1.0/email/send', config);
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Mínimo 3 letras')
        .required('Preencha o nome'),
      phone: Yup.string()
        .min(15, 'No mínimo 11 números')
        .required('Preencha o número'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('Preencha o e-mail'),
      subject: Yup.string()
        .required('Preencha o assunto'),
      message: Yup.string()
        .required('Preencha a mensagem'),
    }),
    onSubmit: async (values) => {
      const response = await submitFormData(values);

      setFormStatus(response.ok ? 'success' : 'error');

      if (response.ok) {
        formik.resetForm();
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} data-aos="fade-up">
      <Row>
        <Column>
          <InputForm
            name="name"
            type="text"
            placeholder="Nome"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.errors.name}
            touched={formik.touched.name}
            readOnly={formik.isSubmitting}
          />

          {formik.touched.name && formik.errors.name && (
            <Position>
              <Erro>{formik.errors.name}</Erro>
            </Position>
          )}
        </Column>

        <Column>
          <InputForm
            name="phone"
            type="text"
            maxLength={15}
            placeholder="Telefone"
            onChange={(e) => formik.setFieldValue('phone', mtel(e.target.value))}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            error={formik.errors.phone}
            touched={formik.touched.phone}
            readOnly={formik.isSubmitting}
          />

          {formik.touched.phone && formik.errors.phone && (
            <Position>
              <Erro>{formik.errors.phone}</Erro>
            </Position>
          )}
        </Column>
      </Row>

      <Row>
        <Column>
          <InputForm
            name="email"
            type="text"
            placeholder="E-mail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.errors.email}
            touched={formik.touched.email}
            readOnly={formik.isSubmitting}
          />

          {formik.touched.email && formik.errors.email && (
            <Position>
              <Erro>{formik.errors.email}</Erro>
            </Position>
          )}
        </Column>

        <Column>
          <InputForm
            name="subject"
            type="text"
            placeholder="Assunto"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            error={formik.errors.subject}
            touched={formik.touched.subject}
            readOnly={formik.isSubmitting}
          />

          {formik.touched.subject && formik.errors.subject && (
            <Position>
              <Erro>{formik.errors.subject}</Erro>
            </Position>
          )}
        </Column>
      </Row>

      <Textarea
        name="message"
        type="submit"
        placeholder="Mensagem"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        error={formik.errors.message}
        touched={formik.touched.message}
        readOnly={formik.isSubmitting}
      />

      {formik.touched.message && formik.errors.message && (
        <Position>
          <Erro>{formik.errors.message}</Erro>
        </Position>
      )}

      <BtnSubmit
        disabled={formik.isSubmitting}
        type="submit"
        loader={formik.isSubmitting}
        className="loader"
      >
        Enviar Mensagem

        <LoaderForm loader={formik.isSubmitting} />
      </BtnSubmit>
    </Form>
  );
};

ContactForm.propTypes = {
  setFormStatus: PropTypes.func.isRequired,
};

export default ContactForm;
