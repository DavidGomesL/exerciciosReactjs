import ExemploPropsDois from "./components/ExemploPropsDois"


function App() {

  let article = [
    {key: 1, title: "Título Um", subTitle: "Subtitulo Um"},
    {key: 2, title: "Título Dois", subTitle: "Subtitulo Dois"},
    {key: 3, title: "Título Três", subTitle: "Subtitulo Três"},
    {key: 4, title: "Título Quatro", subTitle: "Subtitulo Quatro"},
    {key: 5, title: "Título Cinco", subTitle: "Subtitulo Cinco"},
    {key: 6, title: "Título Seis", subTitle: "Subtitulo Seis"},
    {key: 7, title: "Título Sete", subTitle: "Subtitulo Sete"},
    {key: 8, title: "Título Oito", subTitle: "Subtitulo Oito"},
    {key: 9, title: "Título Nove", subTitle: "Subtitulo Nove"},
    {key: 10, title: "Título Dez", subTitle: "Subtitulo Dez"}
  ]

 let conteudo = article.map((art) => <ExemploPropsDois key={art.id} title={art.title} subtitle={art.subtitle} />)
  
  return (
    <>
      {conteudo}
    </>
  )
}

export default App
