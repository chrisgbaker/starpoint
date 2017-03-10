import * as React from 'react';

const AppWrapper = (routerAndChildren: any) => {
    return (
        <div id="app-wrapper">
            {routerAndChildren.children}
        </div>
    );
}
export default AppWrapper;
