import connect from 'react-redux/lib/connect/connect'
import { RegistrationFormCmp } from './Component'
import { onSubmitRegistration } from '../../actions/userDataActons'
import {
  getModalData,
  getModalTitle,
  getModalVisible,
} from '../../selectors/modalSelectors'
import { onCloseModal } from '../../actions/modalActions'

const mapStateToProps = (state) => ({
  visible: getModalVisible(state),
  title: getModalTitle(state),
  data: getModalData(state),
})

const mapDispatchToProps = {
  onSubmitRegistration,
  onCloseModal,
}

export const RegistrationForm = connect(mapStateToProps, mapDispatchToProps)(
  RegistrationFormCmp,
)
