import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Registeration from './pages/Registeration';
import Mykeys from './pages/Mykeys';
import MyDigitalCertificate from './pages/MyDigitalcertificate';
import Database from "./pages/Database";
import Formsubmitted from './pages/Formsubmitted';
import Errorpage from './pages/Errorpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {SidebarProvider} from "./sidebarcontext"
import Showkeys from "./pages/Showkeys"
import Showdigitalcertificate from './pages/Showdigitalcertificate';
import VerifySignature from './pages/verifysignature';


ReactDOM.render(
  <SidebarProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registeration" element={<Registeration />} />
        <Route path="/mykeys" element={<Mykeys />} />
        <Route path="mykeys/showkeys/:uniqueId" element={<Showkeys />} />
        <Route
          path="/mydigitalcertificate"
          element={<MyDigitalCertificate />}
        />
        <Route
          path="/mydigitalcertificate/showcertificate/:uniqueId"
          element={<Showdigitalcertificate />}
        />
        <Route
          path="/verifysignature"
          element={<VerifySignature />}
        />

        <Route path="/database" element={<Database />} />
        <Route path="/formsubmitted" element={<Formsubmitted />} />
        <Route path="/error" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  </SidebarProvider>,
  document.getElementById("root")
);


