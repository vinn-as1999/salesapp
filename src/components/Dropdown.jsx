function Dropdown(props) {
  return (
    
    <>
      {
        props.list.length > 0
          ? props.list.map((item, index) => (
            <div key={index} onClick={() => {setName(item[props.displayKey]); setList([])}}>
              {item[props.displayKey]}
            </div>
          ))
          : null
      }
    </>
  )
}

export default Dropdown