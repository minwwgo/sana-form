import React from 'react'
import 'antd/dist/antd.css';
import { Select } from 'antd';

export const MultiSelect = ({...props}) => {
  const{options,tagRender,name}=props
  return (
    <Select
      mode="multiple"
      showArrow
      tagRender={tagRender}
      style={{ width: "100%" }}
      options={options}
      name={name}
    />
  );
}
