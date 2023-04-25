/*import logo from './logo.svg';*/
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';
import StudentInfo from './StudentInfo';

const menu = ['Home', 'About','Blog','Contact'];
const listStudent = {ron:"Ronnie", lyn:"Roselyn", kris:"Kristoffer", gela:"Angela"};

const listStudents = [
  {ron:"Ronnie", lyn:"Roselyn", kris:"Kristoffer", gela:"Angela"},
  {ron:"Ronnie", lyn:"Roselyn", kris:"Kristoffer", gela:"Angela"},
  {ron:"Ronnie", lyn:"Roselyn", kris:"Kristoffer", gela:"Angela"},
  {ron:"Ronnie", lyn:"Roselyn", kris:"Kristoffer", gela:"Angela"}
];


function App() {
  return (
    <div className="App">
        <Header menuList={menu}/>
        <MainContent/>
        <div>
          <button className='btn btn-primary'>Click</button>
          <button className='btn btn-primary'>Test</button>
        </div>
        <StudentInfo data={listStudent} title="Details"/>
        <div className="row">
          {listStudents.map((studentData) => <StudentInfo data={studentData}/>)}
        </div>
        

        <Footer/>
        
    </div>
  );
}

export default App;
