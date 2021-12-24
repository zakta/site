// 3rd parties
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Erro, Form, InputForm, Position, Textarea,
} from './styles';

const ContactForm = function ContactFormPage() {
  function showPopUp() {
    const popUp = document.getElementById('popUp');
    const display = popUp.classList.remove('showPopUp');

    return display;
  }

  function mtel(phoneRaw) {
    let phoneMasked = phoneRaw;

    phoneMasked = phoneMasked.replace(/\D/g, '');
    phoneMasked = phoneMasked.replace(/^(\d{2})(\d)/g, '($1) $2');
    phoneMasked = phoneMasked.replace(/(\d)(\d{4})$/, '$1-$2');

    return phoneMasked;
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
    onSubmit: () => {
      showPopUp();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <div style={{ position: 'relative' }}>
        <InputForm
          name="name"
          type="text"
          placeholder="Nome"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.touched.name && formik.errors.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <Erro>{formik.errors.name}</Erro>
        ) : null}
      </div>

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
        error={formik.touched.tel && formik.errors.tel}
      />
      {formik.touched.tel && formik.errors.tel ? (
        <Position>
          <Erro>{formik.errors.tel}</Erro>
        </Position>
      ) : null}
      <InputForm
        name="email"
        type="email"
        placeholder="E-mail"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <Position>
          <Erro>{formik.errors.email}</Erro>
        </Position>
      ) : null}
      <InputForm
        name="subject"
        type="text"
        placeholder="Assunto"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.subject}
        error={formik.touched.subject && formik.errors.subject}
      />
      {formik.touched.subject && formik.errors.subject ? (
        <Position>
          <Erro>{formik.errors.subject}</Erro>
        </Position>
      ) : null}
      <Textarea
        name="message"
        type="submit"
        placeholder="Mensagem"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        error={formik.touched.message && formik.errors.message}
      />
      {formik.touched.message && formik.errors.message ? (
        <Position>
          <Erro>{formik.errors.message}</Erro>
        </Position>
      ) : null}
      <button type="submit">Enviar Mensagem</button>
    </Form>
  );
};

export default ContactForm;
