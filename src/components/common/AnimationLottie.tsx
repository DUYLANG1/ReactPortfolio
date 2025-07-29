import Lottie from "lottie-react";
import { motion } from "framer-motion";

interface Props {
  animationPath: object;
  width?: string;
}

const AnimationLottie = ({ animationPath, width = "95%" }: Props) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
    className="d-flex justify-content-center align-items-center"
  >
    <Lottie animationData={animationPath} loop style={{ width }} />
  </motion.div>
);

export default AnimationLottie;
