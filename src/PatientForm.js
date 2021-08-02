import React from "react";
import { Form, Input, Button, Select } from "antd";
import "antd/dist/antd.css";


const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 6,
  },
  layout: "horizontal",
  size: "default",
};

export const PatientForm = ({ setPatientList }) => {
  const onFinish = (values) => {
    setPatientList(values);
    // localStorage.setItem(`sana:patientForm:${values}`, JSON.stringify(values));
  };

  return (
    <Form onFinish={onFinish} {...layout}>
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[{ required: true, message: "Name is  required" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email", message: "invalid email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "address"]}
        label="Address"
        rules={[{ required: true, message: "Address is  required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "nhsNumber"]}
        label="NHS Number"
        rules={[{ required: true, message: " NHS Number is required" }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        label="Medical Conditions"
        name={["user", "medicalConditions"]}
      >
        <Select>
          <Select.Option value="demo 1 ">condition One</Select.Option>
          <Select.Option value="demo 2 ">condition Two </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Medications" name={["user", "medications"]}>
        <Select>
          <Select.Option value="demo 1 ">medication One</Select.Option>
          <Select.Option value="demo 2 ">medication Two</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
