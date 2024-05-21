import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'

import { SidebarItem } from './sidebar-item'

import logo from '@/public/duolingo-text-logo.svg'
import learnIcon from '@/public/learn-home.svg'
import practice from '@/public/practice.svg'
import leaderboads from '@/public/leaderboads.svg'
import quests from '@/public/quests.svg'
import shop from '@/public/shop.svg'

type Props = {
    className?: string
}

export const Sidebar = ({ className }: Props) => {
    return (
        <div
            className={cn(
                'flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col',
                className
            )}
        >
            <Link href={'/learn'}>
                <div className='py-8 pl-4 gap-x-3'>
                    <Image src={logo} alt='Duolingo logo' height={40} />
                </div>
            </Link>
            <div className='flex flex-col flex-1 gap-y-1'>
                <SidebarItem label='learn' href='/learn' iconSrc={learnIcon} />
                <SidebarItem
                    label='practice'
                    href='/practice'
                    iconSrc={practice}
                />
                <SidebarItem
                    label='Leaderboards'
                    href='/leaderboard'
                    iconSrc={leaderboads}
                />
                <SidebarItem label='Quests' href='/quests' iconSrc={quests} />
                <SidebarItem label='Shop' href='/shop' iconSrc={shop} />
            </div>
            <div className='p-4'>
                <ClerkLoading>
                    <Loader className='w-5 h-5 text-muted-foreground animate-spin' />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl='/' />
                </ClerkLoaded>
            </div>
        </div>
    )
}
