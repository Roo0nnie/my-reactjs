import { Button } from 'react-bootstrap';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';
import StudentInfo from './StudentInfo';
import Invoice from './Invoice';
import StudentList from './StudentList';



const menu = ['Home', 'About','Blog','Contact'];
const listStudent = {id: 1,firstName:"Ronnie", lastName:"Estillero", code:"001", age: 25,gender: "male", course: "BSIT 2B",birthdate:"2001-09-08"};


const listStudents = [
	{id: 1,firstName:"Juan", lastName:"Dela Cruz", code:"001", age: 25,gender: "male", course: "Manager",birthdate:"1990-01-01"},
	{id: 2,firstName:"Anna", lastName:"Salvador", code:"002", age: 21, gender: "female", course: "Junior Dev",birthdate:"1991-01-01"},
	{id: 3,firstName:"Mark", lastName:"Bautista", code:"003", age: 28, gender: "male", course: "Senior Fullstack Dev",birthdate:"1992-01-01"},
	{id: 4,firstName:"Micheal", lastName:"Garcia", code:"004", age: 31, gender: "male", course: "CEO",birthdate:"1993-01-01"},
    {id: 5,firstName:"Michelle", lastName:"Bautista", code:"005", age: 34, gender: "female", course: "CEO",birthdate:"1993-01-01"},
    {id: 6,firstName:"Nicole", lastName:"Dela Cruz", code:"006", age: 30, gender: "female", course: "CEO",birthdate:"1993-01-11"},
    {id: 7,firstName:"Jerold", lastName:"Cuico", code:"006", age: 30, gender: "male", course: "Fullstack Dev",birthdate:"1994-01-28"},
    {id: 8,firstName:"Joshua", lastName:"Tobongbanua", code:"006", age: 30, gender: "male", course: "Fullstack Dev",birthdate:"1995-01-04"},
    {id: 9,firstName:"Ralph", lastName:"Arcos", code:"006", age: 30, gender: "male", course: "Fullstack Dev",birthdate:"1996-04-01"},
    {id: 10,firstName:"Amie", lastName:"Mimo", code:"006", age: 30, gender: "female", course: "Fullstack Dev",birthdate:"1996-08-01"},
];

let invoice = {invoiceTo:"Juan Dela Cruz", date:"2023-04-15", address1: "810 Oroquieta Street Sta Cruz 1000", address2:"Manila, Metro Manila, Philippines", invoiceNumber:"6845",paymentMode:"COD"};

let invoiceItems = [{description: "Mouse", Qty: 3, unitPrice: 200}, 
                {description: "Keyboard", Qty: 3, unitPrice: 400},
                {description: "Monitor", Qty: 6, unitPrice: 5400},
                {description: "CPU Tower Case", Qty: 3, unitPrice: 1200},
                {description: "Headset", Qty: 3, unitPrice: 500},
                {description: "UPS", Qty: 1, unitPrice: 4000},];

    const vehicles = ['mustang', 'f-150', 'expedition'];
    const [car, ford, toyota] = vehicles;
    const [in1,,,,in5] = invoiceItems;

    const numberSet1 = [23,34,56,34,51,8,11,43];
    const numberSet2 = [28,34,56,34,51,8,11,48];

    const conbinednumber = [...numberSet1, ...numberSet2];
    const [first, second, ...remaining] = numberSet1;

      let locked = 120;
      let canChange = locked >= 120 ? 'True': 'False';

      let grade = 67;
      let passingGrade = grade >= 70 ? 'Passed':grade < 70 ? 'Failed': 'ok';

      const hellway = () => {
        return 'hellway men';
      }

      let speed = 230;
      let message = speed >= 200 ? (speed >= 230 ? hellway(): 'Too fast') : speed >= 80 ? 'Fast': 'ok';

function Home() {
    return(
        <>
        <div className="App">
      
      <div>{car}</div>
         <div>{ford}</div>
         <div>{toyota}</div>
    
         <div>{in1.description}</div>
         <div>{in5.description}</div>
         <div>{conbinednumber.join(', ')}</div>
         <div>{first}</div>
         <div>{second}</div>
         <div>{remaining}</div>
         <div>{canChange}</div>
         <div>{passingGrade}</div>
         <div>{message}</div>
         <Header menuList={menu}/>
         <MainContent/>
         
           <div>
             <button className='btn btn-primary'>Click</button>
             <button className='btn btn-primary'>Test</button>
           </div>
       
         <Footer/>
         <Invoice details={invoice} lines={invoiceItems}/>
         <StudentInfo data={listStudent} title="Details"/>
         <StudentList/>
        
        
     </div>
        </>
    )
}
export default Home;