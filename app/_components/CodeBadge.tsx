import GlowBorder from './GlowBorder'

type CodeBadgeProps = {
  label: string
}

const CodeBadge = ({ label }: CodeBadgeProps) => {
  return (
    <div className='code-badge relative isolate overflow-hidden'>
      <GlowBorder
        borderRadius='inherit'
        borderWidth={1}
        className='opacity-45'
        color={['#47faf3', '#aec6ff']}
        duration={10}
      />
      <span className='relative z-10'>&lt;{label} /&gt;</span>
    </div>
  )
}

export default CodeBadge
