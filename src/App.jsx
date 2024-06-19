import { Header, HealthTable } from './components';

export default function App() {
  return (
    <main className="relative">
      <Header />
      <section className="bg-slate-100">
        <HealthTable />
      </section>
    </main>
  );
}
