import React from "react"
let regex = new RegExp("[a-zA-Z0-9_]")


const AddTag = props => {
    const {student, isopen, setTags, tags} = props 

    
    const addTag = (studentId, e) => {
        if (e.keyCode === 32 || e.keyCode === 13) {
            if(regex.test(e.target.value)){
                setTags([...tags, {studentId, value:e.target.value}]);
                e.target.value="" }}
    }
    
    return (
        <div>
            {!isopen[student.id] ? 
             <input
                onKeyDown={addTag.bind(this, student.id)}
                className="tag_add"
                type="text"
                placeholder="Add a tag"/>
                : null }    
        </div>
    )
}

export default AddTag