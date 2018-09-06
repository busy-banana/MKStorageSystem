import React from 'react';
import {List, Icon, Modal, Button, InputItem } from 'antd-mobile';
import NavBars from '../../components/NavBars';
import AppContainer from '../../modules/AppContainer';
import './style.css';
const Item = List.Item;
const Brief = Item.Brief;
const Alert = Modal.Alert;

export default class FactoryProductArrive extends AppContainer {
    constructor(props) {
        super(props);

        this.state = {
            scanedLPNCode: ['LBJ002917371135', 'LBJ002917371136', 'LBJ002917371137'], //已扫描的LPN码
        };
        
        ['clickLPNListItem',
        ].forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    clickLPNListItem(item) {
        Alert('Much Buttons', <div>More than two buttons</div>, [
            { text: 'Button1', onPress: () => console.log('第0个按钮被点击了') },
            { text: 'Button2', onPress: () => console.log('第1个按钮被点击了') },
            { text: 'Button3', onPress: () => console.log('第2个按钮被点击了') },
        ])
    }

    //生成LPN列表
    getLPNList() {
        const {
            scanedLPNCode,
        } = this.state;
        const listItem = scanedLPNCode.map((item, i) => {
            return (
                <Item key={`LPNCode-${i}`} onClick={() => this.clickLPNListItem(item)}>
                    {item}
                </Item>
            )
        })
        return (
            <List className="LPNScan-result">
                {listItem}
            </List>
        )
    }

    render() {
        
        const LPNListDOM = this.getLPNList();

        return (
            <div className="productArrive-container">
                <NavBars title="工厂成品到货" />
                <List className="ASNScan-result">
                    <Item multipleLine>
                        ASN码：0000000000000000000
                        <Brief>本次收货: 0 待收货：30 已收货：20</Brief>
                    </Item>
                </List>
                <p className="productArrive-list-title">PalletLPN列表</p>

                {LPNListDOM}

            </div>
        )
    }
}