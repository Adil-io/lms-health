import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ArrowUpDown } from 'lucide-react';

export const columns = [
  {
    accessorKey: 'serviceName',
    header: () => (
      <div className="text-nowrap text-center text-background">
        Service Name
      </div>
    ),
  },
  {
    accessorKey: 'env',
    header: () => <div className="text-center text-background">Env</div>,
    cell: ({ row }) => <div className="text-center">{row.getValue('env')}</div>,
  },
  {
    accessorKey: 'health',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="text-background"
        >
          Health
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="text-background"
        >
          Country
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'healthUrl',
    header: () => <div className="text-center text-background">Health Url</div>,
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
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(service.serviceName)}
            >
              Copy Service Name
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
