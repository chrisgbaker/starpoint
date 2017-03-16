import React from 'react';

const AppWrapper = (routerAndChildren) => {
    return (
        <div id="app-wrapper">
            {routerAndChildren.children}
        </div>
    );
}
export default AppWrapper;
