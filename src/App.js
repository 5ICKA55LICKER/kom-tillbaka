import React from 'react'
import './App.css'
import Header from './components/header/header.component'
import Home from './pages/home.component'
import HomeContextProvider from './store/HomeContext'
import GeneralContextProvider from './store/GeneralContext'
import PageContainer from './pages/page-container.component'
import WorksContextProvider from './store/WorksContext'
import Works from './pages/works.component'
function App() {

  return (
  
       <div className="App">
           <GeneralContextProvider>
             <PageContainer>
              <HomeContextProvider>
                <Header/>
                <Home/>
              </HomeContextProvider>
              <WorksContextProvider>
                <Works/>
              </WorksContextProvider>
             </PageContainer>
           </GeneralContextProvider> 
        </div>

   
  );
}

export default App;
