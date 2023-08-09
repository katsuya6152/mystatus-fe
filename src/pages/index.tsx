import { NextPage } from "next"

import { Stack } from "@mantine/core"

import ColorSchemeToggle from "@/components/ColorSchemeToggle"

const Home: NextPage = () => {
  return (
    <div>
      <Stack align="center" justify="center" spacing="lg" className="min-h-screen">
        <h1 className="font-extrabold text-gray-600">Welcome to Mantine & Tailwind CSS!</h1>
        <ColorSchemeToggle />
      </Stack>
    </div>
  )
}

export default Home