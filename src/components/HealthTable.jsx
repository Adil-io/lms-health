import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Filter } from "lucide-react";

const HealthTable = () => {
  return (
    <div className="flex justify-center items-center flex-wrap mx-[360px] mt-20">
      <div className="flex justify-between items-baseline self-end w-full px-3">
        <h2 className="text-xl text-primary-custom font-semibold">
          LMS Health Check
        </h2>
        <span className="flex align-baseline gap-1">
          <Filter className="fill-primary-custom" stroke="none" /> Filter
        </span>
      </div>
      <Table className="mt-5">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default HealthTable;
