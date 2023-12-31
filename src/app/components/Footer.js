'use client';

import Image from 'next/image';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Copyrigth from './Copyrigth';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            <Link to="home" smooth={true} spy={true} className="cursor-pointer">
              <Image src={'/icons/logo.svg'} width={200} height={200} alt="" />
            </Link>
            <div className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">(99)99999-9999</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">office@carland.com</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">New York</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Mon-Fri</div>
                <div className="font-semibold">09:00AM - 09:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sat:</div>
                <div className="font-semibold">09:00AM - 07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sun:</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Newsletter</h3>
            <div className="mb-9 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <form action="" className="flex gap-x-2 h-14">
              <input
                type="text"
                placeholder="Seu e-mail"
                className="outline-none h-full bg-white border rounded-lg pl-4 focus:border-accent"
              />
              <button type="submit" className="btn btn-sm btn-accent w-24">
                Enviar
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyrigth />
    </footer>
  );
};

export default Footer;
