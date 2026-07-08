import Image from 'next/image';
import Link from 'next/link';

const features = [
  { label: '100% Genuine Products', description: 'Authentic products you can trust.' },
  { label: 'Digital Warranty Certificate', description: 'Access and download anytime.' },
  { label: 'Hassle Free Support', description: 'We’re here to help, always.' },
];

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-[#020202] text-white overflow-hidden">
      <div className="mx-auto max-w-[1380px] px-6 py-8">
        <header className="flex items-center justify-between pb-6">
          <Link href="/" className="text-3xl font-black lowercase tracking-[-0.05em] text-white">
            bo<span className="text-[#ff1a1a] uppercase">A</span>t
          </Link>
          <Link
            href="/admin"
            className="inline-flex items-center justify-center rounded-[16px] bg-[#ff1a1a] px-8 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(255,26,26,0.24)]"
          >
            Admin Dashboard
          </Link>
        </header>

        <div className="grid xl:grid-cols-[1.1fr_0.95fr_0.95fr] gap-12 items-start">
          <div className="space-y-10">
            <div className="max-w-2xl space-y-6">
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.25em] text-[#ff1a1a]">
                Welcome Aboard
              </p>
              <h1 className="text-[3.6rem] leading-[0.98] font-black tracking-[-0.05em] text-white sm:text-[4rem]">
                Create Your <span className="text-[#ff1a1a]">Warranty Hub.</span>
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-300">
                Join boAt Warranty Hub to access your warranty dashboard, track repairs, download certificates and get support.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-start gap-4">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#ff1a1a] text-[#ff1a1a] text-lg">
                    ✓
                  </span>
                  <div>
                    <p className="text-base font-semibold text-white">{feature.label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center py-6 xl:py-0">
            <div className="absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#ff1a1a]/10 blur-3xl" />
            <div className="relative z-10 w-full max-w-[420px]">
              <Image
                src="/boat_earbuds.png"
                alt="boAt earbuds"
                width={520}
                height={520}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="rounded-[36px] bg-white/95 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold text-slate-900">Sign Up</h2>
              <p className="text-sm text-slate-500">Create your account to get started.</p>
            </div>

            <form className="mt-8 space-y-5">
              {[
                { label: 'Full Name', type: 'text', name: 'name' },
                { label: 'Email Address', type: 'email', name: 'email' },
                { label: 'Phone Number', type: 'tel', name: 'phone' },
                { label: 'Password', type: 'password', name: 'password' },
                { label: 'Confirm Password', type: 'password', name: 'confirmPassword' },
              ].map((field) => (
                <label key={field.name} className="block text-sm font-medium text-slate-900">
                  <span className="sr-only">{field.label}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.label}
                    className="w-full rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-[#ff1a1a] focus:ring-4 focus:ring-[#ff1a1a]/10"
                  />
                </label>
              ))}

              <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                <label className="block text-sm font-medium text-slate-900">
                  <span className="sr-only">Enter OTP</span>
                  <input
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    className="w-full rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-[#ff1a1a] focus:ring-4 focus:ring-[#ff1a1a]/10"
                  />
                </label>
                <button
                  type="button"
                  className="inline-flex min-w-[120px] items-center justify-center rounded-[20px] border border-[#ff1a1a] bg-transparent px-5 py-4 text-sm font-semibold text-[#ff1a1a] transition hover:bg-[#ff1a1a]/10"
                >
                  Send OTP
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded-[20px] bg-[#ff1a1a] px-5 py-4 text-base font-semibold text-white transition hover:bg-[#d30f16]"
              >
                Create Account →
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-slate-500">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-[#ff1a1a]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
