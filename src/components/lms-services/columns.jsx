import { Button } from '@/components/ui/button';
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

export const columns = [
  {
    accessorKey: 'serviceName',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Service Name"
        className="text-center text-background"
      />
    ),
  },
  {
    accessorKey: 'env',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Env"
        className="text-center text-background"
      />
    ),
    cell: ({ row }) => <div className="text-center">{row.getValue('env')}</div>,
  },
  {
    accessorKey: 'health',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Health"
        className="text-center text-background"
      />
    ),
    cell: ({ row }) => {
      const health = row.original;

      return (
        <div
          className={`${health ? 'bg-[#DDEDDB] text-[#3D5443]' : 'bg-[#FFE3DF] text-[#72383C]'} px-4 text-center font-semibold`}
        >
          {health ? 'Live' : 'Down'}
        </div>
      );
    },
  },
  {
    accessorKey: 'country',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Country"
        className="text-background"
      />
    ),
  },
  {
    accessorKey: 'healthUrl',
    header: () => <div className="text-center text-background">Health URL</div>,
  },
  {
    accessorKey: 'healthMessage',
    header: () => (
      <div className="text-center text-background">Health Message</div>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const service = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open Menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(service.healthUrl)}
            >
              Copy Health URL
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
