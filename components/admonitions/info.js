export default function Info(props) {
  return (
    <div className="prose mx-2 my-6 max-w-none rounded-lg border-4 border-blue-600 p-4 dark:prose-dark">
      <span className="block text-2xl font-semibold text-blue-800">Info</span>
      <div>{props.children}</div>
    </div>
  )
}
