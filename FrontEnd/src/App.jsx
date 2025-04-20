import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import './app.css' ;

const App = () => (
  <div className="body">
    <Header />
    <main className="flex-grow">
      <AppRoutes />
    </main>
    <Footer />
  </div>
);


export default App;
