// import React, { createContext, useContext, useState } from 'react';


// const DarkModeContext = createContext();

// export function DarkModeProvider({ children }) {
//     const [isDarkMode, setIsDarkMode] = useState(false);
  
//     const toggleDarkMode = () => {
//       setIsDarkMode((prevMode) => !prevMode);
//     };
  
//     return (
//       <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//         {children}
//       </DarkModeContext.Provider>
//     );
//   }

//   export function useDarkMode() {
//     const context = useContext(DarkModeContext);
//     if (!context) {
//       throw new Error('useDarkMode must be used within a DarkModeProvider');
//     }
//     return context;
// }
  