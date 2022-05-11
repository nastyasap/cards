import SuperInputText from "../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox";
import SuperSelect from "../../n1-main/m1-ui/common/c5-SuperSelect/SuperSelect";
import Error404 from "../../n1-main/m1-ui/common/c7-error/Error404";
import s from "./Test.module.css"

export const Test = () => {
    return (
        <div className={s.wrapper}>
           <div><SuperInputText placeholder={'Enter something'}/></div>
            <div><SuperButton>Press me ;)</SuperButton></div>
           <div><SuperCheckbox/></div>
           <div><SuperSelect options={['choose me', 'and me', 'and me']}/></div>
           <div className={s.error}><Error404/></div>
        </div>
    )
}