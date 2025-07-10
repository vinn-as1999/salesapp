import { IoMdCloseCircle } from "react-icons/io"
import { FaTrash } from "react-icons/fa6"
import { MdModeEdit } from "react-icons/md"
import { FaRegCheckCircle } from "react-icons/fa"


function EditionMenu(props) {
  return (
    <>
      <span className={props.editVariable === props.idx ? 'edit' : 'hidden'}>
        {
          props.trigger !== props.idx 
            ?  <MdModeEdit className='edit-bttn' size={25} onClick={(e) => {
                e.stopPropagation();
                props.edit(props.idx);
                props.setTrigger(props.idx);
                console.log(props.trigger)
              }} />
            : <FaRegCheckCircle className='save-bttn' size={25} onClick={(e) => {
                e.stopPropagation();
                props.setTrigger(null);
              }} />
        }

        <FaTrash className='delete-bttn' size={25} onClick={(e) => {
          e.stopPropagation();
          props.delete(props.idx);
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