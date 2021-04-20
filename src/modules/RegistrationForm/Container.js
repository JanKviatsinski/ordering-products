import connect from 'react-redux/lib/connect/connect'
import { RegistrationFormCmp } from './Component'
import { onSubmitRegistration } from '../../actions/userDataActions'
import {
  getModalContent,
  getModalTitle,
  getModalStatus,
  getSpinStatus,
} from '../../selectors/appSelectors'

const mapStateToProps = (state) => ({
  modalStatus: getModalStatus(state),
  modalTitle: getModalTitle(state),
  modalContent: getModalContent(state),
  spinStatus: getSpinStatus(state),
})

const mapDispatchToProps = {
  onSubmitRegistration,
}

export const RegistrationForm = connect(mapStateToProps, mapDispatchToProps)(
  RegistrationFormCmp,
)
