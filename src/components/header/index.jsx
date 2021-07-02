import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/logo_dotlib.png'
import '../header/index.scss'

export default function Index() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3333/menu')
            .then(response => response.json())
            .then(data => setData(data))

    }, [])

    return (
        <div className="header " >
            <img src={Logo} alt="logo" />
            <ul>
                {data.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
            <div className="input">
                <input />
                <button>Buscar</button></div>
        </div>
    )
}