import { FiPlus } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

import { Card, CardContent } from '@/components/ui/card';
import Filter, { TFilterParams } from './components/Filter';
import { Table } from '@/components/ui/Table/index';
import { PageHeader } from '@/components/ui/PageHeader';
import { useEffect, useState } from 'react';

const mockEmployees: {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  status: string;
  joinDate: string;
}[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@company.com',
    department: 'Engineering',
    position: 'Senior Developer',
    status: 'Active',
    joinDate: '2023-01-15',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    department: 'Human Resources',
    position: 'HR Manager',
    status: 'Active',
    joinDate: '2022-08-20',
  },
  {
    id: '3',
    name: 'Mike Chen',
    email: 'mike.chen@company.com',
    department: 'Engineering',
    position: 'Frontend Developer',
    status: 'Active',
    joinDate: '2023-03-10',
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.davis@company.com',
    department: 'Marketing',
    position: 'Marketing Specialist',
    status: 'On Leave',
    joinDate: '2022-11-05',
  },
];

export function EmployeesPage() {
  const [filter, setFilter] = useState<TFilterParams>({
    search: '',
    orderBy: { label: '', value: '' },
    sortBy: { label: '', value: '' },
  });

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div>
      <PageHeader
        title="Employees"
        description="Manage your organization's employees and their information."
        action={
          <Button className="bg-primary hover:bg-primary/80 text-white shadow-lg">
            <FiPlus className="w-4 h-4 mr-2" />
            Add Employee
          </Button>
        }
      />

      <Filter filter={filter} setFilter={setFilter} />

      <Card className="border-0 shadow-lg bg-white">
        <CardContent className="p-0">
          <Table data={mockEmployees}>
            {({ Column, index: _index }) => (
              <>
                <Column id="name" header="Name" name="name" />
                <Column id="email" header="Email" name="email" />
                <Column id="department" header="Department" name="department" />
                <Column id="position" header="Position" name="position" />
              </>
            )}
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
