import React from 'react'
import {Wrap} from './Styled';
import connect from 'react-redux/lib/connect/connect';
import {getTextFooter} from '../../models/selectors/footerSelectors';
import {actionX, asyncF} from '../../models/actions/footerActions';

function FooterCmp(props){
    function x (){
        props.actionX('x')
    }

    function as(){
        props.asyncF('async')
    }

    return(
        <Wrap>
            <button onClick={x}>X</button>
            <button onClick={as}>async</button>
            {props.text}
        </Wrap>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        text: getTextFooter(state)
    }
}

const mapDispatchToProps = {
    actionX,
    asyncF
}

export const Footer = connect(mapStateToProps, mapDispatchToProps)(FooterCmp)
