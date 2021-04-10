import React from 'react'
import connect from 'react-redux/lib/connect/connect';
import Meta from 'antd/es/card/Meta';
import {OwnerDataCardStyled} from './Styled';
import {OwnerAvatar} from '../../Components/OwnerAvatar/Component';
import {getPhotoOwner} from '../../models/selectors/headerSelectors';
import {Linc} from '../../Components/Linc/Component';
import {Address} from '../Address/Component';

function OwnerDataCardCmp(props) {
    console.log(props.photoOwner)
    return (
        <OwnerDataCardStyled
            size={'small'}
            hoverable
            cover={
                <OwnerAvatar
                    size={64}
                    icon={<img alt='owner' src={props.photoOwner}/>}
                />
            }
            actions={[
                <Address/>
            ]}
        >
            <Meta title='Europe Street beat' description="www.instagram.com"/>
        </OwnerDataCardStyled>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        photoOwner: getPhotoOwner(state)
    }
}

export const OwnerDataCard = connect(mapStateToProps)(OwnerDataCardCmp)
