import React from 'react'
import {Wrap} from './Styled';
import connect from 'react-redux/lib/connect/connect';
import {getTextFooter} from '../../selectors/footerSelectors';
import {actionX} from '../../actions/footerActions';

function FooterCmp(props){
    console.log(props, props.theme)

    function as (){
        props.actionX('sdf')
    }

    return(
        <Wrap {...props}>
            <button onClick={as}>X</button>
            {props.text}
        </Wrap>
    )
}

const mapStateToProps = (state) => ({
     text: getTextFooter(state)
})

const mapDispatchToProps = {
    actionX
}

export const Footer = connect(mapStateToProps, mapDispatchToProps)(FooterCmp)
