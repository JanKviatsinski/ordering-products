import React from 'react'
import {Wrap} from './Styled';
import connect from 'react-redux/lib/connect/connect';
import {getTextFooter} from '../../selectors/footerSelectors';
import {actionX, asyncF} from '../../actions/footerActions';
import { withTheme } from 'styled-components';

function FooterCmp(props){
    console.log(props, props.theme)

    function x (){
        props.actionX('x')
    }

    function as(){
        props.asyncF('async')
    }

    return(
        <Wrap {...props}>
            <button onClick={x}>X</button>
            <button onClick={as}>async</button>
            {props.text}
        </Wrap>
    )
}

const mapStateToProps = (state) => ({
     text: getTextFooter(state)
})

const mapDispatchToProps = {
    actionX,
    asyncF
}

export const Footer = withTheme(connect(mapStateToProps, mapDispatchToProps)(FooterCmp))
