import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    "I'm Gustavo Beltrami. I love making things and turning ideas into reality.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Builder, founder, learner. Still chasing hard problems.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I've been drawn to making things work for as long as I can remember. When I was in college, I designed race cars and earned a spot on Scuderia Toro Rosso's F1 aerodynamics team.
            </p>
            <p>
              That engineering foundation led me to McKinsey, where I spent three years solving complex problems across Brazil and Ghana. But I wanted to build products, not just advise on them—so I moved to Bogotá to join Rappi, one of Latin America's fastest-growing startups. Leading product development across 9 countries, I saw millions of people use what we built daily. That's when I fell in love with the craft of product management.
            </p>
            <p>
              I wanted to go deeper, so I went to Harvard Business School. There, I immersed myself in entrepreneurship and technology—joining the I-Lab Venture Program, learning from founders who'd scaled companies, and clarifying what I wanted to build. I joined AWS in Seattle as a Senior Technical Product Manager, where I finally understood what world-class product management looks like: obsessing over customers, moving fast without compromising craft, and measuring what matters.
            </p>
            <p>
              Today, I'm Co-founder and CEO of dex, a unified data platform that solves one of tech's hardest problems: turning messy, scattered data into reliable insights. We handle everything from ingestion and transformation to orchestration, governance, and BI—fully managed in the cloud so teams can focus on decisions, not infrastructure.
            </p>
            <p>
              Since 2019, I've also co-founded and run Patronos Endowment Fund, one of Brazil's first endowment funds supporting education at Unicamp. We fund top talent and projects tackling humanity's biggest challenges—like climate change, AI, gene editing, and space exploration. I believe education is the foundation for prosperous, sustainable societies.
            </p>
            <p>
              I'm still learning, still building, and still chasing hard problems worth solving.
            </p>
            <p>
              Outside work, I race go-karts (2023 Brazilian National Champion), scuba dive, hike, and tinker with side projects. I believe in open-source, in the beauty of technology, and in the freedom to create.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.linkedin.com/in/gustavo-beltrami/" icon={LinkedInIcon}>
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="https://github.com/gustavo-beltrami" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.instagram.com/gustavo_mbeltrami/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="mailto:me@gbeltrami.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              me@gbeltrami.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
