import { IoMdCloseCircle } from "react-icons/io"
import { FaTrash } from "react-icons/fa6"
import { MdModeEdit } from "react-icons/md"
import { FaRegCheckCircle } from "react-icons/fa"


function EditionMenu(props) {
  return (
    <>
      <span className={props.editVariable === props.id ? 'edit' : 'hidden'}>
        {
          props.trigger !== props.id 
            ?  <MdModeEdit className='edit-bttn' size={25} onClick={(e) => {
                e.stopPropagation();
                props.edit(props.id);
                props.setTrigger(props.id);
                console.log(props.trigger)
              }} />
            : <FaRegCheckCircle className='save-bttn' size={25} onClick={(e) => {
                e.stopPropagation();
                props.setTrigger(null);
              }} />
        }

        <FaTrash className='delete-bttn' size={25} onClick={(e) => {
          e.stopPropagation();
          props.delete(props.id);
        }} />
        
        <IoMdCloseCircle className='close-bttn' size={25} onClick={(e) => {
          e.stopPropagation();
          props.setEditFunction(null);
        }} />
      </span>
    </>
  )
}

export default EditionMenu