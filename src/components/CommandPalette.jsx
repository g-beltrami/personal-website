'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  LinkIcon,
  EnvelopeIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'

const commands = [
  {
    id: 'home',
    title: 'Home',
    subtitle: 'Go to main portfolio',
    icon: HomeIcon,
    action: '/home',
    shortcut: ['G', 'H'],
  },
  {
    id: 'about',
    title: 'About',
    subtitle: 'Learn more about me',
    icon: UserIcon,
    action: '/about',
    shortcut: ['G', 'A'],
  },
  {
    id: 'projects',
    title: 'Projects',
    subtitle: 'View my work and projects',
    icon: BriefcaseIcon,
    action: '/projects',
    shortcut: ['G', 'P'],
  },
  {
    id: 'send-email',
    title: 'Send Email',
    subtitle: 'Contact me via email',
    icon: EnvelopeIcon,
    action: 'mailto:me@gbeltrami.com',
    shortcut: ['E'],
  },
  {
    id: 'view-source',
    title: 'View Source',
    subtitle: 'See the code on GitHub',
    icon: DocumentTextIcon,
    action: 'https://github.com/g-beltrami/personal-website',
    shortcut: ['S'],
  },
]

export function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const inputRef = useRef(null)

  const filteredCommands =
    query === ''
      ? commands
      : commands.filter((command) => {
          const queryLower = query.toLowerCase()

          // Check if query matches title or subtitle
          const titleMatch = command.title.toLowerCase().includes(queryLower)
          const subtitleMatch = command.subtitle.toLowerCase().includes(queryLower)

          // Check if query matches keyboard shortcut sequence
          const shortcutText = command.shortcut.join('').toLowerCase()
          const shortcutMatch = shortcutText.includes(queryLower)

          // Also check if query matches individual shortcut keys
          const individualKeyMatch = command.shortcut.some(key =>
            key.toLowerCase().includes(queryLower)
          )

          return titleMatch || subtitleMatch || shortcutMatch || individualKeyMatch
        })

  const handleCommand = (command) => {
    // Don't close if no command was selected (e.g., when input is cleared)
    if (!command) return

    onClose()
    setQuery('')

    if (command.action === 'copy-link') {
      navigator.clipboard.writeText(window.location.href)
      return
    }

    if (command.action.startsWith('mailto:') || command.action.startsWith('https://')) {
      window.open(command.action, '_blank')
      return
    }

    router.push(command.action)
  }

  useEffect(() => {
    if (!isOpen) {
      setQuery('')
    } else {
      // Focus input when dialog opens
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  return (
    <Transition.Root show={isOpen} as={Fragment} afterLeave={() => setQuery('')}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-2xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 transition-all dark:bg-zinc-900 dark:ring-white/10">
              <Combobox onChange={handleCommand} nullable>
                <div className="relative">
                  <Combobox.Input
                    ref={inputRef}
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:ring-0 sm:text-sm dark:text-zinc-100 dark:placeholder:text-zinc-400"
                    placeholder="Type a command or search..."
                    displayValue={() => query}
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={(event) => {
                      // Prevent any default closing behavior
                      if (event.key === 'Backspace' || event.key === 'Delete') {
                        event.stopPropagation()
                      }
                    }}
                  />
                  <svg
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-zinc-500 dark:text-zinc-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>

                {filteredCommands.length > 0 && (
                  <Combobox.Options
                    static
                    className="max-h-80 scroll-py-2 overflow-y-auto py-2 text-sm text-zinc-800 dark:text-zinc-200"
                  >
                    <div className="mb-2 px-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                      GENERAL
                    </div>
                    {filteredCommands.slice(0, 3).map((command) => (
                      <Combobox.Option
                        key={command.id}
                        value={command}
                        className="cursor-default select-none px-3 py-2 data-[focus]:bg-zinc-100 dark:data-[focus]:bg-zinc-800"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <command.icon className="h-5 w-5 flex-none text-zinc-500 dark:text-zinc-400" />
                            <div className="ml-3 flex-auto truncate">
                              <div className="font-medium">{command.title}</div>
                              <div className="text-xs text-zinc-500 dark:text-zinc-400">{command.subtitle}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            {command.shortcut.map((key, index) => (
                              <kbd
                                key={index}
                                className="inline-flex h-6 w-6 items-center justify-center rounded border border-zinc-200 bg-zinc-50 text-xs font-mono text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                              >
                                {key}
                              </kbd>
                            ))}
                          </div>
                        </div>
                      </Combobox.Option>
                    ))}

                    {filteredCommands.length > 3 && (
                      <>
                        <div className="mb-2 mt-4 px-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                          GO TO
                        </div>
                        {filteredCommands.slice(3).map((command) => (
                          <Combobox.Option
                            key={command.id}
                            value={command}
                            className="cursor-default select-none px-3 py-2 data-[focus]:bg-zinc-100 dark:data-[focus]:bg-zinc-800"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <command.icon className="h-5 w-5 flex-none text-zinc-500 dark:text-zinc-400" />
                                <div className="ml-3 flex-auto truncate">
                                  <div className="font-medium">{command.title}</div>
                                  <div className="text-xs text-zinc-500 dark:text-zinc-400">{command.subtitle}</div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1">
                                {command.shortcut.map((key, index) => (
                                  <kbd
                                    key={index}
                                    className="inline-flex h-6 w-6 items-center justify-center rounded border border-zinc-200 bg-zinc-50 text-xs font-mono text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                                  >
                                    {key}
                                  </kbd>
                                ))}
                              </div>
                            </div>
                          </Combobox.Option>
                        ))}
                      </>
                    )}
                  </Combobox.Options>
                )}

                {query !== '' && filteredCommands.length === 0 && (
                  <div className="px-6 py-14 text-center text-sm text-zinc-500 dark:text-zinc-400">
                    No commands found.
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}