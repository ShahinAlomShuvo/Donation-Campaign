import { Pie, Cell, ResponsiveContainer, PieChart } from "recharts";
import { getStoredDonationData } from "../../Utilities/localstorage";

const Statistic = () => {
  const yourDonation = getStoredDonationData();
  const yourDonationItem = yourDonation.length;

  const totalDonationValue = 12;

  const donationData = [
    { name: "Total Donations", value: totalDonationValue - yourDonationItem },
    { name: "Your Donation", value: yourDonationItem },
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
        {`${(percent * 100).toFixed(1)}% (${donationData[index].value})`}
      </text>
    );
  };

  return (
    <div>
      <ResponsiveContainer width='100%' height={400}>
        <PieChart width={600} height={600}>
          <Pie
            data={donationData}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
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
      <div className='flex justify-center gap-5'>
        <div className='flex items-center'>
          <p className='text-black'>Your Donation:</p>
          <div
            className={`w-16 h-3 rounded ml-2`}
            style={{ backgroundColor: COLORS[1] }}
          ></div>
        </div>

        <div className='flex items-center'>
          <p className='text-black'>Total Donation:</p>
          <div
            className={`w-16 h-3 rounded ml-2`}
            style={{ backgroundColor: COLORS[0] }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
