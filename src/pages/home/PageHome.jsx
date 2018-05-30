require('./PageHome.less');
import logic from './PageLogic';
import { Control, Route } from 'react-keeper';
import { Component, LogicRender } from 'refast';

import TabBar, { activeTabbar } from 'components/card-tabbar';
import { NavBar, Popover, Icon } from 'antd-mobile';

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

class Home extends Component {
    state = {
        visible: true,
        //selected: '',
    };

    constructor(props) { super(props, logic);        
        this.handleChange = this.handleChange.bind(this);
    }

    onSelect = (opt) => {
        //console.log(opt.props.value);
        this.setState({
            visible: false,
            //selected: opt.props.value,
        });
    };
    
    handleVisibleChange = (visible) => {
        console.log('handleVisibleChange ...');
        this.setState({
            visible,
        });
    };


    handleChange(key){
        this.dispatch('setTabbarIndex',key);
        Control.go(this.state.menu[key].path, ); // keeper的跳转
    }

    render() {
        //const { state: { menu, tabbarIndex, badge, },  } = this;
        //const activeIndex=activeTabbar( menu );
        
        //if (tabbarIndex != activeIndex  ){ // 对比url索引和当前选中的值,如不对应则纠正.
        //    this.dispatch('setTabbarIndex',activeIndex);
        //}

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
                            (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                            (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
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

                {/*中间嵌套的页面*/}
                {this.props.children}

                {/*<TabBar menu={menu} tabbarIndex={tabbarIndex} badge={badge} onChange={this.handleChange} />*/}
            </div>
        );
    }

    componentDidMount() {
        dd.biz.navigation.setTitle({ title:'Home' })
    }

}

export default Home ;
