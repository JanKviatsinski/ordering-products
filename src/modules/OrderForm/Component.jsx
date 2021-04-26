import React from 'react'
import { Input, Select } from 'antd'
import { Form } from '../../Components/Form'
import { showModal } from '../../utils/showModal'
import { prefixes, selection } from './constants'
import { FormSelect } from '../../Components/FormSelect'
import { FormItem } from '../../Components/FormItem'
import { validatePhoneNumber } from '../../utils/validatePhoneNumber'
import { Button } from '../../Components/Button'
import { Spin } from '../../Components/Spin'
import { getFromStorage } from '../../api/getFromStorage'
import { Title } from '../../Components/Title'

const { Option } = Select

export function OrderFormCmp(
  {
    modalStatus,
    modalTitle,
    modalContent,
    hideModal,
    onSubmitOrderForm,
    spinStatus,
  },
) {
  showModal(
    {
      modalStatus,
      modalTitle,
      modalContent,
      hideModal,
    },
  )

  if (spinStatus) {
    return (
      <Spin />
    )
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
        {prefixes.map(
          (prefix) => <Option key={prefix} value={prefix}>{prefix}</Option>,
        )}
      </FormSelect>
    </FormItem>
  )

  const formDataFromStorage = getFromStorage('formData')

  return (
    <>
      <Title level={3} text="Check the boxes to make an order" />

      <Form
        {...formItemLayout}
        onFinish={(formData) => onSubmitOrderForm(formData)}
        initialValues={{
          prefix: prefixes[0],
          ...formDataFromStorage,
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
            name={name.toLowerCase()}
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
    </>
  )
}
