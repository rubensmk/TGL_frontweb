import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: string;
  active?: boolean;
};

export interface ContainerProps {
  color: string;
  isActive?: boolean;
}
