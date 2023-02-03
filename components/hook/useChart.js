import { createContext, useContext, useState, useEffect } from "react";

const ChartContext = createContext({
    chartList: [],
})

const ChartProvider = (props) => {
    const [chartList, setChartList] = useState([]);
    
    return (
        <ChartContext.Provider
            value={{
                chartList,
                setChartList
            }}
            {...props}
        />
    )
}

const useChart = () => useContext(ChartContext)

export {ChartProvider, useChart}