import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";

import P01Counter from "./programs/01-counter";
import P02CounterHook from "./programs/02-counter-custom-hook";
import P03CounterReducer from "./programs/03-counter-reducer";
import P04CounterContext from "./programs/04-counter-context";
import P05CounterRedux from "./programs/05-counter-redux";
import P06ArrayTable from "./programs/06-array-table-dropdown";
import P07FetchTable from "./programs/07-fetch-table";
import P08FetchSearch from "./programs/08-fetch-search-debounce";
import P09Timer from "./programs/09-timer";
import P10ColorChange from "./programs/10-color-change";
import P11FormValidation from "./programs/11-form-validation";
import P12TodoList from "./programs/12-todo-list";
import P13Pagination from "./programs/13-pagination";
import P14StarRating from "./programs/14-star-rating";
import P15Accordion from "./programs/15-accordion";
import P16InfiniteScroll from "./programs/16-infinite-scroll";
import P17Stopwatch from "./programs/17-stopwatch";
import P18Autocomplete from "./programs/18-autocomplete";

const programs = [
  { path: "01-counter", label: "01 · Counter (useState)" },
  { path: "02-counter-custom-hook", label: "02 · Counter (Custom Hook)" },
  { path: "03-counter-reducer", label: "03 · Counter (useReducer)" },
  { path: "04-counter-context", label: "04 · Counter (Context)" },
  { path: "05-counter-redux", label: "05 · Counter (Redux Toolkit)" },
  { path: "06-array-table-dropdown", label: "06 · Array → Table + Dropdown" },
  { path: "07-fetch-table", label: "07 · Fetch API → Table" },
  { path: "08-fetch-search-debounce", label: "08 · Fetch + Search + Debounce" },
  { path: "09-timer", label: "09 · Start/Stop Timer" },
  { path: "10-color-change", label: "10 · Change Page Color" },
  { path: "11-form-validation", label: "11 · Form Validation" },
  { path: "12-todo-list", label: "12 · Todo List (CRUD)" },
  { path: "13-pagination", label: "13 · Pagination" },
  { path: "14-star-rating", label: "14 · Star Rating" },
  { path: "15-accordion", label: "15 · Accordion" },
  { path: "16-infinite-scroll", label: "16 · Infinite Scroll" },
  { path: "17-stopwatch", label: "17 · Stopwatch with Laps" },
  { path: "18-autocomplete", label: "18 · Autocomplete" },
];

function Sidebar() {
  return (
    <nav className="w-64 min-h-screen bg-slate-900 text-slate-100 flex flex-col shrink-0">
      <div className="px-4 py-5 border-b border-slate-700">
        <Link to="/" className="text-lg font-bold text-white hover:text-indigo-400 transition-colors">
          React Practice
        </Link>
        <p className="text-xs text-slate-400 mt-1">18 programs</p>
      </div>
      <ul className="flex-1 overflow-y-auto py-2">
        {programs.map((p) => (
          <li key={p.path}>
            <NavLink
              to={`/${p.path}`}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-indigo-600 text-white font-semibold"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              {p.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">React Practice Programs</h1>
      <p className="text-slate-500 mb-8">Click a program in the sidebar to start. Each one is a self-contained exercise.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {programs.map((p) => (
          <Link
            key={p.path}
            to={`/${p.path}`}
            className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all bg-white"
          >
            <span className="text-sm font-semibold text-slate-700">{p.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/01-counter" element={<P01Counter />} />
            <Route path="/02-counter-custom-hook" element={<P02CounterHook />} />
            <Route path="/03-counter-reducer" element={<P03CounterReducer />} />
            <Route path="/04-counter-context" element={<P04CounterContext />} />
            <Route path="/05-counter-redux" element={<P05CounterRedux />} />
            <Route path="/06-array-table-dropdown" element={<P06ArrayTable />} />
            <Route path="/07-fetch-table" element={<P07FetchTable />} />
            <Route path="/08-fetch-search-debounce" element={<P08FetchSearch />} />
            <Route path="/09-timer" element={<P09Timer />} />
            <Route path="/10-color-change" element={<P10ColorChange />} />
            <Route path="/11-form-validation" element={<P11FormValidation />} />
            <Route path="/12-todo-list" element={<P12TodoList />} />
            <Route path="/13-pagination" element={<P13Pagination />} />
            <Route path="/14-star-rating" element={<P14StarRating />} />
            <Route path="/15-accordion" element={<P15Accordion />} />
            <Route path="/16-infinite-scroll" element={<P16InfiniteScroll />} />
            <Route path="/17-stopwatch" element={<P17Stopwatch />} />
            <Route path="/18-autocomplete" element={<P18Autocomplete />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
