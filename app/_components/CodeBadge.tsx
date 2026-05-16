type CodeBadgeProps = {
  label: string
}

const CodeBadge = ({ label }: CodeBadgeProps) => {
  return (
    <div aria-hidden='true' className='code-badge'>
      &lt;{label} /&gt;
    </div>
  )
}

export default CodeBadge
