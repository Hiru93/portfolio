import React from 'react';

// vx imports
import { appleStock } from '@vx/mock-data';
import { Group } from '@vx/group';
import { scaleTime, scaleLinear } from '@vx/scale';
import { AreaClosed } from '@vx/shape';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { LinearGradient } from '@vx/gradient';
import { extent, max } from 'd3-array';

//recharts import
import { 
  AreaChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Area ,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

import './style.scss';

const data = appleStock.slice(800);

const secondData = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
];

const thirdData = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
];

const width = 750;
const height = 400;

const x = d => new Date(d.date);
const y = d => d.close;

// Bounds
const margin = {
  top: 60,
  bottom: 60,
  left: 80,
  right: 80,
};
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

const xScale = scaleTime({
  range: [0, xMax],
  domain: extent(data, x)
});
const yScale = scaleLinear({
  range: [yMax, 0],
  domain: [0, max(data, y) + yMax / 3],
});

export default () => (
  <div>
    <div>
      <svg width={width} height={height}>
        <LinearGradient
          from='#fbc2eb'
          to='#a6c1ee'
          id='gradient'
        />

        <Group top={margin.top} left={margin.left}>

          <AreaClosed
            data={data}
            x={d => xScale(x(d))}
            y={d => yScale(y(d))}
            yScale={yScale}
            fill={"url(#gradient)"}
            stroke={""}
          />

          <AxisLeft
            scale={yScale}
            top={0}
            left={0}
            label={'Close Price ($)'}
            stroke={'#1b1a1e'}
            tickTextFill={'#1b1a1e'}
          />

          <AxisBottom
            scale={xScale}
            top={yMax}
            label={'Years'}
            stroke={'#1b1a1e'}
            tickTextFill={'#1b1a1e'}
          />

        </Group>
      </svg>
    </div>
    <div>
    <AreaChart width={730} height={250} data={secondData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>
  </div>
    <div className={ 'chart-container' }>
      <ResponsiveContainer width="50%" aspect={ 3 }>
        <AreaChart data={thirdData}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
          <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
)