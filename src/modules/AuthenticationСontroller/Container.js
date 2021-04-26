import connect from 'react-redux/lib/connect/connect'
import { AuthenticationController } from './Component'
import { getLoggedStatus } from '../../selectors/appSelectors'
import { onLogOut } from '../../actions/userDataActions/onLogOut'

const mapStateToProps = (state) => ({
  logged: getLoggedStatus(state),
})

const mapDispatchToProps = {
  onLogOut,
}

export const LogInOut = connect(mapStateToProps, mapDispatchToProps)(AuthenticationController)
