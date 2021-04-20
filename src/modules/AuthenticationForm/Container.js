import connect from 'react-redux/lib/connect/connect'
import { AuthenticationFormCmp } from './Component'
import { onSubmitAuthentication } from '../../actions/userDataActions'
import {
  getModalContent,
  getModalStatus,
  getModalTitle,
  getSpinStatus,
} from '../../selectors/appSelectors'

const mapStateToProps = (state) => ({
  modalStatus: getModalStatus(state),
  modalTitle: getModalTitle(state),
  modalContent: getModalContent(state),
  spinStatus: getSpinStatus(state),
})

const mapDispatchToProps = {
  onSubmitAuthentication,
}

export const AuthenticationForm = connect(
  mapStateToProps, mapDispatchToProps,
)(AuthenticationFormCmp)
