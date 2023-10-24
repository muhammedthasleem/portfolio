import design from "./about.module.css"
import CVFile from "./images/Muhammed Thasleem.pdf";
import myImage from "./images/me.jpg";

const About=()=>{

    const handleDownloadCV = () => {
        window.open(CVFile, "_blank");
      };
    return (
        <section id="about">
        <div id={design.about}>
            <div className={design.head}><h1>About me</h1>
            <h5>my introduction</h5></div>
            <div className={design.cv}>
                <div><img src={myImage} alt="My Image" className={design.myImage} /></div>
                <div className={design.ceevee}><h4>Web developer, with extensive knowledge and years of experience, working in web technologies and Ui/Ux design, delivering quality work.</h4>
                <h3>01+</h3>
                <h6>years of experience</h6>
                <button onClick={handleDownloadCV}>Download CV</button>
                </div>
            </div>


        </div>
        </section>
    )
}
export default About