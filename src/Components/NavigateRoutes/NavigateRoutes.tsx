import {Route, Routes} from "react-router-dom";
import {Main} from "../Main/Main";
import {Statistic} from "../Statistic/Statistic";

export const NavigateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/statistic" element={<Statistic/>}/>
      <Route path="*" element={<div>страница не найдена</div>}/>
    </Routes>
  )
}