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

  return <DataTable columns={columns} data={services} />;
};

export default HealthTable;
