import { Link } from "react-router-dom"
import type { LinkProps } from "react-router-dom"

export default function StyledLink (props: LinkProps){
    return <Link {...props} className="h3 px-4 py-2 bg-yellow"></Link>
}

