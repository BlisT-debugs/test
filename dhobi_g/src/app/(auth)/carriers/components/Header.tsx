// app/careers/components/Header.tsx
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Dhobi G" className="h-8 w-auto" />
        <h1 className="text-xl font-bold text-[#007BB5]">Careers</h1>
      </div>
    </header>
  );
}
