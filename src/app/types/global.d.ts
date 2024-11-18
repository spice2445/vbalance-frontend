declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classnames: IClassNames;
  export = classnames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';

declare module '*.svg' {
  import React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare const __IS_DEV__: boolean;
declare const __API_URL__: string;
declare const __CODE_AUTH_TEST__: string;
declare const __LOCIZE_API_KEY__: string;
declare const __LOCIZE_PROJECT_ID__: string;
declare const __WALLET_CONNECT_ID__: string;
declare const __WEB3_NETWORK__: 'testnet' | 'mainnet';
declare const __PRICE_TICKET__: number;
