import React, { useEffect, useState } from 'react'
import '../categories/index.scss'


export default function Index() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3333/categories')
            .then(response => response.json())
            .then(data => setData(data))
        console.log(data)

    }, [])


    return (
        <aside className="categories" >
            <h1>Assunto</h1>
            <ul>
                {data.map(item => <li key={item.id}>
                    <input type="checkbox" id="check" name="category" />
                    <label for="check">{item.title}</label>
                </li>)}
            </ul>
        </aside>
    )
}

