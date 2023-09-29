import React from "react";
import { motion } from "framer-motion"; // Import motion if not already imported

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles"; // Import styles if not already imported
import { textVariant } from "../utils/motion"; // Import textVariant if not already imported

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies I've worked with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Skills.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
