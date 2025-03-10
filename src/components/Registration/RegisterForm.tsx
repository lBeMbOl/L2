import React, { useState, useEffect } from "react";
import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const RegisterForm: React.FC = () => {
  const handleChange =
    (prop: keyof typeof values) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const [values, setValues] = useState({
    login: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [touched, setTouched] = useState<TouchedFields>({
    login: false,
    password: false,
    confirmPassword: false,
    email: false,
  });

  const [errors, setErrors] = useState({
    login: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "password":
        if (!value) return "Введите пароль";
        if (value.length < 6) return "Минимум 6 символов";
        if (!PASSWORD_REGEX.test(value)) return "Недопустимые символы";
        return "";
      case "confirmPassword":
        if (!value) return "Подтвердите пароль";
        return value !== values.password ? "Пароли не совпадают" : "";
      case "email":
        if (!value) return "Введите Email";
        return !EMAIL_REGEX.test(value) ? "Некорректный email" : "";
      case "login":
        if (!value) return "Введите логин";
        return value.length < 3 ? "Минимум 3 символа" : "";
      default:
        return "";
    }
  };

  const handleBlur = (field: keyof TouchedFields) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  useEffect(() => {
    const newErrors = {
      login: validateField("login", values.login),
      password: validateField("password", values.password),
      confirmPassword: validateField("confirmPassword", values.confirmPassword),
      email: validateField("email", values.email),
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => error === "");
    setIsFormValid(isValid);
  }, [values]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (isFormValid) {
      console.log("Форма отправлена:", values);
      // Сброс формы после отправки
      setValues({ login: "", password: "", confirmPassword: "", email: "" });
      setTouched({
        login: false,
        password: false,
        confirmPassword: false,
        email: false,
      });
      setIsSubmitted(false);
    }
  };

  const shouldShowError = (field: keyof TouchedFields) => {
    return (touched[field] || isSubmitted) && !!errors[field];
  };

  return (
    <StyledContainer>
      <Title>Регистрация</Title>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextField
          label="Логин"
          value={values.login}
          onChange={handleChange("login")}
          onBlur={handleBlur("login")}
          error={shouldShowError("login")}
          helperText={
            shouldShowError("login") && <ErrorText>{errors.login}</ErrorText>
          }
        />

        <StyledTextField
          type={isPasswordVisible ? "text" : "password"}
          label="Пароль"
          value={values.password}
          onChange={handleChange("password")}
          onBlur={handleBlur("password")}
          error={shouldShowError("password")}
          helperText={
            shouldShowError("password") && (
              <ErrorText>{errors.password}</ErrorText>
            )
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  edge="end"
                >
                  {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <StyledTextField
          type={isPasswordVisible ? "text" : "password"}
          label="Подтверждение пароля"
          value={values.confirmPassword}
          onChange={handleChange("confirmPassword")}
          onBlur={handleBlur("confirmPassword")}
          error={shouldShowError("confirmPassword")}
          helperText={
            shouldShowError("confirmPassword") && (
              <ErrorText>{errors.confirmPassword}</ErrorText>
            )
          }
        />
        <StyledTextField
          label="Email"
          value={values.email}
          onChange={handleChange("email")}
          onBlur={handleBlur("email")}
          error={shouldShowError("email")}
          helperText={
            shouldShowError("email") && <ErrorText>{errors.email}</ErrorText>
          }
        />
        <SubmitButton
          variant="contained"
          color="primary"
          type="submit"
          disabled={!isFormValid}
          sx={{
            bgcolor: theme.colors.buttonBg,
            color: "white",
            fontWeight: 700, // Альтернативная запись жирного
            fontSize: "1.1rem", // Размер шрифта
            textTransform: "none",
            "&:hover": {
              bgcolor: theme.colors.buttonHover,
            },
          }}
        >
          Зарегистрироваться
        </SubmitButton>
      </StyledForm>
    </StyledContainer>
  );
};

const PASSWORD_REGEX = /^[A-Za-z\d@$!%*?&]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const StyledContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${theme.colors.fontPrimary};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledTextField = styled(TextField)`
  && {
    .MuiOutlinedInput-root {
      border-radius: 8px;
    }
  }
`;

const ErrorText = styled.span`
  color: #d32f2f;
  font-size: 0.75rem;
  margin-top: -0.5rem;
`;

const SubmitButton = styled(Button)`
  && {
    padding: 12px;
    border-radius: 8px;
    text-transform: none;
    background-color: ${theme.colors.buttonBg};
  }
`;

type TouchedFields = {
  login: boolean;
  password: boolean;
  confirmPassword: boolean;
  email: boolean;
};
