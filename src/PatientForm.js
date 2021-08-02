import React, { useState } from "react";
import { Form, Input, Button, Select, Tag } from "antd";
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
  const [selectedMedic, setSelectedMedic] = useState();
  const [selectedConditions, setSelectedConditions] = useState();
  const options = [
    { value: "gold" },
    { value: "lime" },
    { value: "green" },
    { value: "cyan" },
  ];

  function selectConditions(value) {
    if (value) {
      let selectedValue = { medicalCondations: value };
     setSelectedConditions(selectedValue);
    }
  }
  function selectMedications(value) {
    if (value) {
      let selectedValue = { medications: value };
      setSelectedMedic(selectedValue);
    }
  }

  function tagRender(props) {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
      console.log({ value });
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  }


  const onFinish = (values) => {
    console.log({ values });
    if (values) {
      const totalValue = { ...values, ...selectedMedic, ...selectedConditions };
      console.log({ totalValue });
      setPatientList(totalValue);
    }
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

      <Form.Item label="Medical Conditions">
        <Select
          mode="multiple"
          showArrow
          tagRender={tagRender}
          onChange={selectConditions}
          style={{ width: "100%" }}
          options={options}
        />
      </Form.Item>
      <Form.Item label="Medical Conditions">
        <Select
          mode="multiple"
          showArrow
          tagRender={tagRender}
          onChange={selectMedications}
          style={{ width: "100%" }}
          options={options}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
