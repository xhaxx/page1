import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AboutMe from './pages/AboutMe.tsx'
import BackendProjects from './pages/BackendProjects.tsx'
import AgentDev from './pages/AgentDev.tsx'
import FrontendDesign from './pages/FrontendDesign.tsx'
import MessageBoard from './pages/MessageBoard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects/backend" element={<BackendProjects />} />
        <Route path="/projects/agent" element={<AgentDev />} />
        <Route path="/projects/frontend" element={<FrontendDesign />} />
        <Route path="/message-board" element={<MessageBoard />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
