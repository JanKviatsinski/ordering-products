import connect from 'react-redux/lib/connect/connect'
import { MenuCmp } from './Component'
import { getMenuSelectedKey } from '../../selectors/menuStateSelectors'
import { selectMenuKey } from '../../actions/menuActions'

const mapStateToProps = (state) => ({
  selectedKey: getMenuSelectedKey(state),
})

const mapDispatchToProps = {
  selectMenuKey,
}

export const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuCmp)
