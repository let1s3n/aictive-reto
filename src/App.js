import React from 'react'
import './assets/sass/app.scss';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navbar'
import Home from './pages/home'
import Profile from './pages/profile'
import Settings from './pages/settings'
import Apps from './pages/apps'
import Support from './pages/support'
import NoMatch from './pages/nomatch'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="apps" element={<Apps />} />
          <Route path="support" element={<Support />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
