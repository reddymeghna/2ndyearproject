import './index.scss'

import background from "../../mysets/images/background.png";

const About = () => {
  return (
    <article
      className="article"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="header">ABOUT US</h1>
      <p class="content">We have generated a verilog code generator using slm phi-2.\n 
        We introduced our VeriGen on 20-july-2024 \n
        and we are glad to recieve feedback from users.</p>
    </article>
  );
};

export default About;