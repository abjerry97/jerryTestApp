import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';


export const SideBarData = [
    {
        title: 'Dashboard',
        path: '/gigs',
        icon: <MdIcons.MdHome/>,
        cName: 'side-text'
    },
    {
        title: 'Gigs',
        path: '/gigs',
        icon: <IoIcons.IoMdBriefcase/>,
        cName: 'side-text'
    },
    {
        title: 'Company',
        path: '/gigs',
        icon: <FaIcons.FaIndustry/>,
        cName: 'side-text'
    },
    {
        title: 'Account',
        path: '/gigs',
        icon: <FaIcons.FaUser/>,
        cName: 'side-text'
    },
]