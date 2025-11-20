import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import FastFlags from './pages/FastFlags';
import PS99Data from './pages/PS99Data';
import ScriptHub from './pages/ScriptHub';
import MultiInstanceLauncher from './pages/MultiInstanceLauncher';
import Macros from './pages/Macros';
import MyConfigs from './pages/MyConfigs';
import DownloadApp from './pages/DownloadApp';
import GitHubExport from './pages/GitHubExport';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider data-filename="pages/GitHubExport" data-linenumber="146" data-visual-selector-id="pages/GitHubExport146" client={queryClient}>
      <Router data-filename="pages/GitHubExport" data-linenumber="147" data-visual-selector-id="pages/GitHubExport147">
        <Layout data-filename="pages/GitHubExport" data-linenumber="148" data-visual-selector-id="pages/GitHubExport148">
          <Routes data-filename="pages/GitHubExport" data-linenumber="149" data-visual-selector-id="pages/GitHubExport149">
            <Route data-filename="pages/GitHubExport" data-linenumber="150" data-visual-selector-id="pages/GitHubExport150" path="/" element={<Navigate data-filename='pages/GitHubExport' data-linenumber='150' data-visual-selector-id='pages/GitHubExport150' to="/Dashboard" replace />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="151" data-visual-selector-id="pages/GitHubExport151" path="/Dashboard" element={<Dashboard data-filename='pages/GitHubExport' data-linenumber='151' data-visual-selector-id='pages/GitHubExport151' />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="152" data-visual-selector-id="pages/GitHubExport152" path="/FastFlags" element={<FastFlags data-filename='pages/GitHubExport' data-linenumber='152' data-visual-selector-id='pages/GitHubExport152' />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="153" data-visual-selector-id="pages/GitHubExport153" path="/PS99Data" element={<PS99Data />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="154" data-visual-selector-id="pages/GitHubExport154" path="/ScriptHub" element={<ScriptHub data-filename='pages/GitHubExport' data-linenumber='154' data-visual-selector-id='pages/GitHubExport154' />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="155" data-visual-selector-id="pages/GitHubExport155" path="/MultiInstanceLauncher" element={<MultiInstanceLauncher data-filename='pages/GitHubExport' data-linenumber='155' data-visual-selector-id='pages/GitHubExport155' />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="156" data-visual-selector-id="pages/GitHubExport156" path="/Macros" element={<Macros data-filename='pages/GitHubExport' data-linenumber='156' data-visual-selector-id='pages/GitHubExport156' />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="157" data-visual-selector-id="pages/GitHubExport157" path="/MyConfigs" element={<MyConfigs data-filename='pages/GitHubExport' data-linenumber='157' data-visual-selector-id='pages/GitHubExport157' />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="158" data-visual-selector-id="pages/GitHubExport158" path="/DownloadApp" element={<DownloadApp data-filename='pages/GitHubExport' data-linenumber='158' data-visual-selector-id='pages/GitHubExport158' />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="159" data-visual-selector-id="pages/GitHubExport159" path="/GitHubExport" element={<GitHubExport data-filename='pages/GitHubExport' data-linenumber='159' data-visual-selector-id='pages/GitHubExport159' />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}