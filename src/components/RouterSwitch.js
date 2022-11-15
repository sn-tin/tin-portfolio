import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Works from './Works/Works';
import About from './About/About';
import Contact from './Contact/Contact';
import Article from "./Works/Article";

const RouterSwitch = () => {
    return (
        <section className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />}>
                    <Route path=":slug" element={<Article />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </section>
    )
}

export default RouterSwitch;