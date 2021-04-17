import connect from 'react-redux/lib/connect/connect'
import { AuthenticationFormCmp } from './Component'
import { onSubmitAuthentication } from '../../actions/userDataActons'

const mapStateToProps = (state) => ({
  return: state,
})

const mapDispatchToProps = {
  onSubmitAuthentication,
}

export const AuthenticationForm = connect(
  mapStateToProps, mapDispatchToProps,
)(AuthenticationFormCmp)
