import { InputHTMLAttributes } from 'react';
import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  register: any,
  errors?: any
}

const Input = ({ label, register, errors, ...rest }: InputProps) => {
  return (
    <Container error={errors}>
      <label>{label}</label>
      <input/>
    </Container>
  );
};

export default Input;
