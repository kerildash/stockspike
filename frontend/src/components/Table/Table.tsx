import { type FC } from 'react';

interface ITableProps {
  data: any;
  config: any;
}

const cellClasses =
  'whitespace-nowrap p-4 border-b-1 border-gray-200 text-sm font-normal text-gray-900';
const headCellClasses =
  'whitespace-nowrap px-4 pb-2 pt-2 border-b-2 border-gray-200 text-left text-xs font-medium text-gray-900 tracking-wide';

const renderCell = (item: any, column: any) =>
  column.render ? column.render(item) : item[column.key];

export const Table: FC<ITableProps> = ({ data, config }: ITableProps) => {
  const [pinnedColumn, ...scrollableColumns] = config;
  return (
    <div className='p-3 bg-white rounded-lg border border-gray-200'>
      <div className='flex items-start'>
        {pinnedColumn && (
          <table className='flex-none border-separate border-spacing-0'>
            <thead>
              <tr>
                <th className={`${headCellClasses} border-r-1`}>
                  {pinnedColumn.label}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: any) => (
                <tr key={item.date}>
                  <td className={`${cellClasses} border-r-1 bg-white`}>
                    {renderCell(item, pinnedColumn)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className='flex-1 min-w-0 overflow-x-auto'>
          <table className='min-w-full border-separate border-spacing-0'>
            <thead>
              <tr>
                {scrollableColumns.map((value: any) => (
                  <th key={value.label} className={headCellClasses}>
                    {value.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item: any) => (
                <tr key={item.date}>
                  {scrollableColumns.map((value: any) => (
                    <td key={value.key ?? value.label} className={cellClasses}>
                      {renderCell(item, value)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
