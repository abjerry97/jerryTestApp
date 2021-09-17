import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SideBarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillDashboard/>,
        cName: 'side-text'
    },
    {
        title: 'Test',
        path: '/test',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'side-text'
    },
    {
        title: 'Question',
        path: '/question',
        icon: <FaIcons.FaQuestion/>,
        cName: 'side-text'
    },
    {
        title: 'Subjects',
        path: '/subjects',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'side-text'
    },
    {
        title: 'Candidate',
        path: '/candidate',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'side-text'
    },
    {
        title: 'User',
        path: '/user',
        icon: <FaIcons.FaUser/>,
        cName: 'side-text'
    },
]