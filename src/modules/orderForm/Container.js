import connect from 'react-redux/lib/connect/connect'
import { OrderFormCmp } from './Component'
import {
  getModalContent,
  getModalStatus,
  getModalTitle, getSpinStatus,
} from '../../selectors/appSelectors'
import { onSubmitOrderForm } from '../../actions/orderActions'

const mapStateToProps = (state) => ({
  modalStatus: getModalStatus(state),
  modalTitle: getModalTitle(state),
  modalContent: getModalContent(state),
  spinStatus: getSpinStatus(state),
})

const mapDispatchToProps = {
  onSubmitOrderForm,
}

export const OrderForm = connect(mapStateToProps, mapDispatchToProps)(OrderFormCmp)
