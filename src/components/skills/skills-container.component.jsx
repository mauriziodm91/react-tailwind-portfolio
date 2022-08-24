import { techStack } from '../../assets/techstack.js'
import SkillCard from './skill-card.component'

const SkillsContainer = () => {
  return (
    <div className='max-w-4xl mx-auto justify-center py-12' id='tech'>
      <p className='text-2xl text-black text-center font-bold pt-4 sm:text4-xl capitalize'>
        Tools and technologies that i use
      </p>

      <div className='flex flex-wrap justify-center pt-2'>
        {techStack.map((tech, id) => (
          <SkillCard key={id} techLogo={tech.logo} techName={tech.name} />
        ))}
      </div>
    </div>
  )
}

export default SkillsContainer
