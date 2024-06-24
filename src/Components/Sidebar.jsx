import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="siderbar-heading-container">
        <h2 className="text-lg font-bold">Admin Pannel</h2>
      </div>
      <nav className='sidebar-container'>
      <NavLink to="/" className="navlinks">Home</NavLink>
        <NavLink to="/ecommerce" className="navlinks">Ecommerce</NavLink>
        <NavLink to="/orders" className="navlinks">Orders</NavLink>
        <NavLink to="/employees" className="navlinks">Employees</NavLink>
        <NavLink to="/customers" className="navlinks">Customers</NavLink>
        <NavLink to="/calendar" className="navlinks">Calendar</NavLink>
        <NavLink to="/kanban" className="navlinks">Kanban</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
