import { HTMLProps } from 'react';

export interface BoxProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

declare const BoxFooter: React.SFC<BoxProps>;

export default BoxFooter;
