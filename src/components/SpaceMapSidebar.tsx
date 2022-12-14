import api from '@api';
import styled from '@emotion/styled';
import { useEffect, useMemo, useState } from 'react';
import SearchInput from './SearchInput';
import Button, { ButtonType } from './Button';
import { css } from '@emotion/react';
import FilterSelect from './FilterSelect';
import Modal, { ModalContainer, ModalTitle, ShadowButtonWrap } from './Modal';
import MapSpaceCard from './MapSpaceCard';
import useSpaces from '@api/useSpaces';
import SelectSpaceCard from './SelectSpaceCard';
import TextModal from './TextModal';
import { useLocation, useNavigate } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';
import useIsLogin from '@hooks/useIsLogin';
import Loading from './Loading';

export default ({
  factories,
  duration,
  setDuration,
  order,
  setOrder,
  selectedFieldInfo,
  setSelectedFieldInfo,
  selectedFactoryIds,
  selectedFieldId,
  setSelectedSpaceInfo,
  setIsInfoModalOpen,
  handleClickFactoryCard,
  address,
  setAddress,
  setRealAddress,
  orderByFactories,
}: any) => {
  const isLogin = useIsLogin();

  const location = useLocation();

  const navigate = useNavigate();

  const { data: spaces } = useSpaces('N');

  const [tempSelectedFieldInfo, setTempSelectedFieldInfo] = useState<any>(null);

  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);

  const [isNotFoundSpaceModal, setIsNotFoundSpaceModal] =
    useState<boolean>(false);

  const [isFinishRequestEstimation, setIsFinishRequestEstimation] =
    useState(false);

  const [isDuplicatedEstimation, setIsDuplicatedEstimation] = useState(false);

  const [duplicatedFactoryIds, setDuplicatedFactoryIds] = useState([]);

  const [isPostcodeModalOpened, setIsPostcodeModalOpened] = useState(false);

  const handleOpenSelectModal = () => {
    if (spaces && spaces.length > 0) {
      setIsSelectModalOpen(true);
    } else {
      setIsNotFoundSpaceModal(true);
    }
  };

  const handleOpenAddSpaceModal = () => {
    if (!selectedFieldInfo) {
      setIsSelectModalOpen(true);
      return;
    }
    if (spaces && spaces.length > 0 && !(location?.state as any)?.searchText) {
      setIsSelectModalOpen(true);
    } else {
      setIsNotFoundSpaceModal(true);
    }
  };

  const handleCloseSelectModal = () => {
    setIsSelectModalOpen(false);
  };

  const handleSubmitSelectModal = () => {
    setSelectedFieldInfo(tempSelectedFieldInfo);
    setIsSelectModalOpen(false);
  };

  const handleRequestEstimation = async () => {
    const { data } = await api.post('/estimations', {
      field_id: selectedFieldInfo.id,
      factory_ids: selectedFactoryIds,
    });

    if (data?.result?.duplicated_factory_ids.length > 0) {
      setDuplicatedFactoryIds(data?.result?.duplicated_factory_ids);
      setIsDuplicatedEstimation(true);
    } else {
      setIsFinishRequestEstimation(true);
    }
  };

  // console.log(spaces?.length === 0);

  function handleCheckSpaces(v: any) {
    if (spaces) {
      if (!selectedFieldInfo) {
        setIsSelectModalOpen(true);
      } else handleClickFactoryCard(v);
    } else {
      setIsNotFoundSpaceModal(true);
    }
  }

  function handleAddConstruction() {
    navigate('/add-construction-field/step-1');
  }

  //????????? ????????????:
  return (
    <Container>
      <TopSectionWrap>
        <SearchInput
          icon="ic-local"
          containerStyle={
            selectedFieldInfo
              ? { cursor: 'pointer' }
              : { marginBottom: 30, cursor: 'pointer' }
          }
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            // if (e.target.value !== selectedFieldInfo?.basic_address) {
            //   setSelectedFieldInfo(null);
            // }
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              setRealAddress(address);
              setSelectedFieldInfo(null);
            }
          }}
          onClick={() => {
            setRealAddress(address);
            setSelectedFieldInfo(null);
          }}
          placeholder="????????? ????????? ?????????"
        />
        {selectedFieldInfo && (
          <SelectedFieldWrap>
            <SelectedFieldTitle>????????? ????????????</SelectedFieldTitle>
            <SelectedGuard />
            <SelectedFieldName>{selectedFieldInfo?.name}</SelectedFieldName>
          </SelectedFieldWrap>
        )}
        {isLogin && (
          <Button
            icon="ic-more"
            type={ButtonType.OUTLINE_THICK}
            containerStyle={{ marginBottom: 30 }}
            onClick={handleOpenSelectModal}
          >
            MY ???????????? ????????????
          </Button>
        )}
        <Title>????????????</Title>
        <DurationWrap>
          <Duration
            active={!!factories?.field_position ? duration === 'null' : false}
            onClick={() => setDuration('null')}
          >
            ??????
          </Duration>
          <Duration
            active={!!factories?.field_position ? duration === '30' : false}
            onClick={() => setDuration('30')}
          >
            30???
          </Duration>
          <Duration
            active={!!factories?.field_position ? duration === '60' : false}
            onClick={() => setDuration('60')}
          >
            60???
          </Duration>
          <Duration
            active={!!factories?.field_position ? duration === '90' : false}
            onClick={() => setDuration('90')}
          >
            90???
          </Duration>
        </DurationWrap>
        {/* </>
        )} */}
        <FilterWrap>
          <TotalText>
            ??? <b>{(factories?.data || []).length}???</b> ??? ????????? ??????
          </TotalText>
          {/* {selectedFieldId !== null && ( */}
          {!!factories?.field_position && (
            <FilterSelect
              options={[
                { label: '?????????', value: '?????????' },
                { label: '?????????', value: '?????????' },
              ]}
              value={order}
              onChange={(v: any) => setOrder(v)}
            />
          )}
        </FilterWrap>
      </TopSectionWrap>
      <MapSpaceCardWrap>
        {factories &&
          orderByFactories?.map((v: any, i: any) => (
            <MapSpaceCard
              key={v.id}
              id={v.id}
              index={i}
              name={v?.name}
              distance={v?.direction?.distance}
              duration={v?.direction?.duration}
              selected={selectedFactoryIds.includes(v.id)}
              onClick={
                !!factories?.field_position
                  ? () => handleCheckSpaces(v.id)
                  : () => {
                      setIsInfoModalOpen(false);
                      setSelectedSpaceInfo(v);
                      setTimeout(() => {
                        setIsInfoModalOpen(true);
                      }, 250);
                    }
                // selectedFieldId === null
                //   ? () => {
                //       setIsInfoModalOpen(false);
                //       setSelectedSpaceInfo(v);
                //       setTimeout(() => {
                //         setIsInfoModalOpen(true);
                //       }, 250);
                //     }
                //   : () => handleClickFactoryCard(v.id)
              }
              selectedFieldId={selectedFieldId}
              factories={factories}
              totalDuration={duration}
            />
          ))}
      </MapSpaceCardWrap>
      {/* {selectedFieldId !== null && ( */}
      {/* {!!factories?.field_position && ( */}
      <BottomButtonWrap>
        <Button
          type={
            selectedFactoryIds.length > 0 ? ButtonType.PRIMARY : ButtonType.GRAY
          }
          onClick={
            selectedFieldId !== null && isLogin
              ? handleRequestEstimation
              : handleOpenAddSpaceModal
          }
        >
          ?????? ????????????
        </Button>
      </BottomButtonWrap>
      {/* )} */}

      <Modal open={isSelectModalOpen} onClose={handleCloseSelectModal}>
        <ModalContainer
          style={{ minWidth: 440, maxHeight: 620, paddingTop: 50 }}
        >
          <ModalTitle>MY ????????????</ModalTitle>
          <CardWrap>
            {spaces &&
              spaces.map((v: any) => (
                <SelectSpaceCard
                  key={v.id}
                  name={v?.name}
                  address={v?.basic_address}
                  selected={v?.id === tempSelectedFieldInfo?.id}
                  onClick={() => setTempSelectedFieldInfo(v)}
                />
              ))}
          </CardWrap>
          <ShadowButtonWrap>
            <Button
              type={ButtonType.GRAY_BLACK}
              onClick={handleCloseSelectModal}
              containerStyle={{ marginRight: 20 }}
            >
              ??????
            </Button>
            <Button onClick={handleSubmitSelectModal}>????????????</Button>
          </ShadowButtonWrap>
          <CreateNewConstructionButton onClick={handleAddConstruction}>
            ???????????? ????????????
          </CreateNewConstructionButton>
        </ModalContainer>
      </Modal>
      <TextModal
        open={isNotFoundSpaceModal}
        content={`????????? ???????????? ????????? ????????????.\n??????????????? ?????????????????????????`}
        onSubmit={() => navigate('/add-construction-field/step-1')}
        onClose={() => setIsNotFoundSpaceModal(false)}
      />
      <TextModal
        open={isFinishRequestEstimation}
        content={`?????? ????????? ?????????????????????.\n????????? ?????? ???????????? ?????????????????????????`}
        onSubmit={() => navigate('/supplier-choice')}
        onClose={() => setIsFinishRequestEstimation(false)}
      />

      <TextModal
        open={isDuplicatedEstimation}
        content={`?????? ??????????????? ????????? ???????????????.\n${duplicatedFactoryIds
          .map(
            (v: any) =>
              (factories?.data || []).filter(
                (factory: any) => factory.id === v,
              )[0].name,
          )
          .join(', ')}`}
        onClose={() => setIsDuplicatedEstimation(false)}
      />
      <Modal
        open={isPostcodeModalOpened}
        onClose={() => setIsPostcodeModalOpened(false)}
      >
        <PostContainer style={{ width: 400, height: 600 }}>
          <DaumPostcode
            onComplete={(v: any) => {
              setSelectedFieldInfo(null);
              setAddress(v?.roadAddress || v?.autoJibunAddress);
              setIsPostcodeModalOpened(false);
            }}
          />
        </PostContainer>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  height: 100%;
  position: relative;
