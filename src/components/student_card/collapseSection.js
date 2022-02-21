import React from "react"
import { Collapse} from "react-bootstrap"


const CollapseSection = props => {
    const {student, isopen} = props 

    return (
        <div>
            <Collapse in={isopen[student.id]}>
                <div className="student_details student_scores">
                    {student.grades.map((score, index) => { 
                    return (
                        <p>Test {index + 1}: {score}</p>)})}
                 </div>   
            </Collapse> 
        </div>
    )
}

export default CollapseSection