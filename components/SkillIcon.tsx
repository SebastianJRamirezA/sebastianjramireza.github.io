
import React from 'react';
import { Skill } from '../types';

interface SkillIconProps {
  skill: Skill;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-light-bg dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[120px]">
      <i className={`${skill.iconClass} fa-3x mb-3`}></i>
      <p className="text-sm font-medium text-light-text dark:text-dark-text">{skill.name}</p>
      {skill.level && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{skill.level}</p>}
    </div>
  );
};

export default SkillIcon;
