import React from 'react'
import { Route, Link } from 'react-keeper'
import { Grid } from 'antd-mobile'
import CustomerList from './customer'
import './MainPage.css'

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
    link: `name${i}`,
}));

const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));

const carouseldata = [
    {
        id: 12345,
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: 'Office',
        link: '/customer',
    },
    {
        id: 13234,
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: 'Outing',
        link: '/customer',
    }
]

class MainPage extends React.Component {
    handleClick = (e) => {
        console.log('onclick: ', e);
    }

    render() {
        return (
            <div>
                <div className="sub-title">Carousel</div>
                <Grid data={carouseldata} hasLine={false} isCarousel
                    renderItem={dataItem => (
                        <div>
                            <div style={{ padding: '12.5px' }}>
                                <Link to={dataItem.link}><img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" /></Link>
                                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                    <span><Link to={dataItem.link}>{dataItem.text}</Link></span>
                                </div>
                            </div>

                        </div>
                    )} />
            </div>
        );
    }
}

export default MainPage;