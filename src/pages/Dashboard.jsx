export function Dashboard() {
  return (
    <div className="w-full h-full my-4">
      <div className="m-10">
        <h1 className="text-4xl text-base-content font-bold">Dashboard</h1>
        <p className="mt-2 text-base-content/70">¡Bienvenido!</p>
        <div className="mt-6 max-w-3xl">
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Resumen</h2>
              <p className="text-base-content/70">Este es un dashboard de ejemplo.</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body items-center text-center">
                    <div
                      className="radial-progress text-primary"
                      style={{ '--value': 72 }}
                      role="progressbar"
                    >
                      72%
                    </div>
                    <div className="mt-2 font-medium">Tareas completadas</div>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body items-center text-center">
                    <div
                      className="radial-progress text-success"
                      style={{ '--value': 95 }}
                      role="progressbar"
                    >
                      95%
                    </div>
                    <div className="mt-2 font-medium">Uptime</div>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body items-center text-center">
                    <div
                      className="radial-progress text-warning"
                      style={{ '--value': 40 }}
                      role="progressbar"
                    >
                      40%
                    </div>
                    <div className="mt-2 font-medium">Almacenamiento usado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
