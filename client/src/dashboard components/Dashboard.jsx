import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const stats = [
  {
    name: 'Total Users',
    value: '12,345',
    change: '+12%',
    changeType: 'positive',
  },
  {
    name: 'Total Revenue',
    value: '$34,543',
    change: '+8.1%',
    changeType: 'positive',
  },
  {
    name: 'Pending Orders',
    value: '231',
    change: '-2.5%',
    changeType: 'negative',
  },
  {
    name: 'Active Projects',
    value: '15',
    change: '+3',
    changeType: 'positive',
  },
];

const pieData = {
  labels: ['Desktop', 'Mobile', 'Tablet'],
  datasets: [
    {
      data: [60, 30, 10],
      backgroundColor: ['#3B82F6', '#10B981', '#F59E0B'],
    },
  ],
};

const barData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: '#3B82F6',
    },
    {
      label: 'Users',
      data: [8, 15, 7, 12, 9, 11],
      backgroundColor: '#10B981',
    },
  ],
};

const Dashboard = () => {
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/users');
        const users = Array.isArray(res.data) ? res.data : [];

        const activity = users.map((user, index) => ({
          id: index + 1,
          user: `${user.firstName} ${user.lastName}`,
          action: user.isOnline ? 'Logged in' : 'Logged out',
          time: 'Just now',
          isOnline: user.isOnline,
        }));

        setRecentActivity(activity);
      } catch (err) {
        console.error('Error fetching users:', err);
        setRecentActivity([]);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  stat.changeType === 'positive'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue & Users</h3>
          <Bar data={barData} options={{ responsive: true }} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Traffic Sources</h3>
          <div className="h-64 flex items-center justify-center">
            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
  <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            User
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Time
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {recentActivity.length > 0 ? (
          recentActivity.map((activity) => (
            <tr key={activity.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`https://ui-avatars.com/api/?name=${activity.user.replace(
                      ' ',
                      '+'
                    )}`}
                    alt=""
                  />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 flex items-center gap-2">
                      {activity.user
                        .split(' ')
                        .map(
                          (name) =>
                            name.charAt(0).toUpperCase() +
                            name.slice(1).toLowerCase()
                        )
                        .join(' ')}
                      <span
                        className={`inline-block w-2 h-2 rounded-full ${
                          activity.isOnline ? 'bg-green-500' : 'bg-gray-400'
                        }`}
                        title={activity.isOnline ? 'Online' : 'Offline'}
                      ></span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {activity.action}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {activity.time}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="px-6 py-4 text-gray-500" colSpan={3}>
              No activity found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

    </main>
  );
};

export default Dashboard;
