import React from 'react'
import { OrdersOverTime } from './AdminOrderOverTime'
import { OrderStatusDistribution } from './AdminOrderStatusOverDistribution'
import { ProductPerformance } from './AdminProductPerfomanceStatus'
import { RevenueOverTime } from './AdminRevenewOverTime'

function AdminHomePage() {
    return (
        <div className='flex gap-[30px]  items-start justify-between  dir-col'>
            <div className='flex w-full  gap-3   justify-between'>
                <OrdersOverTime />
                <RevenueOverTime />
            </div>
            <div className="flex gap-3 w-full justify-between">
                <ProductPerformance />
                <OrderStatusDistribution />
            </div>
        </div>
    )
}

export default AdminHomePage

// npm i react-chartjs-2 chart.js