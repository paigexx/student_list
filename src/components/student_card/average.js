import React, {useState} from "react"


const Average = (grades) => { 
    let total = 0
    grades.grades.map((grade) => {
       total += ((parseInt(grade)))
    })
    total = total/grades.grades.length
    total = total.toFixed(2)

    return (
        <p>Average: {total} %</p>
    )
}

export default Average