import api from '@api';
import useAssignmentInfo from '@api/useAssignmentInfo';
import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button, { ButtonSize, ButtonType } from './Button';

export default ({
  id,
  type,
  mutate: mutateMessages,
}: {
  id: number;
  type: string;
  mutate: () => any;
}) => {
  const navigate = useNavigate();
  const isFieldUser = useIsFieldUser();
  const { data: assignmentData, refetch } = useAssignmentInfo(id);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (loading === false) {
      setLoading(true);
      try {
        await api.post(`/assignments/${id}/confirm`);
      } catch (err) {
        console.log(err);
        window.alert('에러 발생..');
      } finally {
        await refetch();
        await mutateMessages();
        setLoading(false);
      }
    }
  };

  // 건설현장>레미콘공장(제안) 요청인데 건설현장멤버가 보는경우 or 레미콘공장>건설현장(역제안) 요청인데 레미콘공장유저가 보는경우 (액션 X)
  if (
    (type === 'FIELD_TO_FACTORY' && isFieldUser === true) ||
    (type === 'FACTORY_TO_FIELD' && isFieldUser === false)
  ) {
    if (assignmentData?.status === 'REQUESTED') {
      return (
        <ButtonWrap>
          <Button type={ButtonType.OUTLINE} size={ButtonSize.SMALL}>
            확인 중
          </Button>
        </ButtonWrap>
      );
    } else if (assignmentData?.status === 'CONFIRMED') {
      return (
        <ButtonWrap>
          <Button type={ButtonType.GRAY} size={ButtonSize.SMALL}>
            확인완료
          </Button>
        </ButtonWrap>
      );
    } else if (assignmentData?.status === 'REMOVED') {
      return null;
    }
    return null;
    // (액션 O)
  } else {
    if (assignmentData?.status === 'REQUESTED') {
      return (
        <ButtonWrap>
          <Button
            type={ButtonType.OUTLINE}
            size={ButtonSize.SMALL}
            containerStyle={{ marginRight: 14 }}
            onClick={() => navigate('/calendar')}
          >
            캘린더로 이동
          </Button>
          <Button
            type={ButtonType.PRIMARY}
            size={ButtonSize.SMALL}
            onClick={handleSubmit}
          >
            확인하기
          </Button>
        </ButtonWrap>
      );
    } else if (assignmentData?.status === 'CONFIRMED') {
      return (
        <ButtonWrap>
          <Button type={ButtonType.GRAY} size={ButtonSize.SMALL}>
            확인완료
          </Button>
        </ButtonWrap>
      );
    } else if (assignmentData?.status === 'REMOVED') {
      return null;
    }
    return null;
  }
};

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
`;
