import ismobile from '@/utils/ismobile'

let containWidth = '100%'

if (ismobile) {
  containWidth = '90%'
} else {
  containWidth = '65%'
}

export default containWidth
