import { useFormik } from "formik";
import * as Yup from "yup";
import { Erro, Form, InputForm, Textarea } from "./styles";

export default function ContactForm() {
  function showPopUp(){
    const popUp= document.getElementById('popUp');
    const display= popUp.classList.remove('showPopUp');
    return display;
  }

  function mtel(o) {
    o = o.replace(/\D/g,"");
    o = o.replace(/^(\d{2})(\d)/g, "($1) $2");
    o = o.replace(/(\d)(\d{4})$/, "$1-$2");
    return o;
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      tel: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "O nome precisa ter no mínimo 3 caracteres.")
        .required("É preciso preencher o nome."),
      tel: Yup.string()
        .min(15, "O telefone precisa ter no mínimo 11 números.")
        .required("É preciso preencher o número."),
      email: Yup.string()
        .email("E-mail inválido.")
        .required("É preciso preencher o e-mail."),
      subject: Yup.string()
        .min(10, "O assunto precisa ter no máximo 10 caracteres")
        .required("É preciso preencher o assunto."),
      message: Yup.string()
        .min(20, "A mensagem deve ter no mínimo 20 caracteres.")
        .required("É preciso preencher a mensagem."),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
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
      <InputForm
        name="tel"
        type="text"
        maxLength={15}
        placeholder="Telefone"
        onChange={e => {
          const value= e.target.value;

          formik.setFieldValue('tel', mtel(value))
        }}
        onBlur={formik.handleBlur}
        value={formik.values.tel}
        error={formik.touched.tel && formik.errors.tel}
      />
      {formik.touched.tel && formik.errors.tel ? (
        <Erro>{formik.errors.tel}</Erro>
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
        <Erro>{formik.errors.email}</Erro>
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
        <Erro>{formik.errors.subject}</Erro>
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
        <Erro>{formik.errors.message}</Erro>
      ) : null}
      <button type="submit" onSubmit={()=> {
        showPopUp();
      }}>Enviar Mensagem</button>
    </Form>
  );
}
