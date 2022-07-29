import Image from 'next/image'
import React from 'react'

const SkillItem = ({img}) => {
  return (
    <Image 
        src={img} 
        alt='/' 
        height={64}
        width={64}
    /> 
  )
}

export default SkillItem
