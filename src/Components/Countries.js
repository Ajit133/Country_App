import {v4 as uuidv4} from "uuid";
import Country from "./Country";

const Countries = ({countries})=>{
    return(
        <section>
            {countries.map((country)=>{
                console.log(country)
                const countryNew = {country,id:uuidv4()}
                return <Country {...countryNew} key={countryNew.id}/>
            })}
        </section>
    )
}
export default Countries; 