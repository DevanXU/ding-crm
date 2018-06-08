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
        link: 'html/name0.html',
    },
    {
        id: 13234,
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: 'Outing',
        link: '/outing',
    }
]

class MainPage extends React.Component {
    handleClick = (e) => {
        console.log('onclick: ', e);
    }

    render() {
        return (
            <div>
                <div className="sub-title">Always square grid item </div>
                <Grid data={data} activeStyle={false} />

                <div className="sub-title">Grid item adjust accroiding to img size </div>
                <Grid data={data} square={false} className="not-square-grid" />

                <div className="sub-title">Carousel</div>
                <Grid data={carouseldata} hasLine={false} isCarousel
                    renderItem={dataItem => (
                        <div>
                            <div style={{ padding: '12.5px' }}>
                                <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                    <span><a href={dataItem.link}>{dataItem.text}</a></span>
                                </div>
                            </div>
                            <Link to='/customer'>CustomerList</Link>
                        </div>
                    )} />

                <div className="sub-title">Custom GridCell Style</div>
                <Grid data={data1} columnNum={3} itemStyle={{ height: '150px', background: 'rgba(0,0,0,.05)' }} />
            </div>
        );
    }
}

export default MainPage;