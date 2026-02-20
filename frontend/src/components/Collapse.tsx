interface Props {
    summary: string,
    bgColor: string,
    children: React.ReactNode
}

const Collapse = ({summary, children, bgColor}: Props) => {
  return (
    <details className={`collapse bg-base-100 border-base-300 border ${bgColor} text-primary-content`}>
    <summary className="collapse-title font-semibold">{summary}</summary>
    <div className="collapse-content text-sm">
        {children}
    </div>
    </details>
  )
}

export default Collapse