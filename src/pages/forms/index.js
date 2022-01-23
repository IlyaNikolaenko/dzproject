import React from "react";

export class Form extends React.Component {
    state = {
        value: 'hello',
        textareaValue: '',
        checkboxValue: false,
        selectValue: '',
        langs: [
            {id: '0', label: 'HTML'},
            {id: '1', label: 'CSS'},
            {id: '2', label: 'JavaScript'}
        ],
        radioValue: ''
    };

    handleChangeInput = (event) => {
        this.setState({value: event.target.value});
    }
    handleChangeTextarea = (event) => {
        this.setState({textareaValue: event.target.value});
    }
    handleChangeCheckbox = () => {
        this.setState({checkboxValue: !this.state.checkboxValue});
    }
    handleChangeSelect = (event) => {
        this.setState({selectValue: event.target.value});
    }
    handleChangeRadio = (event) => {
        this.setState({radioValue: event.target.value});
    }

    render() {
        const {value, textareaValue, checkboxValue, selectValue, langs, radioValue} = this.state;
        const chosenLang = langs.find((item) => item.id === selectValue);

        return (
            <div>
                <h2>Forms</h2>
                <input type='text' value={value} onChange={this.handleChangeInput}/>
                <p>{textareaValue}</p>
                <textarea cols='20' rows='5' value={textareaValue} onChange={this.handleChangeTextarea} />
                <br/>
                <input type='checkbox' checked={checkboxValue} onChange={this.handleChangeCheckbox}/>
                <p>Select value: {chosenLang?.label}</p>
                <select value={selectValue} onChange={this.handleChangeSelect}>
                    {langs.map((item) => (
                        <option key={item.id} value={item.id}>{item.label}</option>
                    ))}
                </select>
                <br/>
                <p>Radio value: {radioValue}</p>
                <input type='radio'
                       value='option 1'
                       onChange={this.handleChangeRadio}
                       checked={radioValue === 'option 1'}/>
                <input type='radio'
                       value='option 2'
                       onChange={this.handleChangeRadio}
                       checked={radioValue === 'option 2'}/>
            </div>
        );
    }
}