import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

export interface PopoverProps {
  onClose: () => void;
  containerStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

export interface PopoverComponentProps extends PopoverProps {
  children: string | React.ReactNode;
}

export default ({
  onClose,
  children,
  containerStyle = {},
  wrapperStyle = {},
}: PopoverComponentProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const settingsWindowRef = useRef<HTMLDivElement>(null);
  const currentRef = settingsWindowRef.current;

  useEffect(() => {
    const pageClickEvent = (e: any) => {
      if (!currentRef?.contains(e.target)) {
        onClose();
      }
    };

    window.addEventListener('click', pageClickEvent, true);

    return () => {
      window.removeEventListener('click', pageClickEvent, true);
    };
  });

  return <Container ref={settingsWindowRef}>{children}</Container>;
};

const Container = styled.div`
  position: absolute;
`;
