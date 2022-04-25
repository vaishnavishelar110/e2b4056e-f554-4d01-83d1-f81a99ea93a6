/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
*/
import React from 'react';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import  {Button ,Form, Alert, Card}  from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <div style={{ display: 'block', width: 1688, padding: 0 }}> 
      
<Navbar bg="dark" variant="dark"> 

<li class="nav-item">
          <a class="nav-link" href="#">Academy</a>
        </li>
  <li class="nav-item">
          <a class="nav-link" href="#">Course</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Students</a>
        </li>
        <div class="pull-right">
        <ul class="nav navbar-nav">
            <li><button type="submit" class="btn navbar-btn btn-danger" name="logout" id="logout"  value="Log Out">Log Out</button></li>
        </ul>  
     

   
</div>
</Navbar>
</div>

<header className="App-header">
        <Card className="mb-3" style={{color: "#000"}}>
          </Card>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Course Name</Form.Label>
    <Form.Control type="course" placeholder="Enter course Name" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Course duration</Form.Label>
    <Form.Control type="course" placeholder="Enter course duration" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Course timing</Form.Label>
    <Form.Control type="course" placeholder="Enter course timing" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>No of Students</Form.Label>
    <Form.Control type="course" placeholder="Enter no of students enrolled for the course" />
    
  </Form.Group>
  
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Course Description</Form.Label>
     <div class="form-outline">
  <textarea class="form-control" id="textAreaExample" rows="4" placeholder="Enter Discription" ></textarea>
  
</div>
  </Form.Group>
  <div class="form-outline">
  
  
</div>
<div id="textExample1" class="form-text">
  Just Click UpdateCourse Button to update the above details... 
</div>

  
</Form>

            <div class="pull-right">
        <ul class="nav navbar-nav">
            <li><button type="submit" class="btn navbar-btn btn-danger" name="logout" id="updateCourse"  value="Log Out">UpdateCourse</button></li>
        </ul>     
</div>
          
         
      
        
        
      </header>
    </div>
  );
}

export default App;