const TimePanel = ({ value, label }: { value: number; label: string }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm mt-1">{label}</span>
      <div className="bg-gradient-to-b from-gray-700 to-gray-900 text-white rounded-lg p-3 w-16 h-16 flex items-center justify-center">
        <span className="text-2xl font-bold">{value.toString().padStart(2, '0')}</span>
      </div>
    </div>
  )
}
export default TimePanel