`;

const TopSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 14px 30px;
  border-bottom: 1px solid #c7c7c7;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #000;
  margin-bottom: 14px;
`;

const DurationWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Duration = styled.span<{ active: boolean }>`
  flex: 1;
  padding: 8px 0px;
  margin-right: 8px;
  border-radius: 18px;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  text-align: center;
  cursor: pointer;

  ${({ active }) =>
    active
      ? css`
          background-color: #000;
          color: #ffffff;
          border: solid 1px black;
        `
      : css`
          background-color: #fff;
          color: #c7c7c7;
          border: solid 1px #c7c7c7;
        `}

  &:last-child {
    margin-right: 0;
  }

  transition: all 0.1s linear;

  &:hover {
    border: solid 1px black;
    color: black;
  }
`;

const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TotalText = styled.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #777;
  & > b {
    font-weight: 700;
    letter-spacing: -0.28px;
    text-align: left;
    color: #222;
  }
`;

const BottomButtonWrap = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 16px 30px;
  box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.07);
  background-color: #fff;
`;

const CardWrap = styled.div`
  max-height: 402px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 17px;
  }

  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #c7c7c7;
    /* ???????????? ????????? ??????    */
    border-radius: 10px;

    background-clip: padding-box;
    border: 6px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const PostContainer = styled.div``;

const MapSpaceCardWrap = styled.div`
  flex: 1;
  /* max-height: calc(100% - 123px); */
  overflow-y: scroll;
  margin-bottom: 84px;
`;

const SelectedFieldWrap = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 8px 0 16px 0;
`;

const SelectedFieldTitle = styled.div`
  font-size: 16px;
  letter-spacing: -0.28px;
  color: #999;
  text-align: left;
`;
const SelectedFieldName = styled.div`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: right;
  color: #000;
`;

const SelectedGuard = styled.div`
  display: block;
  width: 1px;
  height: 8px;
  background-color: #c7c7c7;
  margin: 0px 8px;
`;

const CreateNewConstructionButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  background-color: #4490f7;
  color: #fff;
  padding: 16px 0;
  margin-top: 8px;
  border-radius: 6px;
  cursor: pointer;
`;
