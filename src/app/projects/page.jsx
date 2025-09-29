import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoDex from '@/images/logos/dex.svg'
import logoPatronos from '@/images/logos/patronos.svg'
import logoKartel from '@/images/logos/kartel.jpg'
import logoAws from '@/images/logos/aws.svg'
import logoRappi from '@/images/logos/rappi.svg'
import logoBeehive from '@/images/logos/beehive.svg'
import logoMckinsey from '@/images/logos/mckinsey.svg'

const projects = [
  {
    name: 'dex',
    description:
      'A unified data platform that helps organizations turn scattered data into reliable insights. From ingestion to orchestration, governance to BI—fully managed in the cloud.',
    link: { href: 'https://www.dexlabs.io/', label: 'dexlabs.io' },
    logo: logoDex,
  },
  {
    name: 'Patronos Endowment Fund',
    description:
      'One of Brazil\'s first endowment funds supporting education and innovation at Unicamp. Funding top talent and projects tackling humanity\'s biggest challenges.',
    link: { href: 'https://www.patronos.org/', label: 'patronos.org' },
    logo: logoPatronos,
  },
  {
    name: 'Kartel Racing',
    description:
      'Amateur go-karting team where I compete in endurance races. 2023 Brazilian National Champion in amateur endurance category.',
    link: { href: 'https://www.instagram.com/kartelracingoficial/', label: 'instagram.com' },
    logo: logoKartel,
  },
  {
    name: 'AWS Global Accelerator',
    description:
      'Global network optimization service that improves performance for internet applications. Led growth strategy and adoption for SMB customers.',
    link: { href: 'https://aws.amazon.com/global-accelerator/', label: 'aws.amazon.com' },
    logo: logoAws,
  },
  {
    name: 'Rappi',
    description:
      'Latin America\'s super app for on-demand delivery. Led global product development for groceries, pharmacies, and liquor operations across 9 countries.',
    link: { href: 'https://www.rappi.com.br/', label: 'rappi.com' },
    logo: logoRappi,
  },
  {
    name: 'McKinsey & Company',
    description:
      'Global management consulting firm. Advised Fortune 500 companies and governments on strategy, operations, and transformation across Brazil and Ghana.',
    link: { href: 'https://www.mckinsey.com/', label: 'mckinsey.com' },
    logo: logoMckinsey,
  },
  {
    name: 'Beehive',
    description:
      'Enterprise-grade project management for transformations, turnarounds, and organizational change.',
    link: { href: 'https://beehive.solutions/', label: 'beehive.solutions' },
    logo: logoBeehive,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Companies I\'ve built, products I\'ve led, and teams I\'ve been part of.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Companies I've built, products I've led, and teams I've been part of."
      intro="From founding startups to leading product development at global tech companies, these are the organizations and projects that have shaped my career. Each one taught me something new about building products that matter."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
