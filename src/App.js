import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Editor} from "./Editor";
import {Display} from "./Display";


export default class App extends React.Component{
  state={
      formData: {}
  };



  submitData=(newData)=>{
      this.setState({formData: newData});
  };

  render(){

      return(
          <div className="container-fluid">
              <div className="row p-2">
                  <div className="col-6">
                      <Editor submit={this.submitData}/>
                  </div>
                  <div className="col-6">
                      <Display data={this.state.formData}/>
                  </div>
              </div>
          </div>
      )
  }
}
