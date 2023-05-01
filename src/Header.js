

const Header = ({menuList}) => {
    return (
        <>
        <div className="header">
            <h3>Navigation Bar</h3>
            <h6 className="inline-block">{menuList.map((item) => <li>{item}</li>)}</h6>
        </div>
        </>
    )
}
export default Header;