import { Link } from "react-router-dom"
import type { LinkProps } from "react-router-dom"

export default function StyledLink ({className ="", ...props}: LinkProps){
    return <Link {...props} className={`h3 px-4 py-2$ ${className}`}></Link>
}

