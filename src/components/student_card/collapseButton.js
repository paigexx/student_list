import React from "react"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CollapseButton = props => {
    const {studentId, setisOpen, isopen} = props 

    const handleCollapse = (id) => { setisOpen(prevState => ({...prevState, [id]: !prevState[id]}))
    }

    return (
        <div>
             {isopen[studentId] ? 
                 <RemoveIcon fontSize="large" style={{ color: 'grey' }} onClick={() => handleCollapse(studentId)}/>
                 : 
                 <AddIcon fontSize="large" style={{ color: 'grey' }} onClick={() => handleCollapse(studentId)}/> 
            }
        </div>
    )
}

export default CollapseButton