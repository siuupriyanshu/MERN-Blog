import { BrowseRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
     <BrowseRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/projects' element={<Projects/>}/>

     </Routes>
     </BrowseRouter>
    </>
  )
}

export default App
