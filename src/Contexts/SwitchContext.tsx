import { createContext, ReactNode, useContext, useState } from "react";

interface childProp {
    children: ReactNode;
}



interface switchProps{
    stateSwitch: boolean;
    setStateSwitch: (state: boolean) => void;
}

export const StateSwitchContext = createContext<switchProps | undefined > (undefined);

export function StateSwitchContextProvider ( {children}: childProp) {
    const [stateSwitch, setStateSwitch] = useState<boolean>(false);

    return (
        <StateSwitchContext.Provider value={{stateSwitch, setStateSwitch}}>
            {children}
        </StateSwitchContext.Provider>
    )

}

export function useStateSwitch (){
    const context = useContext(StateSwitchContext);
    if(!context){
        throw new Error("useStateSwitch must be used within a StateSwitchContextProvider");
    }

    return context;
}