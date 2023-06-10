import React, { useState } from 'react';
import SideSearch from './SideSearch';

export default function SidebarTitles(props) {
    const [search, setSearch] = useState("")
    function handleChange(event) {
        setSearch(event.target.value)
    }

    const searchArray = props.tasks.filter(task => {
        return task.heading.toLowerCase().indexOf(search.toLowerCase()) > -1
    })


    const displaySearch = searchArray.map(task => {
        return (
            <SideSearch
                key={task.taskid}
                taskid={task.taskid}
                title={task.heading}
                date={task.date}
            />)
    })
    const searchRes = (
        <div className='sidebartitles'>
            <h2 className='searchresults--head'>Search Results</h2>
            {!searchArray.length ?
                <SideSearch
                    title={"Not Found"}
                />
                :
                displaySearch}
        </div>
    )

    const sidebarinfo = props.tasks.map(tasks => {
        return (
            <SideSearch
                key={tasks.taskid}
                taskid={tasks.taskid}
                title={tasks.heading}
                date={tasks.date}
            />
        )
    })

    return (
        <div className='sidebar'>
            <div className='header--logo--text'>
                <h1>Do Them!</h1>
            </div>
            <div className='header--search'>
                <input
                    type='text'
                    placeholder='Search'
                    name='search'
                    value={search}
                    onChange={handleChange}
                />
            </div>
            {search === "" ? sidebarinfo : searchRes}

        </div>
    )
}