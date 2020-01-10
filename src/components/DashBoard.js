import React, { useState, useEffect } from 'react';
import './Styles.css';

const DashBoard = ({ history }) => {
    useEffect(() => {
        console.log("history in dash board  :::::: ", history);

    })
    return (
        <div className="dash"></div>
    )
}
export default DashBoard;