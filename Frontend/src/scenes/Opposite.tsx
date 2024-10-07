import exampleImage1 from "../assets/Manual-1.jpg";
import exampleImage2 from "../assets/Manual-2.jpg";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Opposite() {
  return (
    <>
      <Navbar />
      <div className="w-auto vh-100">
        <p></p>
      </div>
      <div className="grid-container-min background-blue-gradient w-auto vh-100">
        <div className="right-panel">
          <h1>Test</h1>
          <p>test</p>
        </div>
        <div className="left-panel top-aligned">
          <div
            className="image-stack angle"
            style={{
              // position: "relative",
              width: "50%",
            }}
          >
            <motion.div
              className="p-2"
              style={{
                // position: "absolute",
                top: 0,
                left: 0,
              }}
              initial={{ x: 0, y: 0 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{
                duration: 1.5,
                delay: 2,
                ease: "easeOut",
              }}
            >
              <img
                src={exampleImage2}
                className="shadow-lg"
                style={{
                  width: "100%",
                  // height: "100%",
                  borderRadius: "3vmin",
                  border: "5px solid white", // Add white border
                }}
              />
            </motion.div>
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
              initial={{ x: 5, y: 3 }}
              whileInView={{ x: 100, y: -50 }}
              transition={{
                duration: 1.5,
                delay: 2,
                ease: "easeOut",
              }}
            >
              <img
                src={exampleImage1}
                className="shadow-lg"
                style={{
                  width: "95%",
                  // height: "100%",
                  borderRadius: "3vmin",
                  border: "5px solid white", // Add white border
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Opposite;
