import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StatisticsScreen } from '../StatisticsScreen'

export const StatisticsRoutes = () => {
    return (
        <Routes>
            <Route path='home' element={<StatisticsScreen />} />


        </Routes>
    )
}
