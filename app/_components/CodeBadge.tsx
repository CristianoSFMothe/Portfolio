type CodeBadgeProps = {
  label: string
}

const CodeBadge = ({ label }: CodeBadgeProps) => {
  return <div className='code-badge'>&lt;{label} /&gt;</div>
}

export default CodeBadge
