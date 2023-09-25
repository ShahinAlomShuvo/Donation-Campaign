import { Pie, Cell, ResponsiveContainer, PieChart } from "recharts";
import { getStoredDonationData } from "../../Utilities/localstorage";

const Statistic = () => {
  const myDonation = getStoredDonationData();
  const myDonationItem = myDonation.length;

  const totalDonationValue = 12 - myDonationItem;

  const donationData = [
    { name: "Total Donations", value: totalDonationValue },
    { name: "My Donation", value: myDonationItem },
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
    <div>
      <ResponsiveContainer width='100%' height={400}>
        <PieChart width={900} height={900}>
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
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div>
        <input type='color' name='' id='' />
      </div>
    </div>
  );
};

export default Statistic;
