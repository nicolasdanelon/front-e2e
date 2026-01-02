
export function Login() {
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
