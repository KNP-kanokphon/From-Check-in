import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../css/index.css';
import { getProvince, getGeography, getDistrict, getSection, getSectionByid } from '../backend/api.js';
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
} from 'antd';


import { ConsoleSqlOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { render } from '@testing-library/react';
const axios = require('axios');
const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;
const urlBackend = `http://localhost:5000`;

export default function Register() {

  const [Geography, setGeography] = useState([]);
  const [DataProvinc, setDataProvinc] = useState([]);
  const [District, setDistrict] = useState([]);
  // Select Check
  const [checkGeography, setCheckGeography] = useState(false);
  const [checkProvince, setCheckProvince] = useState(false);
  const [checkDistrict, setCheckDistrict] = useState(false);
  //New data select
  const [selectedGeography, setSelectedGeography] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState(false);

  //setStart From Data
  const [fromUsername, setFromUsername] = useState("");
  const [fromLastname, setFromLastname] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [fromEmailConfrim, setFromEmailConfrim] = useState("");
  const [fromAddress, setFromAddress] = useState("");

  //setStart question

  const [question, setquestion] = useState([]);
  const [section, setSection] = useState([]);

  //setStart CheckBox
  const [radiotest, setRadioOne] = useState([]);

  //setChoce
  const [choicevalue, setChoice] = useState([]);



  const geographySelected = async (value) => {
    const getIdprovince = await axios.get(`${urlBackend}/api/getGeography/${value}`);
    setDataProvinc(getIdprovince.data)
    if (getIdprovince.data !== []) {

      // setDataProvinc([]);
      // setDistrict([]);
    }

    setCheckGeography(true);
    setSelectedGeography(value);
  }

  const provinceSelected = async (value) => {
    setCheckProvince(true);
    setSelectedProvince(value);
    const getDistrict = await axios.get(`${urlBackend}/api/getDistrict/${value}`);
    await console.log(getDistrict.data)
    if (getDistrict) {
      setDistrict(getDistrict.data)
    }
  }

  const districtSelected = async (value) => {
    setCheckDistrict(true);
    setSelectedDistrict(value);
  }


  useEffect(() => {
    (async function fetchdata() {
      const resultGeography = await getGeography();
      setGeography(resultGeography);
      const resualSection = await getSection();
      setquestion(resualSection);

      let idList = []
      resualSection.map((index) => {
        idList.push(index.section_id)
      })
      const data = {
        idList: idList
      }
      const resualSectionByid = await getSectionByid(data);
      await setSection(resualSectionByid)


    })();
  }, []);

  const onFocusProvince = async () => {
    if (checkGeography === false) {
      // message.error("โปรดเลือกภูมิภาค");
      document.getElementById('Geography')?.focus();
      return
    }
  }
  const onFocusDistrict = async () => {
    if (checkProvince === false) {
      // message.error("โปรดเลือกจังหวัด");
      document.getElementById('Province')?.focus();
      return
    }
  }
  const submitFrom = () => {
    const DataFrom = {
      fromUsername: fromUsername,
      fromLastname: fromLastname,
      fromEmail: fromEmail,
      fromEmailConfrim: fromEmailConfrim,
      fromAddress: fromAddress,
    }
  }

  const sectionByid = async (id) => {
    // console.log(id)
    const resualSectionByid = await getSectionByid(id);
    await console.log(resualSectionByid)
    // await setSection(resualSectionByid);
    // await console.log(section)
  }
  // function radio_onChange

  const [objectRedio, setRediodata] = useState([]);
  function radio_onChange(value, checkedValues) {
    if (value !== []) {
      objectRedio['section' + checkedValues] = value;
      setRediodata({ ...objectRedio });
    }
    setRadioOne(value)
  }
  const [objectChoce, setChocevalue] = useState([]);
  function input_onChang(value, checkedValues) {
    if (value !== []) {
      objectChoce['section' + checkedValues] = value;
      setChocevalue({ ...objectChoce });
    }
    setChoice(value)
  }


  const testdata = () => {
    console.log(objectRedio)
    console.log(objectChoce)
  }

  const showChoice = (id) => {
    let objCh = [];
    section.find((elm) => {
      if (elm.section_id === id) {
        objCh = elm.tb_choces;
      }
    })
    return objCh
  }

  return (
    <>
      <Layout>
        <Form className="site-layout-background" style={{ textAlign: 'center', padding: 25, fontFamily: 'BlinkMacSystemFont', fontSize: 30 }}>
          Webbinar Registration
        </Form>
        <Form className="site-layout-sub-header-background" style={{ fontFamily: 'BlinkMacSystemFont', }}>
          <Row>
            <Col offset={6} span={2}>Toppic</Col>
            <Col span={8}>can set the column to the right side. For example, using offset = {4} can set the element shifted to the right four columns width.</Col>
          </Row>
          <br />
          <Row>
            <Col offset={6} span={2}>Descriptions</Col>
            <Col span={8}>ฟรี!!! สัมมนาออนไลน์ส่งท้ายปี 2564  <br />
              คำ อธิบาย เรื่อง "การเลือกบรรจุภัณฑ์ให้เหมาะกับผลิตภัณฑ์"<br />
              บรรยายพิเศษ ในหัวข้อ "แนวทางการเลือกบรรจุภัณฑ์ให้เหมาะสมกับผลิตภัณฑ์อาหาร "<br />
              โดย ดร. พัชทรา มณีสินธุ์ <br />
              รองผู้ว่าการบริการอุตสาหกรรม, วว.<br />
              - พร้อมพบกับ โครงการ BrandDNA คืออะไร?<br />
              - สามารถช่วยผู้ประกอบการได้อย่างไร ?<br />
              - คุณสามารถร่วมโครงการนี้ได้อย่างไร?<br />
              มาหาร่วมหาค่าตอบได้.... <br />
              วัน: พุธที 22 ธันวาคม 2564 <br />
              เวลา: 09.30-11.30 น.<br />
              ภาษา: ไทย <br />
              *สัมมนาฟรีไม่มีค่าใช้จ่าย.<br />
            </Col>
          </Row>
          <br />
          <Row>
            <Col offset={6} span={2}>Time</Col>
            <Col span={8}>Dec 22, 2021 09:30 AM in Bangkok</Col>
          </Row>
          <Button onClick={testdata}>AAAA</Button>
        </Form>
        <Layout>
          <Content>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, fontFamily: 'BlinkMacSystemFont', }}>
              <Form layout="horizontal">
                <Row>
                  <Col span={12} offset={6}>
                    <Form.Item style={{ marginBottom: 0 }}>
                      <Form.Item
                        label="username"
                        name="userName"
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                      >
                        <Input placeholder="username"
                          onChange={(e) => { setFromUsername(e.target.value) }}
                        />
                      </Form.Item>

                      <Form.Item label="Lastname"
                        name="lastName"
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                      >
                        <Input placeholder="Lastname"
                          onChange={(e) => { setFromLastname(e.target.value) }}
                        />
                      </Form.Item>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <Form layout="horizontal">
                <Row>
                  <Col span={12} offset={6}>
                    <Form.Item style={{ marginBottom: 0 }}>
                      <Form.Item
                        label="Email Address"
                        name="email"
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                      >
                        <Input placeholder="Email Address"
                          onChange={(e) => { setFromEmail(e.target.value) }}
                        />
                      </Form.Item>

                      <Form.Item label="Confrim Email Address"
                        name="confrimemail"
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                      >
                        <Input placeholder="Confrim Email Address"
                          onChange={(e) => { setFromEmailConfrim(e.target.value) }}
                        />
                      </Form.Item>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <Form layout="horizontal">
                <Row>
                  <Col span={12} offset={6}>
                    <Form.Item style={{ marginBottom: 0 }}>
                      <Form.Item
                        label="Address"
                        name="Address"
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                      >
                        <Input placeholder="Address"
                          onChange={(e) => { setFromAddress(e.target.value) }}
                        />
                      </Form.Item>
                      <Form.Item
                        label="Geography"
                        name="stateGeography"
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                      >
                        <Select
                          id='Geography'
                          showSearch
                          placeholder="Search to Geography"
                          optionFilterProp="children"
                          filterOption={(input, option) => {
                            // console.log(input)
                            // console.log(option)
                            return option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                          }
                          filterSort={(optionA, optionB) => {
                            // console.log(optionA)
                            // console.log(optionB)
                            return optionA.children.toString().toLowerCase().localeCompare(optionB.children.toString().toLowerCase())
                          }
                          }
                          onChange={geographySelected}
                        >
                          {Geography.map((index) => (
                            <Option key={index.tb_geography_id} value={index.tb_geography_id} > {index.tb_nameThai}</Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <Form layout="horizontal">
                <Row>
                  <Col span={12} offset={6}>
                    <Form.Item style={{ marginBottom: 0 }}>
                      <Form.Item
                        label="Province"
                        name="stateProvince"
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                      >
                        <Select
                          id='Province'
                          onClick={onFocusProvince}
                          showSearch
                          placeholder="Search to Province"
                          filterOption={(input, option) => {
                            // console.log(input)
                            // console.log(option)
                            return option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                          }
                          filterSort={(optionA, optionB) => {
                            // console.log(optionA)
                            // console.log(optionB)
                            return optionA.children.toString().toLowerCase().localeCompare(optionB.children.toString().toLowerCase())
                          }
                          }
                          onChange={provinceSelected}
                        >
                          {DataProvinc.map((index) => (
                            <Option key={index.tb_provinceID} value={index.tb_provinceID} > {index.tb_provinceNameThai}{''}</Option>
                          ))}
                        </Select>
                      </Form.Item>

                      <Form.Item label="District"
                        name="District"
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                      >
                        <Select
                          id='District'
                          onClick={onFocusDistrict}
                          showSearch
                          placeholder="Search to Select"
                          optionFilterProp="children"
                          filterOption={(input, option) => {
                            // console.log(input)
                            // console.log(option)
                            return option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                          }
                          filterSort={(optionA, optionB) => {
                            // console.log(optionA)
                            // console.log(optionB)
                            return optionA.children.toString().toLowerCase().localeCompare(optionB.children.toString().toLowerCase())
                          }
                          }
                          onChange={districtSelected}
                        >
                          {District.map((index) => (
                            <Option key={index.tb_districtID} value={index.tb_districtID} > {index.tb_nameThai}{''}</Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <Form layout="horizontal">
                <Row>
                  <Col span={12} offset={6}>
                    <Form.Item style={{ marginBottom: 0 }}>
                      <Form.Item
                        label="Phone"
                        name="phone"
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                      >
                        <Input placeholder="Phone" />
                      </Form.Item>

                      <Form.Item label="Organization"
                        name="stateProvince"
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                      >
                        <Input placeholder="State/Province" />
                      </Form.Item>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <Form layout="horizontal">
                <Row>
                  <Col span={12} offset={6}>
                    <Form.Item style={{ marginBottom: 0 }}>
                      <Form.Item
                        label="Job Title"
                        name="jobTitle"
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                      >
                        <Input placeholder="Job Title" />
                      </Form.Item>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>

              {/* <Form layout="horizontal">
                <Row>
                  <Col span={12} offset={6}>
                    <Form.Item style={{ marginBottom: 0 }}>
                      <Form.Item
                        label={question}
                        name="userName"
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                      >
                        <Checkbox.Group style={{ width: '100%' }} onChange={radio1_onChange}>
                          <Space direction="vertical">
                            <Checkbox value='1'>{label_1}</Checkbox>
                            <Checkbox value='2'>{label_2}</Checkbox>
                            <Checkbox value='3'>{label_3}</Checkbox>
                            <Checkbox value='4'>{label_4}</Checkbox>
                            <Radio value={4}>
                              More...
                              {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                            </Radio>
                          </Space>
                        </Checkbox.Group>
                      </Form.Item>

                      <Form.Item label="Lastname"
                        name="lastName"
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                      >
                        <Input placeholder="Lastname"
                          onChange={(e) => { setFromLastname(e.target.value) }}
                        />
                      </Form.Item>
                    </Form.Item>
                  </Col>
                </Row>
              </Form> */}
              {question.map((index) => (
                <Form layout="horizontal">
                  <Row>
                    <Col span={12} offset={6}>
                      <Form.Item style={{ marginBottom: 0 }}>
                        <Form.Item
                          label={index.headerSection}
                          key={index.section_id}
                          id={index.section_id}
                          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                          <Checkbox.Group style={{ width: '100%' }}
                            onChange={((e) => { radio_onChange(e, index.section_id) })}
                          >
                            <Space direction="vertical">
                              {showChoice(index.section_id).map((keym) => (
                                <Checkbox value={keym.nameChoce}>{keym.nameChoce}</Checkbox>
                              ))}
                            </Space>
                          </Checkbox.Group>
                          <Input.Group >
                            {showChoice(index.section_id).map((keym) => (
                              <Input placeholder="Job Title" id={keym.nameChoce} onChange={(e) => { input_onChang(e.target.value, index.section_id) }} />
                            ))}
                          </Input.Group>
                        </Form.Item>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              ))}
              <Form layout="horizontal">
                <Row
                  style={{ justify: 'Horizontal' }}>
                  <Col span={10}></Col>
                  <Col span={4}>
                    <Button
                      type="primary"
                      onClick={submitFrom}
                      block>
                      Register
                    </Button>
                  </Col>
                  <Col span={10}></Col>
                </Row>
              </Form>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>,
    </>
  );
};

// ReactDOM.render(<Demo />, document.getElementById('container'));