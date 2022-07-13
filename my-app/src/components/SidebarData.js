import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ImageIcon from '@mui/icons-material/Image';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';


export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon></HomeIcon>,
        link: "/home"
    },
    {
        title: "Mail",
        icon: <MailIcon></MailIcon>,
        link: "/mail"
    },
    {
        title: "Analytics",
        icon: <AnalyticsIcon></AnalyticsIcon>,
        link: "/analytics"
    },
    {
        title: "Dashboard",
        icon: <DashboardIcon></DashboardIcon>,
        link: "/dashboard"
    },
    {
        title: "Images",
        icon: <ImageIcon></ImageIcon>,
        link: "/images"
    },
    {
        title: "Friends",
        icon: <PeopleRoundedIcon></PeopleRoundedIcon>,
        link: "/friends"
    },
]