import React from 'react';
import { Icon, Button, InputItem } from 'antd-mobile';
import NavBars from '../../components/NavBars';
import AppContainer from '../../modules/AppContainer';
import Quagga from 'quagga';
import './style.css';

export default class ScanPage extends AppContainer {
    constructor(props) {
        super(props);

        this.state = {
            scannerRunning: false,
        };
        
        ['initScanner',
            'stopScanner',
            'onProcessedCallback',
            'onDetectedCallback',
        ].forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    componentDidMount() {
        this.initScanner();
    }

    componentWillUnmount() {
        this.stopScanner();
    }

    //init scanner
    initScanner() {
        const state = {
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector('.scanner-container'),
                constraints: {
                    width: {min: 640},
                    height: {min: 480},
                    aspectRatio: {min: 1, max: 100},
                    autoFocus: true,
                    // facingMode: { exact: "environment" }
                    facingMode: "environment"
                },
            },
            frequency: 10,
            locator: {
                patchSize: "medium",
                halfSample: true
            },
            locate: true,
            decoder: {
                readers: [
                    "code_128_reader",
                    // "ean_reader",
                    // "ean_8_reader",
                    // "code_39_reader",
                    // "code_39_vin_reader",
                    // "codabar_reader",
                    // "upc_reader",
                    // "upc_e_reader",
                    // "i2of5_reader"
                ],
                // debug: {
                //     showCanvas: true,
                //     showPatches: true,
                //     showFoundPatches: true,
                //     showSkeleton: true,
                //     showLabels: true,
                //     showPatchLabels: true,
                //     showRemainingPatchLabels: true,
                //     boxFromPatches: {
                //         showTransformed: true,
                //         showTransformedBox: true,
                //         showBB: true
                //     }
                // }
            }
        }
        if (navigator.getUserMedia
             || navigator.webkitGetUserMedia
             || navigator.mozGetUserMedia
             || (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
            const that = this;
            Quagga.init(state, (err) => {
                if (err) {
                    alert(err);
                    return
                }
                alert("Initialization finished. Ready to start");
                Quagga.start();

                // Set flag to is running
                const scannerRunning = true;
                // that.setState({scannerRunning});
            });

            Quagga.onProcessed((res) => this.onProcessedCallback(res));
            Quagga.onDetected((res) => this.onDetectedCallback(res));
        } else {
            this.showToast('摄像头不可用')
        }
    }

    onProcessedCallback(result) {
        const drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

        if (result) {
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                result.boxes.filter((box) => {
                    return box !== result.box;
                }).forEach((box) => {
                    Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "#fc0", lineWidth: 2});
                });
            }

            // if (result.box) {
            //     Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
            // }

            // if (result.codeResult && result.codeResult.code) {
            //     Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: "#d40511", lineWidth: 3});
            // }
        }
    }

    onDetectedCallback(result) {
        console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);
        this.showToast(result.codeResult.code)
        this.stopScanner();
    }

    stopScanner() {
        Quagga.offProcessed(this.onProcessedCallback);
        Quagga.offDetected(this.onDetectedCallback);
        Quagga.stop();
    }

    render() {
        return (
            <div className="scanner">
                <NavBars title="扫描条形码" />
                <div className="full-screen-shadow"></div>
                <div className="scanner-container">
                </div>
            </div>
        )
    }
}