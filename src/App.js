import React, { lazy, Suspense} from 'react'
import { Route, Switch} from 'react-router-dom'
import './App.css'
import Works from './pages/works.component'
import WorksContextProvider from './store/WorksContext'
import Header from './components/header/header.component'
import HomeContextProvider from './store/HomeContext'
import GeneralContextProvider from './store/GeneralContext'
import PageContainer from './pages/page-container.component'
import AboutContextProvider from './store/AboutContext';



const HomePage = lazy(() => import('./pages/home.component'))
const AboutPage = lazy(() => import('./pages/about.component'))
function App() {
 
  return (
  
       <div className="App">
           <GeneralContextProvider>
             <PageContainer>
              <HomeContextProvider>
                <Header/>
                <Switch>
                <Suspense fallback={<div>Loadding</div>}>
                  <Route path={'/'} exact>
                    <HomePage/>
                    <WorksContextProvider>
                      <Works/>
                    </WorksContextProvider>
                  </Route>
                  <AboutContextProvider>
                  <Route path={'/about'} component={AboutPage}/>
                  </AboutContextProvider>
                 
                </Suspense>
                </Switch>
              
              </HomeContextProvider>
             
             </PageContainer>
           </GeneralContextProvider> 
        </div>

   
  );
}

export default App;
