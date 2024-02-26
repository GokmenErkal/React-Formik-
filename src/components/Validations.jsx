import * as yup from 'yup';

const Validations = yup.object({
    email: yup.string().email("Geçerli bir email girin").required("Zorunlu alan"),
    password: yup.string().min(5, "Parolanız en 5 karakterden oluşmalı").required("Zorunlu alan"),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], "Parolalar uyuşmuyor").required("Zorunlu alan")
  });

export default Validations;