import connect from 'react-redux/lib/connect/connect'
import { RegistrationFormCmp } from './Component'
import { onSubmitRegistration } from '../../actions/userDataActions/onSubmitRegistration'
import {
  getModalContent,
  getModalTitle,
  getModalStatus,
  getSpinStatus,
} from '../../selectors/appSelectors'
import { hideModal } from '../../actions/appActions'

const mapStateToProps = (state) => ({
  modalStatus: getModalStatus(state),
  modalTitle: getModalTitle(state),
  modalContent: getModalContent(state),
  spinStatus: getSpinStatus(state),
})

const mapDispatchToProps = {
  onSubmitRegistration,
  hideModal,
}

export const RegistrationForm = connect(mapStateToProps, mapDispatchToProps)(
  RegistrationFormCmp,
)
