import { Routes, Route } from 'react-router-dom';
import Home from '../components/HomePage/Home';
import ATeachLevel from '../pages/ATeachLevel';
import BeforeQuestions from '../pages/BeforeQuestions';
import DynamicQuestionPage from '../components/QuestionsPagesIntermediate/DynamicQuestionPage';
import QuestionPageTemplate from '../components/QuestionsPagesIntermediate/QuestionPageTemplate';
import CourseHas from '../pages/CourseHas';
import DoneAge from '../pages/DoneAge';
import ThankYou from '../pages/ThankYou';
import SignIn from '../components/AuthPages/SignIn';
import Login from '../components/AuthPages/Login';
import Forgot1 from '../components/AuthPages/ForgetPassword/forgot1';
import SendU from '../components/AuthPages/ForgetPassword/SendU';
import UNewPwd from '../components/AuthPages/ForgetPassword/UNewPwd';
import ChooseWhat from '../components/ChooseStudy/ChooseWhat';
import Training from '../components/ChooseStudy/Training';
import Ide from '../components/ChooseStudy/Ide';
import Langue from '../components/ChooseStudy/Langue';
import '../app.css'; 
const AppRoutes = () => (
  <Routes> 
    <Route path='/' element={<Home/>}/>
    <Route path='/ATeachLevel' element={<ATeachLevel/>}/>
    <Route path='/BeforeQuestions' element={<BeforeQuestions/>}/>
    <Route path="/question/radio/:radioId" element={<QuestionPageTemplate />} />
    <Route path="/question/:id" element={<DynamicQuestionPage />} />
    <Route path='/CourseHas' element={<CourseHas/>}/>
    <Route path='/DoneAge' element={<DoneAge/>}/>
    <Route path='/ThankYou' element={<ThankYou/>}/>
    <Route path='/SignIn' element={<SignIn/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/forgot-password' element={<Forgot1/>}/>
    <Route path='/send-u-link' element={<SendU/>}/>
    <Route path='/new-password' element={<UNewPwd/>}/>
    <Route path='/choose-what' element={<ChooseWhat/>}/>
    <Route path='/training' element={<Training/>}/>
    <Route path='/ide' element={<Ide/>}/>
    <Route path='/langues' element={<Langue/>}/>








  </Routes>
);

export default AppRoutes;
