import NavItem from "../../navbar/NavItem";

const FooterColumnMD = ({ db }) => {
    return (
        <div className="MDC">
            <ul>
                {db.col.map((e,i) => (
                    <NavItem key={i}>
                        {e.link}
                    </NavItem>
                ))}
            </ul>
        </div>
    );
};

export default FooterColumnMD;