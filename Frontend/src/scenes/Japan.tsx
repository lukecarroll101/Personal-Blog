import exampleImage1 from "../assets/Japan.jpg";
import exampleImage2 from "../assets/Japan2.jpg";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

// align-items-center
function Japan() {
  return (
    <>
      <Navbar />
      <div className="d-flex align-items-center justify-content-center pt-4">
        <h1>Our trip to Japan!!</h1>
      </div>
      <div className="grid-container-min" style={{ overflow: "hidden" }}>
        <div className="left-panel-NC">
          <motion.div
            className="p-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <img
              src={exampleImage1}
              className="shadow"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "30px",
                alignItems: "center",
              }}
            />
          </motion.div>
          <motion.div
            className="p-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.75,
              ease: "easeOut",
            }}
          >
            <img
              src={exampleImage2}
              className="shadow"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "30px",
                alignItems: "center",
              }}
            />
          </motion.div>
        </div>
        <div className="right-panel">
          <motion.div
            className="p-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: "easeOut",
            }}
          >
            <img
              src={exampleImage2}
              className="shadow"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "30px",
                alignItems: "center",
              }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Japan;
