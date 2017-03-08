import * as React from 'react';

const AppWrapper = (routerAndChildren: any) => {
    return (
        <div>
            <div id="page-wrap">
                {routerAndChildren.children}
            </div>
        </div>
    );
}
export default AppWrapper;
