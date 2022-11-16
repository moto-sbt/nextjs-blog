const CopyRight = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <span className="text-sm text-gray sm:text-center">
      © {year} motosbt. All Rights Reserved.
    </span>
)
}

export default CopyRight