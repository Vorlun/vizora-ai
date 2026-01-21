export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">Login</h2>

        <form className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded border px-3 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded border px-3 py-2"
          />

          <button className="w-full rounded bg-black py-2 text-white">
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}
