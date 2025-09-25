'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DataTable from '@/customComponents/datatable';
import { ColumnDef } from '@tanstack/react-table';


const enlistmentFormData = [
  {
    id: 1,
    firstName: 'Maxwell',
    lastName: 'Konadu',
    image: '',
    guardianFirstName: '',
    GuardianLastName: '',
    progress: 79,
    class: 'JHS 1'
  }
]


const ApplicationCandidatesView = () => {

  const formColumns: ColumnDef<typeof enlistmentFormData[number]>[] =
    [
      {
        header: "Candidate",
        id: "candidate",
        cell: ({ row }: any) => (
          <div className="flex items-center gap-2">
            {/* user image */}
            <div className="avatar size-10">
              <Avatar className='w-full !h-full rounded-sm'>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>{row.original.firstName?.at?.(1)}{row.original.lastName?.at?.(1)}</AvatarFallback>
              </Avatar>
            </div>

            <div className="userInfo">
              <p className="name">{row.original.firstName} {row.original.lastName}</p>
              <p className='text-xs text-gray-400 max-w-[300px] text-ellipsis line-clamp-1'>Monday, 7th April 2025</p>
            </div>
          </div>
        ),
      },
      {
        accessorKey: 'guardian',
        header: 'Guardian Name',
        cell: info => `${info.row.original.firstName} ${info.row.original.lastName}`,
      },
      {
        accessorKey: 'class',
        header: 'Class',
        cell: info => info.row.original.class,
      },
      {
        accessorKey: 'progress',
        header: 'Progress',
        cell: info => <div><progress value={info.row.original.progress} className='rounded-full overflow-hidden' /></div>,
      },
      {
        accessorKey: 'actions',
        header: '',
        cell: info => <div>Some action</div>,
      },
    ]

  return (
    <div className='applicationCandidatesView'>
      {/* tables */}
      <div className='candidateForm mt-10'>
        <DataTable tableInformationContent={<div className='pb-5 flex justify-end items-center'>

        </div>} columns={formColumns} data={enlistmentFormData} totalPages={1} addFiltering />
      </div>
    </div>
  )
}

export default ApplicationCandidatesView
