import axios from 'axios';
import React, { useEffect, useState } from "react"


const Users = () => {
    const [users, setUsers] = useState;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('');
            const responseJSON = await response.json();

            setUsers(responseJSON);
        }
        fetchData();
    },[])
}