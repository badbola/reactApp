import React from 'react';

const navbar = (props) => {
    return(
        <div className="nav-container">
            <div className="nav-inside">
                <img src="https://image.flaticon.com/icons/svg/3081/3081825.svg" alt="Cart Image"/>
                <span>{props.count}</span>
            </div>
        </div>
    );
}

export default navbar;