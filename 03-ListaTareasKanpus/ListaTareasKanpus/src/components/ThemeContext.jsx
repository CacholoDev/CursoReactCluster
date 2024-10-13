import {createContext, useState} from "react";
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => { 

    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

