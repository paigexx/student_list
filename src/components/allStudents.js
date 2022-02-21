import React, {useState } from "react"
import Average from "./student_card/average.js"
import CollapseButton from "./student_card/collapseButton.js"
import CollapseSection from "./student_card/collapseSection.js"
import AddTag from "./student_card/addTag.js"
import DisplayTags from "./student_card/displayTags.js"


const AllStudents = props => {
    const {studentList, setSearchName, searchName ,searchTag, setSearchTag, tags, setTags, filterStudent, setFilterStudent} = props 
    const [isopen, setisOpen] = useState({});

    return (
        
        <div className="container overflow-auto">
        {/* SEARCH BARS */}
        {/* name search */}
            <input 
            type="text" 
            placeholder="Search by name" 
            value={searchName}
            onChange={(e) => {setSearchName(e.target.value)}}
            className="search_bar"
            />
        {/* tag search */}
            <input 
            type="text" 
            placeholder="Search by tag" 
            value={searchTag}
            onChange={(e)=> {setSearchTag(e.target.value)}}
            className="search_bar"
            />

            {/* STUDENT CONTAINER  */}
            {studentList.map((student)=> { 
                return(

                      <div className="student_container">  
                        {/* student info */}
                        <div className="student_list">                     
                            <div className="student_header">

                                {/* student image */}
                                <img className="avatar" src={student.pic}/>
                                <div>

                                    {/* student name */}
                                    <p className="uppercase">{student.firstName}    {student.lastName}</p> 
                                    <div className="student_details">
                                        <div>
                                            <p>Email: {student.email}</p>
                                            <p>Company: {student.company}</p>
                                            <p>Skill: {student.skill}</p>
                                            <Average grades={student.grades} />
                                        </div>

                                        {/* display tags */}
                                        <DisplayTags student={student} tags={tags}/>
                              
                                        {/* tag input */}
                                        <AddTag setTags={setTags} student={student} isopen={isopen} tags={tags} />

                                        {/* test scores */}
                                        <CollapseSection  student={student} isopen={isopen}/>
                                    </div>
                                </div>
                            </div> 
                        {/* STUDENT COLLPSE  */}   
                        <CollapseButton isopen={isopen} setisOpen={setisOpen} studentId={student.id} />
                        </div>    
                    </div> 
                )})}         
        </div> 
    )
}

export default AllStudents