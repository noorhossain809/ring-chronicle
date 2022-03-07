import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "./1.png";
import img2 from "./3.jpg";
import "./App.css";
import dot from "./image 7.png";
import logo from "./logo.jpg";

function App() {
  return (
    <div className="App">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="black"
        fixed="top"
        variant="dark"
      >
        <Container>
        <Navbar.Brand className="logo m-2" href="#home">
        <img src={logo} alt="headerlogo" />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features" className="text-white">Marketplace</Nav.Link>
              <Nav.Link href="https://doc.theringchronicle.io/" className="text-white">
                WhitePaper
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" className="text-white">Pitch deck</Nav.Link>
              <Nav.Link href="#memes" className="text-white">
                News
              </Nav.Link>
            </Nav>
            <Button variant="warning">Play Now</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <div className="icon-div ">
          <div className="d-flex">
            <div className="Social_links p-2">
              <a href="/">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <p>15k+</p>
              <a href="/">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <p>15k+</p>
              <a href="/">
                <i class="fa-brands fa-github-alt"></i>
              </a>
              <p>15k+</p>
            </div>
          </div>
        </div>
        <h1>
          WELCOME TO THE <br /> RING CHRONICLE
        </h1>
        <p>lorem ipsum dolor sit amet, consectetur adip</p>
        <a href="/">Explore</a>
      </section>

      <div className="advantage">
        <Container>
          <div className="NFT_m">
            <div className="pstar"> </div>
            <div className="pstar"> </div>
            <div className="pstar"> </div>
            <div className="ptext">
              {" "}
              <h1>Let yor adventure begin...</h1>
            </div>
            <div className="pstar"> </div>
            <div className="pstar"> </div>
            <div className="pstar"> </div>
          </div>
        </Container>
      </div>

      <div className="AVR container-fluid">
        <div className="p-5">
          <div className="d-flex mt-5 flex-sm-row flex-column">
            <div className="col-md-6">
              <div className="AVR_L">
                <h1>
                  ACHEIVE VALUABLE <br /> REWARDS
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  faucibus arcu orci, duis in diam ullamcorper. Adipiscing nec
                  eget ultricies neque neque pretium. Ullamcorper eget blandit
                  orci ante sed nulla viverra magna. Nunc commodo amet in enim
                  ultrices. Ullamcorper eget blandit orci ante sed nulla viverra
                  magna. Nunc commodo amet in enim ultrices.Ullamcorper eget
                  blandit orci ante sed nulla trices.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-sm-row flex-column w-auto mt-5">
                <img src={img2} alt="" className="img1" />
                <img src={img1} alt="" className="mx-3 img2" />
                <img src={img2} alt="" className="img1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="About_us ">
        <div className="d-flex mb-5 flex-sm-row flex-column">
          <div className="col-md-6">
            <div className="About_L">
              <div className="Dotted_1"></div>
              <div className="L_Top"></div>
              <div className="L_Middle"></div>
              <div className="L_Bottom"></div>
              <div className="Dotted_2"></div>
            </div>
          </div>
          <div className="col-md-6 mx-5">
            <div className="About_R">
              <div className="Dotted_3"></div>
              <div className="A_text">
                <h1>About Us</h1>
                <p>
                  lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor
                  sit amet, consectetur adiplorem ipsum dolor sit amet,
                  consectetur adiplorem ipsum dolor sit amet, consectetur
                  adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum
                  dolor sit amet, consectetur adiplorem ipsum dolor sit amet,
                  consectetur adiplorem ipsum dolor sit amet, consectetur
                  adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum
                  dolor sit amet, consectetur adiplorem ipsum dolor sit amet,
                  consectetur adip
                </p>
              </div>
              <div className="A_Links">
                <a href="/">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="/">
                  <i class="fa-brands fa-instagram"></i>
                </a>

                <a href="/">
                  <i class="fa-brands fa-github-alt"></i>
                </a>
              </div>
              <div className="A_button">
                <a href="/">Join Our Community</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="token">
        <h1 className="token ">Tokenomics</h1>
        <p className="token_p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero
          id faucibus <br /> convallis donec viverra nunc. Lorem ipsum dolor sit
          ametc.
        </p>
        <div className="token_div">
          <div className="private mx-auto d-block mt-5">
            <h5 className="private_h5 mt-2">
              Private Sale <br />
              5%
            </h5>
          </div>

          <div className="roted_d"></div>
          <div className="roted "></div>

          <div className="d-flex justify-content-evenly">
            <div className="private  mt-5">
              <h5 className="private_h5 mt-2">
                Private Sale <br />
                5%
              </h5>
              <div className="top_middle_d"></div>
              <div className="top_middle"></div>
            </div>
            <div className="private mt-5">
              <h5 className="private_h5 mt-2">
                Private Sale <br />
                5%
              </h5>
              <div className="top_middleEnd_d"></div>
              <div className="top_middle_end"></div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="total_supply text-center">
              <h5 className="total_h4 ">Total Supply</h5>
              <p className="total_p ">21,000,000</p>
            </div>
          </div>
          <div className="d-flex justify-content-evenly middle_s">
            <div className="private  mt-5">
              <h5 className="private_h5 mt-2">
                Private Sale <br />
                5%
              </h5>
              <div className="bottom_middleRight_d"></div>
              <div className="bottom_middle_right"></div>
            </div>
            <div className="private mt-5">
              <h5 className="private_h5 mt-2">
                Private Sale <br />
                5%
              </h5>
              <div className="bottom_middleEnd_d"></div>
              <div className="bottom_middleEnd"></div>
            </div>
          </div>
          <div className="roted_d"></div>
          <div className="roted_bottom "></div>
          <div className="roted_bottom_d"></div>
          <div className="private mx-auto d-block">
            <h5 className="private_h5 mt-2">
              Private Sale <br />
              5%
            </h5>
          </div>
        </div>
      </div>
      <div className="Road_M">
        <Container>
          <div className="Road_text">
            <h1>Roadmap</h1>
          </div>
          <div className="R_main mt-5">
            <div className="RM1">
              <div className="R_1">
                <div className="mPhase">
                  <div className="Phase">
                    <h1 className="px-2">Phase 2</h1>
                    <ul>
                      <li> consectet Lorem consectet Lorem consectet </li>
                      <li> consectet Lorem consectet Lorem consectet </li>
                      <li> consectet Lorem consectet Lorem consectet </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="R_2">
                <div className="mPhase">
                  <div className="Phase">
                    <h1 className="px-2">Phase 4</h1>
                    <ul>
                      <li> consectet Lorem consectet Lorem consectet </li>
                      <li> consectet Lorem consectet Lorem consectet </li>
                      <li> consectet Lorem consectet Lorem consectet </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="RM2"></div>
            <div className="RM3">
              <div className="R_3">
                <div className="mPhase">
                  <div className="Phase">
                    <h1 className="px-2">Phase 1</h1>
                    <ul>
                      <li> consectet Lorem consectet Lorem consectet </li>
                      <li> consectet Lorem consectet Lorem consectet </li>
                      <li> consectet Lorem consectet Lorem consectet </li>
                    </ul>
                  </div>
                </div>
              </div>{" "}
              <div className="R_4">
                <div className="mPhase">
                  <div className="Phase">
                    <h1 className="px-2">Phase 3</h1>
                    <ul>
                      <li> consectet Lorem consectet Lorem consectet </li>
                      <li> consectet Lorem consectet Lorem consectet </li>
                      <li> consectet Lorem consectet Lorem consectet </li>
                    </ul>
                  </div>
                </div>
              </div>
              <img src={dot} alt="" className="dot_3" />
            </div>
          </div>
        </Container>
      </div>
      <div className="ETP">
        <Container>
          <div className="flex flex-sm-row flex-column justify-content-center align-items-center">
            <div className="ETP_text">
              <h1 className="text-center">Easy to Play , Play to Earn </h1>
            </div>
            <div className="mt-5">
              <div className="video p-5 bg-dark">
                <iframe
                  className="embed-responsive-item"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/UUnl6ePcUtY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="d-flex justify-content-between p-5">
                <img src={dot} alt="" className="ETP_dot" />
                <img src={dot} alt="" className="ETP_dot" />
              </div>
            </div>
            <div className="ETP_icons">
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
            </div>
          </div>
        </Container>
      </div>
      <div className="Card-Sections ">
        <div className="L_C mt-5">
          <div className="Card ">
            <div className="M_Card">
              {" "}
              <div className="C_icon1"></div>
            </div>

            <h5 className="mt-3">Investment</h5>
            <p className="mt-3">
              Lorem Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectet
            </p>
            <div className="C_button">
              <a href="/">Learn More</a>
            </div>
          </div>

          <div className="Card">
            <div className="M_Card">
              {" "}
              <div className="C_icon2"></div>
            </div>
            <h5 className="mt-3">Action</h5>
            <p className="mt-3">
              Lorem Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectet
            </p>
            <div className="C_button">
              <a href="/">Learn More</a>
            </div>
          </div>
        </div>
        <div className="R_C mt-5">
          <div className="Card">
            <div className="M_Card">
              {" "}
              <div className="C_icon3"></div>
            </div>
            <h5 className="mt-3">Earn</h5>
            <p className="mt-3">
              Lorem Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectet
            </p>
            <div className="C_button">
              <a href="/">Learn More</a>
            </div>
          </div>
          <div className="Card">
            <div className="M_Card">
              {" "}
              <div className="C_icon4"></div>
            </div>
            <h5 className="mt-3">Upgrade</h5>
            <p className="mt-3">
              Lorem Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectet
            </p>
            <div className="C_button">
              <a href="/">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="M_NFT">
        <div className="NFT_S">
          <div className="NFT_t">
            <h1>READY for Next NFT Drop ?</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> At
              scelerisque ut vestibulum nullam urna. Aliquet mollis <br />{" "}
              tincidunt ut adipiscing vitae quis amet fames.
            </p>
          </div>
          <div className="NFT_m">
            <div className="pstar"> </div>
            <div className="pstar"> </div>
            <div className="pstar"> </div>
            <div className="ptext">
              {" "}
              <h1>Follow Us</h1>
            </div>
            <div className="pstar"> </div>
            <div className="pstar"> </div>
            <div className="pstar"> </div>
          </div>
          <div className="NFT_b">
            <a href="/">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-github-alt"></i>
            </a>
            <a href="/">
              <i class="fa-solid fa-paper-plane"></i>
            </a>
          </div>
        </div>
      </div>
      <footer>
        <div class="footer_1">
          <div class="F_logo"></div>
          <div className="F_textt">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
              scelerisque ut vestibulum nullam urna. Aliquet mollis tincidunt ut
              adipiscing vitae quis amet fames.
            </p>
          </div>
          <div className="F_iconss">
            <a href="/">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-github-alt"></i>
            </a>
            <a href="/">
              <i class="fa-solid fa-paper-plane"></i>
            </a>
          </div>
        </div>
        <div class="footer_1">
          <h1>About Us</h1>
          <ul>
            <li>
              <a href="/">About NFTs</a>
            </li>
            <li>
              <a href="/">Live Auctions</a>
            </li>
            <li>
              <a href="/">NFTs Blogs</a>
            </li>
            <li>
              <a href="/">Activity</a>
            </li>
          </ul>
        </div>
        <div class="footer_1">
          <h1>Support</h1>
          <ul>
            <li>
              <a href="/">Help & Support</a>
            </li>
            <li>
              <a href="/">Items Details</a>
            </li>
            <li>
              <a href="/">Author Profile</a>
            </li>
            <li>
              <a href="/">Collections</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="footer-lasts">
        <p>All right reserved 2022</p>
      </div>
    </div>
  );
}

export default App;
