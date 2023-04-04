import React from "react";
import HomePage from "./routes/HomePage";
import PressStartPage from "./routes/PressStartPage";
import { Outlet, Route, Routes, useNavigate } from "react-router";
import PageNotFound from "./routes/PageNotFound";

// Router Top-Level Layout
function Layout() {
  return (
      <div className='content'>
        <Outlet />
      </div>
  );
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      zoom: false
    }
  }

  zoom(screen) {
    this.setState({zoom:true});
    setTimeout(() => {
      this.setState({zoom:false});
      this.props.navigate(screen);
    }, 500);
  }

  render() {
    return (
      <div className={this.state.zoom ? "App zoom" : "App"}>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<PressStartPage onClick={() => {this.zoom("/home")}} />} />
            <Route path={"/home"} element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    );
  }

}

export default function AppFunc() {
  const navigate = useNavigate();
  return <App navigate={navigate} />
}
