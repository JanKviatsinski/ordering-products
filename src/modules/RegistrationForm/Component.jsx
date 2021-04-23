import React from 'react'
import {
  Form,
  Input,
} from 'antd'
import { FormStyled } from './Styled'
import { FormItem } from '../../Components/FormItem'
import { Button } from '../../Components/Button'
import { validatePassword } from '../../utils/validatePassword'
import { MODAL_STATUS_ERROR } from '../../constats'
import { modalError } from '../../utils/showModal'
import { Spin } from '../../Components/Spin'

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

export const RegistrationFormCmp = (
  {
    onSubmitRegistration,
    hideModal,
    modalStatus,
    modalTitle,
    modalContent,
    spinStatus,
  },
) => {
  const [form] = Form.useForm()

  if (modalStatus === MODAL_STATUS_ERROR) {
    modalError({ modalTitle, modalContent, hideModal })
  }

  if (spinStatus) {
    return (
      <Spin />
    )
  }

  return (
    <>
      <FormStyled
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={(dataUser) => onSubmitRegistration(dataUser)}
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
    </>
  )
}
