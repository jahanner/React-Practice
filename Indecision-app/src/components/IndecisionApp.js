import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleAddOption = (option) => {
    if(!option) {
      return 'Not valid mate.';
    }
    else if(this.state.options.indexOf(option) > -1) {
      return 'Already in option list.';
    };

    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length); //choose a random number depending on options.length
    const option = this.state.options[randomNum]; //use randomNum to determine which array element to access
    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleDeleteSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  render = () => {
      const subTitle = "Put your life in my hands muhahaha";

      return (
        <div>
          <Header subTitle={subTitle} />
          {/*these components save code and can be easily reused. They are almost like class templates*/}
          <div className='container'>
            <Action
              hasOptions={this.state.options.length > 0}
              handlePick={this.handlePick} //adding props
            />
            <div className='widget'>
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
            </div>
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleDeleteSelectedOption={this.handleDeleteSelectedOption}
            />
        </div>
      );

    };
    componentDidMount = () => { //use for fetching data
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        if(options) {
          this.setState(() => ({options: options})); //({options}) is the same
        }
      } catch(e) {

      }
    }
    componentDidUpdate = (prevProps, prevState) => { //use for saving data
      if(prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
    componentWillUnmount = () => {
        console.log("component will unmount")
      }
    }
