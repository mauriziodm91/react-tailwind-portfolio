import { IconContext } from 'react-icons/lib'
const SkillCard = ({ techLogo, techName }) => {
  return (
    <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
      <IconContext.Provider value={{ className: 'mx-auto text-4xl' }}>
        {techLogo}
      </IconContext.Provider>
      <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>
        {techName}
      </p>
    </div>
  )
}

export default SkillCard
