import { Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function App() {
  return (
    <div className="dark bg-graphite text-navy min-h-screen flex">
      <header className="bg-navy p-4 fixed top-0 left-0 right-0 z-10">
        <h1 className="text-orange text-3xl font-bold">BuildLedger</h1>
      </header>
      <aside className="w-64 bg-graphite p-4 mt-16 fixed left-0 h-full overflow-y-auto">
        <nav className="space-y-4">
          <Button variant="outline" className="w-full text-left bg-orange text-navy p-6 text-lg rounded-lg">
            Invoices
          </Button>
          <Button variant="outline" className="w-full text-left bg-orange text-navy p-6 text-lg rounded-lg">
            Dashboard
          </Button>
          <Button variant="outline" className="w-full text-left bg-orange text-navy p-6 text-lg rounded-lg">
            Customers
          </Button>
          <Button variant="outline" className="w-full text-left bg-orange text-navy p-6 text-lg rounded-lg">
            Expenses
          </Button>
          <Button variant="outline" className="w-full text-left bg-orange text-navy p-6 text-lg rounded-lg">
            AI Assistant
          </Button>
        </nav>
      </aside>
      <main className="flex-1 p-4 mt-16 ml-64">
        <Outlet />
      </main>
    </div>
  );
}

export default App;