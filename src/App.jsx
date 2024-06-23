import { Header, HealthTable } from './components';

export default function App() {
  return (
    <main className="bg-background px-12 py-2">
      <Header />
      <section className="mt-5">
        <h2 className="text-xl">LMS Health Check</h2>
      </section>
      <section>
        <HealthTable />
      </section>
    </main>
  );
}
