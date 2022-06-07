import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { Container } from '../Button/style';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default Button;
