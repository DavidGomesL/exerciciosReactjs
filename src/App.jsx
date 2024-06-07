import ExemploPropsDois from "./components/ExemploPropsDois"


function App() {

  let article = [
    {key: 1, title: "Título Um", subtitle: "Subtitle Um"},
    {key: 2, title: "Título Dois", subtitle: "Subtitle Dois"},
    {key: 3, title: "Título Três", subtitle: "Subtitle Três"},
    {key: 4, title: "Título Quatro", subtitle: "Subtitle Quatro"},
    {key: 5, title: "Título Quinto", subtitle: "Subtitle Quinto"},
  ]

  let conteudo = article.map(art => <ExemploPropsDois key={art.id} title={art.title} subtitle={art.subtitle}/>)
  
  return (
    <>
      {conteudo}
    </>
  )
}

export default App
