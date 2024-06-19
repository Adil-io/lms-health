import { RefreshCcw } from 'lucide-react';
import { Button } from './ui/button';

import getWingsServices from '@/constants/WINGS_SERVICES';
import { fetchServiceInfo } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { columns } from './lms-services/columns';
import DataTable from './lms-services/data-table';

const HealthTable = () => {
  const [services, setServices] = useState(getWingsServices());

  useEffect(() => {
    const updateServices = async () => {
      const updatedServices = await Promise.all(services.map(fetchServiceInfo));
      setServices(updatedServices);
    };

    updateServices();
  }, []);

  return (
    <div className="mx-30 flex flex-col p-20">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-primary-custom">
          LMS Health Check
        </h2>
        <Button
          variant="ghost"
          className="rounded-full px-2"
          onClick={() => alert('Refreshing!!!')}
        >
          <RefreshCcw className="text-primary-custom" />
        </Button>
      </div>
      <div>
        <DataTable columns={columns} data={services} />
      </div>
    </div>
  );
};

export default HealthTable;
