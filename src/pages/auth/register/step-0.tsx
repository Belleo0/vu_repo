import styled from '@emotion/styled';
import AuthLayout from '@layout/AuthLayout';
import { useNavigate } from 'react-router-dom';
import getAssetURL from '@utils/getAssetURL';
import { mobile } from '@utils/responsive';
import useWindowSize from '@hooks/useWindowSize';

export default () => {
  const navigate = useNavigate();

  const nxtStepHandler = (usr: number) => {
    // usr 1 = 건설사, 2 = 레미콘사
    navigate('/auth/register/step-1', {
      state: {
        userType: usr,
      },
    });
  };

  // 현재 가로 화면 사이즈
  const { width } = useWindowSize();

  return (
    <AuthLayout>
      <ContainerWrapper>
        <Title>CONAZ에 오신 것을 환영합니다</Title>
        <SubTitle>
          {width > 360 ? 'CONAZ 회원가입을 통해 다양한 혜택과 서비스를 이용하세요.' : '회원가입을 통해 다양한 혜택과 서비스를 이용하세요.'}
        </SubTitle>
        <ButtonWrap>
          <RegisterButtonL
            onClick={() => {
              nxtStepHandler(1);
            }}
          >
            건설사 회원가입
          </RegisterButtonL>
          <RegisterButtonR
            onClick={() => {
              nxtStepHandler(2);
            }}
          >
            레미콘사 회원가입
          </RegisterButtonR>
        </ButtonWrap>
      </ContainerWrapper>
    </AuthLayout>
  );
};

const ContainerWrapper = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  height: 852px;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: multiply;
  background-image: url(${getAssetURL('../assets/img/main.png')});
  background-size: cover;
  ${mobile(
    { maxWidth: '360px' , 
      maxHeight:'720px' , 
      padding: '50px 20px' , 
      backgroundSize : 'c' , 
      backgroundRepeat : 'no-repeat'
    })}
`;

const ButtonWrap = styled.div`
  width: 460px;
  margin-top: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;

  ${mobile(
    { 
      maxWidth: '320px' , 
      maxHeight:'56px' , 
      fontSize: '16px' ,
    })}
`;

const RegisterButtonL = styled.div`
  width: 220px;
  height: 70px;
  border-radius: 12px;
  background-color: #2580ec;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;

  ${mobile(
    { 
      maxWidth: '150px' , 
      maxHeight:'56px' , 
      fontSize: '16px' ,
      lineHeight: '62px' ,
      letterSpacing: '-0.4px' ,
    })}
`;

const RegisterButtonR = styled.div`
  width: 220px;
  height: 70px;
  border-radius: 12px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;
  font-weight: 500;
  color: #000;
  cursor: pointer;

  ${mobile(
    { 
      maxWidth: '150px' , 
      maxHeight:'56px' , 
      fontSize: '16px' ,
      lineHeight: '62px' ,
      letterSpacing: '-0.4px' ,
    })}
`;

const SubTitle = styled.div`
  margin-right: auto;
  margin-left: auto;
  font-weight: 200;
  font-size: 24px;
  color: #fff;
  ${mobile(
    { 
      marginTop: '6px',
      maxWidth: '295px' , 
      maxHeight:'20px' , 
      fontSize: '14px' ,
      lineHeight: '15px' ,
      letterSpacing: '-0.28px' ,
      textShadow: '0 0 3px rgba(0,0,0,0.5)'
    })}
`;

const Title = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  line-height: 1.48;
  ${mobile(
    { 
      maxWidth: '315px' , 
      maxHeight:'35px' , 
      fontSize: '24px' ,
      lineHeight: '32px' ,
      letterSpacing: '-0.48px' ,
      textShadow: '0 0 5px rgba(0,0,0,0.5)'
    })}
`;
