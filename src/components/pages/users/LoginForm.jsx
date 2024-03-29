import React, { useState } from "react";
import Button from "../../Button";
import { useUserContext } from "../../../contexts/UserContext";
import { Form } from "../../form";
import FormField from "./FormField";

const formValidations = {
  email: {
    isEmail: "Debes introducir un correo electrónico"
  },
  password: {
    isRequired: "Debes introducir una contraseña"
  }
};

const LoginForm = () => {
  const [loginErrorMessage, setLoginErrorMessage] = useState(null);
  const { login } = useUserContext();

  const loginUser = async formUser => {
    setLoginErrorMessage(null);
    try {
      await login(formUser);
    } catch (error) {
      setLoginErrorMessage(error.message);
    }
  };

  return (
    <Form
      className="users-form"
      onSubmit={loginUser}
      validate={formValidations}
    >
      <FormField placeholder="Correo electrónico" type="email" name="email" />
      <FormField placeholder="Contraseña" type="password" name="password" />
      <p className="form-error-message users-error">{loginErrorMessage}</p>
      <Button type="submit" primary fullWidth>
        Iniciar Sesión
      </Button>
    </Form>
  );
};

export default LoginForm;
