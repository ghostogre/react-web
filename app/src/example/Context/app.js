import React from 'react';
import { ThemeContext, themes } from './theme-context';
// import ThemedButton from './themed-button';
import ThemeTogglerButton from './theme-toggler-button';

// function Toolbar(props) {
//   return (
//     <ThemedButton onClick={props.changeTheme}>
//       Change Theme
//     </ThemedButton>
//   )
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark? themes.light: themes.dark
      }))
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  render() {
    return (
      <div>
        {/* <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme}/>
        </ThemeContext.Provider> */}
        <ThemeContext.Provider value={this.state}>
          <ThemeTogglerButton></ThemeTogglerButton>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App
