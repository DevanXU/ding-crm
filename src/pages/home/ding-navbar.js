import React from "react"
import { NavBar, Icon, Popover } from 'antd-mobile'

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
                            overlay={this.props.menu}
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
