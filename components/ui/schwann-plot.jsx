"use client";
import React from 'react';

const SchwannPlotIframe = ({ instanceId }) => {
    return (
        <div>
            <iframe className="w-full"
                src={`/schwann-plots.html?instanceId=${instanceId}`}
            />
        </div>
    );
};

export default SchwannPlotIframe;
