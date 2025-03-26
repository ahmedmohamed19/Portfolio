import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Nav/Nav'
import FloatingNav from '../FloatingNav/FloatingNav'

export default function Layout() {
    return <>
        <FloatingNav />
        <Navigation />
        <div className="mt-5"> <Outlet /></div>
    </>
}
