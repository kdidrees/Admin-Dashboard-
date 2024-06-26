import React, { useState } from "react";
import ReactApexCharts from "react-apexcharts";

const Graph = () => {
  const [donutOptions] = useState({
    series: [44, 55],
    chart: {
      width: 180,
      type: "donut",
    },
    labels: ["Swipe", "Uniswap"],
    plotOptions: {
      donut: {
        labels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: false,
          },
          total: {
            show: false,
          },
          style: {
            fontSize: "11px",
            color: "red",
          },
        },
      },
    },
    legend: {
      position: "bottom",
      top: 0,
      bottom: "3px",
      fontSize: "11px",
    },
    responsive: [
      {
        breakpoint: 437,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  const [columnOptions] = useState({
    series: [
      {
        name: "Series 1",
        data: [30, 40, 25, 50, 49, 21, 70],
      },
    ],
    chart: {
      height: 300,
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  });

  return (
    <div className="app py-2 mt-10 2xl:mt-8">
      <div className="row">
        <div className=" flex justify-center gap-2 xl:gap-8 xl:ml-[-20px] 2xl:ml-0 ">
          <div className="w-[220px] h-[200px] xl:w-[275px] xl:h-[200px] 2xl:w-[380px] 2xl:h-[320px] 2xl:py-3 2xl:px-3  font-[inter] text-md 2xl:text-lg font-medium shadow-lg rounded-lg">
            <h3 className="text-center">Income & Outcome</h3>
            <ReactApexCharts
              options={columnOptions}
              series={columnOptions.series}
              type="bar"
            />
          </div>
          <div className="w-[220px] h-[200px] xl:w-[250px] xl:h-[200px] 2xl:w-[380px] 2xl:h-[320px] 2xl:py-3 2xl:px-3 font-[inter] text-md 2xl:text-lg font-medium shadow-lg rounded-lg">
            <h3 className="text-center">Job Percentage</h3>
            <ReactApexCharts
              options={donutOptions}
              series={donutOptions.series}
              type="donut"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
