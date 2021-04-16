import React from 'react'
import {
  Form,
  Input,
  Select,
} from 'antd'
import { FormStyled } from './Styled'
import { FormSelectAnt } from '../../Components/FormSelectAnt'
import { prefixValues } from './constats'
import { FormItemAnt } from '../../Components/FormItemAnt'
import { Button } from '../../Components/Button'
import { validatePassword } from '../../Utils/validatePassword'

const { Option } = Select

const formItemLayout = {
  wrapperCol: {
    sm: { span: 100 },
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    sm: {
      span: 100,
      offset: 0,
    },
  },
}

export const RegistrationFormCmp = ({ onSubmitRegistration }) => {
  const [form] = Form.useForm()
  console.log(onSubmitRegistration)
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <FormSelectAnt>
        {prefixValues.map(
          (prefix) => <Option key={prefix} value={prefix}>{prefix}</Option>,
        )}
      </FormSelectAnt>
    </Form.Item>
  )

  return (
    <FormStyled
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={(data) => {
        console.log(data)
        return onSubmitRegistration(data)
      }}
      initialValues={{
        prefix: prefixValues[0],
      }}
      scrollToFirstError
    >
      <FormItemAnt
        name="email"
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
        <Input placeholder="E-mail is required" />
      </FormItemAnt>

      <FormItemAnt
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          { validator: validatePassword },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Password is required" />
      </FormItemAnt>

      <FormItemAnt
        name="displayName"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
            whitespace: true,
          }]}
      >
        <Input placeholder="Name is required" />
      </FormItemAnt>

      <FormItemAnt
        name="residence"
      >
        <Input placeholder="Habitual Residence is optional" />
      </FormItemAnt>

      <FormItemAnt
        name="phone"
      >
        <Input
          addonBefore={prefixSelector}
          placeholder="Phone number is optional"
        />
      </FormItemAnt>

      <FormItemAnt
        name="telegram"
      >
        <Input
          placeholder="Enter the link to your telegram account! Is optional"
        />
      </FormItemAnt>

      <FormItemAnt {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </FormItemAnt>
    </FormStyled>
  )
}
// tailFormItemLayout={tailFormItemLayout}
