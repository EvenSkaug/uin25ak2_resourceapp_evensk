import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './assets/components/Layout'
import Resources from './assets/components/Resources'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Resources />}></Route>
        <Route path="/css" element={<Resources />}></Route>
        <Route path="/javascript" element={<Resources />}></Route>
        <Route path="/react" element={<Resources />}></Route>
        <Route path="/sanity" element={<Resources />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
