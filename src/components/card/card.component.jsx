import profile from '../../assets/profile.jpg'
import { socialUrl } from '../../assets/socials.js'
import Links from '../links/links.component'

const Card = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5'>
        <div className=''>
          <img
            className='w-32 mx-auto shadow-xl rounded-full drop-shadow-sm'
            src={profile}
            alt='profile'
          />
        </div>
        <div className='text-center mt-5'>
          <p className='text-xl sm:text-2xl text-gray-900'>
            Maurizio De Marchis
          </p>
          <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
            Fullstack Developer
          </p>

          <div className='flex align-center justify-center mt-4'>
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
        </div>
      </div>
    </div>
  )
}

export default Card
