'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CountUp from 'react-countup';
import {
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
  MdOutlineMapsHomeWork,
} from 'react-icons/md';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="h-screen flex items-center mt-20" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.6 }}
            className="justify-center mb-8 xl:mb-0"
          >
            <Image
              className="rounded-[20px]"
              src={'/images/about/car01.png'}
              width={600}
              height={448}
            />
          </motion.div>
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="xl:max-w-[512px]">
              <motion.h2
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.6 }}
                className="h2"
              >
                Car services simplified
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                modi consequatur. Tempore explicabo at ratione quo quia qui quae
                voluptatem veritatis!
              </motion.p>
              <motion.div
                variants={fadeIn('up', 0.8)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center gap-x-8 mb-12"
              >
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    <span>+</span>
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    car <br />
                    types
                  </div>
                </div>
                <div className="flex flex-col w-[100px] sm:mx-auto">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    rental <br />
                    outlets
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    repair <br />
                    points
                  </div>
                </div>
              </motion.div>
              <motion.button
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.6 }}
                className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] mt-6 w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
              >
                See all cars
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
