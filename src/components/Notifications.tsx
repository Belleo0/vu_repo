import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

interface INotification {
  type: string;
  value: string;
  created_at: string;
}

interface INotifications {
  data: INotification[];
}

export default ({ data }: INotifications) => {
  return (
    <NotificationBox>
      {data.map((v, i) => (
        <NotificationBar>
          <Badge
            style={
              i === 0 ? { backgroundColor: '#ff7d00', color: 'white' } : {}
            }
          >
            {v.type}
          </Badge>
          <Value>{v.value}</Value>
          <CreatedAt>{moment(v.created_at).format('MM.DD HH:mm')}</CreatedAt>
        </NotificationBar>
      ))}
    </NotificationBox>
  );
};

const NotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: 100%;
  max-height: 360px;
  overflow-y: scroll;
`;

const NotificationBar = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  background-color: white;
  border-bottom: 1px solid #f2f2f2;
`;

const Badge = styled.span`
  padding: 5px 16px;
  border-radius: 15px;

  background-color: #e3e3e3;

  margin-right: 14px;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;
`;

const Value = styled.span`
  font-size: 16px;
  letter-spacing: -0.64px;
  text-align: left;
  color: #000;
`;

const CreatedAt = styled.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  color: #999;
  margin-left: auto;
`;
