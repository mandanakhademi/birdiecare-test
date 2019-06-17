import * as React from "react";
import { ToastContainer } from 'react-toastify';
import Visits from "@App/components/visits";

import { createGlobalStyle } from "styled-components";
import { RootState } from "@App/store/reducers";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import Logo from "@App/components/Logo";
import 'react-toastify/dist/ReactToastify.css';

const LogoUrl = require("../../assets/images/logo-birdie.svg");

interface AppProps { }

interface AppState { }

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
    > div {
      height: 100%;
    }
  }
`;

const css = `
.logo {  
  margin-bottom: 20px
}`;

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <GlobalStyle />
        <style>{css}</style>
        <ToastContainer />
        <main className="container">
          <div className="logo">
            <Logo src={LogoUrl} />
          </div>

          <Visits />
        </main>

      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => { };

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => { };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
