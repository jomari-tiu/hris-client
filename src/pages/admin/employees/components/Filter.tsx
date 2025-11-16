import { Button, Input, Select, SelectValue, Sheet } from '@/components/ui';
import { FiFilter, FiSearch } from 'react-icons/fi';

import { useState } from 'react';
import { ORDER_BY_OPTIONS, SORT_BY_OPTIONS } from './_constant';

export type TFilterParams = {
  search?: string;
  orderBy?: {
    label: string;
    value: string;
  };
  sortBy?: {
    label: string;
    value: string;
  };
};

type TFilterProps = {
  filter: TFilterParams;
  setFilter: (filter: TFilterProps['filter']) => void;
};

const Filter = ({ filter, setFilter }: TFilterProps) => {
  const [innerfilter, setInnerFilter] = useState<TFilterParams>(filter);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilter({ ...filter, search: value });
  };

  const handleOrderBy = (value: SelectValue | null) => {
    setInnerFilter({ ...innerfilter, orderBy: value || undefined });
  };

  const handleSortBy = (value: SelectValue | null) => {
    setInnerFilter({ ...innerfilter, sortBy: value || undefined });
  };

  return (
    <div className="my-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
      <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-2">
        <Input
          debounce={500}
          type="text"
          placeholder="Search employees..."
          className="pl-10 sm:w-64 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          onChange={handleSearch}
          leadingIcon={<FiSearch className="w-4 h-4" />}
        />

        <Sheet
          trigger={
            <Button
              variant="primary"
              onClick={() => {
                setInnerFilter(filter);
              }}
            >
              <FiFilter className="w-4 h-4" />
            </Button>
          }
          side="right"
          size="md"
          title="Filter"
          description="Filter employees"
          onSave={close => {
            setFilter(innerfilter);
            close();
          }}
        >
          <div className="space-y-4">
            <Select
              name="orderBy"
              label="Order By"
              options={ORDER_BY_OPTIONS}
              value={innerfilter.orderBy}
              onValueChange={handleOrderBy}
            />

            <Select
              name="sortBy"
              label="Sort By"
              options={SORT_BY_OPTIONS}
              value={innerfilter.sortBy}
              onValueChange={handleSortBy}
            />
          </div>
        </Sheet>
      </div>
    </div>
  );
};

export default Filter;
