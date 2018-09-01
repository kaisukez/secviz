import serverDistribution from '../../data/login-activity/server-distribution'

const getServerDistributionData = () => ({
  title: {
    left: 'center',
    text: 'Server Distribution'
  },
  series: {
    type: 'pie',
    radius: [30, 110],
    roseType: 'radius',
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
  }
})

export default getServerDistributionData
