import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Nav/Nav'
import FloatingNav from '../FloatingNav/FloatingNav'
import Style from './Layout.module.css'

export default function Layout() {
    return <>
        <div className={Style.toggle}> <FloatingNav /></div>
        <Navigation />
        <div className="mt-5"> <Outlet /></div>
    </>
}
