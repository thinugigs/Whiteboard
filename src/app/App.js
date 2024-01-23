import Header from "./whiteboard/header/Header";
import Grid from "./whiteboard/content/grid/Grid";
import Footer from "./whiteboard/footer/Footer";
import './app.css'
import {sampleData} from "./data/sampleData";
import useArrangeColumns from "./hooks/useArrangeColumns";
import {cloneDeep} from "lodash";

function App() {

    const arrangement = useArrangeColumns(cloneDeep(sampleData));

    return (
        <div className="app">
            <Header/>
            <Grid arrangement={arrangement}/>
            <Footer/>
        </div>
    );
}

export default App;
