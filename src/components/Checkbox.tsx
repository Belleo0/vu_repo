import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';

interface ICheckbox {
  value: boolean;
  onChange: () => any;
  label: string;
  containerStyle: React.CSSProperties;
}

export default ({ value, onChange, label, containerStyle }: ICheckbox) => {
  return (
    <Container style={containerStyle}>
      <Icon
        src={getAssetURL(`../assets/ic-check-box-${value ? 'on' : 'off'}.svg`)}
        onClick={() => onChange()}
      />
      <Text>{label}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #222;
`;
