'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import CustomLinkTabs from './CustomLinkTabs'
import { ILinkTab } from './CustomLinkTabs'

type IApplicationsTitle = 'Overview' | 'All Applications'
type IApplicationsLink = '/private/admin/applications/overview' | '/private/admin/applications/list'



const settingsPages: ILinkTab<{ title: IApplicationsTitle, link: IApplicationsLink }>[] = [
    { title: 'Overview', link: '/private/admin/applications/overview' },
    { title: 'All Applications', link: '/private/admin/applications/list' },
]

const EnrollmentApplicationsTabs = () => {
    const router = useRouter()

    const handleTabClicked = (value: any) => {
        console.log('value', value)
    }

    return (
        <div>
            <div className="newTabs">
                <CustomLinkTabs tabs={settingsPages} />
            </div>
        </div>
    )
}

export default EnrollmentApplicationsTabs
