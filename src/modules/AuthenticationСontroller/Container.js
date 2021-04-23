import connect from 'react-redux/lib/connect/connect'
import { AuthenticationController } from './Component'
import { getUserLoggedStatus } from '../../selectors/userDataSelectors'
import { onLogOut } from '../../actions/userDataActions/onLogOut'

const mapStateToProps = (state) => ({
  logged: getUserLoggedStatus(state),
})

const mapDispatchToProps = {
  onLogOut,
}

export const LogInOut = connect(mapStateToProps, mapDispatchToProps)(AuthenticationController)
