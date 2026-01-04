import { useState } from 'preact/compat';
import { Link } from 'wouter-preact';
import { routes } from '../router.js';

export function CreateAccount() {
  const steps = ['Phone', 'Details', 'TOS', 'Confirmation'];
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState(null);
  const [cpf, setCpf] = useState('');
  const [cuit, setCuit] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [tosAccepted, setTosAccepted] = useState(false);
  const [error, setError] = useState('');

  const detectCountry = (value) => {
    if (value.startsWith('+55')) return 'br';
    if (value.startsWith('+54')) return 'ar';
    return null;
  };

  const handlePhoneNext = () => {
    const trimmed = phone.trim();
    const detected = detectCountry(trimmed);
    if (!detected) {
      setError('El número debe comenzar con +54 o +55.');
      return;
    }
    setCountry(detected);
    setError('');
    setStep(1);
  };

  const handleDetailsNext = () => {
    setError('');
    if (country === 'br') {
      if (!cpf.trim()) {
        setError('Ingresá un CPF.');
        return;
      }
    }
    if (country === 'ar') {
      if (!cuit.trim() || !address.trim() || !email.trim()) {
        setError('Completá CUIT/CUIL, dirección y correo electrónico.');
        return;
      }
    }
    setStep(2);
  };

  const handleTosNext = () => {
    if (!tosAccepted) {
      setError('Debés aceptar los términos.');
      return;
    }
    setError('');
    setStep(3);
  };

  const goBack = () => setStep((prev) => Math.max(prev - 1, 0));

  const renderSteps = () => (
    <ul className="steps w-full mb-8">
      {steps.map((label, idx) => (
        <li
          key={label}
          className={`step ${step >= idx ? 'step-primary' : ''}`}
        >
          {label}
        </li>
      ))}
    </ul>
  );

  const renderContent = () => {
    if (step === 0) {
      return (
        <div className="card bg-base-200 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Phone number</h2>
            <p className="text-base-content/70">Ingresá un número que empiece con +54 o +55.</p>
            <label className="label mt-4">
              <span className="label-text">Phone number</span>
            </label>
            <input
              type="tel"
              placeholder="+54..."
              className="input input-bordered w-full"
              value={phone}
              maxLength={15}
              onInput={(e) => { setPhone(e.target.value); setError(''); }}
            />
            {phone && (
              <span className="mt-2 text-sm text-base-content/60">
                {detectCountry(phone.trim()) === 'br' && 'Detectado: Brasil (+55)'}
                {detectCountry(phone.trim()) === 'ar' && 'Detectado: Argentina (+54)'}
              </span>
            )}
            <div className="card-actions justify-end mt-6">
              <button className="btn btn-primary" type="button" onClick={handlePhoneNext}>
                Siguiente
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (step === 1) {
      return (
        <div className="card bg-base-200 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Detalles</h2>
            <p className="text-base-content/70">Dependiendo del país vamos a pedir distintos datos.</p>
            {country === 'br' && (
              <>
                <label className="label mt-4">
                  <span className="label-text">CPF Number</span>
                </label>
                <input
                  type="text"
                  placeholder="000.000.000-00"
                  className="input input-bordered w-full"
                  value={cpf}
                  onInput={(e) => { setCpf(e.target.value); setError(''); }}
                />
              </>
            )}
            {country === 'ar' && (
              <>
                <label className="label mt-4">
                  <span className="label-text">CUIT/CUIL Number</span>
                </label>
                <input
                  type="text"
                  placeholder="20-12345678-9"
                  className="input input-bordered w-full"
                  value={cuit}
                  onInput={(e) => { setCuit(e.target.value); setError(''); }}
                />
                <label className="label mt-4">
                  <span className="label-text">Dirección física</span>
                </label>
                <input
                  type="text"
                  placeholder="Calle Falsa 123, CABA"
                  className="input input-bordered w-full"
                  value={address}
                  onInput={(e) => { setAddress(e.target.value); setError(''); }}
                />
                <label className="label mt-4">
                  <span className="label-text">Correo electrónico</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                  value={email}
                  onInput={(e) => { setEmail(e.target.value); setError(''); }}
                />
              </>
            )}
            <div className="card-actions justify-between items-center mt-6">
              <button className="btn btn-ghost" type="button" onClick={goBack}>
                Atrás
              </button>
              <button className="btn btn-primary" type="button" onClick={handleDetailsNext}>
                Siguiente
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (step === 2) {
      return (
        <div className="card bg-base-200 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Términos y condiciones</h2>
            <p className="text-base-content/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <label className="label cursor-pointer mt-4 justify-start gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={tosAccepted}
                onInput={(e) => { setTosAccepted(e.target.checked); setError(''); }}
              />
              <span className="label-text">Acepto los términos del servicio</span>
            </label>
            <div className="card-actions justify-between items-center mt-6">
              <button className="btn btn-ghost" type="button" onClick={goBack}>
                Atrás
              </button>
              <button className="btn btn-primary" type="button" onClick={handleTosNext}>
                Aceptar y continuar
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="card bg-base-200 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Revisá tu correo</h2>
          <p className="text-base-content/70">
            Enviamos un email de confirmación. Revisá tu bandeja de entrada para activarlo.
          </p>
          <div className="card-actions mt-6">
            <Link href={routes.login} className="btn btn-primary">Ir a Login</Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full my-4">
      <div className="m-10 max-w-3xl">
        <h1 className="text-4xl text-base-content font-bold">Create Account</h1>
        <p className="mt-2 text-base-content/70">Seguimos unos pasos simples para validar el registro.</p>
        {renderSteps()}
        {error && (
          <div className="alert alert-error mb-4">
            <span>{error}</span>
          </div>
        )}
        {renderContent()}
      </div>
    </div>
  );
}
