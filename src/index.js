/**
 * Created by rouven on 12.04.17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import uuid from 'uuid';

const withTooltip = (Tooltip) => (Component) => {

    if (!Tooltip)
        return Component;

    const id = 'symbol_' + uuid();
    const params = {
        'data-tip': true,
        'data-for': id
    };

    const TooltipComponent = (
        <ReactTooltip id={id}>
            {typeof Tooltip === 'function' ? <Tooltip/> : Tooltip}
        </ReactTooltip>
    );

    return (
        <span>
             <span {...params}>
                 {Component}
             </span>
            {
                ReactDOM.createPortal(
                    TooltipComponent,
                    document.getElementsByTagName('body')[0]
                )
            }
         </span>
    );
};

export default withTooltip;