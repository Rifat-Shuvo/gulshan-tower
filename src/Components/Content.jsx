import React from 'react';

const Content = ({children}) => {
    return (
        <div className="max-w-screen-xl mx-auto">
            {children}
        </div>
    );
};

export default Content;