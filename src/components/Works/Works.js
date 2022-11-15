import works from "./worksData";
import Cards from "./WorkCards";
import { WorkTexts, CardFlex } from "./Works.styles";
import { useState, useRef, useEffect } from "react";
import Article from "./Article";

const Works = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    const workCards = works.map((work) => {
        return (
            <Cards key={work.id} id={work.id} data={work} left={width} />
        )
    })

    return (
        <section className="works">
            <WorkTexts className="title-description">
                <h1>Works</h1>
                <p>Check out the documentations for some of the learning projects I’ve made where I was able to to use the skills I developed learning front-end tech stacks.</p>
            </WorkTexts>
            <div ref={carousel} className="carousel" style={{width: "100rem"}}>
                <CardFlex drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: "grabbing"}} >
                    {workCards}
                </CardFlex>
            </div>
            <Article />
        </section>
    )
}

export default Works;