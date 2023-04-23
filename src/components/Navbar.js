import React, { useEffect } from 'react';

const Navbar = (props) => {

    useEffect(() => {
        const body = document.querySelector('body');
        if (props.isDarkMode) {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
    }, [props.isDarkMode]);


    return(
        <nav className="navbar">
            <img className="react-logo" src="./logo192.png" alt="small react icon"></img>
            <h3 className="page-title">ReactFacts</h3>

            <div className="switch-container">
                {props.isDarkMode ? (
                    <span className="label light-mode-label dark">Light</span>
                    ) : (
                    <span className="label light-mode-label">Light</span>
                    )
                }
                
                <label className="switch">
                <input type="checkbox" checked={props.isDarkMode} onChange={props.handleDarkModeToggle} />
                <span className="slider"></span>
                </label>
                {props.isDarkMode ? (
                    <span className="label dark-mode-label dark">Dark</span>
                    ) : (
                    <span className="label dark-mode-label">Dark</span>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar