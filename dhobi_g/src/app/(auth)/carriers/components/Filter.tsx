// app/careers/components/Filter.tsx
export default function Filter({ filter, setFilter }: any) {
  return (
    <div className="flex gap-4 flex-wrap justify-center py-4">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="bg-[#1a1a1a] text-white border border-[#333] px-4 py-2 rounded-md shadow-sm focus:outline-none"
      >
        <option value="">All Roles</option>
        <option value="Engineering">Engineering</option>
        <option value="Operations">Operations</option>
        <option value="Marketing">Marketing</option>
      </select>
    </div>
  );
}
