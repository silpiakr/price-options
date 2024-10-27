import { LineChart, Line, XAxis, YAxis } from 'recharts';

const LineCharts = () => {

    const studentMarksData = [
        { id: 1, name: "Alice", math: 78, physics: 84, chemistry: 76 },
        { id: 2, name: "Bob", math: 85, physics: 79, chemistry: 88 },
        { id: 3, name: "Charlie", math: 92, physics: 91, chemistry: 89 },
        { id: 4, name: "David", math: 65, physics: 74, chemistry: 68 },
        { id: 5, name: "Ella", math: 88, physics: 82, chemistry: 94 },
        { id: 6, name: "Frank", math: 73, physics: 76, chemistry: 72 },
        { id: 7, name: "Grace", math: 95, physics: 94, chemistry: 90 },
        { id: 8, name: "Harry", math: 80, physics: 78, chemistry: 85 },
        { id: 9, name: "Ivy", math: 69, physics: 72, chemistry: 74 },
        { id: 10, name: "Jack", math: 91, physics: 88, chemistry: 87 }
      ];
      

      
    return (
        <div>
            <LineChart width={600} height={400} data={studentMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke="blue" />
                <Line dataKey="physics" stroke="#8884d8" type="monotone" />
                <Line dataKey="chemistry" stroke="red" />
            </LineChart>
        </div>
    );
};

export default LineCharts;