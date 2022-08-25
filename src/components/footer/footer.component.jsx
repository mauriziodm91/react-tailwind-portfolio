import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { socialUrl } from '../../assets/socials'
import { getCurrentYear } from '../../utils/getYear.js'
import Links from '../links/links.component'

const Footer = () => {
  return (
    <div className='py-5 border-t-3/2'>
      <div className='flex justify-center mt-4'>
        {socialUrl.map((social, id) => (
          <Links
            key={id}
            name={social.name}
            logo={social.logo}
            url={social.url}
            color={social.color}
          />
        ))}
      </div>

      <footer className='p-4  md:px-6 md:py-8'>
        <span className='flex justify-center text-xl text-gray-500 sm:text-center dark:text-gray-400'>
          Made With{' '}
          <a href='https://es.reactjs.org/'>
            <FaReact className='text-blue-600 mx-2 mt-1' />
          </a>{' '}
          &{' '}
          <a href='https://tailwindcss.com/'>
            <SiTailwindcss className='text-sky-400 mx-2 mt-1' />
          </a>
        </span>
        <span className='flex justify-center'>
          <p className='ml-4'>&#169; {getCurrentYear()}</p>
        </span>
      </footer>
    </div>
  )
}

export default Footer
