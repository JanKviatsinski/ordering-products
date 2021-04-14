import connect from 'react-redux/lib/connect/connect';
import {RegistrationFormCmp} from './Component';
import {onSubmitRegistration} from '../../actions/userDataActons';

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    onSubmitRegistration
}

export const RegistrationForm = connect(mapStateToProps, mapDispatchToProps)(RegistrationFormCmp)
