import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './assets/components/Layout'
import Resources from './assets/components/Resources'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path=":category" element={<Resources />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
