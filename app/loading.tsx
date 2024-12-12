export default function Loading() {
  return (
    <div className={`w-screen h-screen flex justify-center items-center`}>
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-gray-200 border-t-blue-500"></div>
    </div>
  )
}