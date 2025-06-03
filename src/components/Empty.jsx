import { PiListMagnifyingGlassThin } from "react-icons/pi";

function Empty() {
  const style = {
    textAlign: 'center',
    color: 'grey',
    width: '90%',
    fontSize: '1rem'
  }

  return (
    <>
      <main style={style}>
        <h1>Nenhum registro encontrado...</h1>
        <PiListMagnifyingGlassThin size={100} />
      </main>
    </>
  )
}

export default Empty