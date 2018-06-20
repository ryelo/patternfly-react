import { HTMLProps } from 'react';

export interface BoxBodyProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

declare const BoxBody: React.SFC<BoxBodyProps>;

export default BoxBody;
