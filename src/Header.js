import { Link } from "react-router-dom";

const menus = [{label:"Home", path:'/'},
                {label:"About", path:'/About-us'},
                {label:"Contact Us", path:'/ContactUs'},
                {label:"Login",path:'/Login'},
                {label:"Settings", path:'/Settings'}];

function Header({menuList}){
    return (
        <>
            <div className="header">
                <div className="app-header-logo"><img src="logo192.png"/></div>
                <nav>
                    <ul className="main-menu">
                        {menus.map((item)=><li>
                            <Link to={item.path}>{item.label}</Link>
                        </li>)}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;