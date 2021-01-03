import React, { useState } from 'react'
import _ from 'lodash'
import './Students.scss'

export default function Students(props) {
    const { students } = props
    const [search, setSearch] = useState("")

    function setSearchValue(e) {
        setSearch(e.target.value)
    }

    const filtered = students.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className="stu-container">
            <div className="students-container">
                <header>
                    <input type="text" placeholder="Search by name" autoFocus onChange={_.debounce(setSearchValue, 700)}/>
                </header>

                <div className="mainSection">
                    {
                        filtered.map(item => {
                            return <div className="single-student" key={item.id}>{item.name}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}