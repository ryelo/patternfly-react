import { HTMLProps } from 'react';

export interface BoxProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

declare const BoxHeader: React.SFC<BoxProps>;

export default BoxHeader;
