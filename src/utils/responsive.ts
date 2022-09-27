import { css } from '@emotion/react';

export const mobile = (v: any) => {
  return css`
    @media only screen and (max-width: 360px) {
      ${v}
    }
  `;
};
