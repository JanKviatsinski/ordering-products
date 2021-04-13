import connect from 'react-redux/lib/connect/connect';
import {LogInOutCmp} from './Component';
import {getUserLoggedStatus} from '../../selectors/userDataSelectors';
import {clickLogInOutBtn} from '../../actions/menuActions';

const mapStateToProps = (state) => {
    return {
        logged: getUserLoggedStatus(state)
    }
}

const mapDispatchToProps = {
    clickLogInOutBtn
}

export const LogInOut = connect(mapStateToProps, mapDispatchToProps)(LogInOutCmp)
