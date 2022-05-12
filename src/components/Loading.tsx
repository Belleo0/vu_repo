import styled from '@emotion/styled';
import React from 'react';

export default () => {
  return (
    <Container>
      <LoadingDiv>
        {/* <LoadingSvg src={require('../assets/loading.gif').default} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            margin: 'auto',
            background: 'none',
            display: 'block',
            shapeRendering: 'auto',
          }}
          width="50px"
          height="50px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#258fff"
            stroke-width="3"
            r="35"
            stroke-dasharray="164.93361431346415 56.97787143782138"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            ></animateTransform>
          </circle>
        </svg>
      </LoadingDiv>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const LoadingDiv = styled.div`
  display: block;
`;

const LoadingSvg = styled.img`
  display: block;
  width: 80px;
  height: 80px;
`;
