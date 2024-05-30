"use client"
import React, { useEffect } from 'react';

const SchwannPlot = () => {
    useEffect(() => {
        // Define the Module object
        const scriptModule = document.createElement('script');
        scriptModule.textContent = `
            var Module = {
                preRun: [],
                postRun: [],
                print: function(text) {
                    console.log(text);
                },
                printErr: function(text) {
                    console.error(text);
                },
                canvas: document.getElementById('canvas'),
                setStatus: function(text) {
                    console.log("status: " + text);
                },
                monitorRunDependencies: function(left) {
                    // no run dependencies to log
                },
            };
            window.onerror = function(event) {
                console.log("onerror: " + event);
            };
            function addDataFromJS(index, x, y) {
                Module.ccall('dataAdd', null, ['number', 'number', 'number'], [index, x, y]);
            }
            function initDataFromJS() {
                Module.ccall('dataInit', null);
            }
            Module.onRuntimeInitialized = () => {
                initDataFromJS();
                for (let i = 0; i <= 1000; i++) {
                    let x = i / 100;
                    let y = Math.sin(x);
                    addDataFromJS(i, x, y);
                }
            };
        `;
        document.body.appendChild(scriptModule);

        // Load the Emscripten module script dynamically
        const script = document.createElement('script');
        script.src = 'schwann-plots.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(scriptModule);
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <canvas
                className="emscripten"
                id="canvas"
                onContextMenu={(event) => event.preventDefault()}
            ></canvas>
        </div>
    );
};

export default SchwannPlot;
