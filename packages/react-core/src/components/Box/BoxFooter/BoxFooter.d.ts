import { HTMLProps } from 'react';

export interface BoxFooterProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

declare const BoxFooter: React.SFC<BoxFooterProps>;

export default BoxFooter;
