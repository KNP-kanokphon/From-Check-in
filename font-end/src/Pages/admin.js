import React, { useState, useEffect } from 'react';
import { BrowserRouter as Redirect } from "react-router-dom";
import 'antd/dist/antd.css';
import {
    Form,
    InputNumber,
    Button,
    Layout,
    Input,
    Radio,
    Select,
    Cascader,
    DatePicker,
    TreeSelect,
    Switch,
    Menu,
    Row,
    Col,
    Descriptions,
    message,
    Space,
    Checkbox,
    Image,
    Upload,
} from 'antd';
import { Register } from './Register';

const { Header, Content, Footer, Sider } = Layout;
export function Adminpage() {
    const [fromUsername, setFromUsername] = useState('');
    const [fromPassword, setFromPassword] = useState('');

    const loginSubmit = () => {
        // console.log(fromUsername)
        // console.log(fromPassword)
        // if (fromUsername === '1') {
        //     <Redirect to='/' element={<Register />} />
        // }
    };

    return (
        <Layout>
            <Form className="site-layout-background" style={{ textAlign: 'center', padding: 25, fontFamily: 'BlinkMacSystemFont', fontSize: 30 }}>
                Admin Login
            </Form>
            <Content>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360, fontFamily: 'BlinkMacSystemFont', }}>
                    <Form layout="horizontal">

                        <Row>
                            <Col span={12} offset={6}>
                                <Form.Item
                                    label="Username"
                                    name="Username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                                >
                                    <Input placeholder="Username"
                                        onChange={(e) => { setFromUsername(e.target.value) }}
                                    />
                                </Form.Item>

                                <Form.Item label="Password"
                                    name="Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                                >
                                    <Input placeholder="Password"
                                        onChange={(e) => { setFromPassword(e.target.value) }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <Form layout="horizontal">
                        <Row
                            style={{ justify: 'Horizontal' }}>
                            <Col span={10}></Col>
                            <Col span={4}>
                                <Button
                                    type="primary"
                                    onClick={loginSubmit}
                                    block>
                                    Login
                                </Button>
                            </Col>
                            <Col span={10}></Col>
                        </Row>
                    </Form>
                </div>
            </Content>
        </Layout>
    );
};

