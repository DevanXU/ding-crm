require('./PageHome.less');
import logic from './PageLogic';
import { Control, Route } from 'react-keeper';
import { Component, LogicRender } from 'refast';

import TabBar, { activeTabbar } from 'components/card-tabbar';
import { NavBar, Popover, Icon } from 'antd-mobile';

import MainPage from './MainPage';

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

class Home extends Component {

    constructor(props) {
        super(props, logic);
        this.handleChange = this.handleChange.bind(this);
        const { state: { visible, menu, tabbarIndex, badge } } = this;
    }

    onSelect = (opt) => {
        console.log('onSelect', opt.props.value);
        this.setState({
            visible: false,
            //selected: opt.props.value,
        });
    };

    onLeftClick = () => {
        console.log('onLeftClick');
    }

    handleVisibleChange = (visible) => {
        console.log('handleVisibleChange ...');
        this.setState({
            visible,
        });
    };


    handleChange(key) {
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
                <NavBar
                    mode="light"
                    rightContent={
                        <Popover mask
                            overlayClassName="fortest"
                            overlayStyle={{ color: 'currentColor' }}
                            visible={this.state.visible}
                            overlay={[
                                (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
                                (<Item key="5" value="qrcode" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                                (<Item key="6" value="help" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                                    <span style={{ marginRight: 5 }}>Help</span>
                                </Item>),
                            ]}
                            align={{
                                overflow: { adjustY: 0, adjustX: 0 },
                                offset: [-10, 0],
                            }}
                            onVisibleChange={this.handleVisibleChange}
                            onSelect={this.onSelect}
                        >
                            <div style={{
                                height: '100%',
                                padding: '0 15px',
                                marginRight: '-15px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                                <Icon type="ellipsis" />
                            </div>
                        </Popover>
                    }
                >
                    NavBar
                </NavBar>

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
