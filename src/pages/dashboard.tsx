import React from 'react';
import { CreditCard, DollarSign, Users } from 'lucide-react';

import MainAppLayout from '../components/layout/MainAppLayout';
import Header from '../components/dashboard/Header';
import DashboardCard from '../components/dashboard/DashboardCard';
import OverviewChart from '../components/dashboard/OverviewChart';
import RecentSales from '../components/dashboard/RecentSales';

const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      <Header />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Total Revenue"
            amount="$45,231.89"
            description="+20.1% from last month"
            icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          />
          <DashboardCard
            title="Subscriptions"
            amount="+2350"
            description="+180.1% from last month"
            icon={<Users className="h-4 w-4 text-muted-foreground" />}
          />
          <DashboardCard
            title="Sales"
            amount="+12,234"
            description="+19% from last month"
            icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
          />
          <DashboardCard
            title="Active Now"
            amount="+573"
            description="+201 since last hour"
            icon={<Users className="h-4 w-4 text-muted-foreground" />}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <OverviewChart />
          <RecentSales />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default DashboardPage;