import NavbarMin from "../components/Navbar";
import exampleImage1 from "../assets/Japan.jpg";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

function Minimal() {
  return (
    <>
      <NavbarMin />
      <div className="grid-container-min">
        <div className="left-panel">
          <h1 className="px-5">Cali Roiboit: A Love Story</h1>
          <div className="vl"></div>
        </div>
        <div className="vertical-line"></div>
        <div className="right-panel">
          <div>
            <p className="m-5">
              Also this is the home page- for dev. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus orci mi, venenatis ac nisl
              vel, porta consequat augue. In quis nulla odio. Integer vel
              tristique nisl. Vivamus sed urna ligula. Nullam in orci lacus.
              Maecenas eget nulla ut ex gravida gravida id non odio. Curabitur
              lacus erat, egestas ac nisl ut, lacinia scelerisque massa. Nam
              viverra ligula nunc, vel venenatis eros hendrerit eget. Curabitur
              posuere semper sem ut tincidunt. Donec turpis velit, viverra sed
              tempor eu, dapibus non eros. Ut in finibus leo. Maecenas sit amet
              varius felis. Ut massa eros, porta in tempus et, porttitor a
              turpis. Aliquam erat volutpat. Etiam pellentesque sagittis massa,
              eu pellentesque ipsum. Aenean euismod tristique neque, vitae
              pharetra tortor vestibulum interdum. Phasellus id augue ante. Sed
              porta sit amet lacus sit amet laoreet. Fusce ut lorem dolor. Donec
              placerat orci nibh, vel tincidunt lacus lacinia quis. Nullam sem
              leo, interdum in justo ut, elementum sodales felis. In ac dolor
              sem. Cras eget erat tortor. Phasellus justo metus, mollis ut
              tincidunt gravida, sodales at nulla. Fusce in neque neque. Proin
              non pretium odio, id mattis lorem. Ut quis dolor purus. Orci Also
              this is the home page- for dev. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus orci mi, venenatis ac nisl
              vel, porta consequat augue. In quis nulla odio. Integer vel
              tristique nisl. Vivamus sed urna ligula. Nullam in orci lacus.
              Maecenas eget nulla ut ex gravida gravida id non odio. Curabitur
              lacus erat, egestas ac nisl ut, lacinia scelerisque massa. Nam
              viverra ligula nunc, vel venenatis eros hendrerit eget. Curabitur
              posuere semper sem ut tincidunt. Donec turpis velit, viverra sed
              tempor eu, dapibus non eros. Ut in finibus leo. Maecenas sit amet
              varius felis. Ut massa eros, porta in tempus et, porttitor a
              turpis. Aliquam erat volutpat. Etiam pellentesque sagittis massa,
              eu pellentesque ipsum. Aenean euismod tristique neque, vitae
              pharetra tortor vestibulum interdum. Phasellus id augue ante. Sed
              porta sit amet lacus sit amet laoreet. Fusce ut lorem dolor. Donec
              placerat orci nibh, vel tincidunt lacus lacinia quis. Nullam sem
              leo, interdum in justo ut, elementum sodales felis. In ac dolor
              sem. Cras eget erat tortor. Phasellus justo metus, mollis ut
              tincidunt gravida, sodales at nulla. Fusce in neque neque. Proin
              non pretium odio, id mattis lorem. Ut quis dolor purus. Orci Also
              this is the home page- for dev. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus orci mi, venenatis ac nisl
              vel, porta consequat augue. In quis nulla odio. Integer vel
              tristique nisl. Vivamus sed urna ligula. Nullam in orci lacus.
              Maecenas eget nulla ut ex gravida gravida id non odio. Curabitur
              lacus erat, egestas ac nisl ut, lacinia scelerisque massa. Nam
              viverra ligula nunc, vel venenatis eros hendrerit eget. Curabitur
              posuere semper sem ut tincidunt. Donec turpis velit, viverra sed
              tempor eu, dapibus non eros. Ut in finibus leo. Maecenas sit amet
              varius felis. Ut massa eros, porta in tempus et, porttitor a
              turpis. Aliquam erat volutpat. Etiam pellentesque sagittis massa,
              eu pellentesque ipsum. Aenean euismod tristique neque, vitae
              pharetra tortor vestibulum interdum. Phasellus id augue ante. Sed
              porta sit amet lacus sit amet laoreet. Fusce ut lorem dolor. Donec
              placerat orci nibh, vel tincidunt lacus lacinia quis. Nullam sem
              leo, interdum in justo ut, elementum sodales felis. In ac dolor
              sem. Cras eget erat tortor. Phasellus justo metus, mollis ut
              tincidunt gravida, sodales at nulla. Fusce in neque neque. Proin
              non pretium odio, id mattis lorem. Ut quis dolor purus. Orci Also
              this is the home page- for dev. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus orci mi, venenatis ac nisl
              vel, porta consequat augue. In quis nulla odio. Integer vel
              tristique nisl. Vivamus sed urna ligula. Nullam in orci lacus.
              Maecenas eget nulla ut ex gravida gravida id non odio. Curabitur
              lacus erat, egestas ac nisl ut, lacinia scelerisque massa. Nam
              viverra ligula nunc, vel venenatis eros hendrerit eget. Curabitur
              posuere semper sem ut tincidunt. Donec turpis velit, viverra sed
              tempor eu, dapibus non eros. Ut in finibus leo. Orci
            </p>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.75,
          delay: 0,
          ease: "easeOut",
        }}
      >
        <Parallax strength={500} bgImage={exampleImage1}>
          <div className="content"></div>
        </Parallax>
      </motion.div>
      <motion.div
        className="content pt-5"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          ease: "easeOut",
        }}
      >
        <img src={exampleImage1} alt="" className="content-width" />
      </motion.div>
    </>
  );
}

export default Minimal;
