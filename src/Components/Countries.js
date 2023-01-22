import {v4 as uuidv4} from "uuid";
import style from "./Style/Countries.module.css"
import Country from "./Country";

const Countries = ({countries,RemoveItems})=>{
    return(
        <section className={style.countries}>
            {countries.map((country)=>{
                const countryNew = {country,id:uuidv4()}
                return <Country RemoveItems={RemoveItems} {...countryNew} key={countryNew.id}/>
            })}
        </section>
    )
}
export default Countries; 