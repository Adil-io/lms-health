import { Button } from '@/components/ui/button';
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HeartPulse, MoreHorizontal } from 'lucide-react';

export const columns = [
  {
    accessorKey: 'serviceName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Name" />
    ),
  },
  {
    accessorKey: 'env',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Env" />
    ),
  },
  {
    accessorKey: 'health',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Health" />
    ),
    cell: ({ row }) => {
      const health = row.original;

      return (
        <div className={`${health ? 'text-[#679F72]' : 'text-[#834045]'}`}>
          <HeartPulse />
        </div>
      );
    },
  },
  {
    accessorKey: 'country',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country" />
    ),
  },
  {
    accessorKey: 'healthUrl',
    header: () => <div>Health URL</div>,
  },
  {
    accessorKey: 'healthMessage',
    header: () => <div>Health Message</div>,
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
