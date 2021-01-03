import React, { useState } from 'react'

import './Students.scss'

export default function Students(props) {
    const { students } = props

    return (
        <div className="stu-container">
            <div className="students-container">
                <header>
                    <input type="text" placeholder="Search by name" autoFocus/>
                </header>

                <div className="mainSection">
                    {
                        students.map(item => {
                            return <div className="single-student" key={item.id}>{item.name}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}