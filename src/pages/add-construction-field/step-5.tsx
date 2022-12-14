import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import FieldCreateLayout from '@layout/FieldCreateLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '@api';
import Modal from '@components/TextModal';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { setSelectedSpaceInfo } from '@data/space';

export default () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [chkText, setChkText] = useState<any>(0);

  const [remarks, setRemarks] = useState('');

  const [successOpenModal, setSuccessOpenModal] = useState(false);
  let submitFlag = false;

  const [state, setState] = useLocalStorage('@add-construction-field', {
    remarks,
  });

  useEffect(() => {
    window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      e.returnValue = '';
    });
  }, []);

  useEffect(() => {
    setState((prev: any) => ({ ...prev, remarks }));
  }, [remarks]);

  useEffect(() => {
    if (state?.remarks) setRemarks(state.remarks);
  }, [state]);

  useEffect(() => {
    console.log(location.state);
  }, []);

  const requestSignUp = () => {
    submitFlag = true;
    api
      .post('/field-spaces', {
        name: (location.state as any)?.fieldNm,
        basic_address: (location.state as any)?.fieldAddr,
        detail_address: (location.state as any)?.secFieldAddr,
        latitude: (location.state as any)?.position?.latitude,
        longitude: (location.state as any)?.position?.longitude,
        field_info: {
          start_at: (location.state as any)?.constructionStartDate,
          end_at: (location.state as any)?.constructionEndDate,
          payment_method: (location.state as any)?.paymentType,
          payment_expire_date: (location.state as any)?.maturity,
          payment_due_date: (location.state as any)?.paymentDate,
          need_amount: (location.state as any)?.requirement,
          remarks: remarks,
        },
      })
      .then(() => {
        handleConfirm();
      })
      .catch(() => (submitFlag = false));
  };
  const prvPageHandler = () => {
    navigate('/add-construction-field/step-4');
  };

  const chkTextLength = (e: any) => {
    const length = e.target.value.length;
    const txt = e.target.value;
    setRemarks(txt);
    setChkText(length);
  };

  const successCloseModal = () => {
    if (!submitFlag) {
      requestSignUp();
    }
    setSuccessOpenModal(false);
  };

  async function handleConfirm() {
    submitFlag = true;
    const {
      data: { result },
    } = await api.get('field-spaces');
    if (result) {
      const currentArr = result.at(-1);
      dispatch(setSelectedSpaceInfo(currentArr));
      localStorage.removeItem('@add-construction-field');
      navigate('/supplier-choice');
    }
  }

  return (
    <FieldCreateLayout>
      <Container>
        <Modal
          open={successOpenModal}
          onClose={() => successCloseModal()}
          submitText={'??????'}
          content={'???????????? ????????? ?????????????????????.'}
        />

        <TopTitleWrapper>
          <BorderNumberWrapper>
            <BorderNumber>5</BorderNumber>
          </BorderNumberWrapper>
          <TopTitleBox>????????????</TopTitleBox>
        </TopTitleWrapper>

        <InputItemWrapper>
          <FieldName>???????????? ?????? (??????)</FieldName>
          <InputStyle
            value={remarks}
            onChange={(e) => chkTextLength(e)}
            maxLength={500}
          />
          <LengthCaption>{chkText}/500</LengthCaption>
        </InputItemWrapper>

        <BottomBtnWrapper>
          <InActiveBtn
            style={{ color: '#222222', cursor: 'pointer' }}
            onClick={() => prvPageHandler()}
          >
            ??????
          </InActiveBtn>
          <ActiveBtn
            onClick={() => {
              setSuccessOpenModal(true);
            }}
          >
            ??????
          </ActiveBtn>
        </BottomBtnWrapper>
      </Container>
    </FieldCreateLayout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 0 60px 60px;

  user-select: none;
`;

const TopTitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 45px;
`;

const BorderNumberWrapper = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid #258fff;
  border-radius: 50%;
  text-align: -webkit-center;
`;

const BorderNumber = styled.div`
  height: 24px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  color: #258fff;
  line-height: 1.5;
`;

const TopTitleBox = styled.div`
  height: 29px;
  margin: 0 0 0 6px;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.4px;
  text-align: left;
  color: #222;
  line-height: 1.6;
`;

const FieldName = styled.div`
  height: 24px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000000;
  line-height: 1.4;
  margin-bottom: 10px;
`;

const InputItemWrapper = styled.div`
  width: 540px;
  height: 259px;
`;

const BottomBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 540px;
  height: 50px;
  flex-direction: row;
  margin-top: 349px;
`;

const ActiveBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 50px;
  background-color: #258fff;
  border-radius: 6px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

const InActiveBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 50px;
  background-color: #f2f2f2;
  border-radius: 6px;

  font-size: 16px;
  font-weight: 500;
  color: #999;
`;

const InputStyle = styled.textarea`
  width: 540px;
  height: 200px;
  margin-bottom: 6px;
  padding: 20px;
  border-radius: 6px;
  border: solid 1px #e3e3e3;
  background-color: #fff;
  resize: none;

  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;

  :focus {
    outline: none;
  }
`;

const LengthCaption = styled.div`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: right;
  color: #999;
`;
