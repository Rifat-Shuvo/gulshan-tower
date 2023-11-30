import React from 'react';

const History = () => {
    return (
        <div className='text-center'>
            <h1>hello from history</h1>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Month</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>January</td>
        <td>paid</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>February</td>
        <td>unpaid</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>March</td>
        <td>unpaid</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default History;