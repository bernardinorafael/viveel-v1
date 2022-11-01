import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./styles/global.scss"
import { DefaultLayout } from "./layout/index"
import { Chain } from "./pages/Chain"
import { Distribution } from "./pages/Distribution"
import { Resume } from "./pages/Resume"
import { Symbol } from "./pages/Symbol"
import { Token } from "./pages/Token"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Token />} />
          <Route path="/symbol" element={<Symbol />} />
          <Route path="/distribution" element={<Distribution />} />
          <Route path="/chain" element={<Chain />} />
        </Route>

        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}
