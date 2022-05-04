import React, { useState, useEffect, useMemo } from 'react';
import { Table } from 'antd';

import { useQueryParams, withDefault, NumberParam } from 'use-query-params';

import api from '@api';

export default ({
  mount = true,
  endpoint,
  refreshData,
  isRefreshColumns,
  isIndexColumns,
  isSellColumns,
  useSocket,
  refreshCallback,
  ...props
}: any) => {
  const [data, setData] = useState<any>();
  const [query, setQuery] = useQueryParams<any>({
    pageIndex: withDefault(NumberParam, 1),
    pageSize: withDefault(NumberParam, 20),
  });
  const paginationData = useMemo(
    () => ({
      total: data?.total_elements,
      pageSize: query.pageSize,
      defaultCurrent: query.page,
      current: query.page,
      showTotal: (total: any) => `총 ${total}개`,
      onChange: (page: any, newPageSize: any) => {
        setQuery(
          (query) => ({
            ...query,
            pageIndex: page,
            pageSize: newPageSize || query.pageSize,
          }),
          'replaceIn',
        );
      },
    }),
    [data, query, setQuery],
  );

  useEffect(() => {
    (async () => {
      setData([]);
      const { data } = await api.get(endpoint, {
        params: {
          page: query.pageIndex - 1,
          limit: query.pageSize,
        },
      });
      setData(data);
    })();
  }, [query.pageIndex, query.pageSize]);

  const onRefresh = async () => {
    setData([]);
    const { data } = await api.get(endpoint, {
      params: {
        page: 0,
        limit: query.pageSize,
      },
    });
    setData(data);
    refreshCallback?.();
  };

  useEffect(() => {
    if (mount) {
      (async () => await onRefresh())();
    }
  }, [endpoint, mount]);

  return (
    <Table
      rowKey={(row) => row.id}
      {...props}
      dataSource={data?.items}
      pagination={paginationData}
      columns={isRefreshColumns ? props.columns(onRefresh) : props.columns}
      scroll={{ x: true }}
    />
  );
};
