import React from 'react'
import { Input, Select } from 'antd'
import { Form } from '../../Components/Form'
import {
  MODAL_STATUS_SUCCESS_AUTHENTICATION, MODAL_STATUS_SUCCESS_REGISTRATION,
} from '../../constats'
import { modalError } from '../../Utils/showModal'
import { prefixValues, selection } from './constants'
import { FormSelect } from '../../Components/FormSelect'
import { FormItem } from '../../Components/FormItem'
import { validatePhoneNumber } from '../../Utils/validatePhoneNumber'
import { Button } from '../../Components/Button'
// import { FormStyled } from '../RegistrationForm/Styled'

const { Option } = Select

export function OrderFormCmp(
  {
    modalStatus,
    modalTitle,
    modalContent,
    onSubmitOrderForm,
  },
) {
  if (
    modalStatus === MODAL_STATUS_SUCCESS_AUTHENTICATION
    || modalStatus === MODAL_STATUS_SUCCESS_REGISTRATION) {
    modalError({ modalTitle, modalContent })
  }

  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
  }

  const tailFormItemLayout = {
    wrapperCol: {
      sm: {
        span: 0,
        offset: 2,
      },
    },
  }

  const prefixSelector = (
    <FormItem name="prefix" noStyle>
      <FormSelect>
        {prefixValues.map(
          (prefix) => <Option key={prefix} value={prefix}>{prefix}</Option>,
        )}
      </FormSelect>
    </FormItem>
  )

  return (
    <Form
      {...formItemLayout}
      onFinish={(data) => onSubmitOrderForm(data)}
      initialValues={{
        prefix: prefixValues[0],
      }}
    >
      {selection.map((
        {
          name,
          values,
          required,
        },
      ) => (
        <FormItem
          key={name}
          name={name}
          label={name}
          hasFeedback
          rules={[
            {
              required,
              message: `Please select ${name.toLowerCase()}!`,
            }]}
        >
          <FormSelect>
            {values.map(
              (value) => <Option key={value} value={value}>{value}</Option>,
            )}
          </FormSelect>
        </FormItem>
      ))}

      <FormItem
        name="phone"
        label="Phone number"
        rules={[
          { validator: validatePhoneNumber },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
        />
      </FormItem>

      <FormItem
        name="telegram"
        label="Link to your telegram account"
      >
        <Input />
      </FormItem>

      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </FormItem>
    </Form>
  )
}
