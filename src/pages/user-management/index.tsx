import React, { useEffect, useState } from 'react';

import { Table, Select, Input, Button } from 'antd';

import { Container, Title, FilterWrap, Header } from '@components/Atoms';

import PagingTable from '@components/PagingTable';
// import { dataSource, columns } from '@constance/user-buyer';

import api from '@api';

export default () => {
  const [keyword, setKeyword] = useState('');
  const [info, setInfo] = useState('');
  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/accounts?type=U&keyword=${keyword}`);
      setInfo(data);
    })();
  }, [keyword]);
  return (
    <Container>
      <Header>
        <Title style={{ marginRight: 8 }}>구매회원 관리</Title>
        <FilterWrap>
          <Select defaultValue="" style={{ width: 150, marginRight: 8 }}>
            <Select.Option value="">회원명</Select.Option>
          </Select>
          <Input.Search
            placeholder="검색어를 입력해주세요"
            allowClear
            onSearch={(v) => setKeyword(v)}
            enterButton
          />
        </FilterWrap>
      </Header>
      <PagingTable
        endpoint={`/accounts?type=U&keyword=${keyword}`}
        isIndexColumns
        columns={[]}
      />
    </Container>
  );
};
