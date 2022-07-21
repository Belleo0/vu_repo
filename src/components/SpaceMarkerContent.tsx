import React, { useEffect, useMemo, useRef, useState } from 'react';
import getAssetURL from '@utils/getAssetURL';
import convertDistance from '@utils/convertDistance';
import convertDuration from '@utils/convertDuration';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface IMarkerContent {
  index: number;
  name: string;
  address: string;
  distance: number;
  duration: number;
  onClick: () => any;
  onInfo: () => any;
  onChangePath: () => any;
  selected: boolean;
  hideWithoutName: boolean;
}

export default ({
  index,
  name,
  address,
  distance,
  duration,
  selected,
  onClick,
  onInfo,
  onChangePath,
  hideWithoutName,
}: IMarkerContent) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const isSelected = useMemo(() => {
    if (selected || isHovered || isModalOpened) return true;
    return false;
  }, [selected, isHovered, isModalOpened]);

  const handleClickOutside = ({ target }: any) => {
    if (isModalOpened && ref.current && !ref.current.contains(target)) {
      setIsModalOpened(false);
    }
  };

  useEffect(() => {
    if (isModalOpened) {
      window.addEventListener('click', handleClickOutside);
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isModalOpened]);

  return (
    <Container ref={ref}>
      <Image
        src={
          isSelected
            ? getAssetURL('../assets/img-map-bubble-on.png')
            : getAssetURL('../assets/img-map-bubble.png')
        }
      />
      <ContentsWrap
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={
          hideWithoutName === false ? () => setIsModalOpened(true) : onClick
        }
      >
        {hideWithoutName && (
          <Index selected={isSelected}>
            {(index + 1).toString().padStart(2, '0')}
          </Index>
        )}
        {hideWithoutName ? (
          <InfoWrap>
            <PlaceName>{name}</PlaceName>
            <DurationWrap>
              <Distance>{convertDistance(distance)}km</Distance>
              <Divider />
              <Duration>{convertDuration(duration)}분</Duration>
            </DurationWrap>
          </InfoWrap>
        ) : (
          <OnlyNameWrap>
            <OnlyPlaceName>{name}</OnlyPlaceName>
          </OnlyNameWrap>
        )}
        {isSelected && (
          <SearchIconWrap
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpened(true);
            }}
          >
            <SearchIcon src={getAssetURL('../assets/ic-search-on.svg')} />
          </SearchIconWrap>
        )}
      </ContentsWrap>

      {isModalOpened && (
        <HoveredWrap>
          <HoveredModal>
            <ModalTitle>{name}</ModalTitle>
            <ModalAddress>{address}</ModalAddress>
            <ModalButtonWrap>
              <ModalButton
                onClick={() => {
                  onInfo();
                  setIsModalOpened(false);
                }}
              >
                공장정보
              </ModalButton>
              {hideWithoutName && (
                <ModalButton
                  onClick={() => {
                    onChangePath();
                    setIsModalOpened(false);
                  }}
                >
                  <ModalButtonIcon
                    src={getAssetURL('../assets/ic-car-on.svg')}
                  />
                  경로
                </ModalButton>
              )}
            </ModalButtonWrap>
          </HoveredModal>
          <Triangle />
        </HoveredWrap>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: block;
  position: relative;
  width: 175px;
  height: 64px;
  &:hover {
    z-index: 9999;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentsWrap = styled.div`
  top: 0;
  left: 0;
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px 10px 20px 10px;
`;

const Index = styled.span<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;

  border-radius: 17px;

  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.28px;
  text-align: center;
  color: #fff;
  margin-right: 10px;

  ${({ selected }) =>
    selected
      ? css`
          background-color: #258fff;
        `
      : css`
          background-color: #c7c7c7;
        `}
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlaceName = styled.span`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.3px;
  text-align: left;
  color: #000;
  margin-bottom: 6px;

  width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DurationWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Distance = styled.span`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.26px;
  text-align: left;
  color: #000;
`;

const Divider = styled.span`
  display: block;
  width: 1px;
  height: 8px;
  margin: 0px 8px;
  background-color: #c7c7c7;
`;

const Duration = styled.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #000;
`;

const SearchIconWrap = styled.div`
  position: absolute;
  top: -15px;
  right: -9px;
  width: 34px;
  height: 34px;
  padding: 7px;
  border-radius: 17px;
  box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

const HoveredWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -156px;
  right: -108px;
`;

const HoveredModal = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 18px;
  box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.1);
  cursor: default;
  z-index: 9999999;
`;

const Triangle = styled.span`
  width: 12px;
  border-top: 12px solid white;
  border-right: 12px solid transparent;
  border-left: 12px solid transparent;
`;

const ModalTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.3px;
  text-align: left;
  color: #258fff;
  margin-bottom: 4px;
`;

const ModalAddress = styled.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #222;
  margin-bottom: 8px;
`;

const ModalButtonWrap = styled.div`
  display: flex;
`;

const ModalButton = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 7px 0px;
  border-radius: 6px;
  border: solid 1px #4490f7;
  background-color: #fff;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #258fff;

  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const ModalButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 2px 0 0;
`;

const OnlyNameWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const OnlyPlaceName = styled.span`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.3px;
  text-align: left;
  color: #000;
`;
