import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

function InstructorPage() {
    const { accessToken } = useSelector(state => state.auth);
    useEffect(() => {
        const fetchInsturctor = async () => {
            const response = await fetch(`http://192.168.8.119:3000/api/instructors`, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            });
            const data = await response.json();
            console.log(data);
        }
        fetchInsturctor();
    }, []);
    return (
        <>



        </>
    )
}

export default InstructorPage