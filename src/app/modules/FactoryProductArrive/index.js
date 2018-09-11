import React from 'react';
import {List, Icon, Modal, Button, InputItem } from 'antd-mobile';
import NavBars from '../../components/NavBars';
import AppContainer from '../../modules/AppContainer';
import './style.css';
const Item = List.Item;
const Brief = Item.Brief;
const Alert = Modal.alert;

export default class FactoryProductArrive extends AppContainer {
    constructor(props) {
        super(props);

        this.state = {
            scanedLPNCode: ['LBJ002917371135', 'LBJ002917371136', 'LBJ002917371137'], //已扫描的LPN码
        };
        
        ['clickLPNListItem',
            'deleteLPNCode',
        ].forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    //点击LPN列表回调
    clickLPNListItem(item) {
        Alert(
            '是否删除LPN码', item, 
            [
                { text: '取消', onPress: () => {} },
                { text: '确认', onPress: () => this.deleteLPNCode(item) }
            ]
        )
    }

    //删除一行LPN码
    deleteLPNCode(LPNCode) {
        const {
            scanedLPNCode
        } = this.state;
        scanedLPNCode.map((item, index) => {
            if(item == LPNCode){
                scanedLPNCode.splice(index,1);
                return
            }
        });
        this.setState({scanedLPNCode})
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
        const {
            scanedLPNCode
        } = this.state;
        
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

                <Button
                    className="bottom-btn"
                    // activeClassName="active-login-btn"
                    onClick={this.clickLoginBtn}
                    disabled={scanedLPNCode.length ? false : true}
                >
                    收货入库
                </Button>
            </div>
        )
    }
}