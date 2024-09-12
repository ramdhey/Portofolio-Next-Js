import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 3;
  return totalSteps- index - 1;
};
const Stairs = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "anticipate",
              delay: reverseIndex(index) * 0.2,
            }}
            className="relative flex items-center justify-center"
            style={{
              borderRadius: "50%",
              width: "100px", // ganti dengan ukuran yang diinginkan
              height: "100px", // ganti dengan ukuran yang diinginkan
              position: "relative",
              backgroundColor: "#00ff99", // warna dasar bola tenis
              marginRight:"2%"
              
            }}
          >
            {/* Garis melengkung di bola tenis */}
            <div
              style={{
                position: "absolute",
                width: "80%",
                height: "20px",
                backgroundColor: "white",
                borderRadius: "50%",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "80%",
                height: "20px",
                backgroundColor: "white",
                borderRadius: "50%",
                transform: "rotate(-45deg)",
              }}
            />
          </motion.div>
        );
      })}
    </>
  );
};

export default Stairs;
