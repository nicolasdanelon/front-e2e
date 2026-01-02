import { useState, useCallback } from 'preact/compat';
import { Button } from 'react-daisyui';
import { Route, Switch, Link } from 'wouter-preact';
import { routes } from './router.js';

function Home() {
  const [loading, setLoading] = useState(false);
  const [title, setTtile] = useState('Just a title');
  const [description, setDescription] = useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, repudiandae omnis distinctio laudantium placeat velit cupiditate quam recusandae tempore reiciendis');

  const handleChange = useCallback(() => {
    setLoading(true)
    const limit = Math.floor(Math.random() * 4) + 1 * 1000;
    const timer = setInterval(() => {
      setTtile('Chuck Norris Facts');
      setDescription('Chuck Norris is ten feet tall, weighs two-tons, breathes fire, and could eat a hammer and take a shotgun blast standing If you spell Chuck Norris in Scrabble, you win.')
      setLoading(false)
    }, limit);

    setTimeout(() => {
      clearInterval(timer);
    }, limit);
  }, []);

  const text = loading ? 'wait..' : 'Give me chuck';

  return (
    <div className="w-full h-full my-4">
      <div
        className="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box
                    flex min-h-[6rem] min-w-[18rem] flex-wrap items-center justify-center gap-2
                    overflow-x-hidden overflow-y-hidden border bg-cover bg-top p-4 m-10"
      >
        <h1 className="w-full text-4xl text-base-content font-bold">{title}</h1>
        <p className="w-full text-base-content">{description}</p>
        <div className="my-4">
          <Button onClick={handleChange}>{text}</Button>
        </div>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="w-full h-full my-4">
      <div className="m-10">
        <h1 className="text-4xl text-base-content font-bold">Login</h1>
        <p className="mt-2 text-base-content/70">Sign in to your account</p>
        <div className="mt-6 max-w-sm">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="you@example.com" className="input input-bordered w-full" />
          <label className="label mt-4">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="••••••••" className="input input-bordered w-full" />
          <button className="btn btn-primary mt-6" type="button">Sign in</button>
        </div>
      </div>
    </div>
  );
}

function CreateAccount() {
  return (
    <div className="w-full h-full my-4">
      <div className="m-10">
        <h1 className="text-4xl text-base-content font-bold">Create Account</h1>
        <p className="mt-2 text-base-content/70">Open a new account</p>
        <div className="mt-6 max-w-sm">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Jane Doe" className="input input-bordered w-full" />
          <label className="label mt-4">
            <span className="label-text">Phone number</span>
          </label>
          <input type="tel" placeholder="1234567890" className="input input-bordered w-full" />
          <label className="label mt-4">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Create a password" className="input input-bordered w-full" />
          <button className="btn btn-primary mt-6" type="button">Create account</button>
        </div>
      </div>
    </div>
  );
}

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
      <main>
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
          <Route>
            <div className="m-10 text-base-content">Not Found</div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}
