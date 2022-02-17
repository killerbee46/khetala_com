export const FooterContact = (props) => {
    const contact = props.data
    return <div className="flex text--bigger">
        <div style={{marginRight:'10px'}}>
        {contact.icon}
        </div>
        <div>
        {contact.info}
        </div>
    </div>
}