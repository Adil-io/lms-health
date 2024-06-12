import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { RefreshCcw } from "lucide-react";

import { WINGS_SERVICES } from "@/constants/WINGS_SERVICES";
import { useEffect, useState } from "react";

const HealthTable = () => {
  const [services, setServices] = useState(WINGS_SERVICES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceInfo = async (service) => {
      try {
        const res = await fetch(service.url);
        const message = await res.text();
        return {
          ...service,
          health: true,
          healthMessage: message,
        };
      } catch (error) {
        return {
          ...service,
          health: false,
          healthMessage: error.message,
        };
      }
    };

    const updateServices = async () => {
      const updatedServices = await Promise.all(services.map(fetchServiceInfo));
      setServices(updatedServices);
      setLoading(false);
      console.log(services);
    };

    updateServices();
  }, []);

  return (
    <div className="flex justify-center items-center flex-wrap mx-[300px] mt-20">
      <div className="flex justify-between items-center self-end w-full px-3">
        <h2 className="text-xl text-primary-custom font-semibold">
          LMS Health Check
        </h2>
        <Button
          variant="ghost"
          className="rounded-full px-2"
          onClick={() => alert("Refreshing!!!")}
        >
          <RefreshCcw className="text-primary-custom" />
        </Button>
      </div>
      <Table className="mt-5">
        <TableHeader>
          <TableRow className="bg-primary-custom">
            <TableHead className="text-background text-center">
              Service Name
            </TableHead>
            <TableHead className="text-background text-center">Env</TableHead>
            <TableHead className="text-background text-center">
              Health
            </TableHead>
            <TableHead className="text-background text-center">
              Country
            </TableHead>
            <TableHead className="text-background text-center">
              Health Url
            </TableHead>
            <TableHead className="text-background text-center">
              Health Message
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service, index) => (
            <TableRow key={index}>
              <TableCell className="text-center">{service.name}</TableCell>
              <TableCell className="text-center">{service.env}</TableCell>
              <TableCell>
                <p
                  className={`${
                    loading
                      ? "bg-[#fbeac9] text-[#827257]"
                      : service.health
                      ? "bg-[#ddeddb] text-[#3d5443]"
                      : "bg-[#ffe3df] text-[#72383c]"
                  } font-semibold text-center px-4`}
                >
                  {loading ? "N/A" : service.health ? "Live" : "Down"}
                </p>
              </TableCell>
              <TableCell className="text-center">{service.country}</TableCell>
              <TableCell className="text-center">
                <Button variant="link">{service.url}</Button>
              </TableCell>
              <TableCell className="text-center">
                <p>{loading ? "N/A" : service.healthMessage}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HealthTable;
