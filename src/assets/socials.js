import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'

export const socialUrl = [
  {
    name: 'Github',
    url: 'https://github.com/mauriziodm91',
    logo: <FaGithub />,
    color: 'text-gray-800 hover:bg-gray-800',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dmmaurizio/',
    logo: <FaLinkedin />,
    color: 'text-blue-800 hover:bg-blue-800',
  },
  {
    name: 'Email',
    url: 'mailto:mauriziodm91@gmail.com',
    logo: <FaEnvelope />,
    color: 'text-sky-500 hover:bg-sky-500',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/dmh.gm/',
    logo: <FaInstagram />,
    color: 'text-rose-500 hover:bg-rose-500',
  },
]
