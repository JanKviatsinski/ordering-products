import connect from 'react-redux/lib/connect/connect';
import {LogInOutCmp} from './Component';
import {getUserLoggedStatus} from '../../selectors/userDataSelectors';

const mapStateToProps = (state) => {
    return {
        isLogged: getUserLoggedStatus(state)
    }
}

export const LogInOut = connect(mapStateToProps)(LogInOutCmp)
