import * as React from 'react';

const AppWrapper = (routerAndChildren: any) : JSX.Element => {
    return (
        <div id="app-wrapper">
            {routerAndChildren.children}
        </div>
    );
}
export default AppWrapper;
