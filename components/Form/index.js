// 3rd parties
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

// styles
import LoaderForm from '../LoaderForm';
import {
  Erro, Form, InputForm, Position, Textarea, BtnSubmit, Row, Column,
} from './styles';

const ContactForm = function ContactFormPage({ setFormStatus, setShowPopUp }) {
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

    return fetch('https://api.emailjs.com/api/v1.0/email/sendddd', config);
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      tel: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'O nome precisa ter no mínimo 3 caracteres.')
        .required('Preencha o nome.'),
      tel: Yup.string()
        .min(15, 'O telefone precisa ter no mínimo 11 números.')
        .required('Preencha o número.'),
      email: Yup.string()
        .email('E-mail inválido.')
        .required('Preencha o e-mail.'),
      subject: Yup.string()
        .min(10, 'O assunto precisa ter no máximo 10 caracteres')
        .required('Preencha o assunto.'),
      message: Yup.string()
        .min(20, 'A mensagem deve ter no mínimo 20 caracteres.')
        .required('Preencha a mensagem.'),
    }),
    onSubmit: async (values) => {
      setShowPopUp(true);

      const response = await submitFormData(values);

      setFormStatus(response.ok ? 'success' : 'error');
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
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
          {formik.touched.name && formik.errors.name ? (
            <Position>
              <Erro>{formik.errors.name}</Erro>
            </Position>
          ) : null}
        </Column>

        <Column>
          <InputForm
            name="tel"
            type="text"
            maxLength={15}
            placeholder="Telefone"
            onChange={(e) => {
              const { value } = e.target;

              formik.setFieldValue('tel', mtel(value));
            }}
            onBlur={formik.handleBlur}
            value={formik.values.tel}
            error={formik.errors.tel}
            touched={formik.touched.tel}
            readOnly={formik.isSubmitting}
          />
          {formik.touched.tel && formik.errors.tel ? (
            <Position>
              <Erro>{formik.errors.tel}</Erro>
            </Position>
          ) : null}
        </Column>
      </Row>

      <Row>
        <Column>
          <InputForm
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.errors.email}
            touched={formik.touched.email}
            readOnly={formik.isSubmitting}
          />
          {formik.touched.email && formik.errors.email ? (
            <Position>
              <Erro>{formik.errors.email}</Erro>
            </Position>
          ) : null}
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
          {formik.touched.subject && formik.errors.subject ? (
            <Position>
              <Erro>{formik.errors.subject}</Erro>
            </Position>
          ) : null}
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
      {formik.touched.message && formik.errors.message ? (
        <Position>
          <Erro>{formik.errors.message}</Erro>
        </Position>
      ) : null}
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
  setShowPopUp: PropTypes.func.isRequired,
};
export default ContactForm;
