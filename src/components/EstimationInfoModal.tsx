import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import Button, { ButtonSize, ButtonType } from './Button';
import Modal from './Modal';
import convertDistance from '@utils/convertDistance';
import convertDuration from '@utils/convertDuration';
import { makeComma } from '@utils/makeComma';
import { useState } from 'react';
import RemiconUnitPriceListModal from './RemiconUnitPriceListModal';

export default ({ open, data, estimation, onClose }: any) => {
  const field = estimation?.field_space;
  const factory = estimation?.factory_space;

  const [isUnitPriceModalOpen, setIsUnitPriceModalOpen] =
    useState<boolean>(false);

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        {data && (
          <Contents>
            <TitleWrap>
              <Title>견적단가율</Title>
            </TitleWrap>
            <BaseInfoSection>
              <InfoTitle>{field?.name}</InfoTitle>
              <InfoRow>
                <InfoLabel>납품사</InfoLabel>
                <InfoContent>{factory?.name}</InfoContent>
              </InfoRow>
              <InfoRow>
                <InfoLabel>주소</InfoLabel>
                <InfoContent>{factory?.basic_address}</InfoContent>
              </InfoRow>
              <InfoRow>
                <InfoLabel>거리시간</InfoLabel>
                <InfoContent>
                  <Distance>
                    {convertDistance(data?.direction?.distance)}km
                  </Distance>
                  <DistanceDivider />
                  <Duration>
                    {convertDuration(data?.direction?.duration)}분
                  </Duration>
                </InfoContent>
              </InfoRow>
            </BaseInfoSection>
            {/* Table */}
            <ModalTableSection>
              <Box>
                <BoxTopSection>
                  <Type>단가율</Type>
                  <PercentInput>{estimation?.percent}</PercentInput>
                  <PercentText>%</PercentText>
                  <Type> 적용 시</Type>
                </BoxTopSection>
                <SpecRow>
                  <Slump>25</Slump>
                  <SpecDivider />
                  <Slump>{estimation?.norminal_strength_1}</Slump>
                  <SpecDivider />
                  <Slump>{estimation?.slump_1}</Slump>
                  <TotalPrice>{makeComma(estimation?.price_1)}원</TotalPrice>
                </SpecRow>
                <SpecRow>
                  <Slump>25</Slump>
                  <SpecDivider />
                  <Slump>{estimation?.norminal_strength_2}</Slump>
                  <SpecDivider />
                  <Slump>{estimation?.slump_2}</Slump>
                  <TotalPrice>{makeComma(estimation?.price_2)}원</TotalPrice>
                </SpecRow>
                <SpecRow>
                  <Slump>25</Slump>
                  <SpecDivider />
                  <Slump>{estimation?.norminal_strength_3}</Slump>
                  <SpecDivider />
                  <Slump>{estimation?.slump_3}</Slump>
                  <TotalPrice>{makeComma(estimation?.price_3)}원</TotalPrice>
                </SpecRow>
                <TextButton
                  onClick={() => {
                    setIsUnitPriceModalOpen(true);
                  }}
                >
                  +부산지역 단가표
                </TextButton>
              </Box>
              <Label>특기사항</Label>
              <Textarea>{estimation?.remarks}</Textarea>
              <PrintButtonWrap>
                <Button
                  type={ButtonType.OUTLINE}
                  size={ButtonSize.PRIMARY}
                  icon="ic-upload-on"
                  iconStyle={{ width: 24, height: 24 }}
                  containerStyle={{
                    paddingTop: 9,
                    paddingBottom: 9,
                    marginRight: 20,
                    fontSize: 14,
                  }}
                  onClick={() => window.alert(`TODO : 2차 범위입니다.`)}
                >
                  첨부파일 업로드
                </Button>
                <Button
                  type={ButtonType.OUTLINE}
                  size={ButtonSize.PRIMARY}
                  icon="ic-print"
                  iconStyle={{ width: 24, height: 24 }}
                  containerStyle={{
                    paddingTop: 9,
                    paddingBottom: 9,
                    fontSize: 14,
                  }}
                  onClick={() => window.alert(`TODO : 2차 범위입니다.`)}
                >
                  견적서출력
                </Button>
              </PrintButtonWrap>
              <Button
                type={ButtonType.PRIMARY}
                containerStyle={{ marginTop: 30 }}
                onClick={onClose}
              >
                확인
              </Button>
            </ModalTableSection>
          </Contents>
        )}
        <RemiconUnitPriceListModal
          open={isUnitPriceModalOpen}
          onClose={() => setIsUnitPriceModalOpen(false)}
        />
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 440px;
  background-color: white;
  border-radius: 20px;
`;

const Contents = styled.div``;

const TitleWrap = styled.div`
  margin: 50px auto 24px auto;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`;

const BaseInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 40px;
  background-color: #f2f2f2;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 11px;
`;

const InfoTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.44px;
  color: #000;

  margin: 14px auto;
`;

const InfoLabel = styled.div`
  width: 62px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  color: #999;
`;

const InfoContent = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  color: #222;
`;

const ModalTableSection = styled.div`
  padding: 24px 40px;
`;

const TableTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #222;

  margin-bottom: 9px;
`;

const TableRowTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-bottom: 1px solid #e3e3e3;
`;

const TableLabel = styled.div`
  background-color: #f2f2f2;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #444;

  border-right: 1px solid #e3e3e3;

  padding: 10px 14px;
`;

const TableValue = styled.div`
  display: flex;
  align-items: center;

  background-color: #ffffff;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #222;

  padding: 10px 14px 10px 16px;
`;

const EngName = styled.span`
  font-size: 11px;
  font-weight: normal;
  letter-spacing: -0.22px;
  text-align: left;
  color: #999;
  margin-left: 6px;
`;

const ColumnEngName = styled.div`
  font-size: 11px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-top: 4px;
`;

const Distance = styled.span`
  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const DistanceDivider = styled.span`
  display: block;
  width: 1px;
  height: 10px;
  background-color: #c7c7c7;
  margin: 0px 10px;
`;

const Duration = styled.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 30px;
  border-radius: 20px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
  margin-bottom: 20px;
`;

const BoxTopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 14px;
`;

const Type = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
  margin-right: 24px;
`;

const PercentInput = styled.div`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.56px;
  text-align: center;
  color: #258fff;

  margin-right: 6px;
`;

const PercentText = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;

  margin-right: 6px;
`;

const SpecDivider = styled.span`
  display: block;
  width: 4px;
  height: 1px;
  background-color: #000;
  margin: 0px 4px;
`;
const SpecRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Slump = styled.div`
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.32px;
  color: #999;
`;

const TotalPrice = styled.span`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: normal;
  text-align: right;
  color: #1f1d1d;
  margin-left: auto;
`;

const TextButton = styled.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: right;
  color: #c7c7c7;
  text-decoration: underline;
  margin-top: 5px;
  cursor: pointer;
`;

const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #222;
  margin-bottom: 8px;
`;

const Textarea = styled.div`
  height: 68px;
  padding: 14px 20px 6px;
  border-radius: 12px;
  border: solid 1px #f2f2f2;
  background-color: #fff;

  font-size: 13px;
  font-weight: normal;
  line-height: 1.54;
  letter-spacing: normal;
  color: #000;

  margin-top: 8px;
`;

const PrintButtonWrap = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 14px;
`;
