import Base from "../components/Base"
import background from "./Coffee.jfif";
const About = () => {
    return (
        <div style={{
            background: "Pink",
            height: "750px",
            backgroundImage: `url(${background})`,
            backgroundPosition: "center"
        }}>
            <Base>
                <h1 style={{ color: "white" }}> This is about page</h1>
                <p style={{ color: "white" }}> we are building blog website</p>
            </Base>
        </div>
    )
};
export default About;