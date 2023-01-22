import style from "./Style/Country.module.css";
// import App from "../App";
// import UserContext from "../Contexts/UserContext";


const Country = ({country,RemoveItems})=>{
    
    const {name,flags,capital,population,area} = country
    const handleButton = (name)=>{
        RemoveItems(name)
    }
    return(
            <article className={style.country}>
                <div>
                    <img src={flags.png} alt={name.common} className={style.flags} />
                    <h3>Name: {name.common}</h3>
                    <h3>Population: {population}</h3>
                    <h3>Capital: {capital}</h3>
                    <h3>Area: {area}</h3>
                    <button className={style.btn} onClick={()=>{handleButton(name.common)}}>Remove Country</button>
                    {/* <UserContext.Provider value={{handleButton}} ><App /></UserContext.Provider> */}

                </div>
            </article>
    )
}
export default Country;