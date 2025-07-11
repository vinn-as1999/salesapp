function Dropdown(props) {
  return (
    <>
      {
        props.list.length > 0
          ? props.list.map((client, index) => (
            <div key={index} onClick={() => {setName(client.client); setList([])}}>
              {client.client}
            </div>
          ))
          : null
      }
    </>
  )
}

export default Dropdown