import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';
import { Social } from '../typings';
import { useRouter } from 'next/router'; // Importar o hook useRouter do Next.js

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  const router = useRouter(); // Obter a instância do router

  const handleGetInTouchClick = () => {
    // Redirecionar o usuário para a página de contato
    router.push("#contact"); // Substitua "/contato" pela rota da página de contato
  };

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons*/}
        {socials.map((social, index) => (
          <SocialIcon
            key={index} // It's important to provide a unique key when rendering lists
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        onClick={handleGetInTouchClick} // Adicionar o evento de clique para chamar a função handleGetInTouchClick
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />

        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
