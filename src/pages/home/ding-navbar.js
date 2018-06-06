import React from "react"
import { NavBar, Icon, Popover } from 'antd-mobile'

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;


export default class DingNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false }
    }

    onSelect = (opt) => {
        console.log('onSelect ...')
        this.setState({
            visible: false
        })
    }

    handleVisibleChange = (visible) => {
        console.log('handleVisibleChange ...')
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        return (
            <div>
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
                    {this.props.children}
                </NavBar>
            </div>
        )
    }
}
