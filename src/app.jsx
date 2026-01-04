import { Route, Switch, Link } from 'wouter-preact';
import { routes } from './router.js';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { CreateAccount } from './pages/CreateAccount.jsx';
import { Dashboard } from './pages/Dashboard.jsx';

export function App() {
  return (
    <div className="min-h-screen">
      <header className="navbar bg-base-100 border-b border-base-300">
        <div className="flex-1">
          <Link href={routes.home} className="btn btn-ghost normal-case text-xl">Front E2E</Link>
        </div>
        <div className="flex-none gap-2">
          <Link href={routes.home} className="btn btn-ghost">Home</Link>
          <Link href={routes.login} className="btn btn-ghost">Login</Link>
          <Link href={routes.createAccount} className="btn btn-primary">Create Account</Link>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4">
        <Switch>
          <Route path={routes.home}>
            <Home />
          </Route>
          <Route path={routes.login}>
            <Login />
          </Route>
          <Route path={routes.createAccount}>
            <CreateAccount />
          </Route>
          <Route path={routes.dashboard}>
            <Dashboard />
          </Route>
          <Route>
            <div className="m-10 text-base-content">Not Found</div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}
