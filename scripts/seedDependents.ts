// scripts/seedDependents.ts
import fs from 'fs'
import path from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 1. Load and parse your JSON file
  const raw = fs.readFileSync(
    path.join(__dirname, '../scraped-dependents.json'),
    'utf-8'
  )
  const all: Array<{
    package: string
    install: string
    readme: string
  }> = JSON.parse(raw)

  // 2. Chunk the data to avoid giant inserts
  const chunkSize = 500
  for (let i = 0; i < all.length; i += chunkSize) {
    const chunk = all.slice(i, i + chunkSize).map(item => ({
      package_name: item.package,
      install_cmd:  item.install,
      readme:       item.readme,
    }))

    // 3. Insert with skipDuplicates so re-running is safe
    await prisma.package.createMany({
      data:           chunk,
      skipDuplicates: true,
    })

    console.log(`✅ Inserted ${i + chunk.length}/${all.length}`)
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })