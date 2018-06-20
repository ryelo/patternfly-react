import { HTMLProps } from 'react';

export interface BoxHeaderrops extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

declare const BoxHeader: React.SFC<BoxHeaderProps>;

export default BoxHeader;
