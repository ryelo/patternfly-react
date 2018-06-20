import { HTMLProps } from 'react';

export interface BoxProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

declare const Box: React.SFC<BoxProps>;

export default Box;
