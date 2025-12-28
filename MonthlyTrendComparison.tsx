import { monthlyComparisonData } from "@/data/reportData";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export function MonthlyTrendComparison() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm animate-slide-up" style={{ animationDelay: '250ms' }}>
      <div className="mb-6">
        <h3 className="font-display text-lg font-semibold text-foreground">Monthly Class Trend</h3>
        <p className="text-sm text-muted-foreground">Year-over-year monthly comparison</p>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthlyComparisonData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="gradient2025" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="gradient2024" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '12px',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.15)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 600 }}
            />
            <Legend 
              verticalAlign="top" 
              height={36}
              iconType="rect"
              iconSize={12}
            />
            <Area 
              type="monotone" 
              dataKey="classes2024" 
              name="2024 Classes"
              stroke="hsl(var(--muted-foreground))" 
              strokeWidth={2}
              fill="url(#gradient2024)"
              strokeDasharray="5 5"
            />
            <Area 
              type="monotone" 
              dataKey="classes2025" 
              name="2025 Classes"
              stroke="hsl(var(--primary))" 
              strokeWidth={2.5}
              fill="url(#gradient2025)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
