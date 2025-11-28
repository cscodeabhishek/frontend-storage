import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Charts({ files }) {
  const countByType = {};

  files.forEach((f) => {
    const ext = f.name.split(".").pop();
    countByType[ext] = (countByType[ext] || 0) + 1;
  });

  const data = Object.entries(countByType).map(([type, count]) => ({
    name: type,
    value: count,
  }));

  return (
    <div style={{ height: 300, marginTop: 20 }}>
      <h3>File Type Distribution</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie dataKey="value" data={data} fill="#8884d8" label />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
