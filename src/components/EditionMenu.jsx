import { IoMdCloseCircle } from "react-icons/io"
import { FaTrash } from "react-icons/fa6"
import { MdModeEdit } from "react-icons/md"

function EditionMenu(props) {
  async function handleDelete(params, id) {
    if (params === 'sale') console.log('deletou venda')
    if (params === 'product') console.log('deletou produto')
  }

  return (
    <>
      <span className={props.editVariable === props.id ? 'edit' : 'hidden'}>
        <MdModeEdit className='edit-bttn' size={30} />
        <FaTrash className='delete-bttn' size={30} onClick={(e) => {
          e.stopPropagation();
          handleDelete(props.functionParams, props.id);
        }} />
        <IoMdCloseCircle className='close-bttn' size={30} onClick={(e) => {
          e.stopPropagation();
          props.setEditFunction(null);
        }} />
      </span>
    </>
  )
}

export default EditionMenu