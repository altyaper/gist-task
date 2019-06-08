import React from 'react';

function Sidebar(props) {
  return (
    <div className="sidebar block">
      {props.children}
    </div>
  )
}

export default Sidebar;
