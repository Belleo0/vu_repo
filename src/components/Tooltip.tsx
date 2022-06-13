import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

export interface TooltipProps {
  id?: string;
  containerStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

export interface PopoverComponentProps extends TooltipProps {
  children: string | React.ReactNode;
}

export default ({
  id,
  children,
  containerStyle = {},
  wrapperStyle = {},
}: PopoverComponentProps) => {
  const settingsWindowRef = useRef<HTMLDivElement>(null);

  return <Container ref={settingsWindowRef}>{children}</Container>;
};

const Container = styled.div`
  position: absolute;
`;
