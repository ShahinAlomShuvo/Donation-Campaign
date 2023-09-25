import { Pie, Cell, ResponsiveContainer, PieChart } from "recharts";

const Statistic = () => {
  const totalDonationValue = 12 - 4;

  const donationData = [
    { name: "My Donation", value: 4 },
    { name: "Total Donations", value: totalDonationValue },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}% (${donationData[index].value})`}{" "}
      </text>
    );
  };

  return (
    <ResponsiveContainer width='100%' height={400}>
      <PieChart width={800} height={800}>
        <Pie
          data={donationData}
          cx='50%'
          cy='50%'
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill='#8884d8'
          dataKey='value'
        >
          {donationData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Statistic;
