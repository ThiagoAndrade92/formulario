import { Link } from "react-router";

export const RotasLink = ({children, href, ...props}) => {
  return (
    <Link to={href} {...props}>
        {children}
    </Link>
  )
}
