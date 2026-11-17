import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const BarChart = () => {

    const data = [
        { label: "Janeiro", meta: 120, atingido: 80 },
        { label: "Fevereiro", meta: 150, atingido: 100 },
        { label: "Março", meta: 180, atingido: 130 },
        { label: "Abril", meta: 140, atingido: 90 },
        { label: "Maio", meta: 220, atingido: 160 },
        { label: "Junho", meta: 200, atingido: 140 }
    ];


    return (
        <BarChart
            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
        >
            <CartesianGrid />
            <XAxis dataKey="label" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar fill='orange' dataKey="meta" radius={[10, 10, 0, 0]} />
            <Bar fill='blue' dataKey="atingido" radius={[10, 10, 0, 0]} />
        </BarChart>
    )
}