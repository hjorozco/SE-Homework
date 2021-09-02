import './App.css';
import { MenuCell } from './components/MenuCell';
import { TopCell } from './components/TopCell';
import { BottomCell } from './components/BottomCell';

function App() {
  return (
    <div className="App">
      <div className="Grid">
        <MenuCell menuItems=
          {["DASHBOARD", "WIDGET", "REVIEWS", "CUSTOMERS", "ONLINE ANALYSIS", "SETTINGS"]} />
        <TopCell label="REVIEWS" value="1,281" />
        <TopCell label="AV RATINGS" value="4.6"/>
        <TopCell label="SENTIMENT" values={[["960","positive"], ["530","neutral"], ["780","negative"]]} />
        <BottomCell label="WEBSITE VISITORS" value="821" description="visitors today" />
      </div>
    </div>
  );
}

export default App;
