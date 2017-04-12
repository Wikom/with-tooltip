/**
 * Created by rouven on 12.04.17.
 */

import React from 'react'
import ReactTooltip from 'react-tooltip'
import uuid from 'uuid'

const withTooltip = (Tooltip) => (Component) => {

    if (!Tooltip)
        return Component;

    const id = 'symbol_' + uuid();
    const params = {
        'data-tip': true,
        'data-for': id
    };

    console.log('add tooltip');

    Tooltip = (
        <ReactTooltip id={id}>
            {typeof Tooltip === 'function' ? <Tooltip/> : Tooltip}
        </ReactTooltip>
    );

    return <span {...params}>{Component}{Tooltip}</span>;
};

export default withTooltip;