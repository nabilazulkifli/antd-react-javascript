import React from "react";
import { Form, Typography, Divider, Row, Col, Button, Input, notification, Space } from "antd";
import { createUsers } from "../../services/users/usersSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export default function CreateUser() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

    const onCreateUser = (requestData) => {
        console.log("values",requestData);
    dispatch(
        createUsers({
        username: requestData.username,
        password: requestData.password,
        mobileNo: requestData.mobileNo,
      })
    )
      .unwrap()
      .then(() => {
        notification.success({
          message: "Success",
          description: "User created successfully",
        });
          navigate("/listingUsers");
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <>
      <Form form={form} onFinish={onCreateUser} layout="horizontal">
        <Title level={3}> Create User </Title>
        <Divider />

        <Row gutter={[16, 16]}>
          <Col span={5}>
            <Title level={5}>Username</Title>
          </Col>
          <Col span={10} push={4}>
            <Form.Item name="username">
              <Input placeholder="Please enter username" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={5}>
            <Title level={5}>Password</Title>
          </Col>
          <Col span={10} push={4}>
            <Form.Item name="password">
              <Input placeholder="Please enter password" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={5}>
            <Title level={5}>Mobile No</Title>
          </Col>
          <Col span={10} push={4}>
            <Form.Item name="mobileNo">
              <Input placeholder="Please enter mobileNo" />
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <div style={{ marginTop: "10vh" }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
              <Space size="middle">
                <Button onClick={form.submit}>Submit</Button>
              </Space>
          </Col>
        </Row>
      </div>
    </>
  );
}
