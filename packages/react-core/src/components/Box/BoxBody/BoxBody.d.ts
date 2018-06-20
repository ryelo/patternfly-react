import { HTMLProps } from 'react';

export interface BoxProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

declare const BoxBody: React.SFC<BoxProps>;

export default BoxBody;
