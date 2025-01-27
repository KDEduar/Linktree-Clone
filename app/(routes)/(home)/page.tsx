import { TreePalm } from 'lucide-react'
import React from 'react'
import { LinkProfile } from './components'

export default function HomePage() {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-[60%_auto] gap-4 px-4'>
                <div>
                    <LinkProfile />

                    {/* Profile info */}
                    <div>
                        <p>Profile info</p>
                    </div>

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