import React, { useState } from 'react';
import { Button, Checkbox, Col, Form, Input, Row, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import api, { setToken } from '@api';
import { me } from '@data/auth';

import { useNavigate } from 'react-router-dom';

const AuthLogin = () => {
  // const [hasError, setHasError] = useState();
  const dispatch = useDispatch();
  // const [isSaveId, setSaveId] = useState(!!localStorage.getItem('save_id'));

  const handleSubmit = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      const { data } = await api.post('/auth/login', { username, password }); // 로그인 요청하고
      console.log(data?.principal?.type);
      if (data?.principal?.type === 'ADMIN') {
        setToken(data); //요청해서 응답받은 데이터를 토큰을 담고, asyncStorage는 모르겠다.
        dispatch(me()); //me함수를 디스패치한다
      } else {
        message.error('권한이 없습니다.');
      }
    } catch (e) {
      message.error('아이디 혹은 비밀번호가 올바르지 않습니다.');
      console.log('>>', e);
    }
  };

  return (
    <div className={'login-container'}>
      {/* <img
        src={'/img/red-logo.png'}
        style={{
          width: 200,
          marginBottom: 40,
          marginLeft: 100,
          marginRight: 100,
        }}
      /> */}
      <span className="logo">TWON ADMIN LOGIN</span>
      <div className={'form'} style={{ maxWidth: 300 }}>
        <Form
          onFinish={handleSubmit}
          initialValues={{
            username: localStorage.getItem('save_id') || '',
          }}
        >
          <div>
            <Form.Item
              name={'username'}
              rules={[{ required: true }]}
              hasFeedback
              label={'아이디'}
            >
              <Input
                size="large"
                placeholder={'아이디'}
                prefix={<UserOutlined style={{ fontSize: 16 }} />}
              />
            </Form.Item>
            <Form.Item
              name={'password'}
              rules={[{ required: true }]}
              hasFeedback
              label={'비밀번호'}
            >
              <Input.Password
                size="large"
                placeholder={'비밀번호'}
                prefix={<LockOutlined style={{ fontSize: 16 }} />}
                visibilityToggle={false}
              />
            </Form.Item>
            <Button block size="large" type={'primary'} htmlType={'submit'}>
              로그인
            </Button>
          </div>
          {/* <footer>
            <Row>
              <Col>
                <Checkbox
                  checked={isSaveId}
                  onChange={() => setSaveId((x) => !x)}
                >
                  아이디 저장
                </Checkbox>
              </Col>
            </Row>
          </footer> */}
        </Form>
      </div>
    </div>
  );
};

export default AuthLogin;
