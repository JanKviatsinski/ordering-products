import connect from 'react-redux/lib/connect/connect'
import { OrderFormCmp } from './Component'
import {
  getModalContent,
  getModalStatus,
  getModalTitle, getSpinStatus,
} from '../../selectors/appSelectors'
import { onSubmitOrderForm } from '../../actions/orderActions'
import { hideModal } from '../../actions/appActions'

const mapStateToProps = (state) => ({
  modalStatus: getModalStatus(state),
  modalTitle: getModalTitle(state),
  modalContent: getModalContent(state),
  spinStatus: getSpinStatus(state),
})

const mapDispatchToProps = {
  onSubmitOrderForm,
  hideModal,
}

export const OrderForm = connect(mapStateToProps, mapDispatchToProps)(OrderFormCmp)
