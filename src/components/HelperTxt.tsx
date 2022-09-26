import React, { CSSProperties, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface IHelpTxt {
  helperTxt: string;
  containerStyle: CSSProperties;
}

export default ({
  helperTxt,
  containerStyle,
}: IHelpTxt & HTMLAttributes<HTMLDivElement>) => {
  return (
    <Box style={containerStyle}>
      {helperTxt.split('\n').map((txt, index) => (
        <div key={index}>
          {txt}
          <br />
        </div>
      ))}
    </Box>
  );
};

const Box = styled.div`
  color: #999;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.24px;
  text-align: left;
`;
