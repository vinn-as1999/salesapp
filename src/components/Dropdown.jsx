function Dropdown(props) {
  return (
    <>
      {
        props.list.length > 0
          ? props.list.map((item, index) => (
            <div key={index} onClick={() => {props.setName(item[props.displayKey]); props.setList([])}}>
              {item[props.displayKey]}
            </div>
          ))
          : null
      }
    </>
  )
}

export default Dropdown