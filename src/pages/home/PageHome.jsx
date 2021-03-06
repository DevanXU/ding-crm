require('./PageHome.less')
import logic from './PageLogic'
import { Control, Route } from 'react-keeper'
import { Component, LogicRender } from 'refast'
import { Popover } from 'antd-mobile'

import TabBar, { activeTabbar } from 'components/card-tabbar';

import MainPage from './MainPage';
import DingNavBar from './ding-navbar';

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

const NavBarItems = [
    (<Item key="scan" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
    (<Item key="qrcode" value="qrcode" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
    (<Item key="help" value="help" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
        <span style={{ marginRight: 5 }}>Help</span>
    </Item>),
]

class Home extends Component {
    constructor(props) {
        super(props, logic);
        this.handleChange = this.handleChange.bind(this);
        const { state: { visible, menu, tabbarIndex, badge } } = this;

    }

    onLeftClick = () => {
        console.log('onLeftClick');
    }

    handleChange = (key) => {
        this.dispatch('setTabbarIndex', key);
        Control.go(this.state.menu[key].path, ); // keeper的跳转
    }

    render() {
        //const { state: { menu, tabbarIndex, badge, },  } = this;
        const activeIndex = activeTabbar(this.state.menu);

        if (this.state.tabbarIndex != activeIndex) { // 对比url索引和当前选中的值,如不对应则纠正.
            this.dispatch('setTabbarIndex', activeIndex);
        }

        return (
            <div className="home">
                <DingNavBar
                    menu={NavBarItems}
                    onSelect={this.onSelect}
                    onLeftClick={this.onLeftClick}
                    handleVisibleChange={this.handleVisibleChange}>CRM
                </DingNavBar>
                <MainPage />
                {/*中间嵌套的页面*/}
                {this.props.children}
                {<TabBar menu={this.state.menu} tabbarIndex={this.state.tabbarIndex} badge={this.state.badge} onChange={this.handleChange} />}
            </div>
        );
    }

    componentDidMount() {
        dd.biz.navigation.setTitle({ title: 'Home' })
    }

}

export default Home;
