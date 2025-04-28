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
import Training from '../components/ChooseStudy/Study/Training/Training';
import CoursTraining from '../components/ChooseStudy/Study/Training/ContentCours/CoursTraining';
import Ide from '../components/ChooseStudy/Study/Ide/Ide';
import CoursIde from "../components/ChooseStudy/Study/Ide/ContentCours/CoursIde";
import Langue from '../components/ChooseStudy/Study/Langue/Langue';
import FrancaisCourL1 from '../components/ChooseStudy/Study/Langue/level1/FrancaisCoursL1/FrancaisCourL1';
import FrancaisCourL2 from '../components/ChooseStudy/Study/Langue/level2/FrancaisCoursL2/FrancaisCourL2';
import AnglaisCourL1 from '../components/ChooseStudy/Study/Langue/level1/AnglaisCoursL1/AnglaisCourL1';
import AnglaisCourL2 from '../components/ChooseStudy/Study/Langue/level2/AnglaisCoursL2/AnglaisCourL2';
import BasicCommunication from '../components/ChooseStudy/Study/Langue/level1/AnglaisCoursL1/Topics/BasicCommunication';
import GrammarConjugation from '../components/ChooseStudy/Study/Langue/level1/AnglaisCoursL1/Topics/GrammarConjugation';
import WritingParagraphs from '../components/ChooseStudy/Study/Langue/level1/AnglaisCoursL1/Topics/WritingParagraphs';
import AdvancedCommunication from '../components/ChooseStudy/Study/Langue/level2/AnglaisCoursL2/Topics/AdvancedCommunication';
import AdvancedGrammar from '../components/ChooseStudy/Study/Langue/level2/AnglaisCoursL2/Topics/AdvancedGrammar';
import StructuredWriting from '../components/ChooseStudy/Study/Langue/level2/AnglaisCoursL2/Topics/StructuredWriting';
import CommunicationBase from '../components/ChooseStudy/Study/Langue/level1/FrancaisCoursL1/Themes/CommunicationBase';
import EcritureParagraphes from '../components/ChooseStudy/Study/Langue/level1/FrancaisCoursL1/Themes/EcritureParagraphes';
import GrammaireConjugaison from '../components/ChooseStudy/Study/Langue/level1/FrancaisCoursL1/Themes/GrammaireConjugaison';
import CommunicationAvancee from '../components/ChooseStudy/Study/Langue/level2/FrancaisCoursL2/Themes/CommunicationAvancee';
import EcritureStructuree from '../components/ChooseStudy/Study/Langue/level2/FrancaisCoursL2/Themes/EcritureStructuree';
import GrammaireAvancee from '../components/ChooseStudy/Study/Langue/level2/FrancaisCoursL2/Themes/GrammaireAvancee';
import AdminDashboard from '../pages/admin/AdminDashboard';
import UserProfile from '../pages/profile';
import QuizPage from '../components/ChooseStudy/Study/QuizPage';
import CertificatePage from '../components/ChooseStudy/Study/Certification';


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ATeachLevel" element={<ATeachLevel />} />
    <Route path="/BeforeQuestions" element={<BeforeQuestions />} />
    <Route path="/question/radio/:radioId" element={<QuestionPageTemplate />} />
    <Route path="/question/:id" element={<DynamicQuestionPage />} />
    <Route path="/CourseHas" element={<CourseHas />} />
    <Route path="/DoneAge" element={<DoneAge />} />
    <Route path="/ThankYou" element={<ThankYou />} />
    <Route path="/SignIn" element={<SignIn />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/forgot-password" element={<Forgot1 />} />
    <Route path="/send-u-link" element={<SendU />} />
    <Route path="/new-password" element={<UNewPwd />} />
    <Route path="/choose-what" element={<ChooseWhat />} />
    <Route path="/training" element={<Training />} />
    <Route path="/courstraining/:training" element={<CoursTraining />} />
    <Route path="/ide" element={<Ide />} />
    <Route path="/courside/:ideName" element={<CoursIde />} />

    <Route path="/langues" element={<Langue />} />
    {/* Define the routes for each language level directly */}
    <Route path="/courslangue/francais1" element={<FrancaisCourL1/>} />
    <Route path="/courslangue/francais2" element={<FrancaisCourL2 />} />
    <Route path="/courslangue/anglais1" element={<AnglaisCourL1 />} />
    <Route path="/courslangue/anglais2" element={<AnglaisCourL2/>} />

    {/* Define the routes for the specific topics within each language level */}
    <Route path="/courslangue/anglais1/basic-communication" element={<BasicCommunication />} />
    <Route path="/courslangue/anglais1/grammar-conjugation" element={<GrammarConjugation />} />
    <Route path="/courslangue/anglais1/writing-paragraphs" element={<WritingParagraphs />} />

    <Route path="/courslangue/francais1/communication-base" element={<CommunicationBase />} />
    <Route path="/courslangue/francais1/grammaire-conjugaison" element={<GrammaireConjugaison />} />
    <Route path="/courslangue/francais1/ecriture-paragraphes" element={<EcritureParagraphes />} />

    <Route path="/courslangue/anglais2/advanced-communication" element={<AdvancedCommunication />} />
    <Route path="/courslangue/anglais2/advanced-grammar" element={<AdvancedGrammar />} />
    <Route path="/courslangue/anglais2/structured-writing" element={<StructuredWriting />} />

    <Route path="/courslangue/francais2/communication-avancee" element={<CommunicationAvancee />} />
    <Route path="/courslangue/francais2/grammaire-avancee" element={<GrammaireAvancee />} />
    <Route path="/courslangue/francais2/ecriture-structuree" element={<EcritureStructuree />} />
    <Route path="/quiz/:id" element={<QuizPage />} />
    <Route path="/certificate" element={<CertificatePage />} />

    <Route path="/profile" element={<UserProfile/>} />

    
    {/* adminRoute */}
    <Route path="/admin/dashboard" element={<AdminDashboard/>} />

  </Routes>
);

export default AppRoutes;