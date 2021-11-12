import React from 'react';
import notfound from '../../images/notFound/notfound.jpg'
import Navigation from '../Shared/Navigation/Navigation';

const NotFound = () => {
    return (
       <>
       <Navigation></Navigation>
        <div>
            <img src={notfound} alt="" />
        </div>
       </>
    );
};

export default NotFound;