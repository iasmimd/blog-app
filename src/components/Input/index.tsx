import { InputHTMLAttributes } from 'react';
import { IconType } from "react-icons";
import { Container, InputContainer } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: any;
  icon: IconType;
  error?: any;
}

const Input = ({ label, name, register, icon:Icon, error, ...rest }: InputProps) => {
  return  (
    <Container>
      <div>
        {label} {!!error && <span> - {error} </span>}
      </div>
      <InputContainer error={!!error}>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};

export default Input;
