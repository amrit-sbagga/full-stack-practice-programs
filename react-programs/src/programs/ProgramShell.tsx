interface Props {
  title: string;
  concepts: string[];
  children?: React.ReactNode;
}

export default function ProgramShell({ title, concepts, children }: Props) {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 mb-1">{title}</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {concepts.map((c) => (
          <span key={c} className="px-2 py-0.5 text-xs bg-indigo-100 text-indigo-700 rounded-full font-medium">
            {c}
          </span>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        {children ?? (
          <p className="text-slate-400 italic text-sm">
            TODO: implement this program below ↓
          </p>
        )}
      </div>
    </div>
  );
}
