export const MenuCell = props =>
    <div className="Menu Cell">
        <ul className="MenuItems">
            {props.menuItems.map(
                menuItem => <li className="MenuItem" key={menuItem}>{menuItem}</li>)}
        </ul>
    </div>;

