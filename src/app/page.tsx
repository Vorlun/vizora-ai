import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Vizora</h1>
      <p className="text-gray-600">
        Professional fullstack dashboard starter
      </p>

      <div className="flex gap-3">
        <Link href="/login">
          <Button>Login</Button>
        </Link>

        <Link href="/register">
          <Button className="bg-white text-black border hover:bg-gray-100">
            Register
          </Button>
        </Link>
      </div>
    </main>
  )
}
