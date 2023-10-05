'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn } from '../variants';
import { MdHandshake, MdKey, MdTrendingUp } from 'react-icons/md';

const Why = () => {
  return (
    <section className="section flex items-center" id="whyus">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.6 }}
          className="h2 text-center"
        >
          Unmatched excellence and costumer satisfaction
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.6 }}
          className="max-w-[680px] text-center mx-auto mb-8 xl:mb-2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          accusamus ad iure doloribus ex veniam dicta tempore facere
          reprehenderit nulla eaque, nesciunt provident dolorum pariatur
          excepturi sapiente minima quisquam culpa.
        </motion.p>
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="hidden md:flex justify-center mb-6 xl:mb-2"
        >
          <Image src={'/images/why/car.svg'} width={1060} height={420} alt="" />
        </motion.div>
        <div className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]">
          <div className="flex flex-col items-center text-center max-w-[160px] min-w-[160px] xl:max-w-none p-2 xl:p-4 shadow-xl rounded-md">
            <MdKey className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Alguel Rapido e Prático</h3>
            <p className="hidden xl:flex">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
              explicabo nostrum. Nemo rerum earum dolores molestias commodi eos
              nostrum
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[160px] min-w-[160px] xl:max-w-none p-2 xl:p-4 shadow-xl rounded-md">
            <MdTrendingUp className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Alguel Rapido e Prático</h3>
            <p className="hidden xl:flex">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
              explicabo nostrum. Nemo rerum earum dolores molestias commodi eos
              nostrum
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[160px] min-w-[160px] xl:max-w-none p-2 xl:p-4 shadow-xl rounded-md">
            <MdHandshake className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Alguel Rapido e Prático</h3>
            <p className="hidden xl:flex">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
              explicabo nostrum. Nemo rerum earum dolores molestias commodi eos
              nostrum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
