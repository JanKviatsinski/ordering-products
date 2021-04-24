import React from 'react'
import { Input } from 'antd'
import { Link } from 'react-router-dom'
import { Form } from '../../Components/Form'
import { Button } from '../../Components/Button'
import { FormItem } from '../../Components/FormItem'
import { validatePassword } from '../../utils/validatePassword'
import { MODAL_STATUS_INFO } from '../../constats'
import { modalInfo } from '../../utils/showModal'
import { Spin } from '../../Components/Spin'
import { PATH_REGISTRATION } from '../../pathes'
import { Title } from '../../Components/Title'

export function AuthenticationFormCmp(
  {
    onSubmitAuthentication,
    hideModal,
    modalStatus,
    modalTitle,
    modalContent,
    spinStatus,
  },
) {
  if (modalStatus === MODAL_STATUS_INFO) {
    modalInfo({ modalTitle, modalContent, hideModal })
  }

  if (spinStatus) {
    return (
      <Spin />
    )
  }

  return (
    <>
      <Title level={4} text="Enter your email and password" />

      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={(values) => onSubmitAuthentication({ ...values })}
      >
        <FormItem
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input placeholder="Email" />
        </FormItem>
        <FormItem
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            { validator: validatePassword },
          ]}
        >
          <Input
            type="password"
            placeholder="Password"
          />
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
          {' Or '}
          <Link to={PATH_REGISTRATION}>register now!</Link>
        </FormItem>
      </Form>
    </>
  )
}
