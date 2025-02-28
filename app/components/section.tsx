import { PropsWithChildren } from "react"
import clsx from "clsx";

export const Section = (props:PropsWithChildren<{classname?:string}>)=>{
return(
    <section className={clsx("max-w-3xl px-4 m-auto",props.classname)}>
        {props.children}
    </section>
)}