import { useEffect, useState } from "react";
import Countries from "./Components/Countries";
import './App.css'
// import UserContext from "./Contexts/UserContext";
const url = "https://restcountries.com/v3.1/all";
const App = () =>{
       const[isLoading,setIsLoading] = useState(true)
       const[error,setError] = useState(null)
       const[countries,setCountries] = useState([]);
       const[filteredCountries,setFilteredCountries] = useState(countries);
       
       const fetchData = async(url)=>{
        setIsLoading(true);
        try{
          const response = await fetch(url);
          const data = await response.json();
          setFilteredCountries(data)
          setCountries(data);

          setIsLoading(false);
          setError(null);
          
        }catch(error){
          setIsLoading(false);
          setError(error);
        }
       }
      // const user = useContext(UserContext)
      // console.log(user)
   
       const RemoveItems = (name)=>{
           const filter = filteredCountries.filter((country)=>
           country.name.common !== name);
           setFilteredCountries(filter);
       }

       useEffect(()=>{
          fetchData(url)
       },[])

       return(<>
             {isLoading && <h2>Loading....</h2>}
             {error && <h2>{error.message}</h2>}
             {countries && <Countries RemoveItems={RemoveItems} countries={filteredCountries} />}
             </>
       )
}
export default App;