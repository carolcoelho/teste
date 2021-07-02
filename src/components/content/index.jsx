import React, { useEffect, useState } from 'react'
import '../content/index.scss'


export default function Index() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3333/books')
            .then(response => response.json())
            .then(data => setData(data))

    }, [])

    return (
        <div className="content" >
            <ul className="books-list">
                {data.map(item => <li key={item.id}><img src={item.image} />
                    <p> <span key={item.id}> <input type="checkbox" name="category" /> {item.id}</span></p>
                    <p> <span key={item.id}>{item.title}</span></p>
                    <p className="small"> <span key={item.id}>{item.editor}</span> </p>
                    <p className="small"> <span key={item.id}>{item.year}</span> </p>
                </li>)}
            </ul>
        </div>
    )
}

