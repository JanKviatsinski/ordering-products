import connect from 'react-redux/lib/connect/connect'
import { LogInOutCmp } from './Component'
import { getUserLoggedStatus } from '../../selectors/userDataSelectors'

const mapStateToProps = (state) => ({
  logged: getUserLoggedStatus(state),
})

export const LogInOut = connect(mapStateToProps)(LogInOutCmp)
