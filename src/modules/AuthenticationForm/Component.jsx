import React from 'react'
import { Input } from 'antd'
import { Form } from '../../Components/Form'
import { Button } from '../../Components/Button'
import { FormItem } from '../../Components/FormItem'
import { Checkbox } from '../../Components/Checkbox'
import { Link } from '../../Components/Link'
import { validatePassword } from '../../Utils/validatePassword'
import { MODAL_STATUS_ERROR_AUTHENTICATION } from '../../constats'
import { modalError } from '../../Utils/showModal'
import { Spin } from '../../Components/Spin'

export function AuthenticationFormCmp(
  {
    onSubmitAuthentication,
    modalStatus,
    modalTitle,
    modalContent,
    spinStatus,
  },
) {
  // console.log(
  //   modalStatus,
  //   modalTitle,
  //   modalContent,
  // )
  if (modalStatus === MODAL_STATUS_ERROR_AUTHENTICATION) {
    modalError({ modalTitle, modalContent })
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    onSubmitAuthentication({ ...values })
  }

  if (spinStatus) {
    return (
      <Spin />
    )
  }

  // const formItemLayout = {
  //   wrapperCol: { span: 30 },
  // }

  return (
    <Form
      name="normal_login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
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
        <FormItem name="remember" valuePropName="checked" noStyle>
          <Checkbox>
            Remember me
          </Checkbox>
        </FormItem>
        <Link href="https://www.google.com">
          Forgot password
        </Link>
      </FormItem>

      <FormItem>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </FormItem>
    </Form>
  )
}
