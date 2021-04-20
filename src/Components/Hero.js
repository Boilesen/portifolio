import logo from "../Img/Ambiente.jpg";
import git from "../Img/gittemp-removebg-preview.png";
import link from "../Img/linktemp-removebg-preview.png";
import curr from "../Img/curriculotemp-removebg-preview.png";
import "bootstrap/dist/css/bootstrap.css";
// function Hero() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img style={{ logo }} src={logo} className="App-logo" alt="logo" />
//         <div class="inner-container">
//           <h1>Thomas Boilesen</h1>
//           <h2>Me Contrate por favirzinho!!!!!!</h2>
//         </div>
//       </header>
//     </div>
//   );
// }

function Hero() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",

          backgroundsize: "cover",
          position: "relative",

          width: "1000px",
          height: "1000px",
          color: "white",
        }}
      >
        <h1 className="alert">Thomas Boilesen</h1>
        <p>
          <strong>Me Contrata por favorzinho!</strong>
        </p>
        <div className="mt-500">
          <ul className="d-flex position-absolute bottom-0 start-0">
            <li className="align-content-end align-bottom">
              <img style={{ git }} src={git} className="App-logo" alt="logo" />
            </li>
            <li className="align-content-end align-bottom">
              <img
                style={{ link }}
                src={link}
                className="App-logo"
                alt="logo"
              />
            </li>
            <li className="align-content-end align-bottom">
              <img
                style={{ curr }}
                src={curr}
                className="App-logo"
                alt="logo"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
