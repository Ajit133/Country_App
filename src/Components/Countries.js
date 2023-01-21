import {v4 as uuidv4} from "uuid";
import style from "./Style/Countries.module.css"
import Country from "./Country";

const Countries = ({countries})=>{
    return(
        <section className={style.countries}>
            {countries.map((country)=>{
                console.log(country)
                const countryNew = {country,id:uuidv4()}
                return <Country {...countryNew} key={countryNew.id}/>
            })}
        </section>
    )
}
export default Countries; 