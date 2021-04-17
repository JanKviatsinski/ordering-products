import React from 'react'
import {
  Form,
  Input,
  // Select,
} from 'antd'
import { FormStyled } from './Styled'
// import { FormSelect } from '../../Components/FormSelect'
import { FormItem } from '../../Components/FormItem'
import { Button } from '../../Components/Button'
import { validatePassword } from '../../Utils/validatePassword'
// import { prefixValues } from './constats'

// const { Option } = Select

const formItemLayout = {
  labelCol: {
    sm: { span: 6 },
  },
  wrapperCol: {
    sm: { span: 20 },
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    sm: {
      span: 0,
      offset: 0,
    },
  },
}

export const RegistrationFormCmp = ({ onSubmitRegistration }) => {
  const [form] = Form.useForm()

  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <FormSelect>
  //       {prefixValues.map(
  //         (prefix) => <Option key={prefix} value={prefix}>{prefix}</Option>,
  //       )}
  //     </FormSelect>
  //   </Form.Item>
  // )

  return (
    <FormStyled
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={(data) => onSubmitRegistration(data)}
      // initialValues={{
      //   prefix: prefixValues[0],
      // }}
      scrollToFirstError
    >
      <FormItem
        name="email"
        label="Email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </FormItem>

      <FormItem
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          { validator: validatePassword },
        ]}
        hasFeedback
      >
        <Input.Password />
      </FormItem>

      <FormItem
        name="displayName"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
            whitespace: true,
          }]}
      >
        <Input />
      </FormItem>
      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </FormItem>
    </FormStyled>
  )
}
// <FormItem
//   name="residence"
// >
//   <Input placeholder="Habitual Residence is optional" />
// </FormItem>
//
// <FormItem
//   name="phone"
// >
//   <Input
//     addonBefore={prefixSelector}
//     placeholder="Phone number is optional"
//   />
// </FormItem>
//
// <FormItem
//   name="telegram"
// >
//   <Input
//     placeholder="Enter the link to your telegram account! Is optional"
//   />
// </FormItem>
