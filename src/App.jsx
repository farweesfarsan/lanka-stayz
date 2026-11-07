import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import StaysPage from "./pages/StaysPage";
import PropertyPage from "./pages/PropertyPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="stays" element={<StaysPage />} />
        <Route path="stays/:id" element={<PropertyPage />} />
        <Route path="properties/:slug" element={<PropertyPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
