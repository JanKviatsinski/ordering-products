import React from 'react'
import { Input, Select } from 'antd'
// import { useDispatch } from 'react-redux'
import { Form } from '../../Components/Form'
import {
  MODAL_STATUS_ERROR,
  MODAL_STATUS_INFO,
  MODAL_STATUS_SUCCESS,
} from '../../constats'
import {
  modalError,
  modalInfo,
  modalSuccess,
} from '../../Utils/showModal'
import { prefixValues, selection } from './constants'
import { FormSelect } from '../../Components/FormSelect'
import { FormItem } from '../../Components/FormItem'
import { validatePhoneNumber } from '../../Utils/validatePhoneNumber'
import { Button } from '../../Components/Button'
import { Spin } from '../../Components/Spin'
import { getFromStorage } from '../../api/getFromStorage'

const { Option } = Select
// удалить modalStatus из стора
export function OrderFormCmp(
  {
    modalStatus,
    modalTitle,
    modalContent,
    spinStatus,
    onSubmitOrderForm,
  },
) {
  // const dispatch = useDispatch()

  switch (modalStatus) {
    case MODAL_STATUS_SUCCESS:
      modalSuccess({ modalTitle, modalContent })
      break
    case MODAL_STATUS_ERROR:
      modalError({ modalTitle, modalContent })
      break
    case MODAL_STATUS_INFO:
      modalInfo({ modalTitle, modalContent })
      break
    default: break
  }

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
        {prefixValues.map(
          (prefix) => <Option key={prefix} value={prefix}>{prefix}</Option>,
        )}
      </FormSelect>
    </FormItem>
  )

  const formDataFromStorage = getFromStorage('formData')

  return (
    <Form
      {...formItemLayout}
      onFinish={(formData) => onSubmitOrderForm(formData)}
      initialValues={{
        prefix: prefixValues[0],
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
  )
}
