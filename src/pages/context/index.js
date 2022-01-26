import React from "react";

const InputContext = React.createContext;

const Input = () => (
    <InputContext.Consumer>
        {
            (context) => {
                console.log(context);
                return(
                    <div>
                        <p>Name: {context.name}</p>
                        <input type={'text'} value={context.name} onChange={context.handleChange} />
                    </div>
                )
            }
        }
    </InputContext.Consumer>
);


const ThirdSection = () => (
    <div>
        <Input  />
    </div>
);


const SecondSection = () => (
    <div>
        <ThirdSection  />
    </div>
);


const MainSection = () => (
    <div>
        <SecondSection  />
    </div>
);

export class MyContext extends React.Component {
    state = {
        name: ""
    };

    handleChange = (event) => {
        this.setState({name: event.target.value})
    };

    render() {
        return (
            <>
                <InputContext.Provider value={{name:this.state.name, handleChange: this.handleChange}}>
                    <MainSection />
                </InputContext.Provider>

            </>
        )
    }
}

