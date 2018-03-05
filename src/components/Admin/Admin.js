import React, { Component } from 'react';
import './Admin.css'
import { Link } from 'react-router-dom'

class Admin extends Component {

    render() {
        return (
            <div className='adm-page'>

                <div className='adm-nav'>
                    <ul className='adm-links'>
                        <li className='adm-link'>Beer Organizer </li>
                        <li className='adm-link'>Manage Events</li>
                        <li className='adm-link'>Order Helper</li>
                        <li className='adm-link'>Mailing List</li>
                        <li className='adm-link'>Customers</li>
                        <li className='adm-link'>Configuration</li>
                        <Link to='/'><li className='adm-link'>Back to site </li></Link>
                    </ul>
                </div>

                <div className='adm-content'>

                </div>


            </div>
        )
    }
}
export default Admin;