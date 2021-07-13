import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: number;
  isActive?: boolean;
}

export interface ContainerProps {
  isActive?: boolean;
}
