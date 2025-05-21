import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import ForgotPasswordPage from './pages/forgotpassword';
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  );
}
export default App;