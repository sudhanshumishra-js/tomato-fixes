import React, { useState } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  const [hoverId, setHoverId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoverId(id);
  };

  const handleMouseLeave = () => {
    setHoverId(null);
  };

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, exercitationem excepturi temporibus obcaecati voluptas vitae?</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=> prev === item.menu_name ? 'All' : item.menu_name)} key={index} className= "explore-menu-list-item" 
                    onMouseEnter={() => handleMouseEnter(item.id)} 
                    onMouseLeave={handleMouseLeave}
                    >
                        <img className={category===item.menu_name?'active':'' + (hoverId === item.id ? 'hovered' : '')} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu