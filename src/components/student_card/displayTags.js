import React from "react"

const DisplayTags = props => {
    const {student, tags} = props 

    return (
        <div className="tags">
            {tags.filter(tag => tag.studentId === student.id).map((tag) => {
                return( <div className="tag" bg="secondary">{tag.value}</div> )})} 
        </div> 

    )
}

export default DisplayTags