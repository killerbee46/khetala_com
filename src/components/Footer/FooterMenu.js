import { Link } from "react-router-dom"

export const FooterMenu = (props) => {
    const content = props.data
    return <div>
        <Link className="text--white text--bigger" to={content.path}>{content.title}</Link>
    </div>
}