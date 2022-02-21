import axios from "axios"
import React, { useEffect, useState } from "react"
import AllStudents from "../components/allStudents"

const Main = props => {
    const [studentList, setStudentList] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [searchName, setSearchName] = useState("")
    const [searchTag, setSearchTag] = useState("")
    const [tags, setTags] = useState([])


     function filterName(students){
        console.log(students)
        const filter_name = students.filter(student => 
        student.firstName.toLowerCase().includes(searchName.toLowerCase()) 
        || student.lastName.toLowerCase().includes(searchName.toLowerCase())) 
        return (filter_name)}

    function filterTag(students){
        const data = []
        const filteredTags = tags.filter((tag) => tag.value.includes(searchTag.toLowerCase()))
        filteredTags.map((tag) => data.push(tag.studentId))
        const mystudents = students.filter((student) => data.includes(student.id))
        return (mystudents)}   



    const handleSearch = (students) => {
        if (searchTag !== "" && searchName !== ""){
            const name_filter =  filterName(students)
            const tag_filter = filterTag(students)
            const merged = name_filter.filter((student) => tag_filter.includes(student))
            return (merged)}

        else if (searchTag !== "") {
            const tag_filter = filterTag(students)
            return (tag_filter)}

        else if (searchName !== "") {
            const name_filter =  filterName(students)
            return (name_filter)}

        return students
    }

    
    useEffect(() => {
        axios.get(`https://api.hatchways.io/assessment/students`)
            .then(res => {
                const students = res.data["students"]
                console.log("aapi call")
                if (searchName !== "" || searchTag !== "" ){
                    setStudentList(handleSearch(students))
                    setLoaded(true)
                }
                else {
                    setStudentList(students)
                    setLoaded(true)}
                })
            .catch(err => console.log(err))},[searchName, searchTag])

    return(
        <div>
            {loaded && <AllStudents studentList={studentList} setSearchName={setSearchName} searchName={searchName} tags={tags} setTags={setTags} setSearchTag={setSearchTag}/> }
        </div>
    )
}

export default Main