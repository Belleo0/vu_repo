import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';

export interface IAdress {
  code: string;
  label: string;
  value: number;
}

export interface IArea {
  state: IAdress;
  city: IAdress;
  dong: IAdress;
}

export default ({ area, onClick }: { area: IArea; onClick: any }) => {
  return (
    <Container onClick={onClick}>
      <Address>
        {`${area.state.label} ${area.city.label} ${area.dong.label}`}
      </Address>
      <Button src={getAssetURL('../assets/ic-circle-x.svg')} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 8px 14px 9px;
  border-radius: 20px;
  border: solid 1px #258fff;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

const Address = styled.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #258fff;
  margin-right: 10px;
`;

const Button = styled.img`
  width: 16px;
  height: 16px;
`;
