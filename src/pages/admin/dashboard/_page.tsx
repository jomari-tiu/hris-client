import {
  FiUsers,
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiTrendingUp,
} from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function DashboardPage() {
  const stats = [
    {
      title: 'Total Employees',
      value: '142',
      change: '+4.75%',
      trend: 'up',
      icon: FiUsers,
      color: 'bg-primary',
    },
    {
      title: 'Pending Leave Requests',
      value: '8',
      change: '-2.02%',
      trend: 'down',
      icon: FiCalendar,
      color: 'bg-warning',
    },
    {
      title: 'Present Today',
      value: '134',
      change: '+1.39%',
      trend: 'up',
      icon: FiClock,
      color: 'bg-success',
    },
    {
      title: 'Monthly Payroll',
      value: '$485,200',
      change: '+3.18%',
      trend: 'up',
      icon: FiDollarSign,
      color: 'bg-purple-500',
    },
  ];

  const activities = [
    {
      id: 1,
      message: 'Sarah Johnson submitted a leave request for Dec 25-27',
      time: '2 hours ago',
      type: 'warning',
    },
    {
      id: 2,
      message: 'Mike Chen clocked in at 9:15 AM',
      time: '3 hours ago',
      type: 'default',
    },
    {
      id: 3,
      message: 'November payroll has been processed',
      time: '1 day ago',
      type: 'success',
    },
    {
      id: 4,
      message: 'New employee Alex Rodriguez has been added',
      time: '2 days ago',
      type: 'default',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-lg text-gray-500">
          Welcome back! Here's what's happening at your organization today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="border border-border/50 bg-card-gradient backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <div className="flex items-center mt-2">
                      <FiTrendingUp
                        className={`w-4 h-4 mr-1 ${stat.trend === 'up' ? 'text-success' : 'text-danger'}`}
                      />
                      <span
                        className={`text-sm font-medium ${stat.trend === 'up' ? 'text-success' : 'text-danger'}`}
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
          <CardHeader className="border-b border-border/50 bg-gray-500/30">
            <CardTitle className="text-xl font-semibold text-foreground">
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {activities.map(activity => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-gray-500/30 hover:bg-gray-500/50 transition-all duration-200 hover:scale-[1.02]"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        activity.type === 'warning'
                          ? 'bg-warning'
                          : activity.type === 'success'
                            ? 'bg-success'
                            : 'bg-primary'
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {activity.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border/50">
              <Button
                variant="default"
                className="w-full border-border hover:bg-accent"
              >
                View all activities
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
          <CardHeader className="border-b border-border/50 bg-gray-500/30">
            <CardTitle className="text-xl font-semibold text-foreground">
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="default"
                className="h-24 flex flex-col items-center justify-center space-y-2 bg-primary/5 hover:bg-primary/10 border-primary/20 hover:border-primary/30 transition-all duration-200 hover:scale-105"
              >
                <FiUsers className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Add Employee
                </span>
              </Button>
              <Button
                variant="default"
                className="h-24 flex flex-col items-center justify-center space-y-2 bg-warning/5 hover:bg-warning/10 border-warning/20 hover:border-warning/30 transition-all duration-200 hover:scale-105"
              >
                <FiCalendar className="w-6 h-6 text-warning" />
                <span className="text-sm font-medium text-warning">
                  Leave Requests
                </span>
              </Button>
              <Button
                variant="default"
                className="h-24 flex flex-col items-center justify-center space-y-2 bg-success/5 hover:bg-success/10 border-success/20 hover:border-success/30 transition-all duration-200 hover:scale-105"
              >
                <FiClock className="w-6 h-6 text-success" />
                <span className="text-sm font-medium text-success">
                  Attendance
                </span>
              </Button>
              <Button
                variant="default"
                className="h-24 flex flex-col items-center justify-center space-y-2 bg-purple-500/5 hover:bg-purple-500/10 border-purple-500/20 hover:border-purple-500/30 transition-all duration-200 hover:scale-105"
              >
                <FiDollarSign className="w-6 h-6 text-purple-500" />
                <span className="text-sm font-medium text-purple-500">
                  Payroll
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
