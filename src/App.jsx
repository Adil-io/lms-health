import { Header, HealthTable } from "./components";

export default function App() {
  return (
    <main className="relative bg-background-custom flex flex-col h-screen">
      <section>
        <Header />
      </section>
      <section className="flex-1 ">
        <HealthTable />
      </section>
    </main>
  );
}
