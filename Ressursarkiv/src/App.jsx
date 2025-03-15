import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './assets/components/Layout'
import Resources from './assets/components/Resources'

function App() {
  return (
    <Layout>
      <Routes>
        {/*Route som lastes som standby når man åpner siden*/}
        <Route path="/" element={<h1>Velg en kategori!</h1>}></Route>
        {/*Route til de ulike kategori sidene som bruker "category" fra resources for å velge hvilken kategoriside som skal vises*/}
        <Route path=":category" element={<Resources />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
