import React, { createContext, useState } from "react";

export const CurrentViewContext = createContext();

export const CurrentViewProvider = ({ children }) => {
    const [currentView, setCurrentView] = useState("");

    return (
        <CurrentViewContext.Provider value={{ currentView, setCurrentView }}>
            {children}
        </CurrentViewContext.Provider>
    );
};