
import React from 'react';
import { Skill } from '../../types';
import SectionContainer from '../SectionContainer';
import SkillIcon from '../SkillIcon';

interface SkillsSectionProps {
  id: string;
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ id, skills }) => {
  return (
    <SectionContainer id={id} title="My Toolkit">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center">
        {skills.map((skill) => (
          <SkillIcon key={skill.name} skill={skill} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default SkillsSection;
