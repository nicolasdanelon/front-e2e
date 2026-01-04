import { useState } from 'preact/compat';
import { useLocation } from 'wouter-preact';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [, navigate] = useLocation();

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSignIn = async () => {
    setError('');
    if (!email.trim()) {
      setError('Ingresá un correo electrónico.');
      return;
    }
    setLoading(true);
    const delay = Math.floor(Math.random() * 950); // < 1s
    await wait(delay);

    const mail = email.trim().toLowerCase();
    if (mail.endsWith('@gmail.com')) {
      navigate('/dashboard');
      return; // navigation unmounts; no need to unset loading
    }
    if (mail.endsWith('@live.com')) {
      setError('Login incorrecto. Probá con un correo @gmail.com.');
    } else {
      setError('Login incorrecto.');
    }
    setLoading(false);
  };

  return (
    <div className="w-full h-full my-4">
      <div className="m-10">
        <h1 className="text-4xl text-base-content font-bold">Login</h1>
        <p className="mt-2 text-base-content/70">Sign in to your account</p>
        <div className="mt-6 max-w-sm">
          {error && (
            <div className="alert alert-error mb-4">
              <span>{error}</span>
            </div>
          )}
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="input input-bordered w-full"
            value={email}
            onInput={(e) => { setEmail(e.target.value); setError(''); }}
            disabled={loading}
          />
          <label className="label mt-4">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="input input-bordered w-full"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
          <button
            className={`btn btn-primary mt-6 ${loading ? 'loading' : ''}`}
            type="button"
            onClick={handleSignIn}
            disabled={loading}
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}
