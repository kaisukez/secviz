import serverDistribution from '../../data/login-activity/server-distribution'

const getServerDistributionData = () => ({
  title: {
    left: 'center',
    text: 'Server Load Distribution'
  },
  tooltip: {},
  series: {
    type: 'pie',
    radius: [50, 110],
    data: [
      { name: "158.108.218.201", value: serverDistribution["158.108.218.201"] },
      { name: "158.108.218.202", value: serverDistribution["158.108.218.202"] },
      { name: "158.108.218.203", value: serverDistribution["158.108.218.203"] },
      { name: "158.108.218.204", value: serverDistribution["158.108.218.204"] },
      { name: "158.108.218.205", value: serverDistribution["158.108.218.205"] },
      { name: "158.108.218.206", value: serverDistribution["158.108.218.206"] },
      { name: "158.108.218.207", value: serverDistribution["158.108.218.207"] },
      { name: "158.108.218.208", value: serverDistribution["158.108.218.208"] },
      { name: "158.108.218.209", value: serverDistribution["158.108.218.209"] },
      { name: "158.108.218.210", value: serverDistribution["158.108.218.210"] },
      { name: "158.108.218.211", value: serverDistribution["158.108.218.211"] },
      { name: "158.108.218.212", value: serverDistribution["158.108.218.212"] },
    ]
  },
  color: [
    '#AD28A2', '#6733AD', '#3D40B1', '#2E71A4', '#28B16F', '#83E234',
    '#D5F638', '#FEEC3A', '#FECD3A', '#FEA93A', '#FE723A', '#E2346C'
  ]
})

export default getServerDistributionData
