import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const BaseUrl = "https://google-search74.p.rapidapi.com/"

export const ResultsContextProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(false);
    const [getresults, setGetResults]  = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const ResultsGetter = async (type) => {
        setIsLoading(true);

        // const options = {
        //     method: 'GET',
        //     url: 'https://google-search74.p.rapidapi.com/',
        //     headers: {
        //       'X-RapidAPI-Key': '260dd5e289mshdb96ae4cccefbfap11a919jsn5685b58126c9',
        //       'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
        //     }
        //   };
          

        const Response = await fetch(`${BaseUrl}${type}`, {
          method: "GET",
          headers: {
            'X-RapidAPI-Key': '260dd5e289mshdb96ae4cccefbfap11a919jsn5685b58126c9',
            'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
          }
        } )
        const data = await Response.json();
        setGetResults(data) ;
        setIsLoading(false);
    }
    return(
      <ResultContext.Provider value={{ ResultsGetter, searchTerm, setSearchTerm, isLoading, getresults }}>
        {children}
      </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);
