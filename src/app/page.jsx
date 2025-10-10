import { Container } from '@/components/Container'
import { KeyboardHint } from '@/components/KeyboardHint'

function Landing() {
  return (
    <Container className="mt-24 sm:mt-32">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-zinc-800 dark:text-zinc-100">
          Gustavo Beltrami
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 mb-4">
          Co-founder & CEO at dex
        </p>

        <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 mb-12 max-w-lg">
          Living and building
        </p>

        <KeyboardHint />
      </div>
    </Container>
  )
}

export default Landing

export const metadata = {
  title: 'Gustavo Beltrami',
  description: 'Co-founder & CEO at dex. Building tools that turn scattered data into reliable insights.',
}