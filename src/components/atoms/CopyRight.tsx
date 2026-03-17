const CopyRight = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <span className="text-xs font-mono sm:text-center" style={{ color: '#94a3b8' }}>
      © {year} motosbt. All Rights Reserved.
    </span>
)
}

export default CopyRight