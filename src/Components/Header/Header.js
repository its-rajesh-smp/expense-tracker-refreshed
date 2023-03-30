import React, { useState } from 'react';
import './Header.css'
import {SideNavCard} from "../Cards/Card.js"

function Header(){



    return (
        <div className='sideNav' >
            <div className='sideNav_top'>
                <p>Expense Tracker </p>
                <i className='bx bx-menu'></i>
            </div>

            <SideNavCard name={"Transaction"} icon={<i className='bx bx-transfer-alt' ></i>} />
            <SideNavCard name={"Budgets"}  icon={<i className='bx bx-wallet'></i>} />
            <SideNavCard name={"Bills"}  icon={<i className='bx bx-receipt'></i>} />
            <SideNavCard name={"Statistics"}  icon={<i className='bx bx-stats' ></i>} />
            <SideNavCard name={"Categories"}  icon={<i className='bx bx-category' ></i>} />
            <SideNavCard name={"LogOut"}  icon={<i className='bx bx-log-out'></i>} style={{marginTop:"auto", borderTop:" 5px solid black"}} />

        </div>

    )
}


export default Header;