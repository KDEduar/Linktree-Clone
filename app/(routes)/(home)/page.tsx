"use client"
import { TreePalm } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { HandlerSteps, LinkProfile } from './components'
import { useUser } from '@clerk/nextjs'
import { Link, User } from '@prisma/client'
import { LoaderProfile } from '@/components/Shared'
import { StepConfigUserProvider } from '@/contexts'
import { ProfileInfo } from './components/ProfileInfo'

export default function HomePage() {
    const {user} = useUser()
    const [isFirstVisit, setIsFirstVisit] = useState(false);
    const [reload, setReload] = useState(false);
    const [infoUser, setInfoUser] = useState<(User &{ links: Link[] }) | null>(null);

    useEffect(() => {
        const checkFirstLogin = async () => {
            const response = await fetch("/api/info-user");
            const data = await response.json();
            setInfoUser(data);
            setIsFirstVisit(data.firstLogin);
        };
        checkFirstLogin();
        if (reload) {
            checkFirstLogin();
            setReload(false);
        }
    }, [user?.id, reload, user]);

    // If user is not authenticated, show loader
    if (!user || !infoUser) {
        return <LoaderProfile />;
    }

    if (isFirstVisit) {
        return (
            <StepConfigUserProvider>
                <HandlerSteps onReload={setReload} />
            </StepConfigUserProvider>
        )
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-[60%_auto] gap-4 px-4'>
                <div>
                    <LinkProfile />

                    <ProfileInfo onReload={setReload} />

                    <div className="mt-20 flex flex-col items-center">
                        <div className="py-10 text-center justify-center flex flex-col items-center text-gray-400 font-semibold">
                            <TreePalm className='w-20 h-20' strokeWidth={1} />
                            <p>Show the who you are.</p>
                            <p>Add a link to get started</p>
                        </div>
                    </div>
                </div>

                {/* Profile Preview */}
                <div>
                    <p>Profile Preview...</p>
                </div>
            </div>
        </div>
    )
}