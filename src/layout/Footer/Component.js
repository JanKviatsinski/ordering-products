import React from 'react'
import {Wrap} from './Styled';
import connect from 'react-redux/lib/connect/connect';

function FooterCmp(props){
    console.log(props)
    return(
        <Wrap {...props}>
            {props.string}
        </Wrap>
    )
}

const mapStateToProps = (state) => ({
     string: state.footer.text
})

export const Footer = connect(mapStateToProps)(FooterCmp)
