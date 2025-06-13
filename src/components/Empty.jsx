import { PiListMagnifyingGlassThin } from "react-icons/pi";

function Empty() {
  return (
    <>
      <main className="no-data">
        <h1>Nenhum registro encontrado...</h1>
        <PiListMagnifyingGlassThin size={100} />
      </main>
    </>
  )
}

export default Empty